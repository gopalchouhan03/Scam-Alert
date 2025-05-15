import React from 'react';

const teamMembers = [
  {
    name: 'Ms Reena Karandhikar',
    role: 'Project Guide',
    bio: 'Expert guide',
    linkedin: '#',
    img: 'media/images/Female.png'
  },
  {
    name: 'Ms. Neeti patil',
    role: 'Project Cordinator',
    bio: '10+ years Teaching',
    linkedin: '#',
    img: 'media/images/Female.png'
  },
  {
    name: 'Gopal chouhan',
    role: 'Project Lead',
    bio: 'Specialized in MERN devlopment',
    linkedin: '#',
    img: 'media/images/gopal.JPG'
  }
];

function Team() {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Who’s Behind ScamAlert?</h2>
      <div className="row justify-content-center">
        {teamMembers.map((member, index) => (
          <div key={index} className="col-md-4">
            <div className="card text-center shadow-sm border-0 p-3 team-card">
              <img src={member.img} alt={member.name} className="rounded-circle mx-auto d-block" width="120" />
              <div className="card-body">
                <h5 className="card-title">{member.name}</h5>
                <p className="text-muted">{member.role}</p>
                <p className="card-text">{member.bio}</p>
                {member.linkedin && (
                  <a href={member.linkedin} className="btn btn-primary btn-sm" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
