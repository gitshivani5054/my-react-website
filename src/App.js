import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';

const fontLink = document.createElement('link');
fontLink.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&display=swap';
fontLink.rel = 'stylesheet';
document.head.appendChild(fontLink);

const Layout = ({ children }) => (
  <div style={{ fontFamily: 'Poppins, sans-serif' }}>
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-4">
      <Link className="navbar-brand" to="/">MyPortfolio</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/services">Services</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
    <div className="container mt-4">{children}</div>
  </div>
);

const Home = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
    <h1 className="text-center text-info">Hi, I'm a Web Designer</h1>
    <p className="text-center">Creating modern and responsive designs with a splash of creativity.</p>
  </motion.div>
);

const About = () => (
  <motion.div initial={{ x: -200 }} animate={{ x: 0 }} transition={{ duration: 0.8 }}>
    <h2>About Me</h2>
    <p>I am a passionate website designer with 3 years of experience in creating dynamic and responsive web interfaces.</p>
  </motion.div>
);

const Services = () => {
  const services = [
    { icon: 'bi-laptop', title: 'Web Design', desc: 'Clean and modern web designs tailored to your brand.' },
    { icon: 'bi-phone', title: 'Responsive Design', desc: 'Optimized for all devices including mobile and tablets.' },
    { icon: 'bi-lightning', title: 'Performance', desc: 'Fast and performance-optimized websites.' },
    { icon: 'bi-lightning', title: 'Performance2', desc: 'Fast and performance-optimized websites.' },
  ];

  return (
    <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ duration: 0.6 }}>
      <h2>Services</h2>
      <div className="row">
        {services.map((service, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card shadow-sm h-100 border-info">
              <div className="card-body text-center">
                <i className={`bi ${service.icon} display-4 text-primary`}></i>
                <h5 className="card-title mt-3">{service.title}</h5>
                <p className="card-text">{service.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const Contact = () => (
  <motion.div initial={{ y: 50 }} animate={{ y: 0 }} transition={{ duration: 0.5 }}>
    <h2>Contact Me</h2>
    <form>
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label className="form-label">Email</label>
        <input type="email" className="form-control" />
      </div>
      <div className="mb-3">
        <label className="form-label">Message</label>
        <textarea className="form-control"></textarea>
      </div>
      <button type="submit" className="btn btn-primary">Send</button>
    </form>
  </motion.div>
);

export default function App() {
  useEffect(() => {
    document.body.style.background = '#f3f8ff';
  }, []);

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}
