import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function CtaBanner() {
  const { t } = useLanguage();
  return (
    <section className="bg-slate-950 py-20 text-white sm:py-24">
      <div className="site-shell flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
        <div className="max-w-2xl">
          <p className="eyebrow !text-amber-400">{t('contactEyebrow')}</p>
          <h2 className="text-3xl font-extrabold leading-tight sm:text-5xl">{t('contactTitle')}</h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-300">{t('contactText')}</p>
        </div>
        <Link to="/contact" className="button-primary w-full shrink-0 sm:w-fit">{t('startProject')} <ArrowRight size={17} /></Link>
      </div>
    </section>
  );
}
