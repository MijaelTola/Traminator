import React from "react";

import Header from '../../containers/Header/Header'
import NavBar from '../../containers/NavBar/NavBar'
import Map from '../../helpers/containerMap'



const MapboxGLMap = () => {

    return (
        <>
            <Header />
            <div>
            </div>
            <div className="d-flex align-items-stretch">
                <div>
                    <NavBar />
                </div>
                <Map tab="MAP"/>
            </div>
        </>
    )
};

export default MapboxGLMap;