import React from 'react'
import useForm from 'react-hook-form'

import Header from '../../containers/Header/Header'
import { Navbar, Nav, Form, Dropdown } from 'react-bootstrap'
import NavBar from '../../containers/NavBar/NavBar'

export default () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    }
    return (
        <>
            <Header />
            <Nav>
                <div className="d-flex align-items-stretch" style={{ width: "10000px" }}>
                    <NavBar />
                    <div class="container-fluid px-xl-5">
                        <section class="py-5">
                            <div class="row">
                                <div class="col-lg-6 mb-4">
                                    <div class="card">
                                        <div class="card-header">
                                            <h6 class="text-uppercase mb-0">Striped table with hover effect</h6>
                                        </div>
                                        <div class="card-body">
                                            <table class="table table-striped table-hover card-text">
                                                <thead>
                                                    <tr>
                                                        <th>#</th>
                                                        <th>First Name</th>
                                                        <th>Last Name</th>
                                                        <th>Username</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th scope="row">1</th>
                                                        <td>Mark</td>
                                                        <td>Otto</td>
                                                        <td>@mdo</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">2</th>
                                                        <td>Jacob</td>
                                                        <td>Thornton</td>
                                                        <td>@fat</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">3</th>
                                                        <td>Larry</td>
                                                        <td>the Bird</td>
                                                        <td>@twitter                            </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">3</th>
                                                        <td>Sam</td>
                                                        <td>Nevoresky</td>
                                                        <td>@facebook                            </td>
                                                    </tr>
                                                </tbody>
                                            </table>
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