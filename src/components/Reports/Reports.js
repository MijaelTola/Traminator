import React, { useEffect } from 'react'

import { toDate, format } from 'date-fns'

import Header from '../../containers/Header/Header'
import { Nav } from 'react-bootstrap'
import NavBar from '../../containers/NavBar/NavBar'

import Table from '../../helpers/containerTable';

export default ({loadReports, reports}) => {
    useEffect(() => {
        loadReports();
    }, []);
    console.log(reports);
    let headers = <tr>
        <th>#</th>
        <td>Fecha</td>
        <td>Usuario</td>
        <td>Motivo</td>
        <td>Detalle</td>
        <td>Placa</td>
    </tr>
    
    let rows = [];
    reports.forEach((data, index)=> {
        rows.push(
        <tr key= {index}>
            <th scope="row" >{index}</th>
            <td>{data.date}</td>
            <td>{data.name}</td>
            <td>{data.reason}</td>
            <td>{data.details}</td>
            <td>{data.carId}</td>
        </tr>)
    });
    
    return (
        <>
            <Header />
            <Nav>
                <div className="d-flex align-items-stretch" style={{ width: "10000px" }}>
                    <NavBar />
                    <div className="container-fluid px-xl-5">
                        <section className="py-5">
                            <div className="row">
                                <div className="col-lg-6 mb-4">
                                    <div className="card">
                                        <div className="card-header">
                                            <h6 className="text-uppercase mb-0">Striped table with hover effect</h6>
                                        </div>
                                        <div className="card-body">
                                            <Table headers={headers} rows={rows}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </Nav>
        </>
    )
};