import React from 'react'

function Hero() {
    return (
        <div className="text-center p-5" style={{ background: "linear-gradient(135deg, #ffcccc 25%, #f2f2f2 100%)" }}>
            <h1 className="fw-bold">Latest Scam Reports</h1>
            <p className="text-muted">Real-time updates on active fraud attempts</p>
        </div>
    );
}

export default Hero;