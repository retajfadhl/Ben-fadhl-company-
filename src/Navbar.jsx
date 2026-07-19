import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { useLanguage } from './LanguageContext';

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll(); window.addEventListener('scroll', onScroll); return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const navItems = [{ to: '/', label: t('navHome') }, { to: '/about', label: t('navAbout') }, { to: '/projects', label: t('navProjects') }, { to: '/contact', label: t('navContact') }];
  const linkClass = ({ isActive }) => `text-sm font-semibold transition ${isActive ? 'text-amber-400' : 'text-white/80 hover:text-white'}`;
  return <header className={`fixed inset-x-0 top-0 z-50 transition-all ${isScrolled || mobileOpen ? 'bg-slate-950/95 shadow-xl shadow-slate-950/20 backdrop-blur' : 'bg-gradient-to-b from-slate-950/80 to-transparent'}`}>
    <div className="site-shell flex h-20 items-center justify-between">
      <NavLink to="/" className="flex items-center gap-3 text-white" onClick={() => setMobileOpen(false)}>
        <span className="grid h-10 w-10 place-items-center bg-amber-500 font-heading text-sm font-extrabold tracking-tight text-slate-950">BF</span>
        <span className="leading-tight"><strong className="block font-heading text-sm tracking-wide">BEN FADHL</strong><small className="text-[10px] font-semibold tracking-[0.18em] text-white/55">CONSTRUCTION</small></span>
      </NavLink>
      <nav className="hidden items-center gap-6 md:flex">{navItems.map(item => <NavLink key={item.to} to={item.to} className={linkClass}>{item.label}</NavLink>)}<button onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')} className="text-sm font-bold text-white/70 hover:text-amber-400">{t('language')}</button><NavLink to="/contact" className="button-primary !px-5 !py-2.5">{t('quote')}</NavLink></nav>
      <button className="grid h-10 w-10 place-items-center text-white md:hidden" aria-label="Toggle menu" onClick={() => setMobileOpen(!mobileOpen)}>{mobileOpen ? <X /> : <Menu />}</button>
    </div>
    {mobileOpen && <nav className="site-shell flex flex-col gap-5 border-t border-white/10 py-6 md:hidden">{navItems.map(item => <NavLink key={item.to} to={item.to} className={linkClass} onClick={() => setMobileOpen(false)}>{item.label}</NavLink>)}<button onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')} className="w-fit text-sm font-bold text-amber-400">{t('language')}</button></nav>}
  </header>;
}
