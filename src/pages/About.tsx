import StatCounter from '../components/StatCounter';
import { useLanguage } from '../context/LanguageContext';

export default function About() {
  const { t } = useLanguage();
  return (
    <div className="bg-stone-100 pb-12 pt-24 md:pt-20">

      <section className="bg-slate-950 py-20 text-white sm:py-28">
        <div className="site-shell">
          <div className="max-w-3xl">
            <p className="eyebrow !text-amber-400">{t('aboutEyebrow')}</p>
            <h1 className="text-4xl font-extrabold leading-tight sm:text-6xl">{t('aboutTitle')}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">{t('aboutText1')}</p>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-300">{t('aboutText2')}</p>
          </div>
        </div>
      </section>

      <section className="site-shell relative z-10 -mt-14 sm:-mt-20">
        <div className="grid grid-cols-2 gap-px bg-slate-200 shadow-xl md:grid-cols-4">
          <StatCounter end={30} label={t('yearsExperience')} />
          <StatCounter end={81} label={t('skilledOperators')} />
          <StatCounter end={25} label={t('machines')} />
          <StatCounter end={100} label={t('completed')} />
        </div>
      </section>

      <section className="site-shell mt-20 sm:mt-28">
        <div className="grid gap-5 md:grid-cols-2">
          <div className="group h-80 overflow-hidden">
            <img src="/images/project-2.png" alt="Excavation site" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
          </div>
          <div className="group h-80 overflow-hidden">
            <img src="/images/about-machinery-fleet.png" alt="Roadwork machinery" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
          </div>
        </div>
      </section>

      <section className="site-shell mt-20 sm:mt-28">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <p className="eyebrow">{t('team')}</p>
            <h2 className="text-3xl font-extrabold text-slate-950">{t('team')}</h2>
            <p className="mt-4 leading-relaxed text-slate-600">{t('teamText')}</p>
            <div className="group mt-7 h-64 overflow-hidden">
              <img src="/images/project-7.png" alt="Our team" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
            </div>
          </div>
          <div>
            <p className="eyebrow">{t('fleet')}</p>
            <h2 className="text-3xl font-extrabold text-slate-950">{t('fleet')}</h2>
            <p className="mt-4 leading-relaxed text-slate-600">{t('fleetText')}</p>
            <div className="group mt-7 h-64 overflow-hidden">
              <img src="/images/site-gallery/WhatsApp%20Image%202026-07-24%20at%201.42.29%20PM.jpeg" alt="Ben Fadel bulldozer transport" className="h-full w-full object-cover object-[center_42%] transition duration-500 group-hover:scale-105" />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
