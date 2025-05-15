import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Login() {
const [fullName, setFullName] = useState("");
const [password, setPassword] = useState("");
const [agree, setAgree] = useState(false);
const [message, setMessage] = useState("");

const handleLogin = async (e) => {
e.preventDefault();

if (!agree) {
  setMessage("You must agree to the Terms & Privacy Policy.");
  return;
}

try {
  const res = await axios.post("http://localhost:5000/api/users/login", {
    fullName,
    password,
  });

  setMessage("✅ " + res.data.message);
  // Optionally, redirect or save token here
  localStorage.setItem("user", JSON.stringify(res.data.user));
} catch (error) {
  setMessage("❌ " + (error.response?.data?.error || "Login failed"));
}
};

return (
<div className="container d-flex justify-content-center mt-5 mb-4">
<div className="card p-4 shadow" style={{ maxWidth: "600px", width: "100%" }}>
<h3 className="text-center">Login here...</h3>
<p className="text-center text-muted">Get real-time scam alerts & submit reports.</p>

    <form onSubmit={handleLogin}>
      <div className="mb-3">
        <label className="form-label">Full Name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Donald Trump"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
      </div>

      <div className="mb-3 position-relative">
        <label className="form-label">Password</label>
        <div className="input-group">
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
      </div>

      <div className="form-check mb-3">
        <input
          type="checkbox"
          className="form-check-input"
          checked={agree}
          onChange={() => setAgree(!agree)}
          required
        />
        <label className="form-check-label">
          I agree to <a href="#">Terms & Privacy Policy</a>
        </label>
      </div>
        <Link to="/" className="btn btn-primary w-100">Login</Link>
      {/* <button type="submit" className="btn btn-primary w-100">Login</button> */}
    </form>

    {message && <div className="alert alert-info mt-3">{message}</div>}
  </div>
</div>
);
}

export default Login;