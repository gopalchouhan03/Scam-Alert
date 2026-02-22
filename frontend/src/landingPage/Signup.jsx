import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
const [fullName, setFullName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");
const [showPassword, setShowPassword] = useState(false);
const [agree, setAgree] = useState(false);
const [message] = useState("");

const getPasswordStrength = () => {
if (password.length > 8) return "strong";
if (password.length > 4) return "medium";
return "weak";
};

const navigate = useNavigate();

const handleSubmit = async (e) => {
  e.preventDefault();
  
  const payload = {
  fullName,
  email,
  password,
  confirmPassword,
  };
  
  try {
  const res = await fetch("https://scam-alert-backend.onrender.com/api/users/signup", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(payload),
  });
  
  const data = await res.json();
  
  if (res.ok) {
    // optional: store user info locally
    localStorage.setItem("user", JSON.stringify(data.user));
    // ✅ redirect to homepage
    navigate("/");
  } else {
    alert(data.message || "Signup failed");
  }
  } catch (err) {
  console.error("Signup error:", err);
  alert("Server error. Please try again later.");
  }
  };

return (
<div className="container d-flex justify-content-center mt-5 mb-4">
<div className="card p-4 shadow" style={{ maxWidth: "600px", width: "100%" }}>
<h3 className="text-center">Create Your Free Account</h3>
<p className="text-center text-muted">Get real-time scam alerts & submit reports.</p>

    <form onSubmit={handleSubmit}>
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

      <div className="mb-3">
        <label className="form-label">Email Address</label>
        <input
          type="email"
          className="form-control"
          placeholder="Donald@Teriff.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <small className="text-muted">No spam, ever.</small>
      </div>

      <div className="mb-3 position-relative">
        <label className="form-label">Password</label>
        <div className="input-group">
          <input
            type={showPassword ? "text" : "password"}
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "🙈" : "👁️"}
          </button>
        </div>
        <small className={`text-${getPasswordStrength() === "strong" ? "success" : getPasswordStrength() === "medium" ? "warning" : "danger"}`}>
          {getPasswordStrength() === "strong" ? "🟢 Strong" : getPasswordStrength() === "medium" ? "🟡 Medium" : "🔴 Weak"}
        </small>
      </div>

      <div className="mb-3">
        <label className="form-label">Confirm Password</label>
        <input
          type="password"
          className="form-control"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
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
          I agree to <button className="btn-link-style">Terms & Privacy Policy</button>
        </label>
      </div>

      <button type="submit" className="btn btn-primary w-100">
        Sign Up for Free
      </button>

      {message && <div className="alert alert-info mt-3">{message}</div>}
    </form>

    <div className="text-center">
      <small>
        Already have an account? <button className="btn-link-style fw-bold">Log in here</button>
      </small>
    </div>

    <div className="text-center mt-3">
      <span className="text-success">🛡️</span> <small>We never share your data.</small>
    </div>
  </div>
</div>
);
};

export default Signup;