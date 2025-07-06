import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from 'antd';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import DoctorsPage from './pages/DoctorsPage';
import FAQPage from './pages/FAQPage';
import IVFProcessPage from './pages/IVFProcessPage';
import Careers from './components/Careers';
import './App.css';

const { Content } = Layout;

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Layout>
          <Header />
          <Content>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/doctors" element={<DoctorsPage />} />
              <Route path="/ivf-process" element={<IVFProcessPage />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/careers" element={<Careers />} />
            </Routes>
          </Content>
          <Footer />
        </Layout>
      </Router>
    </HelmetProvider>
  );
}

export default App;
