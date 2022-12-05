import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './app.css';
import Start from './components/Start';
import Select from './components/Select';
import Cart from './components/Cart';
import Thanks from './components/Thanks';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/selection" element={<Select />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/thanks" element={<Thanks />} />
    </Routes>
  </Router>
);