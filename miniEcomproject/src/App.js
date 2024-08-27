
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductDetail from './pages/ProductDetail';
import { useState } from 'react';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cart from './pages/Cart';

function App() {

  const [cartItems, setCardItems]=useState([]);
  return (
    <div className="App">
      
      <Router>
        <div>
          <ToastContainer theme='dark' position='top-center' />
        <Header cartItems={cartItems}/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/search" element={<Home/>}/>
          <Route path="/prouct/:id" element={<ProductDetail cartItems={cartItems} setCardItems={setCardItems}/>}/>
          <Route path="/cart" element={<Cart cartItems={cartItems} setCardItems={setCardItems}/>}/>
        </Routes>
        </div>
        
      </Router>
      
     
     <Footer/>
    </div>
  );
}

export default App;
