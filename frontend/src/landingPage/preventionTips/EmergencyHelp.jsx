import React from "react";

function EmergencyHelp() {
  return (
    <div className="container mt-4 mb-4">
      <div className="card text-white p-4">
        <h2 className="text-center text-black">🆘 Need Immediate Help?</h2>
        <ul className="list-group list-group-flush mt-3">
          <li className="list-group-item bg-danger text-white">
            <strong>Cyber Crime Helpline (India):</strong>{" "}
            <a href="tel:1930" className="text-white text-decoration-none">
              1930
            </a>{" "}
            (24x7)
          </li>
          <li className="list-group-item bg-danger text-white">
            <strong>National Cyber Crime Portal:</strong>{" "}
            <a
              href="https://cybercrime.gov.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-decoration-underline"
            >
              cybercrime.gov.in
            </a>
          </li>
          <li className="list-group-item bg-danger text-white">
            <strong>Online Fraud – UPI & Bank:</strong>{" "}
            <a
              href="mailto:reportfraud@npci.org.in"
              className="text-white text-decoration-none"
            >
              reportfraud@npci.org.in
            </a>
          </li>
          <li className="list-group-item bg-danger text-white">
            <strong>Consumer Helpline:</strong>{" "}
            <a href="tel:1800114000" className="text-white text-decoration-none">
              1800 11 4000
            </a>{" "}
            /{" "}
            <a href="tel:14404" className="text-white text-decoration-none">
              14404
            </a>
          </li>
          <li className="list-group-item bg-danger text-white">
            <strong>RBI Complaints (CMS):</strong>{" "}
            <a
              href="https://cms.rbi.org.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-decoration-underline"
            >
              cms.rbi.org.in
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default EmergencyHelp;
