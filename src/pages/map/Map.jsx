import { useState, useMemo, useEffect } from "react";

// npm i @react-google-maps/api
import {
  GoogleMap,
  useLoadScript,
  Marker,
  Circle,
  InfoWindow,
} from "@react-google-maps/api";
import PlacesAutoComplete from "./PlacesAutoComplete";
import { useVendor } from "../../hook/useVendor";
import { useAuth } from "../../hook/useAuthContext";
import Loading from "../../component/loading";
import ghost from "../../assets/image/halloween.png";
import { LocationIcon } from "../../assets/icon/Icon";
import { useMap } from "../../hook/useMap";

function Map({ viewMode, data }) {
  const bangkokBounds = {
    north: 14.0,
    south: 13.5,
    east: 100.9,
    west: 100.4,
  };

  const [currentLocation, setCurrentLocation] = useState(null);
  const [error, setError] = useState(null);
  const [center, setCenter] = useState({ lat: 13.7462, lng: 100.5347 });
  const [selectedInfoWindow, setSelectedInfoWindow] = useState(null);
  const [libraries, setLibraries] = useState(["places", "geometry"]);
  // const [loadingLocation, setLoadingLocation] = useState(true);
  const {
    mapClicked,
    setMapClicked,
    searchLocation,
    setSearchLocation,
    activeMarkers,
    setActiveMarkers,
    disableMarkers,
    setDisableMarkers,
    loadingLocation,
    setLoadingLocation,
  } = useMap();



  useEffect(() => {
    
    getLocation();
   
  }, []);

  const getLocation =  () => {
    setLoadingLocation(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, handleError);
    } else {
      setError("Geolocation is not supported by this browser.");
      setLoadingLocation(false);
    }
  };

  const showPosition = (position) => {
    const newLocation = {
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    };
    setCurrentLocation(newLocation);
    setCenter(newLocation); // ทำการ set ค่า center ใหม่ที่นี่
    setLoadingLocation(false);
  };

  const handleError = (error) => {
    if (error.code == error.PERMISSION_DENIED) {
      alert("please allow loaction");
    }
    setError("Error fetching location: " + error.message);
    setLoadingLocation(false);
  };

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyCC_tCic6ScwrR9HlXYj7ryLj7uvTLQRpk",
    libraries,
  });

  const handleSearchLocation = (input) => {
    setMapClicked(null);
    setSearchLocation(input);
  };

  const handleClickLocation = (e) => {
    const location = { lat: e.latLng.lat(), lng: e.latLng.lng() };
    setMapClicked(location);
  };

  const calculateBoundingBox = (center, radius) => {
    const kmPerDegreeLatitude = 111.32;
    const latitudeChange = radius / kmPerDegreeLatitude;
    const longitudeChange =
      radius / (kmPerDegreeLatitude * Math.cos(center.lat * (Math.PI / 180)));

    return {
      north: center.lat + latitudeChange,
      south: center.lat - latitudeChange,
      east: center.lng + longitudeChange,
      west: center.lng - longitudeChange,
    };
  };

  const { markersWithinRadius, markersOutOfRadius } = useMemo(() => {
    if (!isLoaded || !currentLocation || !data) {
      return []; // จังหวะ render ครั้งแรก currentLocation ยังมาไม่ทัน
    }
    const radius = 3500; // 5 km in meters
    const boundingBox = calculateBoundingBox(currentLocation, radius);

    return data.reduce(
      (acc, marker) => {
        // Check if marker is within bounding box
        const isWithinBoundingBox =
          marker.shopLat >= boundingBox.south &&
          marker.shopLat <= boundingBox.north &&
          marker.shopLan >= boundingBox.west &&
          marker.shopLan <= boundingBox.east;

        if (!isWithinBoundingBox) {
          acc.markersOutOfRadius.push(marker);
          return acc;
        }
        
        // Compute spherical distance
        const distance = google.maps.geometry.spherical.computeDistanceBetween(
          new google.maps.LatLng({
            lat: currentLocation.lat,
            lng: currentLocation.lng,
          }),
          new google.maps.LatLng({ lat: marker.shopLat, lng: marker.shopLan })
        );

        // Categorize markers based on distance
        if (distance <= radius) {
          acc.markersWithinRadius.push(marker);
        } else {
          acc.markersOutOfRadius.push(marker);
        }
        return acc;
      },
      { markersWithinRadius: [], markersOutOfRadius: [] }
    );
  }, [currentLocation]);

  useEffect(() => {
    setActiveMarkers(markersWithinRadius);
    setDisableMarkers(markersOutOfRadius);
  }, [markersWithinRadius, markersOutOfRadius]);

  // if (!isLoaded) return <div>Loading...</div>;
  if (!isLoaded || loadingLocation) {
    return <Loading />;
  }

  return (
    <div className="flex flex-col py-4">
      <div>
        <GoogleMap
          center={searchLocation || center}
          mapContainerClassName="map-container"
          zoom={14}
          options={{
            mapId: "5313b71b2c9e0053",
            restriction: {
              latLngBounds: bangkokBounds,
              strictBounds: true,
            },
            minZoom: 5,
            maxZoom: 18,
          }}
          // onClick={e=> console.log(e)}
          onClick={handleClickLocation}
        >
          {viewMode ? (
            <div>
              {currentLocation && (
                <>
                  <Circle
                    center={currentLocation}
                    radius={3550}
                    options={{
                      strokeColor: "#DD0F95",
                      strokeWeight: 2,
                      fillColor: "#FF84D4",
                      fillOpacity: 0.1,
                    }}
                  />
                  <Marker
                    position={currentLocation}
                    icon={{
                      url: ghost,
                      scaledSize: new window.google.maps.Size(36, 36),
                    }}
                    options={{ zIndex: 1 }}
                  />
                </>
              )}

              {activeMarkers?.map((geo, index) => (
                <Marker
                  key={index}
                  position={{ lat: geo.shopLat, lng: geo.shopLan }}
                  title={geo.shopName}
                  label={geo.shopName}
                  options={{ zIndex: 10 }}
                  onClick={() => setSelectedInfoWindow(geo)}
                />
              ))}

              {selectedInfoWindow && (
                <InfoWindow
                  position={{
                    lat: selectedInfoWindow.shopLat,
                    lng: selectedInfoWindow.shopLan,
                  }}
                  onCloseClick={() => setSelectedInfoWindow(null)}
                >
                  <div>
                    <h4>{selectedInfoWindow.shopName}</h4>
                    <img
                      style={{ height: 100 }}
                      src={selectedInfoWindow.shopPicture}
                    />
                  </div>
                </InfoWindow>
              )}
            </div>
          ) : (
            <div className="absolute z-50 top-4 left-4 right-4">
              <PlacesAutoComplete handleSearchLocation={handleSearchLocation} />
              {/* ถามว่า searchLocation กับ mapClicked มีไหม ถ้ามีตัวในตัวหนึ่ง ให้ set position MarkerF */}
              {(searchLocation || mapClicked) && (
                <Marker position={mapClicked || searchLocation} />
              )}
            </div>
          )}
        </GoogleMap>
      </div>

      <div className="flex justify-center">
        <button
          onClick={getLocation}
          className="flex justify-between items-center gap-2 mt-4 shadow bg-gray-600 hover:opacity-60 focus:shadow-outline focus:outline-none text-white font-medium py-2 px-6 rounded"
        >
          <LocationIcon className="w-6 h-6" />
          track location
        </button>
      </div>
    </div>
  );
}

export default Map;
