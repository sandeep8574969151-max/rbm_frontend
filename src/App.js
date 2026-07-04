import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import ProductDetails from './pages/ProductDetails';
import Gallery from './pages/Gallery';
import Media from './pages/Media';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Enquire from './pages/Enquire';
import MediaDetails from './pages/MediaDetails';
import BlogDetails from './pages/BlogDetails';
import ProductsPage from './pages/ProductsPage';
import Admin from './pages/Admin';
import SubCategoryPage from './pages/SubCategoryPage';
import CategoryPage from './pages/CategoryPage';




function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/media" element={<Media />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/enquiry" element={<Enquire />} />
          <Route path="/media/:id" element={<MediaDetails />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/products/:subCategory" element={<SubCategoryPage />} />
          <Route path="/category/:categoryName" element={<CategoryPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;