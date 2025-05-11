import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import AOS from 'aos';

const GroceryMart = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <div className="container-fluid px-4">
          <a className="navbar-brand" href="#">Grocearly</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link active" href="/home">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="/shop">Shop</a></li>
              <li className="nav-item"><a className="nav-link" href="/about">About Us</a></li>
              <li className="nav-item"><a className="nav-link" href="/signup">Signup/Login</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section text-white d-flex align-items-center justify-content-center text-center" style={{
        background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1485637701894-09ad422f6de6?q=80&w=2036&auto=format&fit=crop') center/cover no-repeat`,
        height: '90vh',
        flexDirection: 'column',
        padding: '20px'
      }}>
        <h1>Welcome to Grocearly</h1>
        <p>Fresh groceries delivered right to your doorstep</p>
        <a href="#categories" className="btn btn-primary" style={{
          backgroundColor: '#218838',
          border: 'none',
          padding: '12px 30px',
          fontSize: '1.2rem',
          borderRadius: '50px',
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
          transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
          marginTop: '20px'
        }} onMouseOver={(e) => {
          e.target.style.transform = 'scale(1.05)';
          e.target.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.3)';
        }} onMouseOut={(e) => {
          e.target.style.transform = 'scale(1)';
          e.target.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
        }}>Shop Now</a>
      </section>

      {/* Categories Section */}
      <section className="categories-section py-5 bg-light" id="categories">
        <div className="container">
          <h2 className="text-center mb-5" data-aos="fade-up">Shop by Category</h2>
          <div className="row">
            {[
              { title: 'Fruits & Vegetables', icon: 'fa-apple-alt', img: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=800&q=80' },
              { title: 'Dairy & Eggs', icon: 'fa-egg', img: 'https://img.freepik.com/free-photo/close-up-dairy-products_23-2148610615.jpg?t=st=1745001949~exp=1745005549~hmac=05f8d10495f05a0bcb9a33799248b6b437f36181a7ae1e817c36ef90f1ba26cb&w=1380' },
              { title: 'Beverages', icon: 'fa-wine-bottle', img: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80' },
              { title: 'Meat & Seafood', icon: 'fa-fish', img: 'https://images.unsplash.com/photo-1634932515818-7f9292c4e149?w=600&auto=format&fit=crop&q=60' },
              { title: 'Bakery & Bread', icon: 'fa-bread-slice', img: 'https://plus.unsplash.com/premium_photo-1675788939191-713c2abf3da6?q=80&w=2071&auto=format&fit=crop' },
              { title: 'Snacks & Sweets', icon: 'fa-cookie-bite', img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80' }
            ].map((category, idx) => (
              <div className="col-md-4 mb-4" data-aos="zoom-in" data-aos-delay={(idx + 1) * 100} key={category.title}>
                <div className="card h-100">
                  <img src={category.img} className="card-img-top" alt={category.title} style={{ height: '220px', objectFit: 'cover' }} />
                  <div className="card-body text-center">
                    <h5 className="card-title"><i className={`fas ${category.icon} me-2`}></i>{category.title}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
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

export default GroceryMart;
