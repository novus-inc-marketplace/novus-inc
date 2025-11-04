import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';

function ServicePage() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubmitStatus, setNewsletterSubmitStatus] = useState('idle');
  const [newsletterResponseMessage, setNewsletterResponseMessage] = useState('');

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/services');
        setServices(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    setNewsletterSubmitStatus('submitting');
    setNewsletterResponseMessage('');

    try {
      const res = await axios.post('http://localhost:5000/api/newsletter', {
        email: newsletterEmail,
      });
      setNewsletterSubmitStatus('success');
      setNewsletterResponseMessage(res.data.message);
      setNewsletterEmail('');
    } catch (error) {
      setNewsletterSubmitStatus('error');
      setNewsletterResponseMessage(error.response?.data?.message || 'Something went wrong. Please try again.');
    }
  };

  if (loading) return <div>Loading services...</div>;
  if (error) return <div>Error loading services: {error}</div>;

  return (
    <>
      {/* Hero Start */}
      <div className="container-xxl py-5 bg-primary hero-header mb-5">
        <div className="container my-5 py-5 px-lg-5">
          <div className="grid g-5 py-5">
            <div className="col-12 text-center">
              <h1 className="text-white animate-slideInDown">Service</h1>
              <hr className="bg-white mx-auto mt-0" style={{ width: '90px' }} />
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-center">
                  <li className="breadcrumb-item"><Link className="text-white" to="/">Home</Link></li>
                  <li className="breadcrumb-item"><Link className="text-white" to="#">Pages</Link></li>
                  <li className="breadcrumb-item text-white active" aria-current="page">Service</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      {/* Hero End */}

      {/* Service Start */}
      <div className="container-xxl py-5">
        <div className="container py-5 px-lg-5">
          <div className="animate-fadeInUp">
            <p className="section-title text-secondary justify-center"><span></span>Our Services<span></span></p>
            <h1 className="text-center mb-5">What Solutions We Provide</h1>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, index) => (
              <div key={service._id || index} className="animate-fadeInUp">
                <div className="service-item flex flex-col text-center rounded">
                  <div className="service-icon flex-shrink-0">
                    <i className={`fa fa-2x ${service.icon}`}></i>
                  </div>
                  <h5 className="mb-3">{service.title}</h5>
                  <p className="m-0">{service.description}</p>
                  <Link className="btn btn-square" to={service.link}><i className="fa fa-arrow-right"></i></Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Service End */}

      {/* Newsletter Start */}
      <div className="container-xxl bg-primary newsletter py-5 animate-fadeInUp">
        <div className="container py-5 px-lg-5">
          <div className="grid justify-center">
            <div className="lg:col-span-7 text-center">
              <p className="section-title text-white justify-center"><span></span>Newsletter<span></span></p>
              <h1 className="text-center text-white mb-4">Stay Always In Touch</h1>
              <p className="text-white mb-4">Subscribe to our newsletter to receive updates on our latest projects, services, and web development insights.</p>
              <div className="relative w-full mt-3">
                <form onSubmit={handleNewsletterSubmit}>
                  <input
                    className="form-control border-0 rounded-full w-full ps-4 pe-5 h-12"
                    type="email"
                    placeholder="Enter Your Email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    required
                  />
                  <button
                    type="submit"
                    className="btn shadow-none absolute top-0 end-0 mt-1 me-2"
                    disabled={newsletterSubmitStatus === 'submitting'}
                  >
                    <i className="fa fa-paper-plane text-primary text-xl"></i>
                  </button>
                </form>
                {newsletterResponseMessage && (
                  <div className={`text-center mt-3 ${newsletterSubmitStatus === 'success' ? 'text-green-500' : 'text-red-500'}`}>
                    {newsletterResponseMessage}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Newsletter End */}

      {/* Testimonial Start */}
      <div className="container-xxl py-5 animate-fadeInUp">
        <div className="container py-5 px-lg-5">
          <p className="section-title text-secondary justify-center"><span></span>Testimonial<span></span></p>
          <h1 className="text-center mb-5">What Say Our Clients!</h1>
          <Slider {...settings}>
            <div className="testimonial-item bg-light rounded my-4 p-4">
              <p className="fs-5"><i className="fa fa-quote-left fa-4x text-primary mt-n4 me-3"></i>Working with Novus Inc was a game-changer for my business. Their creative approach and attention to detail not only gave me a stunning website but also attracted the right clients I’d been missing.</p>
              <div className="flex items-center mt-3">
                <img className="img-fluid flex-shrink-0 rounded-full" src="/img/testimonial-1.jpg" style={{ width: '65px', height: '65px' }} alt="" />
                <div className="ps-4">
                  <h5 className="mb-1">Recent Client</h5>
                  <span>Gym Business Owner</span>
                </div>
              </div>
            </div>
            <div className="testimonial-item bg-light rounded my-4 p-4">
              <p className="fs-5"><i className="fa fa-quote-left fa-4x text-primary mt-n4 me-3"></i>From strategy to execution, they made everything seamless. The results spoke for themselves—more visibility, more engagement, and most importantly, real growth.</p>
              <div className="flex items-center mt-3">
                <img className="img-fluid flex-shrink-0 rounded-full" src="/img/testimonial-2.jpg" style={{ width: '65px', height: '65px' }} alt="" />
                <div className="ps-4">
                  <h5 className="mb-1">Recent Client</h5>
                  <span>Restaurant Business owner</span>
                </div>
              </div>
            </div>
            <div className="testimonial-item bg-light rounded my-4 p-4">
              <p className="fs-5"><i className="fa fa-quote-left fa-4x text-primary mt-n4 me-3"></i>Their expertise felt personal—like they truly understood my brand. The solutions they delivered didn’t just look good; they created lasting impact for my business</p>
              <div className="flex items-center mt-3">
                <img className="img-fluid flex-shrink-0 rounded-full" src="/img/testimonial-3.jpg" style={{ width: '65px', height: '65px' }} alt="" />
                <div className="ps-4">
                  <h5 className="mb-1">Recent Client</h5>
                  <span>Business Owner</span>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
      {/* Testimonial End */}
    </>
  );
}

export default ServicePage;
