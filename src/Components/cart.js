import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Fresh Apples (1kg)",
      price: 3.00,
      quantity: 2,
      description: "₹3.00 each",
      imageUrl: "https://via.placeholder.com/80"
    },
    {
      id: 2,
      name: "Organic Milk (1L)",
      price: 2.50,
      quantity: 1,
      description: "₹2.50 each",
      imageUrl: "https://via.placeholder.com/80"
    }
  ]);
  const [total, setTotal] = useState(0);

  // Calculate total whenever cart items change
  useEffect(() => {
    const newTotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    setTotal(newTotal);
  }, [cartItems]);

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity < 1) return;

    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <div className="container-fluid px-4">
          <Link className="navbar-brand" to="/">Grocearly</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                  aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><Link className="nav-link active" to="/home">Home</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/shop">Shop</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/about">About Us</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/signup">Signup/Login</Link></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Cart Section */}
      <section className="cart-bg">
        <div className="cart-overlay">
          <h2 className="text-center mb-4">My Cart</h2>

          {cartItems.map(item => (
            <div className="cart-item" key={item.id}>
              <div className="item-details">
                <img src={item.imageUrl} alt={item.name} />
                <h5>{item.name}</h5>
                <p>{item.description}</p>
              </div>
              <div className="quantity">
                <input
                  type="number"
                  value={item.quantity}
                  min="1"
                  className="qty-input form-control"
                  onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                />
              </div>
              <div className="price">₹{(item.price * item.quantity).toFixed(2)}</div>
            </div>
          ))}

          <div className="total">
            Total: ₹{total.toFixed(2)}
          </div>

          <Link to="/pay">
            <button className="btn-checkout mt-4">Proceed to Checkout</button>
          </Link>
        </div>
      </section>

      {/* CSS Styles */}
      <style jsx>{`
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

        .cart-bg {
          background: url('https://images.unsplash.com/photo-1485637701894-09ad422f6de6?q=80&w=2036&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D') center center/cover no-repeat;
          padding: 80px 0;
        }

        .cart-overlay {
          background-color: rgba(255, 255, 255, 0.95);
          padding: 40px 20px;
          border-radius: 10px;
          max-width: 960px;
          margin: auto;
          box-shadow: 0 8px 20px rgba(0,0,0,0.15);
        }

        .cart-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid #e0e0e0;
          padding: 15px 0;
        }

        .cart-item img {
          width: 80px;
          height: 80px;
          object-fit: cover;
          border-radius: 8px;
          margin-right: 20px;
        }

        .item-details {
          flex-grow: 1;
        }

        .item-details h5 {
          margin: 0;
          font-weight: 600;
        }

        .item-details p {
          margin: 4px 0;
          color: #666;
        }

        .quantity input {
          width: 60px;
          text-align: center;
          border: 1px solid #ccc;
          border-radius: 5px;
          padding: 5px;
        }

        .price {
          font-weight: 600;
          color: #28a745;
          width: 90px;
          text-align: right;
        }

        .total {
          text-align: right;
          font-size: 1.5rem;
          margin-top: 20px;
          font-weight: bold;
          color: #333;
        }

        .btn-checkout {
          background-color: #28a745;
          border: none;
          padding: 15px;
          width: 100%;
          font-size: 1.1rem;
          font-weight: 600;
          border-radius: 8px;
          transition: background 0.3s ease;
        }

        .btn-checkout:hover {
          background-color: #218838;
        }
      `}</style>
    </div>
  );
};

export default Cart;
