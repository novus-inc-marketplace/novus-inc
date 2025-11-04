import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function ProjectPage() {
  const [filter, setFilter] = useState('*');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/projects');
        setProjects(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const filteredProjects = filter === '*' ? projects : projects.filter(project => project.category === filter);

  const openLightbox = (imgSrc) => {
    setSelectedImage(imgSrc);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setSelectedImage('');
  };

  if (loading) return <div>Loading projects...</div>;
  if (error) return <div>Error loading projects: {error}</div>;

  return (
    <>
      {/* Hero Start */}
      <div className="container-xxl py-5 bg-primary hero-header mb-5">
        <div className="container my-5 py-5 px-lg-5">
          <div className="grid g-5 py-5">
            <div className="col-12 text-center">
              <h1 className="text-white animate-slideInDown">Project</h1>
              <hr className="bg-white mx-auto mt-0" style={{ width: '90px' }} />
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-center">
                  <li className="breadcrumb-item"><Link className="text-white" to="/">Home</Link></li>
                  <li className="breadcrumb-item"><Link className="text-white" to="#">Pages</Link></li>
                  <li className="breadcrumb-item text-white active" aria-current="page">Project</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      {/* Hero End */}

      {/* Projects Start */}
      <div className="container-xxl py-5">
        <div className="container py-5 px-lg-5">
          <div className="animate-fadeInUp">
            <p className="section-title text-secondary justify-center"><span></span>Our Projects<span></span></p>
            <h1 className="text-center mb-5">Recently Completed Projects</h1>
          </div>
          <div className="grid mt-n2 animate-fadeInUp">
            <div className="col-12 text-center">
              <ul className="list-inline mb-5" id="portfolio-flters">
                <li className="mx-2 active" onClick={() => setFilter('*')}>All</li>
                <li className="mx-2" onClick={() => setFilter('first')}>Web Design</li>
                <li className="mx-2" onClick={() => setFilter('second')}>Graphic Design</li>
              </ul>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 portfolio-container">
            {filteredProjects.map(project => (
              <div key={project._id} className={`portfolio-item ${project.category} animate-fadeInUp`}>
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

export default ProjectPage;