import Layout from "./components/layout";
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './components/theme/Header';
// import Footer from './components/theme/Footer';
import Seminar from './components/pages/Seminar';
import About from './components/pages/About';
import Product from './components/pages/Allproducts';
import Services from './components/pages/Services';
// import Products from './components/pages/Products';
// import './index.css';
function App() {
  return (
      <Router>
      <Layout>
       <Routes>
        <Route path="/" exact element={<About/>} />
       <Route path="/seminar"  element={<Seminar/>} />
       <Route path="/products"  element={<Product/>} />
       <Route path="/services"  element={<Services/>} />
        {/* <Route path="/seminars" component={Seminars} />
        <Route path="/products" component={Products} /> */}
      </Routes>
    </Layout></Router>
  );
}

export default App;
