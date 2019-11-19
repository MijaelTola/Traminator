import React, { useState } from 'react';
import MapGL, { GeolocateControl } from 'react-map-gl'

import { MAP_APP_TOKEN } from '../../config/constants'

import NavBar from '../../containers/NavBar/NavBar'

const geolocateStyle = {
    float: 'left',
    margin: '50px',
    padding: '10px'
};

export default () => {
    const [viewport, setViewPort] = useState({
        width: "100%",
        height: 900,
        latitude: 0,
        longitude: 0,
        zoom: 2
    })

    const _onViewportChange = viewport => setViewPort({ ...viewport, transitionDuration: 3000 })
    return (
        <>
        <NavBar/>

        <div style={{ margin: '0 auto' }}>
            <MapGL
                {...viewport}
                mapboxApiAccessToken={MAP_APP_TOKEN}
                mapStyle="mapbox://styles/mapbox/dark-v8"
                onViewportChange={_onViewportChange}
            >
                <GeolocateControl
                    style={geolocateStyle}
                    positionOptions={{ enableHighAccuracy: true }}
                    trackUserLocation={true}
                />
            </MapGL>
        </div>
        </>
    )
}