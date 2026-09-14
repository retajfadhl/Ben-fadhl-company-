import { Download, Pickaxe, Route, Tractor, ArrowUpRight } from 'lucide-react';
import type { ComponentType } from 'react';
import ProjectCard from '../components/ProjectCard';
import { useLanguage } from '../context/LanguageContext';
import { projectImages, projectImageFocus, galleryImages } from '../data/projects';

const serviceIcons: ComponentType<{ size?: number; className?: string }>[] = [Pickaxe, Route, Tractor];

export default function Projects() {
  const { t } = useLanguage();
  const projectItems = t<[string, string][]>('projectItems');
  const fleetItems = t<[string, string][]>('fleetItems');
  const serviceItems = t<[string, string][]>('serviceItems');

  return (
    <main className="bg-stone-100 pt-24 md:pt-20">
      <section className="bg-slate-950 py-20 text-white sm:py-28">
        <div className="site-shell">
          <p className="eyebrow !text-amber-400">{t('projectsEyebrow')}</p>
          <div className="grid gap-10 lg:grid-cols-[1.3fr_.7fr] lg:items-end">
            <div>
              <h1 className="max-w-3xl text-4xl font-extrabold leading-tight sm:text-6xl">{t('projectsHeroTitle')}</h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">{t('projectsIntro')}</p>
            </div>
            <a href="/ben-fadel-company-profile.pdf" download className="button-primary w-full sm:w-fit">
              <Download size={18} />
              {t('projectsDownload')}
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="site-shell">
          <p className="eyebrow">{t('projectsSelected')}</p>
          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h2 className="max-w-xl text-4xl font-extrabold tracking-tight text-slate-950">{t('projectsSelected')}</h2>
            <p className="max-w-md leading-relaxed text-slate-600">{t('projectsSelectedText')}</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {projectItems.map(([title, description], index) => (
              <ProjectCard key={title} title={title} description={description} image={projectImages[index]} imageFocus={projectImageFocus[index]} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="site-shell">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="eyebrow">{t('projectsFleetTitle')}</p>
              <h2 className="text-4xl font-extrabold tracking-tight text-slate-950">{t('projectsFleetTitle')}</h2>
              <p className="mt-5 max-w-lg leading-relaxed text-slate-600">{t('projectsFleetText')}</p>
              <div className="mt-9 grid grid-cols-2 gap-px bg-slate-200 sm:grid-cols-3">
                {fleetItems.map(([number, label]) => (
                  <div key={label} className="bg-stone-100 p-5">
                    <strong className="block font-heading text-3xl font-extrabold text-amber-600">{number}</strong>
                    <span className="mt-2 block text-sm font-semibold text-slate-700">{label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="overflow-hidden">
              <img src="/images/site-gallery/WhatsApp%20Image%202026-07-24%20at%201.42.31%20PM%20(3).jpeg" alt="Ben Fadel construction machinery" className="h-full min-h-80 w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="site-shell">
          <p className="eyebrow">{t('projectsServicesTitle')}</p>
          <h2 className="max-w-xl text-4xl font-extrabold tracking-tight text-slate-950">{t('projectsServicesTitle')}</h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-slate-600">{t('projectsServicesText')}</p>
          <div className="mt-12 grid gap-px bg-slate-200 md:grid-cols-3">
            {serviceItems.map(([title, description], index) => {
              const Icon = serviceIcons[index];
              return (
                <div key={title} className="bg-stone-100 p-8 sm:p-10">
                  <Icon size={34} className="text-amber-600" />
                  <h3 className="mt-10 text-2xl font-extrabold text-slate-950">{title}</h3>
                  <p className="mt-4 leading-relaxed text-slate-600">{description}</p>
                  <span className="mt-7 inline-flex text-amber-600">
                    <ArrowUpRight size={21} />
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="bg-white py-20 sm:py-28">
        <div className="site-shell">
          <p className="eyebrow">{t('projectsGalleryTitle')}</p>
          <h2 className="text-4xl font-extrabold tracking-tight text-slate-950">{t('projectsGalleryTitle')}</h2>
          <p className="mt-4 max-w-xl leading-relaxed text-slate-600">{t('projectsGalleryText')}</p>
          <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3">
            {galleryImages.map((src, index) => <div key={src} className="aspect-[4/3] overflow-hidden bg-slate-100"><img src={src} alt={`Ben Fadel construction site ${index + 1}`} className="h-full w-full object-cover transition duration-500 hover:scale-105" /></div>)}
          </div>
        </div>
      </section>
    </main>
  );
}
