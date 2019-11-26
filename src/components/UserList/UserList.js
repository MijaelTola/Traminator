import React, { useEffect } from 'react'

import Header from '../../containers/Header/Header'
import { Nav } from 'react-bootstrap'
import NavBar from '../../containers/NavBar/NavBar'

import Table from '../../helpers/containerTable';

export default ({ loadAllUsers, users }) => {
    useEffect(() => {
        loadAllUsers();
    }, []);

    let headers = <tr>
        <th>#</th>
        <td>Name</td>
        <td>Email</td>
        <td>Role</td>
        <td>Estado</td>
    </tr>
    
    let rows = [];
    users.forEach((data, index)=> {
        rows.push(
        <tr key={index}>
            <th scope="row" >{index}</th>
            <td>{data.name}</td>
            <td>{data.email}</td>
            <td>{data.role}</td>
            <td>{data.state ? 'Activo' : 'No activo'}</td>
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
                                    <div className="card" style={{right: "10px"}}>
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
}