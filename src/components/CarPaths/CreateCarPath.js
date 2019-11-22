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

    let options = [];
    for (let i = 0; i < roles.names.length; ++i) {
        options.push(<option key={'op' + i} value={roles.values[i]}> {roles.names[i]} </option>)
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
                                            <h3 className="h6 text-uppercase mb-0">Crear Linea</h3>
                                        </div>
                                        <div className="card-body">
                                            <p>Todos los datos son necesarios  </p>
                                            <form className="form-horizontal" onSubmit={handleSubmit(onSubmit)} >
                                                <div className="form-group row">
                                                    <label className="col-md-3 form-control-label">Numero</label>
                                                    <div className="col-md-9">
                                                        <input ref={register} name="pathId" id="inputHorizontalSuccess" type="text" placeholder="Numero de linea" className="form-control form-control-success" />
                                                        <small className="form-text text-muted ml-3">El numero de linea debe ser un identificador unico</small>
                                                    </div>
                                                </div>

                                                <div className="form-group row">
                                                    <label className="col-md-3 form-control-label">Inicio</label>
                                                    <div className="col-md-9">
                                                        <input ref={register} name="begin" id="inputHorizontalSuccess" type="text" placeholder="Punto Inicial" className="form-control form-control-success" />
                                                        <small className="form-text text-muted ml-3"> El inicio es necesario</small>
                                                    </div>
                                                </div>

                                                <div className="form-group row">
                                                    <label className="col-md-3 form-control-label">Final</label>
                                                    <div className="col-md-9">
                                                        <input ref={register} name="end" id="inputHorizontalSuccess" type="text" placeholder="Punto final" className="form-control form-control-success" />
                                                        <small className="form-text text-muted ml-3"> El final es necesario</small>
                                                    </div>
                                                </div>

                                                <div className="form-group row">
                                                    <div className="col-md-9 ml-auto">
                                                        <input type="submit" value="Crear Vehiculo" className="btn btn-primary" />
                                                    </div>
                                                </div>

                                                {
                                                    //here comos positions and locations 
                                                }
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
