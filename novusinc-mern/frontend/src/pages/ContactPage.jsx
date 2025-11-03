import React from 'react';
import { Link } from 'react-router-dom';

function ContactPage() {
  return (
    <>
      {/* Hero Start */}
      <div className="container-xxl py-5 bg-primary hero-header mb-5">
        <div className="container my-5 py-5 px-lg-5">
          <div className="grid g-5 py-5">
            <div className="col-12 text-center">
              <h1 className="text-white animate-slideInDown">Contact</h1>
              <hr className="bg-white mx-auto mt-0" style={{ width: '90px' }} />
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-center">
                  <li className="breadcrumb-item"><Link className="text-white" to="/">Home</Link></li>
                  <li className="breadcrumb-item"><Link className="text-white" to="#">Pages</Link></li>
                  <li className="breadcrumb-item text-white active" aria-current="page">Contact</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      {/* Hero End */}

      {/* Contact Start */}
      <div className="container-xxl py-5">
        <div className="container py-5 px-lg-5">
          <div className="animate-fadeInUp">
            <p className="section-title text-secondary justify-center"><span></span>Contact Us<span></span></p>
            <h1 className="text-center mb-5">Contact For Any Query</h1>
          </div>
          <div className="grid justify-center">
            <div className="lg:col-span-7">
              <div className="animate-fadeInUp">
                <p className="text-center mb-4">Contact us for any questions and future business with us.</p>
                <form action="https://formspree.io/f/your_form_id" method="POST">
                  <div className="grid gap-3">
                    <div className="md:col-span-6">
                      <div className="form-floating">
                        <input type="text" className="form-control" name="name" id="name" placeholder="Your Name" />
                        <label htmlFor="name">Your Name</label>
                      </div>
                    </div>
                    <div className="md:col-span-6">
                      <div className="form-floating">
                        <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" />
                        <label htmlFor="email">Your Email</label>
                      </div>
                    </div>
                    <div className="col-span-12">
                      <div className="form-floating">
                        <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" />
                        <label htmlFor="subject">Subject</label>
                      </div>
                    </div>
                    <div className="col-span-12">
                      <div className="form-floating">
                        <textarea className="form-control" placeholder="Leave a message here" name="message" id="message" style={{ height: '150px' }}></textarea>
                        <label htmlFor="message">Message</label>
                      </div>
                    </div>
                    <input type="text" name="_gotcha" style={{ display: 'none' }} />
                    <div className="col-span-12">
                      <button className="btn btn-primary w-full py-3" type="submit">Send Message</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Contact End */}
    </>
  );
}

export default ContactPage;
