import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
    return (
        <section className="hero-section text-white d-flex align-items-center">
            <div className="container">
                <div className="row align-items-center">
                    {/* Left Side - Text Content */}
                    <div className="col-lg-6 text-center text-lg-start">
                        <div className="flashing-warning mb-2">
                            ⚠️ Warning: Scammers Are Active! ⚠️
                        </div>
                        <h1 className="display-4 fw-bold">
                            Stop Scams Before They Trick You!
                        </h1>
                        <p>  Real-time alerts, verified reports & expert advice.</p>
                        <div className="mt-4">
                            <Link to="/reportaScam" className="btn btn-danger btn-lg me-3">
                                Report a Scam Now
                            </Link>
                            <Link to="/latestScam" className="btn btn-outline-primary btn-lg">
                                See Latest Scams
                            </Link>
                        </div>
                    </div>

                    {/* Right Side - Image or Animation */}
                    <div className="col-lg-6 text-center mt-4 mt-lg-0">
                        <img
                            src="media/images/hero-shiled.png"
                            alt="Cyber Security Illustration"
                            className="img-fluid"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
