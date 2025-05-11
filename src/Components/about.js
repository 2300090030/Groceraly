import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <div className="container-fluid px-4">
          <Link className="navbar-brand" to="/">Grocecarly</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                  aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/shop">Shop</Link></li>
              <li className="nav-item"><Link className="nav-link active" to="/about">About Us</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/signup">Signup/Login</Link></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="about-hero">
        <h1 data-aos="fade-down">Our Story</h1>
        <p data-aos="fade-up">Discover what makes Grocecarly different</p>
      </section>

      {/* About Content */}
      <section className="about-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-6" data-aos="fade-right">
              <h2>Welcome to Grocecarly</h2>
              <p>Founded in 2020, Grocecarly began with a simple mission: to make grocery shopping convenient, fast, and stress-free for busy families and individuals in Greenland. What started as a small local service has grown into the region's favorite online grocery delivery platform.</p>
              <p>Our team of passionate food enthusiasts and logistics experts work tirelessly to ensure you get the freshest products delivered right to your doorstep. We partner with local farmers and trusted suppliers to bring you the best quality at affordable prices.</p>
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <img src="https://images.unsplash.com/photo-1550583724-b2692b85b150?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Grocecarly Team" className="img-fluid rounded" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2 className="text-center mb-5" data-aos="fade-up">Why Choose Grocecarly?</h2>
          <div className="row">
            <div className="col-md-4 mb-4" data-aos="zoom-in" data-aos-delay="100">
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-truck"></i>
                </div>
                <h3>Fast Delivery</h3>
                <p>Get your groceries delivered in as little as 30 minutes. We understand that when you need something, you need it now.</p>
              </div>
            </div>
            <div className="col-md-4 mb-4" data-aos="zoom-in" data-aos-delay="200">
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-leaf"></i>
                </div>
                <h3>Fresh Products</h3>
                <p>We source directly from local farms and suppliers to ensure you get the freshest produce, dairy, and meats available.</p>
              </div>
            </div>
            <div className="col-md-4 mb-4" data-aos="zoom-in" data-aos-delay="300">
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-medkit"></i>
                </div>
                <h3>Pharmacy Service</h3>
                <p>Can't make it to the pharmacy? We'll deliver your medications and wellness products when you need them most.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <h2 className="text-center mb-5" data-aos="fade-up">Meet Our Team</h2>
          <div className="row">
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
              <div className="team-card">
                <div className="team-card-body">
                  <h5>V .Chakradhar Reddy</h5>
                  <p>TeamLead</p>
                </div>
              </div>
            </div>
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
              <div className="team-card">
                <div className="team-card-body">
                  <h5>T. Aravind</h5>
                  <p>Front end Developer</p>
                </div>
              </div>
            </div>
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="300">
              <div className="team-card">
                <div className="team-card-body">
                  <h5>M . Harika</h5>
                  <p>Back End developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{backgroundColor: "#28a745"}} className="text-white pt-5">
        <div className="container text-center text-md-start">
          <div className="row">
            <div className="col-md-3 mb-4">
              <h6 className="text-uppercase fw-bold">Grocecarly</h6>
              <hr className="mb-2 mt-0 d-inline-block mx-auto" style={{width: "60px", backgroundColor: "#fff", height: "2px"}} />
              <p>Your one-stop shop for fresh groceries delivered to your doorstep.</p>
            </div>
            <div className="col-md-3 mb-4">
              <h6 className="text-uppercase fw-bold">Quick Links</h6>
              <ul className="list-unstyled">
                <li><Link to="/home" className="text-white text-decoration-none">Home</Link></li>
                <li><Link to="/shop" className="text-white text-decoration-none">Shop</Link></li>
                <li><Link to="/about" className="text-white text-decoration-none">About Us</Link></li>
                <li><Link to="/contact" className="text-white text-decoration-none">Contact</Link></li>
              </ul>
            </div>
            <div className="col-md-3 mb-4">
              <h6 className="text-uppercase fw-bold">Categories</h6>
              <ul className="list-unstyled">
                <li><Link to="/shop" className="text-white text-decoration-none">Fruits & Vegetables</Link></li>
                <li><Link to="/shop" className="text-white text-decoration-none">Dairy & Eggs</Link></li>
                <li><Link to="/shop" className="text-white text-decoration-none">Pharmacy</Link></li>
              </ul>
            </div>
            <div className="col-md-3 mb-4">
              <h6 className="text-uppercase fw-bold">Follow Us</h6>
              <a href="#" className="text-white me-3"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="text-white me-3"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-white me-3"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-white me-3"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>
        <div className="text-center py-3" style={{backgroundColor: "#218838"}}>
          © 2025 Grocecarly. All rights reserved.
        </div>
      </footer>

      {/* Add the CSS styles */}
      <style>{`
        * {
          scroll-behavior: smooth;
        }

        body {
          font-family: 'Poppins', sans-serif;
          margin: 0;
          background-color: #fff;
        }

        .navbar-brand {
          font-weight: 600;
          color: #28a745 !important;
        }

        .nav-link:hover {
          color: #218838 !important;
        }

        .about-hero {
          background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.6)),
            url('https://images.unsplash.com/photo-1606787366850-de6330128bfc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D') center center/cover no-repeat;
          height: 60vh;
          display: flex;
          justify-content: center;
          align-items: center;
          color: white;
          text-align: center;
          flex-direction: column;
          padding: 20px;
        }

        .about-hero h1 {
          font-size: 3.5rem;
          font-weight: 700;
          animation: fadeDown 1s ease-out;
        }

        .about-hero p {
          font-size: 1.25rem;
          margin-bottom: 30px;
          animation: fadeUp 1.2s ease-out;
        }

        .about-content {
          padding: 80px 0;
        }

        .about-content h2 {
          color: #28a745;
          font-weight: 600;
          margin-bottom: 30px;
        }

        .about-content p {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #555;
        }

        .features-section {
          background-color: #f8f9fa;
          padding: 70px 0;
        }

        .feature-card {
          background: white;
          border-radius: 15px;
          padding: 30px;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
          transition: transform 0.4s ease, box-shadow 0.4s ease;
          height: 100%;
        }

        .feature-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
        }

        .feature-icon {
          font-size: 2.5rem;
          color: #28a745;
          margin-bottom: 20px;
        }

        .feature-card h3 {
          color: #343a40;
          font-weight: 600;
        }

        .team-section {
          padding: 70px 0;
        }

        .team-card {
          border: none;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
          transition: transform 0.4s ease, box-shadow 0.4s ease;
          margin-bottom: 30px;
        }

        .team-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
        }

        .team-card img {
          height: 250px;
          object-fit: cover;
        }

        .team-card-body {
          padding: 20px;
          text-align: center;
        }

        .team-card-body h5 {
          font-weight: 600;
          color: #343a40;
        }

        .team-card-body p {
          color: #6c757d;
        }

        @media (max-width: 768px) {
          .about-hero h1 {
            font-size: 2.5rem;
          }

          .about-hero p {
            font-size: 1rem;
          }

          .about-content {
            padding: 50px 0;
          }
        }

        @keyframes fadeDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default About;