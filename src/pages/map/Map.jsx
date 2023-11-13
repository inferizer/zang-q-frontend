import { useState, useMemo, useEffect } from 'react'

// npm i @react-google-maps/api    
import { GoogleMap, useLoadScript, MarkerF, Marker, Circle, InfoWindow } from '@react-google-maps/api'
import PlacesAutoComplete from "./PlacesAutoComplete"
import { useVendor } from '../../hook/useVendor';
import { useAuth } from '../../hook/useAuthContext';
import Loading from '../../component/loading';
import ghostIcon from '../../assets/image/ghost.png';


function Map({ viewMode, adminLocation = null, data }) {
    const { initLoading } = useAuth()

    const bangkokBounds = {
        north: 14.0000,
        south: 13.5000,
        east: 100.9000,
        west: 100.4000,
    };

    const { mapClicked, setMapClicked, searchLocation, setSearchLocation } = useVendor();
    const [currentLocation, setCurrentLocation] = useState(null);
    const [error, setError] = useState(null);
    const [center, setCenter] = useState({ lat: 13.7462, lng: 100.5347 });
    const [selectedInfoWindow, setSelectedInfoWindow] = useState(null);
    const [libraries, setLibraries] = useState(['places', 'geometry']);
    const [allMarkers, setAllMarkers] = useState();

    const [loadingLocation, setLoadingLocation] = useState(true);

    console.log('clicked', mapClicked)
    console.log('selected', searchLocation)

    useEffect(() => {
        getLocation();
        // console.log(currentLocation)
    }, []);

    const getLocation = () => {
        setLoadingLocation(true)
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition, handleError);
        } else {
            setError("Geolocation is not supported by this browser.");
            setLoadingLocation(false)
        }
    }

    const showPosition = (position) => {
        const newLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
        };
        setCurrentLocation(newLocation);
        setCenter(newLocation); // ทำการ set ค่า center ใหม่ที่นี่
        setLoadingLocation(false)
    };

    const handleError = (error) => {
        if (error.code == error.PERMISSION_DENIED) {
            alert('please allow loaction')
        }
        setError("Error fetching location: " + error.message);
        setLoadingLocation(false)
    };

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: 'AIzaSyCC_tCic6ScwrR9HlXYj7ryLj7uvTLQRpk',
        libraries,
    });


    const handleSearchLocation = (input) => {
        setMapClicked(null)
        setSearchLocation(input);
    }

    const handleClickLocation = (e) => {
        const location = { lat: e.latLng.lat(), lng: e.latLng.lng() };
        setMapClicked(location);
    }


    const calculateBoundingBox = (center, radius) => {
        const kmPerDegreeLatitude = 111.32;
        const latitudeChange = radius / kmPerDegreeLatitude;
        const longitudeChange = radius / (kmPerDegreeLatitude * Math.cos(center.lat * (Math.PI / 180)));

        return {
            north: center.lat + latitudeChange,
            south: center.lat - latitudeChange,
            east: center.lng + longitudeChange,
            west: center.lng - longitudeChange,
        };
    };

    const markersWithinRadius = useMemo(() => {
        if (!isLoaded || !currentLocation || !data) {
            return []; // จังหวะ render ครั้งแรก currentLocation ยังมาไม่ทัน
        }

        const radius = 3500; // 5 km in meters
        const boundingBox = calculateBoundingBox(currentLocation, radius);

        // First, filter markers within the bounding box
        const markersInBoundingBox = data.filter(marker =>
            marker.lat >= boundingBox.south &&
            marker.lat <= boundingBox.north &&
            marker.lng >= boundingBox.west &&
            marker.lng <= boundingBox.east
        );

        // Further filter based on exact spherical distance
        return markersInBoundingBox.filter(marker => {
            const distance = google.maps.geometry.spherical.computeDistanceBetween(
                new google.maps.LatLng(currentLocation),
                new google.maps.LatLng(marker)
            );
            console.log(`Distance from ${marker.title}:`, distance);
            return distance <= radius;
        });
    }, [isLoaded, currentLocation, data]);

    useEffect(() => {
        setAllMarkers(markersWithinRadius);
    }, [markersWithinRadius]);

    // if (!isLoaded) return <div>Loading...</div>;
    if (!isLoaded || loadingLocation) return <Loading />;

    return (
        <div className='flex flex-col py-8'>
            <div>
                <GoogleMap
                    center={searchLocation || center}
                    mapContainerStyle={{
                        display: 'flex',
                        justifyContent: 'center',
                        height: "500px",
                        width: "100%",
                        position: "relative",
                    }}
                    zoom={14}
                    options={{
                        mapId: '5313b71b2c9e0053',
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
                                            strokeColor: '#DD0F95',
                                            strokeWeight: 2,
                                            fillColor: '#FF84D4',
                                            fillOpacity: 0.1
                                        }}
                                    />
                                    <Marker
                                        position={currentLocation}
                                        icon={{
                                            url: ghostIcon,
                                            scaledSize: new window.google.maps.Size(44, 44)
                                        }}
                                        options={{ zIndex: 11 }}

                                    />
                                </>
                            )}

                            {
                                markersWithinRadius.map((geo, index) => (
                                    <Marker
                                        key={index}
                                        position={geo}
                                        title={geo.title}
                                        label={geo.title}
                                        options={{ zIndex: 10 }}
                                        onClick={() => setSelectedInfoWindow(geo)}
                                    />
                                ))
                            }
                            {selectedInfoWindow && (
                                <InfoWindow
                                    position={selectedInfoWindow}
                                    onCloseClick={() => setSelectedInfoWindow(null)}
                                >
                                    <div>
                                        <h4>{selectedInfoWindow.title}</h4>
                                        <img style={{ height: 100 }} src='https://yt3.googleusercontent.com/ytc/APkrFKbkBG77Mb_TaYVEZHr9Cz7q9UzN2EpD27WfOVT7=s900-c-k-c0x00ffffff-no-rj' />
                                    </div>
                                </InfoWindow>
                            )}
                        </div>
                    ) : (
                        <div className='absolute z-50 top-4 left-4 right-4'>
                            <PlacesAutoComplete
                                handleSearchLocation={handleSearchLocation}
                            />
                            {/* ถามว่า searchLocation กับ mapClicked มีไหม ถ้ามีตัวในตัวหนึ่ง ให้ set position MarkerF */}
                            {(searchLocation || mapClicked) && <MarkerF position={mapClicked || searchLocation} />}
                        </div>
                    )}
                </GoogleMap>
            </div>

            <div>
                <button
                    onClick={getLocation}
                    className="mt-3 shadow bg-primary-500 hover:opacity-60 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
                    track location
                </button>
            </div>
        </div>
    )
}

export default Map;
