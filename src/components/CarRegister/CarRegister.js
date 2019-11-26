import React from 'react'
import { roles } from '../../config/constants'
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
                <div className="d-flex align-items-stretch" style={{width:"10000px"}}>
                    <NavBar/>
                    <div className="page-holder w-100 d-flex flex-wrap">
                        <div className="container-fluid px-xl-5">
                            <section className="py-5">
                                <div className="col-lg-6 mb-5">
                                    <div className="card">
                                        <div className="card-header">
                                            <h3 className="h6 text-uppercase mb-0">Registro de Vehiculo</h3>
                                        </div>
                                        <div className="card-body">
                                            <p>Registre su Vehicurlo. (Solo puede tener uno vehiculo registrado) </p>
                                            <form className="form-horizontal" onSubmit={handleSubmit(onSubmit)} >
                                                <div className="form-group row">
                                                    <label className="col-md-3 form-control-label">Placa</label>
                                                    <div className="col-md-9">
                                                        <input ref={register} name="carId" id="inputHorizontalSuccess" type="text" placeholder="Nombre y Apellidos" className="form-control form-control-success" />
                                                        <small className="form-text text-muted ml-3">Escriba el numero de placa del vehiculo</small>
                                                    </div>
                                                </div>

                                                <div className="form-group row">
                                                    <label className="col-md-3 form-control-label">Descripcion</label>
                                                    <div className="col-md-9">
                                                        <input ref={register} name="description" id="inputHorizontalSuccess" type="text" placeholder="Nombre y Apellidos" className="form-control form-control-success" />
                                                        <small className="form-text text-muted ml-3">La descripcion es necesaria, color, marca, modelo</small>
                                                    </div>
                                                </div>

                                                <div className="form-group row">
                                                    <div className="col-md-9 ml-auto">
                                                        <input type="submit" value="Crear Vehiculo" className="btn btn-primary" />
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </Nav>
        </>
    );
}
