import React from 'react';
import './App.css';
import WikiPageRegistry from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import RegistrySection from './components/Register';
// import NotFoundPage from './components/NotFoundPage'; // Make sure you create thi
import './index.css';
import Footer from './components/Footer';
import Faq from './components/Faqpage';


function App() {
  return (
    <Router>
      <WikiPageRegistry /> {/* Keep your header outside Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registry" element={<RegistrySection />} />
        <Route path='/faqs' element = {<Faq/>}/>
      
      </Routes>
      {/* <Footer /> */}
      <Footer/>
    </Router>
  );
}

export default App;
