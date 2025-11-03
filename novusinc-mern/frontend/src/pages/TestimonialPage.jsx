import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function TestimonialPage() {
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

  return (
    <>
      {/* Hero Start */}
      <div className="container-xxl py-5 bg-primary hero-header mb-5">
        <div className="container my-5 py-5 px-lg-5">
          <div className="grid g-5 py-5">
            <div className="col-12 text-center">
              <h1 className="text-white animate-slideInDown">Testimonial</h1>
              <hr className="bg-white mx-auto mt-0" style={{ width: '90px' }} />
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-center">
                  <li className="breadcrumb-item"><Link className="text-white" to="/">Home</Link></li>
                  <li className="breadcrumb-item"><Link className="text-white" to="#">Pages</Link></li>
                  <li className="breadcrumb-item text-white active" aria-current="page">Testimonial</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      {/* Hero End */}

      {/* Testimonial Start */}
      <div className="container-xxl py-5 animate-fadeInUp">
        <div className="container py-5 px-lg-5">
          <p className="section-title text-secondary justify-center"><span></span>Testimonial<span></span></p>
          <h1 className="text-center mb-5">What Say Our Clients!</h1>
          <Slider {...settings}>
            <div className="testimonial-item bg-light rounded my-4 p-4">
              <p className="fs-5"><i className="fa fa-quote-left fa-4x text-primary mt-n4 me-3"></i>Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit sed stet lorem sit clita duo justo.</p>
              <div className="flex items-center mt-3">
                <img className="img-fluid flex-shrink-0 rounded-full" src="/img/testimonial-1.png" style={{ width: '65px', height: '65px' }} alt="" />
                <div className="ps-4">
                  <h5 className="mb-1">Client Name</h5>
                  <span>Profession</span>
                </div>
              </div>
            </div>
            <div className="testimonial-item bg-light rounded my-4 p-4">
              <p className="fs-5"><i className="fa fa-quote-left fa-4x text-primary mt-n4 me-3"></i>Working with Novus Inc was a game-changer for my business. Their creative approach and attention to detail not only gave me a stunning website but also attracted the right clients I’d been missing.</p>
              <div className="flex items-center mt-3">
                <img className="img-fluid flex-shrink-0 rounded-full" src="/img/testimonial-2.png" style={{ width: '65px', height: '65px' }} alt="" />
                <div className="ps-4">
                  <h5 className="mb-1">Recent Client</h5>
                  <span>Business Owner</span>
                </div>
              </div>
            </div>
            <div className="testimonial-item bg-light rounded my-4 p-4">
              <p className="fs-5"><i className="fa fa-quote-left fa-4x text-primary mt-n4 me-3"></i>From strategy to execution, they made everything seamless. The results spoke for themselves—more visibility, more engagement, and most importantly, real growth.</p>
              <div className="flex items-center mt-3">
                <img className="img-fluid flex-shrink-0 rounded-full" src="/img/testimonial-3.png" style={{ width: '65px', height: '65px' }} alt="" />
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

export default TestimonialPage;
