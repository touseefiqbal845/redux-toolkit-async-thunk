import React from 'react';
import './index.css';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from "./components/Home";
import PageNotFound from "./components/PageNotFound";
import MovieDetail from "./components/MovieDetail";
import Header from "./components/Header";
import Footer from './components/footer';
import Product from './components/Product';
import LoginForm from './components/Login';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/movie/:imdbID" element={<MovieDetail />} />
          <Route path="products" element={<Product />} />
          <Route path="/signin" element={<LoginForm />} />


        </Routes>
        <Footer />
      </BrowserRouter>

    </div>

  )
}
