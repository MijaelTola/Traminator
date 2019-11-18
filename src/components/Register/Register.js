import React from 'react'
import Navbar from '../NavBar/NavBar'
import { roles } from '../../config/constants'
import useForm from 'react-hook-form'

const Register = ({registerUser}) => {

    const {register, handleSubmit} = useForm();
    const onSubmit = (data) => {
        console.log(data);
        registerUser(data);
    }

    let options = [];
    for (let i = 0; i < roles.names.length; ++i) {
        options.push(<option key={'op' + i} value={roles.values[i]}> {roles.names[i]} </option>)
    }

    return (
        <>
            <div className="page-holder w-100 d-flex flex-wrap">
                <div className="container-fluid px-xl-5">
                    <section className="py-5">
                        <div className="col-lg-6 mb-5">
                            <div className="card">
                                <div className="card-header">
                                    <h3 className="h6 text-uppercase mb-0">Registrar Usuario</h3>
                                </div>
                                <div className="card-body">
                                    <p>Registre un nuevo usuario con un determinado Role.</p>
                                    <form className="form-horizontal" onSubmit={handleSubmit(onSubmit)} >
                                        <div className="form-group row">
                                            <label className="col-md-3 form-control-label">Nombre</label>
                                            <div className="col-md-9">
                                                <input ref={register} name="nombre" id="inputHorizontalSuccess" type="text" placeholder="Nombre y Apellidos" className="form-control form-control-success" />
                                                <small className="form-text text-muted ml-3">Escriba un nombre para la cuenta</small>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-md-3 form-control-label">Correo Electronico</label>
                                            <div className="col-md-9">
                                                <input ref={register} name="email" id="inputHorizontalSuccess" type="email" placeholder="Correo Electronico" className="form-control form-control-success" />
                                                <small className="form-text text-muted ml-3">Escriba un correo electronico</small>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-sm-3 form-control-label">Contraseña</label>
                                            <div className="col-md-9">
                                                <input ref={register} name="password" id="inputHorizontalWarning" type="password" placeholder="Contraseña" className="form-control form-control-warning" />
                                                <small className="form-text text-muted ml-3">Escriba su contraseña.</small>
                                            </div>
                                        </div>
                                        
                                        <div className="form-group row">
                                            <label className="col-md-3 form-control-label">Seleccione un Role</label>
                                            <div className="col-md-9 select mb-3">
                                                <select ref={register} name="role" className="form-control">
                                                    {options}
                                                </select>
                                            </div>
                                        </div>

                                        <div className="form-group row">
                                            <div className="col-md-9 ml-auto">
                                                <input type="submit" value="Signin" className="btn btn-primary" />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}

export default Register;