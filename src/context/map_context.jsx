import React from 'react'
import { useState, createContext } from 'react';

export const MapContext = createContext();

export default function MapContextProvider({ children }) {
    // map
    const [searchLocation, setSearchLocation] = useState(null);
    const [mapClicked, setMapClicked] = useState(null);
    const [activeMarkers, setActiveMarkers] = useState([]);
    const [disableMarkers, setDisableMarkers] = useState([]);
    const [loadingLocation, setLoadingLocation] = useState(true);


    return (
        <MapContext.Provider
            value={{
                searchLocation, setSearchLocation,
                mapClicked, setMapClicked,
                activeMarkers, setActiveMarkers,
                disableMarkers, setDisableMarkers,
                loadingLocation, setLoadingLocation
            }}
        >
            {children}
        </MapContext.Provider>
    )
}
