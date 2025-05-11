import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Grocearly = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const toggle = document.getElementById('sidebarToggle');
    if (toggle) {
      toggle.addEventListener('click', () => {
        document.querySelector('.sidebar').classList.toggle('show');
      });
    }
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        * { scroll-behavior: smooth; }
        body {
          font-family: 'Poppins', sans-serif;
          margin: 0;
          background-color: #fff;
          padding-left: 250px;
        }
        .sidebar {
          background-color: #f8f9fa;
          width: 250px;
          height: 100vh;
          position: fixed;
          left: 0;
          top: 0;
          z-index: 1000;
          border-right: 1px solid #dee2e6;
        }
        .sidebar-header {
          padding: 1rem;
          background-color: #28a745;
          color: white;
        }
        .sidebar-brand {
          font-weight: 600;
          font-size: 1.2rem;
        }
        .sidebar-nav {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .nav-item {
          padding: 0.5rem 1rem;
          border-bottom: 1px solid #e9ecef;
        }
        .nav-link {
          color: #495057;
          text-decoration: none;
          display: flex;
          align-items: center;
          padding: 0.5rem 0;
        }
        .nav-link:hover {
          color: #28a745;
        }
        .nav-icon {
          font-size: 1.2rem;
          width: 30px;
          text-align: center;
          margin-right: 10px;
        }
        .nav-link-text {
          font-size: 0.9rem;
        }
        .navbar-brand {
          font-weight: 600;
          color: #28a745 !important;
        }
        .nav-link:hover {
          color: #218838 !important;
        }
        .banner {
          background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)),
              url('https://images.unsplash.com/photo-1485637701894-09ad422f6de6?q=80&w=2036&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D') center center/cover no-repeat;
          height: 50vh;
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: white;
          padding: 20px;
        }
        .banner h1 {
          font-size: 2.5rem;
          font-weight: 700;
          animation: fadeDown 1s ease-out;
        }
        .banner p {
          font-size: 1.2rem;
          animation: fadeUp 1.2s ease-out;
        }
        .banner button {
          background-color: #28a745;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 50px;
          font-size: 1rem;
          transition: all 0.3s ease-in-out;
        }
        .banner button:hover {
          background-color: #218838;
          transform: scale(1.05);
        }
        .category-card {
          border: none;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
          margin: 10px;
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }
        .category-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
        }
        .category-card img {
          height: 220px;
          object-fit: cover;
          filter: brightness(95%);
          transition: transform 0.4s ease, filter 0.4s ease;
        }
        .category-card:hover img {
          filter: brightness(105%);
          transform: scale(1.02);
        }
        .category-card .card-body {
          text-align: center;
          padding: 20px;
        }
        .category-card .card-title {
          font-weight: 600;
          font-size: 1.2rem;
          color: #2d2d2d;
          margin-top: 10px;
        }
        .category-card .card-title i {
          color: #28a745;
          margin-right: 8px;
        }
        .product-card {
          border: none;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          margin: 10px;
          transition: transform 0.3s ease;
        }
        .product-card:hover {
          transform: translateY(-5px);
        }
        .product-card img {
          width: 100%;
          height: 150px;
          object-fit: contain;
        }
        .product-card .card-body {
          text-align: center;
          padding: 10px;
        }
        .product-card .card-body button {
          background-color: #28a745;
          color: white;
          border: none;
          padding: 5px 10px;
          border-radius: 5px;
          font-size: 0.9rem;
        }
        footer {
          background-color: #28a745;
          color: #ccc;
          text-align: center;
          padding: 25px 10px;
        }
        footer p {
          margin: 0;
        }
        @media (max-width: 992px) {
          body {
            padding-left: 0;
          }
          .sidebar {
            transform: translateX(-100%);
            transition: transform 0.3s ease;
          }
          .sidebar.show {
            transform: translateX(0);
          }
        }
        @media (max-width: 768px) {
          .banner h1 {
            font-size: 2rem;
          }
          .banner p {
            font-size: 1rem;
          }
          .category-card img {
            height: 180px;
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
      ` }} />

      {/* Optional: Font Awesome CDN for icons */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />

      {/* Sidebar */}
      <div className="sidebar">
        <div className="sidebar-header border-bottom">
          <div className="sidebar-brand">Grocearly</div>
        </div>
        <ul className="sidebar-nav">
          {[
            ['Home', 'home', '/'],
            ['Shop', 'store', '/shop', true],
            ['My Cart', 'shopping-cart','/cart'],
            ['Orders', 'clipboard-list','/cart'],
            ['Account', 'user-circle','/login'],
             ['Maps', 'map-marked-alt', '/maps'], // New Maps section

          ].map(([text, icon, href = '#', active = false]) => (
            <li className="nav-item" key={text}>
              <a className={`nav-link ${active ? 'active' : ''}`} href={href}>
                <i className={`nav-icon fas fa-${icon}`}></i>
                <span className="nav-link-text">{text}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
          <div className="container-fluid px-4">
            <button className="navbar-toggler d-lg-none" type="button" id="sidebarToggle">
              <span className="navbar-toggler-icon"></span>
            </button>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item"><a className="nav-link" href="/">Home</a></li>
                <li className="nav-item"><a className="nav-link active" href="/shop">Shop</a></li>
                <li className="nav-item"><a className="nav-link" href="/about">About Us</a></li>
                <li className="nav-item"><a className="nav-link" href="/signup">Signup/Login</a></li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Banner */}
        <div className="banner">
          <div>
            <h1>Grocearly</h1>
            <p>Fresh Groceries delivered to your door step</p>
          </div>
         
        </div>

        {/* Categories */}
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-4">
              <div className="card category-card" data-aos="zoom-in" data-aos-delay="100">
                <img src="https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?cs=srgb&dl=pexels-shvetsa-3683074.jpg&fm=jpg" className="card-img-top" alt="Pharmacy" />
                <div className="card-body">
                  <h5 className="card-title"><i className="fas fa-medkit"></i> Pharmacy at your doorstep!</h5>
                  <p className="card-text">Cough syrups, pain relief sprays & more</p>
                  <button>Order Now</button>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card category-card" data-aos="zoom-in" data-aos-delay="200">
                <img src="https://images.pexels.com/photos/8434744/pexels-photo-8434744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="card-img-top" alt="Pet Care" />
                <div className="card-body">
                  <h5 className="card-title"><i className="fas fa-paw"></i> Pet Care supplies in minutes</h5>
                  <p className="card-text">Food, treats, toys & more</p>
                  <button>Order Now</button>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card category-card" data-aos="zoom-in" data-aos-delay="300">
                <img src="https://as2.ftcdn.net/v2/jpg/02/90/36/21/1000_F_290362172_UtOqiOewYzVfpH1TVhg5oDaffsgehx21.jpg" className="card-img-top" alt="Baby Care" />
                <div className="card-body">
                  <h5 className="card-title"><i className="fas fa-baby"></i> No time for a diaper run?</h5>
                  <p className="card-text">Get baby care essentials in minutes</p>
                  <button>Order Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dairy, Bread & Eggs */}
        <div className="container mt-4">
          <h2>Dairy, Bread & Eggs</h2>
          <div className="row">
            <div className="col-md-2">
              <div className="card product-card">
                <img src="https://m.media-amazon.com/images/I/81jBF9Sg8vL._SL1500_.jpg" className="card-img-top" alt="Vijaya Dairy Gold Full Cream Milk" />
                <div className="card-body">
                  <h5 className="card-title">Vijaya Dairy Gold Full Cream Milk</h5>
                  <p className="card-text">500 ml</p>
                  <button>ADD</button>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <div className="card product-card">
                <img src="https://m.media-amazon.com/images/I/81G9FaGqbRL._SL1500_.jpg" className="card-img-top" alt="Vijaya Dairy Pasteurized Milk" />
                <div className="card-body">
                  <h5 className="card-title">Vijaya Dairy Pasteurized Milk</h5>
                  <p className="card-text">500 ml</p>
                  <button>ADD</button>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <div className="card product-card">
                <img src="https://www.bbassets.com/media/uploads/p/l/40216457_1-vijaya-double-toned-milk-low-fat.jpg" className="card-img-top" alt="Vijaya Dairy Standardised Milk Curd" />
                <div className="card-body">
                  <h5 className="card-title">Vijaya Dairy Standardised Milk Curd</h5>
                  <p className="card-text">425 g</p>
                  <button>ADD</button>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <div className="card product-card">
                <img src="https://m.media-amazon.com/images/I/61AvbLjXWbL._SL1417_.jpg" className="card-img-top" alt="Heritage Total Curd" />
                <div className="card-body">
                  <h5 className="card-title">Heritage Total Curd</h5>
                  <p className="card-text">400 g</p>
                  <button>ADD</button>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <div className="card product-card">
                <img src="https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/NI_CATALOG/IMAGES/CIW/2024/10/10/f86ae841-7783-4c2c-ae0c-25588771f45d_16007.png" className="card-img-top" alt="Vijaya Dairy Standardized Milk Curd" />
                <div className="card-body">
                  <h5 className="card-title">Vijaya Dairy Standardized Milk Curd</h5>
                  <p className="card-text">1 kg</p>
                  <button>ADD</button>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <div className="card product-card">
                <img src="https://freshclub.co.in/cdn/shop/products/815V9EawbJL._SL1500.png?v=1655986659&width=713" className="card-img-top" alt="Heritage Dairy Health Toned Milk" />
                <div className="card-body">
                  <h5 className="card-title">Heritage Dairy Health Toned Milk</h5>
                  <p className="card-text">500 ml</p>
                  <button>ADD</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Fruits and Vegetables */}
        <div className="container mt-4">
          <h2>Fruits and Vegetables</h2>
          <div className="row">
            <div className="col-md-2">
              <div className="card product-card">
                <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=120,h=120/da/cms-assets/cms/product/14840705-a505-4ca0-a4a9-8330c90fe447.jpg?ts=1741848462" className="card-img-top" alt="Mangos" />
                <div className="card-body">
                  <h5 className="card-title">Mangos</h5>
                  <p className="card-text">1 kg</p>
                  <button>ADD</button>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <div className="card product-card">
                <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/app/assets/products/sliding_images/jpeg/5d5aba6b-244e-43df-9cdf-88456534687d.jpg?ts=1746242688" className="card-img-top" alt="Grapes" />
                <div className="card-body">
                  <h5 className="card-title">Grapes</h5>
                  <p className="card-text">500g</p>
                  <button>ADD</button>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <div className="card product-card">
                <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/app/assets/products/sliding_images/jpeg/002b0e99-4e37-4a18-94b2-27dc3404b9be.jpg?ts=1711442496" className="card-img-top" alt="Black berries" />
                <div className="card-body">
                  <h5 className="card-title">Black berries</h5>
                  <p className="card-text">250 g</p>
                  <button>ADD</button>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <div className="card product-card">
                <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/app/assets/products/sliding_images/jpeg/ecb2357a-7b98-4f34-8eaf-15eaf656e50e.jpg?ts=1714127336" className="card-img-top" alt="Watermelon" />
                <div className="card-body">
                  <h5 className="card-title">Watermelon</h5>
                  <p className="card-text">1 Kg</p>
                  <button>ADD</button>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <div className="card product-card">
                <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/4e17db76-2404-49d6-8c0e-9e0b48552551.jpg?ts=1740114928" className="card-img-top" alt="Banana" />
                <div className="card-body">
                  <h5 className="card-title">Banana</h5>
                  <p className="card-text">1 dz</p>
                  <button>ADD</button>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <div className="card product-card">
                <img src="https://m.media-amazon.com/images/I/81XA2GQIPOL._SL1500_.jpg" className="card-img-top" alt="Pineapple" />
                <div className="card-body">
                  <h5 className="card-title">Pineapple</h5>
                  <p className="card-text">500 g</p>
                  <button>ADD</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pet Food and Play Items */}
        <div className="container mt-4">
          <h2>Pet Food and Play Items</h2>
          <div className="row">
            <div className="col-md-2">
              <div className="card product-card">
                <img src="https://www.zigly.com/media/catalog/product/cache/743ca7d646b949dcc48b9fdeed3857e9/p/e/pedigree_vegetarian_puppy_adult_dry_food-1_kg_3.jpg" className="card-img-top" alt="Pedigree" />
                <div className="card-body">
                  <h5 className="card-title">Pedigree</h5>
                  <p className="card-text">1 kg</p>
                  <button>ADD</button>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <div className="card product-card">
                <img src="https://m.media-amazon.com/images/I/61Xg19cAjML._SL1000_.jpg" className="card-img-top" alt="Wiskas" />
                <div className="card-body">
                  <h5 className="card-title">Wiskas</h5>
                  <p className="card-text">500g</p>
                  <button>ADD</button>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <div className="card product-card">
                <img src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRBQFmmSG0Pne2x8TvGcPM-rIbBnVS8nBTE-GUH_b9HUa9r7VGD0VwrxV7EHeV6rtRFbbCRn7y7p7gvvcv2KjVAX421vbZGKqk1Hzj8sI6KcTcFT_Deazf0Eg" className="card-img-top" alt="Himalaya pet food" />
                <div className="card-body">
                  <h5 className="card-title">Himalaya pet food</h5>
                  <p className="card-text">1 Kg</p>
                  <button>ADD</button>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <div className="card product-card">
                <img src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR_oxb2qNHpeB7IyLS9RShc9Iu4xcs4ILK24cahjkZUDrbFJrsA_dAC1N62UNHkbB8glozjc0XiPHjIG4WuvOHy4ql_KE32vXgH9OWNTfpj7LkPYEteFvhW" className="card-img-top" alt="Smart heart Dog food" />
                <div className="card-body">
                  <h5 className="card-title">Smart heart Dog food</h5>
                  <p className="card-text">1 Kg</p>
                  <button>ADD</button>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <div className="card product-card">
                <img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRKVNOFO1vSWaQfzLy1TU9PKsbUo_fanYpqCNjBl4lybHPgA_KyoIsm6BZuU26x7lKrYhhljv6XXEAwOxz1YxM3wraN8iq5Lwq_UeJ4N_TTZY_fQYRcwcVi" className="card-img-top" alt="spike ball" />
                <div className="card-body">
                  <h5 className="card-title">spike ball</h5>
                  <p className="card-text">1 item</p>
                  <button>ADD</button>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <div className="card product-card">
                <img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS242eTreWYXF0vQGshrfziyCKKpfb7mKbOlq_vAlG3qV9dt2P1993grr3Mc2JVuQPKfqWC8tMstbE-q4mlnLu_WZLipVfTNSV6dZtk3uCjhmUfmqoTbLKd7A" className="card-img-top" alt="Himalaya dog shampoo" />
                <div className="card-body">
                  <h5 className="card-title">Himalaya dog shampoo</h5>
                  <p className="card-text">400 g</p>
                  <button>ADD</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-white pt-5">
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
                {['facebook-f', 'twitter', 'instagram', 'linkedin-in'].map(icon => (
                  <a href="#" className="text-white me-3" key={icon}><i className={`fab fa-${icon}`}></i></a>
                ))}
              </div>
            </div>
          </div>
          <div className="text-center py-3" style={{ backgroundColor: '#218838' }}>
            © 2025 Grocearly. All rights reserved.
          </div>
        </footer>
      </div>
    </>
  );
};

export default Grocearly;
