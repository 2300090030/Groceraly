import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import AOS from 'aos';

const PaymentForm = () => {
  const [method, setMethod] = useState('card');
  const [message, setMessage] = useState('');
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  // Payment data
  const [name, setName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [upiId, setUpiId] = useState('');

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setPaymentSuccess(false);

    // Mock payment processing
    setTimeout(() => {
      setMessage(`Payment Successful via ${method === 'card' ? 'Card' : method === 'upi' ? 'UPI' : 'Cash on Delivery'}.`);
      setPaymentSuccess(true);
    }, 1000);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <div className="container-fluid px-4">
          <Link className="navbar-brand" to="/">Grocearly</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><Link className="nav-link" to="/home">Home</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/cart">Cart</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/shop">Shop</Link></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Payment Section */}
      <section className="py-5" style={{
        minHeight: '80vh',
        background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1485637701894-09ad422f6de6?q=80&w=2036&auto=format&fit=crop') center center/cover no-repeat`
      }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8" data-aos="fade-up">
              <div className="card border-0 shadow rounded-3 overflow-hidden">
                <div className="card-header bg-success text-white py-4">
                  <h2 className="text-center mb-0">Complete Your Payment</h2>
                </div>
                <div className="card-body p-5">
                  {paymentSuccess ? (
                    <div className="text-center py-4" data-aos="zoom-in">
                      <div className="mb-4">
                        <i className="fas fa-check-circle text-success" style={{ fontSize: '5rem' }}></i>
                      </div>
                      <h3 className="text-success mb-3">{message}</h3>
                      <p className="text-muted mb-4">Your order has been placed successfully!</p>
                      <Link to="/" className="btn btn-success px-4 py-2">
                        Continue Shopping
                      </Link>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit}>
                      <div className="mb-4">
                        <h5 className="mb-3">Payment Method</h5>
                        <div className="d-flex flex-wrap gap-3">
                          <button
                            type="button"
                            className={`btn ${method === 'card' ? 'btn-success' : 'btn-outline-success'} flex-grow-1`}
                            onClick={() => setMethod('card')}
                          >
                            <i className="far fa-credit-card me-2"></i> Card
                          </button>
                          <button
                            type="button"
                            className={`btn ${method === 'upi' ? 'btn-success' : 'btn-outline-success'} flex-grow-1`}
                            onClick={() => setMethod('upi')}
                          >
                            <i className="fas fa-mobile-alt me-2"></i> UPI
                          </button>
                          <button
                            type="button"
                            className={`btn ${method === 'cod' ? 'btn-success' : 'btn-outline-success'} flex-grow-1`}
                            onClick={() => setMethod('cod')}
                          >
                            <i className="fas fa-money-bill-wave me-2"></i> Cash on Delivery
                          </button>
                        </div>
                      </div>

                      {method === 'card' && (
                        <div data-aos="fade-up" data-aos-delay="100">
                          <div className="mb-3">
                            <label className="form-label">Name on Card</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="John Smith"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              required
                            />
                          </div>
                          <div className="mb-3">
                            <label className="form-label">Card Number</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="1234 5678 9012 3456"
                              maxLength={16}
                              value={cardNumber}
                              onChange={(e) => setCardNumber(e.target.value)}
                              required
                            />
                          </div>
                          <div className="row">
                            <div className="col-md-6 mb-3">
                              <label className="form-label">Expiry Date</label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="MM/YY"
                                value={expiry}
                                onChange={(e) => setExpiry(e.target.value)}
                                required
                              />
                            </div>
                            <div className="col-md-6 mb-3">
                              <label className="form-label">CVV</label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="123"
                                maxLength={3}
                                value={cvc}
                                onChange={(e) => setCvc(e.target.value)}
                                required
                              />
                            </div>
                          </div>
                        </div>
                      )}

                      {method === 'upi' && (
                        <div data-aos="fade-up" data-aos-delay="100">
                          <div className="mb-3">
                            <label className="form-label">UPI ID</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="name@upi"
                              value={upiId}
                              onChange={(e) => setUpiId(e.target.value)}
                              required
                            />
                          </div>
                          <div className="alert alert-info">
                            <i className="fas fa-info-circle me-2"></i>
                            You'll be redirected to your UPI app for payment confirmation
                          </div>
                        </div>
                      )}

                      {method === 'cod' && (
                        <div data-aos="fade-up" data-aos-delay="100">
                          <div className="alert alert-success">
                            <i className="fas fa-truck me-2"></i>
                            Pay in cash when your order arrives at your doorstep
                          </div>
                        </div>
                      )}

                      <div className="d-grid mt-4">
                        <button
                          type="submit"
                          className="btn btn-success btn-lg py-3"
                          onMouseOver={(e) => {
                            e.target.style.transform = 'scale(1.02)';
                            e.target.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.2)';
                          }}
                          onMouseOut={(e) => {
                            e.target.style.transform = 'scale(1)';
                            e.target.style.boxShadow = 'none';
                          }}
                          style={{
                            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
                          }}
                        >
                          Complete Payment
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
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
                <li><Link to="/home" className="text-white text-decoration-none">Home</Link></li>
                <li><Link to="/shop" className="text-white text-decoration-none">Shop</Link></li>
                <li><Link to="/about" className="text-white text-decoration-none">About Us</Link></li>
                <li><Link to="/contact" className="text-white text-decoration-none">Contact</Link></li>
              </ul>
            </div>
            <div className="col-md-3 mb-4">
              <h6 className="text-uppercase fw-bold">Categories</h6>
              <ul className="list-unstyled">
                <li><Link to="/shop#fruits" className="text-white text-decoration-none">Fruits & Vegetables</Link></li>
                <li><Link to="/shop#dairy" className="text-white text-decoration-none">Dairy & Eggs</Link></li>
                <li><Link to="/shop#bakery" className="text-white text-decoration-none">Bakery & Bread</Link></li>
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

export default PaymentForm;
