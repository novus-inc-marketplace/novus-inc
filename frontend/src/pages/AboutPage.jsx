import React from 'react';
import { Link } from 'react-router-dom';
import CounterUp from '../components/CounterUp';

function AboutPage() {
  return (
    <>
      {/* Hero Start */}
      <div className="container-xxl py-5 bg-primary hero-header mb-5">
        <div className="container my-5 py-5 px-lg-5">
          <div className="grid g-5 py-5">
            <div className="col-12 text-center">
              <h1 className="text-white animate-slideInDown">About Us</h1>
              <hr className="bg-white mx-auto mt-0" style={{ width: '90px' }} />
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-center">
                  <li className="breadcrumb-item"><Link className="text-white" to="/">Home</Link></li>
                  <li className="breadcrumb-item"><Link className="text-white" to="#">Pages</Link></li>
                  <li className="breadcrumb-item text-white active" aria-current="page">About</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      {/* Hero End */}

      {/* Feature Start */}
      <div className="container-xxl py-5">
        <div className="container py-5 px-lg-5">
          <div className="grid lg:grid-cols-3 gap-4">
            <div className="animate-fadeInUp">
              <div className="feature-item rounded text-center p-4">
                <i className="fa fa-3x fa-mail-bulk text-primary mb-4"></i>
                <h5 className="mb-3">Digital Marketing</h5>
                <p className="m-0">We help brands stand out by blending creativity with strategy—turning clicks into connections and awareness into measurable growth.</p>
              </div>
            </div>
            <div className="animate-fadeInUp">
              <div className="feature-item rounded text-center p-4">
                <i className="fa fa-3x fa-search text-primary mb-4"></i>
                <h5 className="mb-3">SEO & Backlinks</h5>
                <p className="m-0">With smart SEO and quality backlinks, we place your business where it deserves to be—front and center, trusted, and visible</p>
              </div>
            </div>
            <div className="animate-fadeInUp">
              <div className="feature-item rounded text-center p-4">
                <i className="fa fa-3x fa-laptop-code text-primary mb-4"></i>
                <h5 className="mb-3">Design & Development</h5>
                <p className="m-0">From sleek websites to powerful apps, we design and build digital experiences that inspire, engage, and convert.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Feature End */}

      {/* About Start */}
      <div className="container-xxl py-5">
        <div className="container py-5 px-lg-5">
          <div className="grid lg:grid-cols-2 gap-5 items-center">
            <div className="animate-fadeInUp">
              <p className="section-title text-secondary">About Us<span></span></p>
              <h1 className="mb-5">Our Promise</h1>
              <p className="mb-4">We are a team of passionate creators, strategists, and technologists who believe in the power of a great idea. We thrive on collaboration and work closely with you to understand your vision and translate it into a digital masterpiece. Our services, ranging from web design and development to digital marketing and SEO, are all geared towards one thing: bringing your ideas to life and helping your business grow.</p>
              <div className="skill mb-4">
                <div className="flex justify-between">
                  <p className="mb-2">Digital Marketing</p>
                  <p className="mb-2">85%</p>
                </div>
                <div className="progress h-2 bg-gray-200 rounded-full">
                  <div className="progress-bar bg-primary" style={{ width: '85%' }} role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div className="skill mb-4">
                <div className="flex justify-between">
                  <p className="mb-2">SEO & Backlinks</p>
                  <p className="mb-2">90%</p>
                </div>
                <div className="progress h-2 bg-gray-200 rounded-full">
                  <div className="progress-bar bg-secondary" style={{ width: '90%' }} role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div className="skill mb-4">
                <div className="flex justify-between">
                  <p className="mb-2">Design & Development</p>
                  <p className="mb-2">95%</p>
                </div>
                <div className="progress h-2 bg-gray-200 rounded-full">
                  <div className="progress-bar bg-dark" style={{ width: '95%' }} role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <Link to="/service" className="btn btn-primary py-sm-3 px-sm-5 rounded-full mt-3">Read More</Link>
            </div>
            <div className="lg:col-span-1">
              <img className="img-fluid animate-zoomIn" src="/img/about.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* About End */}

      {/* Facts Start */}
      <div className="container-xxl bg-primary fact py-5 animate-fadeInUp">
        <div className="container py-5 px-lg-5">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="text-center animate-fadeInUp">
              <i className="fa fa-certificate fa-3x text-secondary mb-3"></i>
              <h1 className="text-white mb-2"><CounterUp target={4} /></h1>
              <p className="text-white mb-0">Years Experience</p>
            </div>
            <div className="text-center animate-fadeInUp">
              <i className="fa fa-users-cog fa-3x text-secondary mb-3"></i>
              <h1 className="text-white mb-2"><CounterUp target={1} /></h1>
              <p className="text-white mb-0">Team Members</p>
            </div>
            <div className="text-center animate-fadeInUp">
              <i className="fa fa-users fa-3x text-secondary mb-3"></i>
              <h1 className="text-white mb-2"><CounterUp target={26} /></h1>
              <p className="text-white mb-0">Satisfied Clients</p>
            </div>
            <div className="text-center animate-fadeInUp">
              <i className="fa fa-check fa-3x text-secondary mb-3"></i>
              <h1 className="text-white mb-2"><CounterUp target={29} /></h1>
              <p className="text-white mb-0">Complete Projects</p>
            </div>
          </div>
        </div>
      </div>
      {/* Facts End */}

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
                  <img className="img-fluid rounded-full mb-4" src="/img/team-1.jpg" alt="" />
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
                  <img className="img-fluid rounded-full mb-4" src="/img/team-2.jpg" alt="" />
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
                  <img className="img-fluid rounded-full mb-4" src="/img/team-3.jpg" alt="" />
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

export default AboutPage;
