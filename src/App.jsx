import { Routes, Route } from 'react-router-dom';

import Navbar from './Navbar';
import Footer from './Footer';
import Hero from './Hero';
import Services from './Services';
import About from './About';
import Contact from './Contact'; 
import Privacy from './Privacy';
import Projects from './Projects';
import { MessageCircle } from 'lucide-react';
import { useLanguage } from './LanguageContext';

const Home = () => (
  <>
    <Hero />
    <Services />
  </>
);

export default function App() {
  const { t } = useLanguage();
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </main>

      <Footer />
      <a href="https://wa.me/218923764655?text=Hello%20Ben%20Fadhl%20Construction%2C%20I%20would%20like%20to%20ask%20about%20a%20project." target="_blank" rel="noreferrer" aria-label={t('whatsapp')} className="fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-bold text-white shadow-lg transition hover:scale-105 hover:bg-[#20bd5a]"><MessageCircle size={21} fill="currentColor" /> <span className="hidden sm:inline">{t('whatsapp')}</span></a>
    </div>
  );
}
