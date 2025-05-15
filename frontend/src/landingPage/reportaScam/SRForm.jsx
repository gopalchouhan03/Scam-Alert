import React, { useState } from "react";

const SRForm = () => {
  const [formData, setFormData] = useState({
    scamType: "",
    description: "",
    attachments: null,
    email: "",
    anonymous: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, attachments: e.target.files });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append('scamType', formData.scamType);
    form.append('description', formData.description);
    form.append('email', formData.email);
    form.append('anonymous', formData.anonymous);

    if (formData.attachments) {
      for (let file of formData.attachments) {
        form.append('attachments', file);
      }
    }

    try {
      const res = await fetch('http://localhost:5000/api/scams', {
        method: 'POST',
        body: form
      });

      const data = await res.json();
      alert(data.message || 'Scam reported.');
    } catch (err) {
      console.error(err);
      alert('Error submitting the form.');
    }
  };


  return (
    <div className="container mt-4">
      <h2>Report a Scam</h2>
      <form onSubmit={handleSubmit} className="border p-4 rounded bg-light">
        {/* Scam Type */}
        <div className="mb-3">
          <label className="form-label">Scam Type</label>
          <select name="scamType" className="form-select" onChange={handleChange} required>
            <option value="">Select Scam Type</option>
            <option value="Phishing Email">Phishing Email</option>
            <option value="Fake Tech Support">Fake Tech Support</option>
            <option value="Investment Scam">Investment Scam</option>
            <option value="Online Scam">Online Scam</option>
            <option value="Other">Other (please describe)</option>
          </select>
        </div>

        {/* Description */}
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            name="description"
            className="form-control"
            placeholder="Describe the scam..."
            rows="4"
            onChange={handleChange}
            required
          ></textarea>
        </div>

        {/* Attachments */}
        <div className="mb-3">
          <label className="form-label">Attachments (Optional)</label>
          <input
            type="file"
            className="form-control"
            multiple
            accept="image/*, .pdf, .docx"
            onChange={handleFileChange}
          />
          <small className="text-muted">Max 5MB</small>
        </div>

        {/* Email (Optional) */}
        <div className="mb-3">
          <label className="form-label">Your Email (Optional)</label>
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Enter your email"
            onChange={handleChange}
            disabled={formData.anonymous}
          />
        </div>

        {/* Anonymous Checkbox */}
        <div className="form-check mb-3">
          <input
            className="form-check-input"
            type="checkbox"
            name="anonymous"
            id="anonymous"
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="anonymous">
            Submit anonymously (your details won’t be stored)
          </label>
        </div>

        {/* CAPTCHA Placeholder */}
        <div className="mb-3">
          <p className="text-muted">CAPTCHA will be here</p>
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-danger w-50" style={{ marginLeft: "300px" }}>
          Report Now
        </button>
      </form>
    </div>
  );
};

export default SRForm;
