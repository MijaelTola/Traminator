import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Navbar, Nav, Form, Dropdown } from 'react-bootstrap'
import {Tab, Tabs, Row, Container, Col} from 'react-bootstrap';
import Register from '../Register/Register'

const NavBar = () => {
    return (
        <React.Fragment>
            <header className="header">
                <Nav className="navbar navbar-expand-lg px-4 py-2 bg-white shadow"><a href="#" className="sidebar-toggler text-gray-500 mr-4 mr-lg-5 lead"><i className="fas fa-align-left"></i></a><a href="index.html" className="navbar-brand font-weight-bold text-uppercase text-base">Traminator - Sistema de Monitorio Para Transporte publico La Paz </a>
                    <ul className="ml-auto d-flex align-items-center list-unstyled mb-0">
                        <li className="nav-item">
                            <form id="searchForm" className="ml-auto d-none d-lg-block">
                                <div className="form-group position-relative mb-0">
                                    <button type="submit" styles="top: -3px; left: 0;" className="position-absolute bg-white border-0 p-0"><i className="o-search-magnify-1 text-gray text-lg"></i></button>
                                    <input type="search" placeholder="Search ..." className="form-control form-control-sm border-0 no-shadow pl-4" />
                                </div>
                            </form>
                        </li>
                        <li className="nav-item dropdown mr-3"><a id="notifications" href="http://example.com" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="nav-link dropdown-toggle text-gray-400 px-1"><i className="fa fa-bell"></i><span className="notification-icon"></span></a>
                            <div aria-labelledby="notifications" className="dropdown-menu"><a href="#" className="dropdown-item">
                                <div className="d-flex align-items-center">
                                    <div className="icon icon-sm bg-violet text-white"><i className="fab fa-twitter"></i></div>
                                    <div className="text ml-2">
                                        <p className="mb-0">You have 20 followers</p>
                                    </div>
                                </div></a><a href="#" className="dropdown-item">
                                    <div className="d-flex align-items-center">
                                        <div className="icon icon-sm bg-green text-white"><i className="fas fa-envelope"></i></div>
                                        <div className="text ml-2">
                                            <p className="mb-0">You have 6 new messages</p>
                                        </div>
                                    </div></a><a href="#" className="dropdown-item">
                                    <div className="d-flex align-items-center">
                                        <div className="icon icon-sm bg-blue text-white"><i className="fas fa-upload"></i></div>
                                        <div className="text ml-2">
                                            <p className="mb-0">Server rebooted</p>
                                        </div>
                                    </div></a><a href="#" className="dropdown-item">
                                    <div className="d-flex align-items-center">
                                        <div className="icon icon-sm bg-violet text-white"><i className="fab fa-twitter"></i></div>
                                        <div className="text ml-2">
                                            <p className="mb-0">You have 2 followers</p>
                                        </div>
                                    </div></a>
                                <div className="dropdown-divider"></div><a href="#" className="dropdown-item text-center"><small className="font-weight-bold headings-font-family text-uppercase">View all notifications</small></a>
                            </div>
                        </li>
                        <li className="nav-item dropdown ml-auto"><a id="userInfo" href="http://example.com" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="nav-link dropdown-toggle"><img src="img/avatar-6.jpg" alt="Jason Doe" styles="max-width: 2.5rem;" className="img-fluid rounded-circle shadow" /></a>
                            <div aria-labelledby="userInfo" className="dropdown-menu"><a href="#" className="dropdown-item"><strong className="d-block text-uppercase headings-font-family">Mark Stephen</strong><small>Web Developer</small></a>
                                <div className="dropdown-divider"></div><a href="#" className="dropdown-item">Settings</a><a href="#" className="dropdown-item">Activity log       </a>
                                <div className="dropdown-divider"></div><a href="login.html" className="dropdown-item">Logout</a>
                            </div>
                        </li>
                    </ul>
                </Nav>
            </header>
            <>
                <Nav>
                    <div className="d-flex align-items-stretch">
                        <div id="sidebar" className="sidebar py-3">
                            <div className="text-gray-400 text-uppercase px-3 px-lg-4 py-4 font-weight-bold small headings-font-family">MAIN</div>
                            <ul className="sidebar-menu list-unstyled">
                                <li className="sidebar-list-item"><a href="index.html" className="sidebar-link text-muted active"><i className="o-home-1 mr-3 text-gray"></i><span>Home</span></a></li>
                                <li className="sidebar-list-item">
                                    <NavLink className="sidebar-link text-muted" to="/register">
                                        <i className="o-sales-up-1 mr-3 text-gray"></i>
                                        <span>Registrar</span>
                                    </NavLink>
                                   
                                </li>
                                <li className="sidebar-list-item"><a href="tables.html" className="sidebar-link text-muted"><i className="o-table-content-1 mr-3 text-gray"></i><span>Tables</span></a></li>
                                <li className="sidebar-list-item"><a href="forms.html" className="sidebar-link text-muted"><i className="o-survey-1 mr-3 text-gray"></i><span>Forms</span></a></li>
                                <li className="sidebar-list-item"><a href="#" data-toggle="collapse" data-target="#pages" aria-expanded="false" aria-controls="pages" className="sidebar-link text-muted"><i className="o-wireframe-1 mr-3 text-gray"></i><span>Pages</span></a>
                                    <div id="pages" className="collapse">
                                        <ul className="sidebar-menu list-unstyled border-left border-primary border-thick">
                                            <li className="sidebar-list-item"><a href="#" className="sidebar-link text-muted pl-lg-5">Page one</a></li>
                                            <li className="sidebar-list-item"><a href="#" className="sidebar-link text-muted pl-lg-5">Page two</a></li>
                                            <li className="sidebar-list-item"><a href="#" className="sidebar-link text-muted pl-lg-5">Page three</a></li>
                                            <li className="sidebar-list-item"><a href="#" className="sidebar-link text-muted pl-lg-5">Page four</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="sidebar-list-item"><a href="login.html" className="sidebar-link text-muted"><i className="o-exit-1 mr-3 text-gray"></i><span>Login</span></a></li>
                            </ul>
                        </div>
                    </div>
                </Nav>
            </>
        </React.Fragment>
    )
}

export default NavBar;