import React from 'react' 
import {  Nav  } from 'react-bootstrap'

export default ({user, logoutUser}) => {
    return (
        <header className="header">
                <Nav className="navbar navbar-expand-lg px-4 py-2 bg-white shadow">
                    <div href="#" className="sidebar-toggler text-gray-500 mr-4 mr-lg-5 lead">
                        <i className="fas fa-align-left"></i></div>
                        <div href="index.html" className="navbar-brand font-weight-bold text-uppercase text-base">Traminator - Sistema de Monitorio Para Transporte publico La Paz </div>
                    <ul className="ml-auto d-flex align-items-center list-unstyled mb-0">
                        <li className="nav-item">
                            <form id="searchForm" className="ml-auto d-none d-lg-block">
                                <div className="form-group position-relative mb-0">
                                    <button type="submit" styles="top: -3px; left: 0;" className="position-absolute bg-white border-0 p-0"><i className="o-search-magnify-1 text-gray text-lg"></i></button>
                                    <input type="search" placeholder="Search ..." className="form-control form-control-sm border-0 no-shadow pl-4" />
                                </div>
                            </form>
                        </li>
                        <li className="nav-item dropdown ml-auto">
                            <div id="userInfo" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="nav-link dropdown-toggle"> 
                                {user.nombre}
                        </div>
                            <div aria-labelledby="userInfo" className="dropdown-menu">
                                <div className="dropdown-item">
                                    <strong className="d-block text-uppercase headings-font-family">Mark Stephen</strong>
                                    <small>Web Developer</small>
                                    </div>
                                <div className="dropdown-divider"></div>
                                <div className="dropdown-item">Settings</div>
                                <div href="#" className="dropdown-item">Activity log       </div>
                                <div className="dropdown-divider dropdown-item "></div><span onClick={() => logoutUser()} className="dropdown-item">Logout</span>
                            </div>
                        </li>
                    </ul>
                </Nav>
            </header>
    )
}