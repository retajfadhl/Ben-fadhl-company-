import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useLanguage } from './LanguageContext';

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll(); 
    window.addEventListener('scroll', onScroll); 
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { to: '/', label: t('navHome') }, 
    { to: '/about', label: t('navAbout') }, 
    { to: '/projects', label: t('navProjects') }, 
    { to: '/contact', label: t('navContact') }
  ];

  const linkClass = ({ isActive }) => `text-xs xs:text-sm font-semibold transition ${isActive ? 'text-amber-400' : 'text-white/80 hover:text-white'}`;

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all ${isScrolled ? 'bg-slate-950/95 shadow-xl shadow-slate-950/20 backdrop-blur' : 'bg-gradient-to-b from-slate-950/80 to-transparent'}`}>
      <div className="site-shell flex h-20 items-center justify-between gap-2">
        {/* Logo Section */}
        <NavLink to="/" className="flex items-center gap-2 text-white shrink-0">
          <span className="grid h-9 w-9 place-items-center bg-amber-500 font-heading text-xs font-extrabold tracking-tight text-slate-950">BF</span>
          <span className="leading-tight hidden sm:block">
            <strong className="block font-heading text-sm tracking-wide">BEN FADHL</strong>
            <small className="text-[10px] font-semibold tracking-[0.18em] text-white/55">CONSTRUCTION</small>
          </span>
        </NavLink>

        {/* Links Navigation Menu (Visible on both Mobile and Desktop) */}
        <nav className="flex items-center gap-3 xs:gap-4 md:gap-6 overflow-x-auto no-scrollbar py-1">
          {navItems.map(item => (
            <NavLink key={item.to} to={item.to} className={linkClass}>
              {item.label}
            </NavLink>
          ))}
          
          {/* Language Toggle */}
          <button 
            onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')} 
            className="text-xs xs:text-sm font-bold text-white/70 hover:text-amber-400 shrink-0"
          >
            {t('language')}
          </button>

          {/* Action Button - Only on Desktop to save mobile space */}
          <NavLink to="/contact" className="button-primary !px-4 !py-2 text-xs md:text-sm !px-5 !py-2.5 hidden md:inline-block shrink-0">
            {t('quote')}
          </NavLink>
        </nav>
      </div>
    </header>
  );
}