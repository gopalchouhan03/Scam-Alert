import React from "react";

const ScamProcessTimeline = () => {
  const steps = [
    { icon: "✅", title: "Review", description: "Our team verifies the submission." },
    { icon: "📂", title: "Action", description: "Added to our public scam database." },
    { icon: "🔔", title: "Alert", description: "High-risk scams trigger user notifications." },
  ];

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">What Happens Next ?</h2>
      <div className="row justify-content-center">
        {steps.map((step, index) => (
          <div key={index} className="col-md-4 text-center">
            <div className="card p-3 shadow-lg border-0">
              <div className="text-primary mb-2" style={{ fontSize: "40px" }}>{step.icon}</div>
              <h5>{step.title}</h5>
              <p>{step.description}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="text-center mt-4">
        <strong>Note:</strong> "We don’t share your personal data without consent."
      </p>
      <div className="text-center">
        <button className="btn btn-primary">View Privacy Policy</button>
      </div>
    </div>
  );
};

export default ScamProcessTimeline;
