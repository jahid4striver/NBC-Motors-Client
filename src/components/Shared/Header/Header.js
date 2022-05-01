import React from 'react';
import { Link } from 'react-router-dom';
import honda from '../../../images/honda.png'

const Header = () => {
    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
            <div className="container-fluid">
                <img className='h-10' src={honda} alt="" />
                <Link className="navbar-brand text-danger fw-bolder" to="/">NBC Motors</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active text-danger" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-danger" to="/">Features</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-danger" to="/">Pricing</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    );
};

export default Header;