import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const ScamDetail = () => {
  const { id } = useParams();
  const [scam, setScam] = useState(null);
  const [tips, setTips] = useState(null); // ✅ New state for prevention tips

  useEffect(() => {
    fetch(`https://scam-alert-backend.onrender.com/api/scams/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setScam(data);

        // Fetch prevention tips based on scamType
        if (data.scamType) {
          fetch(`https://scam-alert-backend.onrender.com/api/prevention/type/${data.scamType}`)
            .then((res) => res.json())
            .then((tipData) => setTips(tipData))
            .catch((err) => console.error("Error fetching tips:", err));
        }
      })
      .catch((err) => console.error("Error fetching scam:", err));
  }, [id]);

  if (!scam) return <div className="container mt-5"><p>Loading...</p></div>;

  return (
    <div className="container mt-5 mb-5">
      <Link to="/latestScam" className="btn btn-secondary mb-3">&larr; Back to Listings</Link>
      <div className="card shadow p-4">
        <h2 className="text-danger mb-3">{scam.scamType}</h2>
        <p><strong>Date Reported:</strong> {new Date(scam.createdAt).toLocaleDateString()}</p>
        <p><strong>Reported By:</strong> {scam.anonymous ? "Anonymous" : scam.email}</p>
        <hr />
        <p><strong>Full Description:</strong></p>
        <p>{scam.description}</p>

        {/* Show attachments if available */}
        {scam.attachments && scam.attachments.length > 0 && (
          <div className="mt-3">
            <h5>Attachments:</h5>
            <ul>
              {scam.attachments.map((file, idx) => (
                <li key={idx}>
                  <a href={`https://scam-alert-backend.onrender.com/uploads/${file.filename}`} target="_blank" rel="noopener noreferrer">
                    {file.originalname || file.filename}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Prevention Tips Section */}
        {Array.isArray(tips) && tips.length > 0 && (
          <div className="mt-5">
            <h4 className="mb-3 text-primary">Prevention Tips for {scam.scamType}</h4>

            <ul style={{ paddingLeft: "20px", fontSize: "1.05rem", lineHeight: "1.8" }}>
              {tips.map((tipGroup, idx) => (tipGroup.tips.map((text, i) => (<li key={`${idx}-${i}`} className="mb-2">{text}</li>))))}
            </ul>

            <Link to={`/quiz/${scam.scamType}`} className="btn btn-outline-success mt-3">
              Take Quiz on {scam.scamType}
            </Link>
          </div>
        )}

        {/* Placeholder for Comments */}
        <div className="mt-5">
          <h4 className="mb-3">Comments</h4>
          <p className="text-muted">Comment system coming soon...</p>
        </div>
      </div>
    </div>
  );
};

export default ScamDetail;
