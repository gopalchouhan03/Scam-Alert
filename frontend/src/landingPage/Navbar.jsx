import React from 'react';
import { Link } from 'react-router-dom';
import LogoutButton from './LogoutButton';

function Navbar() {

    let user = null;

    try {
        const raw = localStorage.getItem('user');
        if (raw && raw !== "undefined") {
            user = JSON.parse(raw);
        }
    } catch (err) {
        console.error("Error parsing user from localStorage:", err);
        user = null;
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top fs-5">
            <div className="container-fluid">
                <Link className="navbar-brand d-flex align-items-center" to="/">
                    <div className=''>
                        <img
                            src="media/images/shield.png"
                            alt="Shield Logo"
                            width="30"
                            height="30"
                            className="me-2"
                        />
                        <span>ScamAlert</span>
                    </div>
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navbar Links */}
                <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/latestScam">Latest Scams</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-danger fw-bold" to="/reportaScam">Report a Scam</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/peventionTips">Prevention Tips</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/aboutUs">About Us</Link>
                        </li>
                    </ul>
                </div>

                {/* Search Bar & Auth Buttons */}
                <div className="d-flex">
                    {/* <form className="d-flex me-3">
                        <input
                            className="form-control form-control-sm me-2 mt-2"
                            type="search"
                            placeholder="Search scams..."
                            aria-label="Search"
                        />
                        <button className="btn btn-outline-light" type="submit">Search</button>
                    </form> */}
                    <div className="ms-auto">
                        {user ? (
                            <>
                                <span className="me-3">Hi, {user.fullName}</span>
                                <LogoutButton />
                            </>
                        ) : (
                            <Link className="btn btn-primary me-2 p-2 rounded" to="/login">Login</Link>
                        )}
                    </div>

                    <Link className="btn btn-primary p-2 rounded" to="/signup">Sign Up</Link>

                </div>
            </div>
        </nav>
    );
}

export default Navbar;
