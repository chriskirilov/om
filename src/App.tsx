import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './sections/Navigation';
import Footer from './sections/Footer';
import HomePage from './pages/HomePage';
import PomPage from './pages/PomPage';
import OmPage from './pages/OmPage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import BlogPostCrmLying from './pages/BlogPostCrmLying';
import BlogPostFivePercent from './pages/BlogPostFivePercent';
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <BrowserRouter>
      <div style={{ minHeight: '100vh', background: 'var(--white)' }}>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pom" element={<PomPage />} />
          <Route path="/om" element={<OmPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/crm-lying-to-you" element={<BlogPostCrmLying />} />
          <Route path="/blog/five-percent-rule" element={<BlogPostFivePercent />} />
        </Routes>
        <Footer />
        <Analytics />
      </div>
    </BrowserRouter>
  );
}

export default App;
