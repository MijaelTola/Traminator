import React from 'react';
import Header from '../../containers/Header/Header'
import NavBar from '../../containers/NavBar/NavBar'

const Home = () => {
    return (
        <>
            <Header />
            <Nav>
            <div className="d-flex align-items-stretch" style={{ width: "10000px" }}>
                <NavBar />
            </div>
            </Nav>
        </>
    );
}

export default Home;