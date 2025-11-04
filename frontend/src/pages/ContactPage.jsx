import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitStatus, setSubmitStatus] = useState('idle'); // idle, submitting, success, error
  const [responseMessage, setResponseMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus('submitting');
    setResponseMessage('');

    try {
      const res = await axios.post('http://localhost:5000/api/contact', {
        name,
        email,
        subject,
        message,
      });
      setSubmitStatus('success');
      setResponseMessage(res.data.message);
      // Clear form fields
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    } catch (error) {
      setSubmitStatus('error');
      setResponseMessage(error.response?.data?.message || 'Something went wrong. Please try again.');
    }
  };

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
                <form onSubmit={handleSubmit}>
                  <div className="grid gap-3">
                    <div className="md:col-span-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="Your Name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                        />
                        <label htmlFor="name">Your Name</label>
                      </div>
                    </div>
                    <div className="md:col-span-6">
                      <div className="form-floating">
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="Your Email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                        <label htmlFor="email">Your Email</label>
                      </div>
                    </div>
                    <div className="col-span-12">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="subject"
                          placeholder="Subject"
                          value={subject}
                          onChange={(e) => setSubject(e.target.value)}
                          required
                        />
                        <label htmlFor="subject">Subject</label>
                      </div>
                    </div>
                    <div className="col-span-12">
                      <div className="form-floating">
                        <textarea
                          className="form-control"
                          placeholder="Leave a message here"
                          id="message"
                          style={{ height: '150px' }}
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          required
                        ></textarea>
                        <label htmlFor="message">Message</label>
                      </div>
                    </div>
                    <div className="col-span-12">
                      <button className="btn btn-primary w-full py-3" type="submit" disabled={submitStatus === 'submitting'}>
                        {submitStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                      </button>
                    </div>
                    {responseMessage && (
                      <div className={`col-span-12 text-center mt-3 ${submitStatus === 'success' ? 'text-green-500' : 'text-red-500'}`}>
                        {responseMessage}
                      </div>
                    )}
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