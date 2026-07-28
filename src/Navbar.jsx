import { NavLink } from 'react-router-dom';
import { useLanguage } from './LanguageContext';

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const navItems = [
    { to: '/', label: t('navHome') },
    { to: '/about', label: t('navAbout') },
    { to: '/projects', label: t('navProjects') },
    { to: '/contact', label: t('navContact') },
  ];
  const linkClass = ({ isActive }) => `font-semibold transition ${isActive ? 'text-amber-600' : 'text-slate-700 hover:text-slate-950'}`;

  return <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white shadow-sm">
    <div className="hidden md:block">
      <div className="site-shell flex h-28 items-center justify-between gap-3">
        <NavLink to="/" className="flex h-24 w-80 shrink-0 items-center overflow-hidden"><img src="/images/ben-fadel-wide-logo.png" alt="Ben Fadel Company" className="h-full w-full object-cover object-center" /></NavLink>
        <nav className="flex items-center gap-6 py-1 text-sm">{navItems.map(item => <NavLink key={item.to} to={item.to} className={linkClass}>{item.label}</NavLink>)}<button onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')} className="font-bold text-slate-600 hover:text-amber-600">{t('language')}</button></nav>
      </div>
    </div>
    <div className="md:hidden">
      <nav className="flex h-10 items-center justify-around border-b border-slate-100 px-2 text-[11px]">{navItems.map(item => <NavLink key={item.to} to={item.to} className={linkClass}>{item.label}</NavLink>)}<button onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')} className="font-bold text-slate-600 hover:text-amber-600">{t('language')}</button></nav>
      <NavLink to="/" className="block h-14 overflow-hidden bg-white"><img src="/images/ben-fadel-wide-logo.png" alt="Ben Fadel Company" className="h-full w-full object-cover object-center" /></NavLink>
    </div>
  </header>;
}
