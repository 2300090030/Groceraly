import React, { useEffect } from 'react';

const Signup = () => {
  useEffect(() => {
    const scriptBootstrap = document.createElement('script');
    scriptBootstrap.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js';
    scriptBootstrap.async = true;
    document.body.appendChild(scriptBootstrap);

    const scriptAOS = document.createElement('script');
    scriptAOS.src = 'https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js';
    scriptAOS.onload = () => window.AOS.init({ duration: 1000, once: true });
    document.body.appendChild(scriptAOS);
  }, []);

  return (
    <>
      {/* External Styles and Fonts */}
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
      />
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css"
        rel="stylesheet"
      />

      {/* Embedded Styles */}
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

        .signup-hero {
          background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.6)),
            url('https://images.unsplash.com/photo-1485637701894-09ad422f6de6?q=80&w=2036&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D') center center/cover no-repeat;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          color: white;
          text-align: center;
          flex-direction: column;
          padding: 20px;
        }

        .signup-container {
          background-color: rgba(255, 255, 255, 0.95);
          border-radius: 15px;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
          padding: 40px;
          width: 100%;
          max-width: 450px;
          text-align: center;
          animation: fadeInUp 1s ease forwards;
        }

        .signup-container h2 {
          color: #28a745;
          margin-bottom: 30px;
          font-weight: 600;
          opacity: 0;
          animation: fadeInDown 1s ease forwards;
        }

        .form-control {
          margin-bottom: 15px;
          border-radius: 50px;
          padding: 15px 20px;
          border: 1px solid #ced4da;
          transition: all 0.3s ease;
        }

        .form-control:focus {
          border-color: #28a745;
          box-shadow: 0 0 10px rgba(40, 167, 69, 0.2);
        }

        .btn-signup {
          background-color: #28a745;
          border: none;
          border-radius: 50px;
          padding: 12px 20px;
          font-size: 1rem;
          width: 100%;
          transition: transform 0.3s ease, background-color 0.3s ease;
          color: white;
          margin-top: 10px;
        }

        .btn-signup:hover {
          background-color: #218838;
          transform: translateY(-2px);
        }

        .auth-links {
          display: block;
          margin-top: 20px;
          color: #6c757d;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .auth-links:hover {
          color: #28a745;
        }

        .form-row {
          display: flex;
          gap: 15px;
        }

        .form-row .form-group {
          flex: 1;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        footer {
          background-color: #343a40;
          color: #ccc;
          text-align: center;
          padding: 25px 10px;
        }

        footer p {
          margin: 0;
        }
      `}</style>

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <div className="container-fluid px-4">
          <a className="navbar-brand" href="#">Grocerarly</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link" href="/">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="/shop">Shop</a></li>
              <li className="nav-item"><a className="nav-link" href="/about">About Us</a></li>
              <li className="nav-item"><a className="nav-link active" href="/signup">Sign Up</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Signup Form */}
      <section className="signup-hero">
        <div className="signup-container" data-aos="fade-up">
          <h2 data-aos="fade-down">Create Your Account</h2>
          <form>
            <div className="form-row" data-aos="fade-up" data-aos-delay="100">
              <div className="form-group">
                <input type="text" className="form-control" placeholder="First Name" required />
              </div>
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Last Name" required />
              </div>
            </div>
            <div className="mb-3" data-aos="fade-up" data-aos-delay="200">
              <input type="email" className="form-control" placeholder="Email Address" required />
            </div>
            <div className="mb-3" data-aos="fade-up" data-aos-delay="300">
              <input type="password" className="form-control" placeholder="Create Password" required />
            </div>
            <div className="mb-3" data-aos="fade-up" data-aos-delay="400">
              <input type="password" className="form-control" placeholder="Confirm Password" required />
            </div>
            <div className="form-check mb-3 text-start" data-aos="fade-up" data-aos-delay="500">
              <input className="form-check-input" type="checkbox" id="terms" required />
              <label className="form-check-label" htmlFor="terms">
                I agree to the <a href="#" className="text-success">Terms of Service</a> and <a href="#" className="text-success">Privacy Policy</a>
              </label>
            </div>
            <button type="submit" className="btn btn-signup" data-aos="zoom-in" data-aos-delay="600">Create Account</button>
            <div data-aos="fade-up" data-aos-delay="700">
              <p className="mt-3">Already have an account? <a href="/login" className="auth-links">Log In</a></p>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: '#28a745' }} className="text-white pt-5">
        <div className="container text-center text-md-start">
          <div className="row">
            <div className="col-md-3 mb-4">
              <h6 className="text-uppercase fw-bold">Grocearly</h6>
              <hr className="mb-2 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#fff', height: '2px' }} />
              <p>Your one-stop shop for fresh groceries delivered to your doorstep.</p>
            </div>
            <div className="col-md-3 mb-4">
              <h6 className="text-uppercase fw-bold">Quick Links</h6>
              <ul className="list-unstyled">
                <li><a href="/home" className="text-white text-decoration-none">Home</a></li>
                <li><a href="/shop" className="text-white text-decoration-none">Shop</a></li>
                <li><a href="/about" className="text-white text-decoration-none">About Us</a></li>
                <li><a href="/contact" className="text-white text-decoration-none">Contact</a></li>
              </ul>
            </div>
            <div className="col-md-3 mb-4">
              <h6 className="text-uppercase fw-bold">Categories</h6>
              <ul className="list-unstyled">
                <li><a href="#categories" className="text-white text-decoration-none">Fruits & Vegetables</a></li>
                <li><a href="#categories" className="text-white text-decoration-none">Dairy & Eggs</a></li>
                <li><a href="#categories" className="text-white text-decoration-none">Bakery & Bread</a></li>
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
        <div className="text-center py-3" style={{ backgroundColor: '#218838' }}>
          © 2025 Grocearly. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Signup;
