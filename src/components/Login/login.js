import React, {useState}  from 'react'
import useForm from 'react-hook-form'

const Login = ({user, loginUser}) => {
    const [currentUser, setCurrentUser] = useState(user);
    const {register, handleSubmit} = useForm();
    const onSubmit = (data) => {
        loginUser(data.email, data.password);
    }
    return (
        <>
            <div className="page-holder d-flex align-items-center">
                <div className="container">
                    <div className="row align-items-center py-5">
                        <div className="col-5 col-lg-7 mx-auto mb-5 mb-lg-0">
                            <div className="pr-lg-5"><img src="assets/traminatorImg.png" alt="" className="img-fluid" /></div>
                        </div>
                        <div className="col-lg-5 px-lg-4">
                            <h1 className="text-base text-primary text-uppercase mb-4">TRAMINATOR</h1>
                            <h2 className="mb-4">Bienvenido!</h2>
                            <p className="text-muted">Sistema de Monitorio para transporte publico</p>
                            <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
                                <div className="form-group mb-4">
                                    <input ref={register} type="text" name="email" placeholder="Email address" className="form-control border-0 shadow form-control-lg" />
                                </div>
                                <div className="form-group mb-4">
                                    <input ref={register} type="password" name="password" placeholder="Password" className="form-control border-0 shadow form-control-lg text-violet" />
                                </div>
                                {
                                    /*
                                <div className="form-group mb-4">
                                    <div className="custom-control custom-checkbox">
                                        <input id="customCheck1" type="checkbox" className="custom-control-input" />
                                        <label className="custom-control-label">Remember Me</label>
                                    </div>
                                </div>*/
                                }
                                <input className="btn btn-primary shadow px-5" type="submit" value="Log in"/>
                            </form>
                        </div>
                    </div>
                    <p className="mt-5 mb-0 text-gray-400 text-center">Design by Los cacheros de tu hermana</p>
                </div>
            </div>
        </>
    );
};

export default Login;