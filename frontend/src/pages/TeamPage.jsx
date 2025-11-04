import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function TeamPage() {
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/team');
        setTeamMembers(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchTeamMembers();
  }, []);

  if (loading) return <div>Loading team members...</div>;
  if (error) return <div>Error loading team members: {error}</div>;

  return (
    <>
      {/* Hero Start */}
      <div className="container-xxl py-5 bg-primary hero-header mb-5">
        <div className="container my-5 py-5 px-lg-5">
          <div className="grid g-5 py-5">
            <div className="col-12 text-center">
              <h1 className="text-white animate-slideInDown">Our Team</h1>
              <hr className="bg-white mx-auto mt-0" style={{ width: '90px' }} />
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-center">
                  <li className="breadcrumb-item"><Link className="text-white" to="/">Home</Link></li>
                  <li className="breadcrumb-item"><Link className="text-white" to="#">Pages</Link></li>
                  <li className="breadcrumb-item text-white active" aria-current="page">Our Team</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      {/* Hero End */}

      {/* Team Start */}
      <div className="container-xxl py-5">
        <div className="container py-5 px-lg-5">
          <div className="animate-fadeInUp">
            <p className="section-title text-secondary justify-center"><span></span>Our Team<span></span></p>
            <h1 className="text-center mb-5">Our Team Members</h1>
          </div>
          <div className="grid lg:grid-cols-3 gap-4">
            {teamMembers.map((member, index) => (
              <div key={member._id || index} className="animate-fadeInUp">
                <div className="team-item bg-light rounded">
                  <div className="text-center border-b p-4">
                    <img className="img-fluid rounded-full mb-4" src={member.image} alt={member.name} />
                    <h5 className="mb-3">{member.name}</h5>
                    <span>{member.position}</span>
                  </div>
                  <div className="flex justify-center p-4">
                    <a className="btn btn-square mx-1" href={member.facebook} target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
                    <a className="btn btn-square mx-1" href={member.twitter} target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                    <a className="btn btn-square mx-1" href={member.instagram} target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                    <a className="btn btn-square mx-1" href={member.linkedin} target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Team End */}
    </>
  );
}

export default TeamPage;