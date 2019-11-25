import React, { useEffect, useRef, useState } from "react";

import Header from '../../containers/Header/Header'
import NavBar from '../../containers/NavBar/NavBar'
import Map from '../../helpers/map'



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
                <Map/>
            </div>
        </>
    )
};

export default MapboxGLMap;