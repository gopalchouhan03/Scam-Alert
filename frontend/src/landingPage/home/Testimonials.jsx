import React from "react";

const testimonials = [
  {
    name: "Yuvraj",
    text: "Reported a fake bank call—site confirmed it was a scam!",
    avatar: "media/images/yuvi.jpg",
  },
  {
    name: "Yogesh chouhan",
    text: "The phishing alerts helped me avoid a scam email!",
    avatar: "media/images/yogesh.jpg",
  },
  {
    name: "Tiya R.",
    text: "I almost fell for a WhatsApp lottery scam, but ScamAlert saved me!",
    avatar: "media/images/tiya.jpg",
  },
];

function Testimonials() {
  return (
    <section className="testimonials-section">
      <div className="container text-center">
        <h2 className="mb-4">💬 Saved by ScamAlert</h2>
        <div className="row">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="col-md-4">
              <div className="testimonial-card">
                <img src={testimonial.avatar} alt={testimonial.name} className="avatar" />
                <p className="testimonial-text">“{testimonial.text}”</p>
                <h5 className="testimonial-name">- {testimonial.name}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
