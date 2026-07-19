import { ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from './LanguageContext';

export default function Hero() {
  const { t } = useLanguage();
  return <section className="relative isolate flex min-h-[700px] items-end overflow-hidden bg-white pb-16 pt-32 sm:pb-20 lg:min-h-[760px]">
    <div className="absolute inset-0 -z-20 bg-contain bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/ben-fadel-logo-black.png')" }} />
    <div className="absolute inset-0 -z-10 bg-slate-950/75" />
    <div className="site-shell relative z-10"><div className="max-w-3xl text-white">
      <p className="eyebrow !text-amber-400">{t('heroEyebrow')}</p>
      <h1 className="max-w-3xl text-5xl font-extrabold leading-[1.03] tracking-tight sm:text-6xl lg:text-7xl">{t('heroTitleA')}<br /><span className="text-amber-400">{t('heroTitleB')}</span></h1>
      <p className="mt-7 max-w-xl text-lg leading-relaxed text-slate-200 sm:text-xl">{t('heroText')}</p>
      <div className="mt-9 flex flex-wrap gap-3"><Link to="/contact" className="button-primary">{t('startProject')} <ArrowRight size={17} /></Link><Link to="/about" className="button-secondary">{t('capabilities')}</Link></div>
      <div className="mt-14 flex flex-wrap gap-x-7 gap-y-3 border-t border-white/20 pt-6 text-sm font-medium text-slate-200">{['years', 'operators', 'location'].map(key => <span className="flex items-center gap-2" key={key}><Check size={16} className="text-amber-400" />{t(key)}</span>)}</div>
    </div></div>
  </section>;
}
