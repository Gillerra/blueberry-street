import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import Home from './Home';
import Catalog from "./Catalog";
import Delivery from './Delivery';
import Contact from './Contact';
import image from "./logo.jpg";


function App() {
  return (  <Router>
    <div className="parent">
        <div className="header">
    <h4> Доставка по Славянке в день заказа!</h4>
    </div>
    
    
    <nav>
      <div className='logo'><img className='mobile' src={image} width="150px" height="150px" alt="logo"/></div>
    
    <Link to="/" className='link'>О нас</Link>
      <Link to="catalog" className='link'>Каталог</Link>
      <Link to="delivery" className='link'>Доставка</Link>
      <Link to="contact" className='link'>Контакты</Link>
    </nav>

     <Routes>
      <Route path="/" element={ <Home />}/>
      <Route path="catalog" element={ <Catalog />}/>
      <Route path="delivery" element={ <Delivery />}/>
      <Route path="contact" element={ <Contact />}/>
     </Routes>
    
     </div>
    </Router>
    
  );
  
}

export default App;
