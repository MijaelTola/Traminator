import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Navbar, Nav, Form, Dropdown } from 'react-bootstrap'

const NavBar = ({ logoutUser, user }) => {
    return (
        <React.Fragment>
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
                            <li className="sidebar-list-item"><a href="tables.html" className="sidebar-link text-muted"><i className="o-table-content-1 mr-3 text-gray"></i><span>Tablas</span></a></li>
                            <li className="sidebar-list-item">
                                <NavLink className="sidebar-link text-muted" to="/maps">
                                    <i className="o-survey-1 mr-3 text-gray"></i><span>Mapas</span>
                                </NavLink>
                            </li>

                        </ul>
                    </div>
        </React.Fragment>
    )
}

export default NavBar;