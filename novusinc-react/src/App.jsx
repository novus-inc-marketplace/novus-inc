import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicePage from './pages/ServicePage';
import ProjectPage from './pages/ProjectPage';
import TeamPage from './pages/TeamPage';
import TestimonialPage from './pages/TestimonialPage';
import NotFoundPage from './pages/NotFoundPage';
import ContactPage from './pages/ContactPage';
import Header from './components/Header';
import Footer from './components/Footer';
import BackToTopButton from './components/BackToTopButton';
import Spinner from './components/Spinner';

function App() {
  return (
    <Router>
      <Spinner />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/project" element={<ProjectPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/testimonial" element={<TestimonialPage />} />
        <Route path="/404" element={<NotFoundPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
      <BackToTopButton />
      <a href="https://wa.me/254798808105" className="whatsapp-button fixed bottom-4 left-4 z-50 bg-green-500 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-whatsapp text-2xl"></i>
      </a>
    </Router>
  );
}

export default App;
