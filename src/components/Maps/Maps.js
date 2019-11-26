import React, { useEffect } from "react";

import Header from '../../containers/Header/Header'
import NavBar from '../../containers/NavBar/NavBar'
import Map from '../../helpers/containerMap'

import useSocket from 'use-socket.io-client';


const MapboxGLMap = ({ getRoutes, selectRoute, routes, users, loadAllUsers, loadAllCars, replacePosition, replaceUserId, driverId }) => {
    const [socket] = useSocket('https://traminator.herokuapp.com');
    console.log(routes);
    useEffect(() => {
        getRoutes();
        loadAllUsers();
        loadAllCars();
        socket.on('recibirCoordenadas', (a) => {
            const data = JSON.parse(a);
            console.log(routes);
            console.log(data.idChofer, driverId);
            if(data.idChofer === driverId) {
                const currentRoute = Object.keys(routes).map( res => {
                    console.log(res.pathId, data.linea);
                    //return res.pathId === data.linea;
                });
                console.log('here', currentRoute);
            }
            //console.log(data);
            //console.log(data);
            //console.log(data.latitud);
        });
    }, [driverId]);

    const selectCurrentRout = (data) => {
        console.log(data);
        replaceUserId(data.id);
        /*
        selectRoute({
            pathId: data.pathId,
            coordinates: data.coordinates
        });*/
    }
    //const drop = Object.keys(routes).map(data => 
    //{ return <div onClick={() => selectCurrentRout(routes[data])} className="dropdown-item" key={routes[data].pathId}>{routes[data].pathId}</div> });
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