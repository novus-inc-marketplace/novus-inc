import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="container-fluid bg-primary text-light footer wow fadeIn" data-wow-delay="0.1s">
      <div className="container py-5 px-lg-5">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="col-md-6 col-lg-3">
            <p className="section-title text-white h5 mb-4"><span>Address</span></p>
            <p><i className="fa fa-map-marker-alt me-3"></i>Nairobi, Kenya</p>
            <p><i className="fa fa-phone-alt me-3"></i>+254798808105</p>
            <p><i className="fa fa-envelope me-3"></i>novusincmarketplace@gmail.com</p>
            <div className="flex pt-2">
              <a className="btn btn-outline-light btn-social" href="https://twitter.com/novusinc"><i className="fab fa-twitter"></i></a>
              <a className="btn btn-outline-light btn-social" href="https://facebook.com/novusinc"><i className="fab fa-facebook-f"></i></a>
              <a className="btn btn-outline-light btn-social" href="https://instagram.com/novusinc"><i className="fab fa-instagram"></i></a>
              <a className="btn btn-outline-light btn-social" href="https://linkedin.com/company/novusinc"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <p className="section-title text-white h5 mb-4">Quick Link<span></span></p>
            <Link className="btn btn-link" to="/about">About Novus Inc</Link>
            <Link className="btn btn-link" to="/contact">Contact Us</Link>
            <a className="btn btn-link" href="#">Privacy Policy</a>
            <a className="btn btn-link" href="#">Terms & Condition</a>
            <Link className="btn btn-link" to="/service">Services</Link>
          </div>
          <div className="col-md-6 col-lg-3">
            <p className="section-title text-white h5 mb-4">Gallery<span></span></p>
            <div className="grid grid-cols-3 gap-2">
              <div className="col-4">
                <img className="img-fluid" src="/img/gym_template1.PNG" alt="Image" />
              </div>
              <div className="col-4">
                <img className="img-fluid" src="/img/restaurant_template.PNG" alt="Image" />
              </div>
              <div className="col-4">
                <img className="img-fluid" src="/img/restaurant_template1.PNG" alt="Image" />
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <p className="section-title text-white h5 mb-4">Newsletter<span></span></p>
            <p>Subscribe to our newsletter to receive updates on our latest projects, services, and web development insights.</p>
            <div className="relative w-full mt-3">
              <form action="YOUR_MAILCHIMP_ACTION_URL" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank" noValidate>
                <div id="mc_embed_signup_scroll">
                  <div className="mc-field-group">
                    <input type="email" value="" name="EMAIL" className="required email form-control border-0 rounded-full w-full ps-4 pe-5 h-12" id="mce-EMAIL" placeholder="Your Email" />
                  </div>
                  <div className="mc-field-group">
                    <input type="text" value="" name="FNAME" className="form-control border-0 rounded-full w-full ps-4 pe-5 h-12 mt-2" id="mce-FNAME" placeholder="Your Name" />
                  </div>
                  <div id="mce-responses" className="clear">
                    <div className="response" id="mce-error-response" style={{ display: 'none' }}></div>
                    <div className="response" id="mce-success-response" style={{ display: 'none' }}></div>
                  </div>
                  <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true"><input type="text" name="b_YOUR_MAILCHIMP_USER_ID_AND_LIST_ID" tabIndex="-1" value="" /></div>
                  <div className="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="btn btn-primary w-full py-2 mt-2" /></div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="container px-lg-5">
        <div className="copyright">
          <div className="grid md:grid-cols-2">
            <div className="text-center md:text-left mb-3 md:mb-0">
              &copy; <a className="border-bottom" href="#">Novus Inc</a>, All Right Reserved.
              Designed By <a className="border-bottom" href="https://novus-inc-marketplace.github.io/portfolio_website">HTML Codex</a>
            </div>
            <div className="text-center md:text-right">
              <div className="footer-menu">
                <Link to="/">Home</Link>
                <Link to="/service">Services</Link>
                <Link to="/project">Projects</Link>
                <Link to="/contact">Contact</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;