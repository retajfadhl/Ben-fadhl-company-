import { NavLink } from 'react-router-dom';
import { useLanguage } from './LanguageContext';

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const navItems = [
    { to: '/', label: t('navHome') }, 
    { to: '/about', label: t('navAbout') }, 
    { to: '/projects', label: t('navProjects') }, 
    { to: '/contact', label: t('navContact') }
  ];

  const linkClass = ({ isActive }) => `text-xs xs:text-sm font-semibold transition ${isActive ? 'text-amber-600' : 'text-slate-700 hover:text-slate-950'}`;

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white shadow-sm">
      <div className="site-shell flex h-28 items-center justify-between gap-3">
        <NavLink to="/" className="flex h-20 w-64 shrink-0 items-center overflow-hidden sm:h-24 sm:w-80">
          <img src="/images/ben-fadel-wide-logo.png" alt="Ben Fadel Company" className="h-full w-full object-cover object-center" />
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
            className="text-xs xs:text-sm font-bold text-slate-600 hover:text-amber-600 shrink-0"
          >
            {t('language')}
          </button>

        </nav>
      </div>
    </header>
  );
}
