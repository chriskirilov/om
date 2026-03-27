import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './sections/Navigation';
import Footer from './sections/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <BrowserRouter>
      <div style={{ minHeight: '100vh', background: 'var(--white)' }}>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog" element={<BlogPage />} />
        </Routes>
        <Footer />
        <Analytics />
      </div>
    </BrowserRouter>
  );
}

export default App;
