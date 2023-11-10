import { useState, useMemo, useEffect } from 'react'

// npm i @react-google-maps/api    
import { GoogleMap, useLoadScript, MarkerF, Marker, Circle, InfoWindow } from '@react-google-maps/api'
import PlacesAutoComplete from "./PlacesAutoComplete"
import { useVendor } from '../../hook/useVendor';
import { useAuth } from '../../hook/useAuthContext';



function Map({ viewMode, adminLocation = null, data }) {
    const {initLoading} = useAuth()

    const bangkokBounds = {
        north: 14.0000,
        south: 13.5000,
        east: 100.9000,
        west: 100.4000,
    };

    const {mapClicked, setMapClicked, searchLocation, setSearchLocation} = useVendor();
    const [currentLocation, setCurrentLocation] = useState(null);
    const [error, setError] = useState(null);
    const [center, setCenter] = useState({ lat: 13.7462, lng: 100.5347 });
    const [selectedInfoWindow, setSelectedInfoWindow] = useState(null);
    const [libraries, setLibraries] = useState(['places', 'geometry']);
    const [allMarkers, setAllMarkers] = useState();

    console.log('clicked', mapClicked)
    console.log('selected', searchLocation)

    useEffect(() => {
        getLocation();
        // console.log(currentLocation)
    }, []);

    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition, handleError);
        } else {
            setError("Geolocation is not supported by this browser.");
        }
    }
    const showPosition = (position) => {
        const newLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
        };
        setCurrentLocation(newLocation);
        setCenter(newLocation); // ทำการ set ค่า center ใหม่ที่นี่
    (false)
    };

    const handleError = (error) => {
        setError("Error fetching location: " + error.message);
    
    };

    const { isLoaded } = useLoadScript({
        googleMapsApiKey:'AIzaSyCC_tCic6ScwrR9HlXYj7ryLj7uvTLQRpk',
        libraries:["places","geometry"]
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
        if(!isLoaded || !currentLocation || !data){
            return []
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
    }, [currentLocation, data,isLoaded]);
    

    useEffect(() => {
        setAllMarkers(markersWithinRadius);
    }, [markersWithinRadius]);

    
    return (
        <div>
            <div>
                <button onClick={getLocation}>Fetch</button>
                <p id="demo">
                    {currentLocation && (
                        <>
                            Latitude: {currentLocation.lat}
                            <br />
                            Longitude: {currentLocation.lng}
                        </>
                    )}
                    {error && <div>{error}</div>}
                </p>
            </div>

            <div>
                <GoogleMap
                    center={searchLocation || center}
                    mapContainerStyle={{
                        display: 'flex',
                        height: "500px",
                        width: "800px"
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
                                            strokeColor: '#EB544D',
                                            strokeWeight: 2,
                                            fillColor: '#FFCDCB',
                                            fillOpacity: 0.1
                                        }}
                                    />
                                    <Marker position={currentLocation} />
                                </>
                            )}

                            {
                                markersWithinRadius.map((geo, index) => (
                                    <Marker
                                        key={index}
                                        position={geo}
                                        title={geo.title}
                                        label={geo.title}
                                        options={{ zIndex: 999 }}
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
                        <div className='w-full'>
                            <PlacesAutoComplete
                                handleSearchLocation={handleSearchLocation}
                                className="absolute top-2 left-2 z-10 w-[300px] p-2 bg-white rounded shadow-md"
                            />
                            {/* ถามว่า searchLocation กับ mapClicked มีไหม ถ้ามีตัวในตัวหนึ่ง ให้ set position MarkerF */}
                            {(searchLocation || mapClicked) && <MarkerF position={mapClicked || searchLocation} />}
                        </div>
                    )}
                </GoogleMap>
            </div>
        </div>
    )
}

export default Map;
