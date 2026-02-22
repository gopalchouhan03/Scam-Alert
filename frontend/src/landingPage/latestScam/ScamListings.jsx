import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ScamListings() {
  const [scams, setScams] = useState([]);
  const [search, setSearch] = useState("");
  const [scamType, setScamType] = useState("");
  const [sort, setSort] = useState("desc");

  useEffect(() => {
    const fetchScams = async () => {
      try {
        const params = new URLSearchParams({ search, scamType, sort });
        const res = await fetch(`https://scam-alert-backend.onrender.com/api/scams?${params}`);
        const data = await res.json();
        setScams(data);
      } catch (err) {
        console.error("Failed to fetch scams", err);
      }
    };

    fetchScams();
  }, [search, scamType, sort]);

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center">Latest Reported Scams</h2>

      {/* Filter Controls */}
      <div className="row mb-4">
        <div className="col-md-4 mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="🔍 Search scams..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="col-md-4 mb-2">
          <select
            className="form-select"
            onChange={(e) => setScamType(e.target.value)}
            value={scamType}
          >
            <option value="">🎯 Filter by Type</option>
            <option value="Phishing Email">Phishing Email</option>
            <option value="Fake Tech Support">Fake Tech Support</option>
            <option value="Investment Scam">Investment Scam</option>
            <option value="Online Scam">Online Scam</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="col-md-4 mb-2">
          <select
            className="form-select"
            onChange={(e) => setSort(e.target.value)}
            value={sort}
          >
            <option value="desc">🆕 Newest First</option>
            <option value="asc">📅 Oldest First</option>
          </select>
        </div>
      </div>

      {/* Scam Cards */}
      <div className="row">
        {scams.map((scam, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card border-danger h-100">
              <div className="card-body">
                <h5 className="card-title">{scam.scamType}</h5>
                <p className="card-text"><strong>Description:</strong>{" "}
                  {scam.description.length > 100
                    ? scam.description.substring(0, 100) + "..."
                    : scam.description}</p>
                <p><strong>Email:</strong> {scam.anonymous ? "Anonymous" : scam.email}</p>
                <p><strong>Date:</strong> {new Date(scam.createdAt).toLocaleDateString()}</p>
                <Link to={`/scams/${scam._id}`} className="btn btn-sm btn-primary mt-2">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

}

export default ScamListings;
