import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './buoi9/project_eshop/About';
import Contact from './buoi9/project_eshop/Contact';
import Index from './buoi9/project_eshop/Index';
import Product from './buoi9/project_eshop/Product';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'));

root.render(
  <Router>
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/product" element={<Product />} />
      <Route path="/" element={<Index />} index={true} />
    </Routes>
  </Router>
);