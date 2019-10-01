import React from 'react'

const Login = () => {
    return (
        <>
            <div className="page-holder d-flex align-items-center">
                <div className="container">
                    <div className="row align-items-center py-5">
                        <div className="col-5 col-lg-7 mx-auto mb-5 mb-lg-0">
                            <div className="pr-lg-5"><img src="img/illustration.svg" alt="" class="img-fluid" /></div>
                        </div>
                        <div className="col-lg-5 px-lg-4">
                            <h1 className="text-base text-primary text-uppercase mb-4">TRAMINATOR</h1>
                            <h2 className="mb-4">Bienvenido!</h2>
                            <p className="text-muted">Sistema de Monitorio para transporte publico</p>
                            <form id="loginForm" action="index.html" class="mt-4">
                                <div class="form-group mb-4">
                                    <input type="text" name="username" placeholder="Username or Email address" class="form-control border-0 shadow form-control-lg" />
                                </div>
                                <div class="form-group mb-4">
                                    <input type="password" name="passowrd" placeholder="Password" class="form-control border-0 shadow form-control-lg text-violet" />
                                </div>
                                <div class="form-group mb-4">
                                    <div class="custom-control custom-checkbox">
                                        <input id="customCheck1" type="checkbox" checked class="custom-control-input" />
                                        <label for="customCheck1" class="custom-control-label">Remember Me</label>
                                    </div>
                                </div>
                                <button type="submit" class="btn btn-primary shadow px-5">Log in</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;