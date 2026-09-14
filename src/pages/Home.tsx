import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Services from '../components/Services';
import ProjectCard from '../components/ProjectCard';
import CtaBanner from '../components/CtaBanner';
import { useLanguage } from '../context/LanguageContext';
import { projectImages, projectImageFocus } from '../data/projects';

const stats: Array<{ end: number; labelKey: string }> = [
  { end: 30, labelKey: 'yearsExperience' },
  { end: 81, labelKey: 'skilledOperators' },
  { end: 25, labelKey: 'machines' },
  { end: 100, labelKey: 'completed' },
];

export default function Home() {
  const { t } = useLanguage();
  const projectItems = t<[string, string][]>('projectItems').slice(0, 3);

  return (
    <>
      <Hero />

      <section className="border-t border-white/10 bg-slate-950 py-10 text-white">
        <div className="site-shell grid grid-cols-2 gap-6 sm:grid-cols-4">
          {stats.map(({ end, labelKey }) => (
            <div key={labelKey} className="text-center sm:text-left">
              <div className="font-heading text-3xl font-extrabold sm:text-4xl">{end}<span className="text-amber-400">+</span></div>
              <div className="mt-1 text-xs font-semibold uppercase tracking-wide text-slate-400 sm:text-sm">{t(labelKey)}</div>
            </div>
          ))}
        </div>
      </section>

      <Services />

      <section className="bg-white py-20 sm:py-28">
        <div className="site-shell">
          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow">{t('projectsSelected')}</p>
              <h2 className="max-w-xl text-4xl font-extrabold tracking-tight text-slate-950">{t('projectsSelected')}</h2>
            </div>
            <Link to="/projects" className="inline-flex items-center gap-2 text-sm font-bold text-amber-600 hover:text-amber-700">{t('navProjects')} <ArrowUpRight size={18} /></Link>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {projectItems.map(([title, description], index) => (
              <ProjectCard key={title} title={title} description={description} image={projectImages[index]} imageFocus={projectImageFocus[index]} index={index} />
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
