import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import Problem from './sections/Problem';
import Product from './sections/Product';
import GMICloud from './sections/GMICloud';
import DesignPartners from './sections/DesignPartners';
import Footer from './sections/Footer';
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Problem />
      <Product />
      <GMICloud />
      <DesignPartners />
      <Footer />
      <Analytics />
    </div>
  );
}

export default App;
