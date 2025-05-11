import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GroceryHome from './Components/Home';
import LoginPage from './Components/login';
import Signup from './Components/Signup';
import Grocearly from './Components/Shop';
import About from './Components/about';
import Cart from './Components/cart'; // Add this import
import PaymentForm from './Components/payment';
import MapPage from './Components/map';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GroceryHome />} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/shop" element={<Grocearly />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/pay" element={<PaymentForm />} />
        <Route path="/maps" element={<MapPage />} />
        
        
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;