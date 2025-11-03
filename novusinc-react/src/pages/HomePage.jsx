import React, { useState } from 'react';
import CounterUp from '../components/CounterUp';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function HomePage() {
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

  const [filter, setFilter] = useState('*');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const projects = [
    { id: 1, category: 'first', img: '/img/gym_template1.PNG', title: 'Gym Template', type: 'UI / UX Design', link: 'https://novus-inc-marketplace.github.io/gym_template1' },
    { id: 2, category: 'second', img: '/img/restaurant_template.PNG', title: 'Restaurant Template 1', type: 'UI / UX Design', link: 'https://novus-inc-marketplace.github.io/restaurant_template' },
    { id: 3, category: 'first', img: '/img/restaurant_template1.PNG', title: 'Restaurant Template 2', type: 'UI / UX Design', link: 'https://novus-inc-marketplace.github.io/restaurant_template1' },
  ];

  const filteredProjects = filter === '*' ? projects : projects.filter(project => project.category === filter);

  const openLightbox = (imgSrc) => {
    setSelectedImage(imgSrc);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setSelectedImage('');
  };

  return (
    <>
      {/* Hero Start */}
      <div className="container-xxl bg-primary hero-header">
        <div className="container px-lg-5">
          <div className="grid lg:grid-cols-2 gap-5 items-end">
            <div className="text-center lg:text-left">
              <h1 className="text-white mb-4 animate-slideInDown">Ideas Into Reality</h1>
              <p className="text-white pb-3 animate-slideInDown">We don’t just build websites, we build digital experiences that turn your ideas into reality. We blend cutting-cutting-edge technology with creative storytelling to craft a digital presence that resonates with your audience and drives results.</p>
              <a href="/about" className="btn btn-secondary py-sm-3 px-sm-5 rounded-full me-3 animate-slideInLeft">About Us</a>
              <a href="/contact" className="btn btn-light py-sm-3 px-sm-5 rounded-full animate-slideInRight">Contact Us</a>
            </div>
            <div className="text-center lg:text-left">
              <img className="img-fluid animate-zoomIn" src="/img/hero.png" alt="" />
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
                <h5 className="mb-3">Frontend Development</h5>
                <p className="m-0">Creating responsive, user-friendly interfaces with modern frameworks. Focus on performance, accessibility, and exceptional user experience.</p>
              </div>
            </div>
            <div className="animate-fadeInUp">
              <div className="feature-item rounded text-center p-4">
                <i className="fa fa-3x fa-search text-primary mb-4"></i>
                <h5 className="mb-3">Backend Development</h5>
                <p className="m-0">Building robust, scalable server-side applications with modern technologies. Focus on security, performance, and API integration.</p>
              </div>
            </div>
            <div className="animate-fadeInUp">
              <div className="feature-item rounded text-center p-4">
                <i className="fa fa-3x fa-laptop-code text-primary mb-4"></i>
                <h5 className="mb-3">Full Stack Solutions</h5>
                <p className="m-0">End-to-end web application development combining frontend and backend technologies for complete digital solutions.</p>
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
              <p className="section-title text-secondary">About Novus Inc<span></span></p>
              <h1 className="mb-5">Innovative Web Solutions for Modern Businesses</h1>
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
              <a href="/service" className="btn btn-primary py-sm-3 px-sm-5 rounded-full mt-3">Our Services</a>
            </div>
            <div className="lg:col-span-1">
              <img className="img-fluid animate-zoomIn" src="/img/about.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* About End */}

      {/* Facts End */}
      <div className="container-xxl bg-primary fact py-5 animate-fadeInUp">
        <div className="container py-5 px-lg-5">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="text-center animate-fadeInUp">
              <i className="fa fa-certificate fa-3x text-secondary mb-3"></i>
              <h1 className="text-white mb-2"><CounterUp target="5" /></h1>
              <p className="text-white mb-0">Years Experience</p>
            </div>
            <div className="text-center animate-fadeInUp">
              <i className="fa fa-users-cog fa-3x text-secondary mb-3"></i>
              <h1 className="text-white mb-2"><CounterUp target="1" /></h1>
              <p className="text-white mb-0">Team Members</p>
            </div>
            <div className="text-center animate-fadeInUp">
              <i className="fa fa-users fa-3x text-secondary mb-3"></i>
              <h1 className="text-white mb-2"><CounterUp target="25" /></h1>
              <p className="text-white mb-0">Satisfied Clients</p>
            </div>
            <div className="text-center animate-fadeInUp">
              <i className="fa fa-check fa-3x text-secondary mb-3"></i>
              <h1 className="text-white mb-2"><CounterUp target="20" /></h1>
              <p className="text-white mb-0">Completed Projects</p>
            </div>
          </div>
        </div>
      </div>
      {/* Facts End */}

      {/* Service Start */}
      <div className="container-xxl py-5">
        <div className="container py-5 px-lg-5">
          <div className="animate-fadeInUp">
            <p className="section-title text-secondary justify-center"><span></span>Our Services<span></span></p>
            <h1 className="text-center mb-5">Web Development Solutions</h1>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="animate-fadeInUp">
              <div className="service-item flex flex-col text-center rounded">
                <div className="service-icon flex-shrink-0">
                  <i className="fa fa-search fa-2x"></i>
                </div>
                <h5 className="mb-3">Frontend Development</h5>
                <p className="m-0">Creating responsive, user-friendly interfaces with modern frameworks like React, Vue, and Angular. Focus on performance, accessibility, and exceptional user experience.</p>
                <a className="btn btn-square" href="/contact"><i className="fa fa-arrow-right"></i></a>
              </div>
            </div>
            <div className="animate-fadeInUp">
              <div className="service-item flex flex-col text-center rounded">
                <div className="service-icon flex-shrink-0">
                  <i className="fa fa-laptop-code fa-2x"></i>
                </div>
                <h5 className="mb-3">Backend Development</h5>
                <p className="m-0">Building robust, scalable server-side applications with Node.js, Python, PHP, and database solutions. Focus on security, performance, and API integration.</p>
                <a className="btn btn-square" href="/contact"><i className="fa fa-arrow-right"></i></a>
              </div>
            </div>
            <div className="animate-fadeInUp">
              <div className="service-item flex flex-col text-center rounded">
                <div className="service-icon flex-shrink-0">
                  <i className="fab fa-facebook-f fa-2x"></i>
                </div>
                <h5 className="mb-3">Full Stack Development</h5>
                <p className="m-0">End-to-end web application development combining frontend and backend technologies. Seamless integration between client-side and server-side components.</p>
                <a className="btn btn-square" href="/contact"><i className="fa fa-arrow-right"></i></a>
              </div>
            </div>
            <div className="animate-fadeInUp">
              <div className="service-item flex flex-col text-center rounded">
                <div className="service-icon flex-shrink-0">
                  <i className="fa fa-mail-bulk fa-2x"></i>
                </div>
                <h5 className="mb-3">Responsive Design</h5>
                <p className="m-0">Creating websites and applications that work seamlessly across all devices. Mobile-first approach ensuring optimal user experience on any screen size.</p>
                <a className="btn btn-square" href="/contact"><i className="fa fa-arrow-right"></i></a>
              </div>
            </div>
            <div className="animate-fadeInUp">
              <div className="service-item flex flex-col text-center rounded">
                <div className="service-icon flex-shrink-0">
                  <i className="fa fa-thumbs-up fa-2x"></i>
                </div>
                <h5 className="mb-3">UI/UX Implementation</h5>
                <p className="m-0">Transforming design concepts into functional, interactive interfaces. Focus on user-centered design principles and intuitive navigation.</p>
                <a className="btn btn-square" href="/contact"><i className="fa fa-arrow-right"></i></a>
              </div>
            </div>
            <div className="animate-fadeInUp">
              <div className="service-item flex flex-col text-center rounded">
                <div className="service-icon flex-shrink-0">
                  <i className="fab fa-android fa-2x"></i>
                </div>
                <h5 className="mb-3">Performance Optimization</h5>
                <p className="m-0">Improving website speed, efficiency, and user experience through code optimization, caching strategies, and modern deployment techniques.</p>
                <a className="btn btn-square" href="/contact"><i className="fa fa-arrow-right"></i></a>
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
              <h1 className="text-center text-white mb-4">Stay Updated</h1>
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

      {/* Projects Start */}
      <div className="container-xxl py-5">
        <div className="container py-5 px-lg-5">
          <div className="animate-fadeInUp">
            <p className="section-title text-secondary justify-center"><span></span>Our Projects<span></span></p>
            <h1 className="text-center mb-5">Web Development Projects</h1>
          </div>
          <div className="grid mt-n2 animate-fadeInUp">
            <div className="col-12 text-center">
              <ul className="list-inline mb-5" id="portfolio-flters">
                <li className="mx-2 active" onClick={() => setFilter('*')}>All</li>
                <li className="mx-2" onClick={() => setFilter('first')}>Web Development</li>
                <li className="mx-2" onClick={() => setFilter('second')}>Full Stack Projects</li>
              </ul>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 portfolio-container">
            {filteredProjects.map(project => (
              <div key={project.id} className={`portfolio-item ${project.category} animate-fadeInUp`}>
                <div className="rounded overflow-hidden">
                  <div className="relative overflow-hidden">
                    <img className="img-fluid w-full" src={project.img} alt="" />
                    <div className="portfolio-overlay absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <a className="btn btn-square btn-outline-light mx-1" href={project.img} onClick={(e) => { e.preventDefault(); openLightbox(project.img); }}><i className="fa fa-eye"></i></a>
                      <a className="btn btn-square btn-outline-light mx-1" href={project.link} target="_blank" rel="noopener noreferrer"><i className="fa fa-link"></i></a>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-primary fw-medium mb-2">{project.type}</p>
                    <h5 className="lh-base mb-0">{project.title}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Projects End */}

      {lightboxOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={closeLightbox}>
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <button className="absolute top-2 right-2 text-white text-3xl" onClick={closeLightbox}>&times;</button>
            <img src={selectedImage} alt="Lightbox" className="max-w-full max-h-screen" />
          </div>
        </div>
      )}
    </>
  );
}

export default HomePage;