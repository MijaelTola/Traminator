import React, { useEffect } from "react";

import Header from '../../containers/Header/Header'
import NavBar from '../../containers/NavBar/NavBar'
import Map from '../../helpers/containerMap'

import useSocket from 'use-socket.io-client';


const MapboxGLMap = ({ getRoutes, selectRoute, routes }) => {
    const [socket] = useSocket('https://traminator.herokuapp.com');

    useEffect(() => {
        getRoutes();
        socket.on('recibirCoordenadas', (a) => {
            const x = JSON.parse(a);
            console.log(x);
        });
    },[]);

    const selectCurrentRout = (data) => {
        selectRoute({
            pathId: data.pathId,
            coordinates: data.coordinates
        });
    }
    const drop = Object.keys(routes).map(data => 
        { return <div onClick={() => selectCurrentRout(routes[data])} className="dropdown-item" key={routes[data].pathId}>{routes[data].pathId}</div> });

    return (
        <>
            <Header />
            <div>
            </div>
            <div className="d-flex align-items-stretch">
                <div>
                    <NavBar />
                    <div>
                        <br/>
                        <br/>
                        <label className="form-control-label"> Seleccione algun Conductor</label>
                        <div className="col-md-9">
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <button type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="btn btn-outline-primary dropdown-toggle">Lineas</button>
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

export default MapboxGLMap