import React, {useEffect} from "react";

import Header from '../../containers/Header/Header'
import NavBar from '../../containers/NavBar/NavBar'
import Map from '../../helpers/containerMap'

import useSocket from 'use-socket.io-client';


const MapboxGLMap = ({getRoutes}) => {
    const [socket] = useSocket('https://traminator.herokuapp.com');

    useEffect(() => {
        getRoutes();
        socket.on('recibirCoordenadas', (a) => {
            const x = JSON.parse(a);
            console.log(x);
        });

    })
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