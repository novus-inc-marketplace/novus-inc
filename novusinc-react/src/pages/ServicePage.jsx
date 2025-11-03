import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
            <div className="animate-fadeInUp">
              <div className="service-item flex flex-col text-center rounded">
                <div className="service-icon flex-shrink-0">
                  <i className="fa fa-search fa-2x"></i>
                </div>
                <h5 className="mb-3">SEO Optimization</h5>
                <p className="m-0">Boost your visibility and attract the right audience with smart SEO strategies designed to put your brand exactly where it matters—on top</p>
                <a className="btn btn-square" href=""><i className="fa fa-arrow-right"></i></a>
              </div>
            </div>
            <div className="animate-fadeInUp">
              <div className="service-item flex flex-col text-center rounded">
                <div className="service-icon flex-shrink-0">
                  <i className="fa fa-laptop-code fa-2x"></i>
                </div>
                <h5 className="mb-3">Web Design</h5>
                <p className="m-0">Crafting sleek, user-friendly websites that not only look stunning but also convert visitors into loyal customers.</p>
                <a className="btn btn-square" href=""><i className="fa fa-arrow-right"></i></a>
              </div>
            </div>
            <div className="animate-fadeInUp">
              <div className="service-item flex flex-col text-center rounded">
                <div className="service-icon flex-shrink-0">
                  <i className="fab fa-facebook-f fa-2x"></i>
                </div>
                <h5 className="mb-3">Social Media Marketing</h5>
                <p className="m-0">Turn your social presence into real business growth with engaging campaigns that spark conversations and build community.</p>
                <a className="btn btn-square" href=""><i className="fa fa-arrow-right"></i></a>
              </div>
            </div>
            <div className="animate-fadeInUp">
              <div className="service-item flex flex-col text-center rounded">
                <div className="service-icon flex-shrink-0">
                  <i className="fa fa-mail-bulk fa-2x"></i>
                </div>
                <h5 className="mb-3">Email Marketing</h5>
                <p className="m-0">Deliver the right message at the right time—personalized email campaigns that nurture trust and drive sales</p>
                <a className="btn btn-square" href=""><i className="fa fa-arrow-right"></i></a>
              </div>
            </div>
            <div className="animate-fadeInUp">
              <div className="service-item flex flex-col text-center rounded">
                <div className="service-icon flex-shrink-0">
                  <i className="fa fa-thumbs-up fa-2x"></i>
                </div>
                <h5 className="mb-3">PPC Advertising</h5>
                <p className="m-0">Maximize ROI with data-driven ads that target the right people, at the right moment, for instant visibility and results.</p>
                <a className="btn btn-square" href=""><i className="fa fa-arrow-right"></i></a>
              </div>
            </div>
            <div className="animate-fadeInUp">
              <div className="service-item flex flex-col text-center rounded">
                <div className="service-icon flex-shrink-0">
                  <i className="fab fa-android fa-2x"></i>
                </div>
                <h5 className="mb-3">App Development</h5>
                <p className="m-0">Transforming ideas into powerful, intuitive apps that connect with users and bring your vision to life.</p>
                <a className="btn btn-square" href=""><i className="fa fa-arrow-right"></i></a>
              </div>
            </div>
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
                <input className="form-control border-0 rounded-full w-full ps-4 pe-5 h-12" type="text" placeholder="Enter Your Email" />
                <button type="button" className="btn shadow-none absolute top-0 end-0 mt-1 me-2"><i className="fa fa-paper-plane text-primary text-xl"></i></button>
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