import React, { useEffect, useState } from "react";

import Header from '../../containers/Header/Header'
import NavBar from '../../containers/NavBar/NavBar'
import Map from '../../helpers/containerMap'

import useSocket from 'use-socket.io-client';


const MapboxGLMap = ({ getRoutes, selectRoute, routes, users, loadAllUsers, loadAllCars, replacePosition, replaceUserId, driverId }) => {
    const [socket] = useSocket('https://traminator.herokuapp.com');
    const [allRoutes, setAllroutes] = useState([]);
    useEffect(() => {
        getRoutes();
        loadAllUsers();
        loadAllCars();
        setAllroutes(routes);
        socket.on('recibirCoordenadas', (a) => {
            const data = JSON.parse(a);
            if(data.idChofer === driverId) {
                const pathId = Object.keys(routes).filter( res => {
                    return routes[res].pathId === data.linea;
                });
                replacePosition({
                    lat: parseFloat(data.latitud),
                    lng: parseFloat(data.longitud)
                });
                selectRoute({
                    pathId: pathId,
                    coordinates: routes[pathId].coordinates,
                });
            }
            //socket.end();
        });
    }, [driverId]);

    const selectCurrentRout = (data) => {
        replaceUserId(data.id);
    }
    const drop = [];
    users.forEach((data, index) => {
        if (data.role === 'DRIVER_ROLE') {
            drop.push(<div onClick={() => selectCurrentRout(data)}className="dropdown-item" key={index}> {data.name} </div>);
        }
    });

    return (
        <>
            <Header />
            <div>
            </div>
            <div className="d-flex align-items-stretch">
                <div>
                    <NavBar />
                    <div>
                        <br />
                        <br />
                        <label className="form-control-label"> Seleccione algun Conductor</label>
                        <div className="col-md-9">
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <button type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="btn btn-outline-primary dropdown-toggle">Conductor</button>
                                    <div className="dropdown-menu">
                                        {drop}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <Map tab="MAP" />
            </div>
        </>
    )
};

export default MapboxGLMap;