import React from 'react';
import CounterUp from '../components/CounterUp';

function TeamPage() {
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
                  <li className="breadcrumb-item"><a className="text-white" href="/">Home</a></li>
                  <li className="breadcrumb-item"><a className="text-white" href="#">Pages</a></li>
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
            <div className="animate-fadeInUp">
              <div className="team-item bg-light rounded">
                <div className="text-center border-b p-4">
                  <img className="img-fluid rounded-full mb-4" src="/img/team-1.png" alt="" />
                  <h5 className="mb-3">Novus Inc</h5>
                  <span>CEO & Founder</span>
                </div>
                <div className="flex justify-center p-4">
                  <a className="btn btn-square mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                  <a className="btn btn-square mx-1" href=""><i className="fab fa-twitter"></i></a>
                  <a className="btn btn-square mx-1" href=""><i className="fab fa-instagram"></i></a>
                  <a className="btn btn-square mx-1" href=""><i className="fab fa-linkedin-in"></i></a>
                </div>
              </div>
            </div>
            <div className="animate-fadeInUp">
              <div className="team-item bg-light rounded">
                <div className="text-center border-b p-4">
                  <img className="img-fluid rounded-full mb-4" src="/img/team-2.png" alt="" />
                  <h5 className="mb-3">Novus Inc</h5>
                  <span>Web Designer</span>
                </div>
                <div className="flex justify-center p-4">
                  <a className="btn btn-square mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                  <a className="btn btn-square mx-1" href=""><i className="fab fa-twitter"></i></a>
                  <a className="btn btn-square mx-1" href=""><i className="fab fa-instagram"></i></a>
                  <a className="btn btn-square mx-1" href=""><i className="fab fa-linkedin-in"></i></a>
                </div>
              </div>
            </div>
            <div className="animate-fadeInUp">
              <div className="team-item bg-light rounded">
                <div className="text-center border-b p-4">
                  <img className="img-fluid rounded-full mb-4" src="/img/team-3.png" alt="" />
                  <h5 className="mb-3">Novus Inc</h5>
                  <span>SEO Expert</span>
                </div>
                <div className="flex justify-center p-4">
                  <a className="btn btn-square mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                  <a className="btn btn-square mx-1" href=""><i className="fab fa-twitter"></i></a>
                  <a className="btn btn-square mx-1" href=""><i className="fab fa-instagram"></i></a>
                  <a className="btn btn-square mx-1" href=""><i className="fab fa-linkedin-in"></i></a>
                </div>
              </div>
            </div>
            <div className="animate-fadeInUp">
              <div className="team-item bg-light rounded">
                <div className="text-center border-b p-4">
                  <img className="img-fluid rounded-full mb-4" src="/img/team-2.png" alt="" />
                  <h5 className="mb-3">Novus Inc</h5>
                  <span>CEO & Founder</span>
                </div>
                <div className="flex justify-center p-4">
                  <a className="btn btn-square mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                  <a className="btn btn-square mx-1" href=""><i className="fab fa-twitter"></i></a>
                  <a className="btn btn-square mx-1" href=""><i className="fab fa-instagram"></i></a>
                  <a className="btn btn-square mx-1" href=""><i className="fab fa-linkedin-in"></i></a>
                </div>
              </div>
            </div>
            <div className="animate-fadeInUp">
              <div className="team-item bg-light rounded">
                <div className="text-center border-b p-4">
                  <img className="img-fluid rounded-full mb-4" src="/img/team-3.png" alt="" />
                  <h5 className="mb-3">Novus Inc</h5>
                  <span>Web Designer</span>
                </div>
                <div className="flex justify-center p-4">
                  <a className="btn btn-square mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                  <a className="btn btn-square mx-1" href=""><i className="fab fa-twitter"></i></a>
                  <a className="btn btn-square mx-1" href=""><i className="fab fa-instagram"></i></a>
                  <a className="btn btn-square mx-1" href=""><i className="fab fa-linkedin-in"></i></a>
                </div>
              </div>
            </div>
            <div className="animate-fadeInUp">
              <div className="team-item bg-light rounded">
                <div className="text-center border-b p-4">
                  <img className="img-fluid rounded-full mb-4" src="/img/team-1.png" alt="" />
                  <h5 className="mb-3">Novus Inc</h5>
                  <span>SEO Expert</span>
                </div>
                <div className="flex justify-center p-4">
                  <a className="btn btn-square mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                  <a className="btn btn-square mx-1" href=""><i className="fab fa-twitter"></i></a>
                  <a className="btn btn-square mx-1" href=""><i className="fab fa-instagram"></i></a>
                  <a className="btn btn-square mx-1" href=""><i className="fab fa-linkedin-in"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Team End */}
    </>
  );
}

export default TeamPage;