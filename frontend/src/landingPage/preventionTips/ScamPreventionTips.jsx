import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const PreventionTips = () => {
  const [tips, setTips] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get("https://scam-alert-backend.onrender.com/api/prevention")
      .then(res => setTips(res.data))
      .catch(err => console.error("Error loading tips:", err));
  }, []);

  const filtered = tips.filter(t =>
    t.scamType.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mt-5">
      {/* Stylish Search Bar */}
      <div className="d-flex justify-content-center mb-4">
        <input
          className="form-control text-center"
          placeholder="🔍 Search by scam type..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            maxWidth: "500px",
            borderRadius: "30px",
            padding: "12px 20px",
            fontSize: "1.1rem",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            border: "1px solid #ced4da",
          }}
        />
      </div>

      {/* Centered Card */}
      <div className="d-flex justify-content-center">
        <div className="col-md-10 col-lg-8">
          {filtered.map((tip, idx) => (
            <div
              className="card mb-5"
              style={{
                background: "#f8f9fa",
                borderRadius: "20px",
                boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
                border: "none",
                padding: "30px",
              }}
              key={idx}
            >
              <h2 className="text-center text-primary mb-4">
                {tip.scamType.name}
              </h2>
              <ul style={{ paddingLeft: "20px", fontSize: "1.05rem", lineHeight: "1.8" }}>
                {tip.tips.map((item, i) => (
                  <li key={i} className="mb-2">
                    {item}
                  </li>
                ))}
              </ul>
              <div className="text-center mt-4">
                <Link
                  className="btn btn-success px-5 py-2"
                  to={`/quiz/${tip.scamType.name}`}
                  style={{
                    borderRadius: "30px",
                    fontWeight: "bold",
                    fontSize: "1rem",
                    boxShadow: "0 4px 10px rgba(0,128,0,0.3)",
                  }}
                >
                  Take Quiz on {tip.scamType.name}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

  );
};

export default PreventionTips;
