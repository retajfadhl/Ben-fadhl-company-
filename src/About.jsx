import { useState, useEffect } from 'react';
import { useLanguage } from './LanguageContext';

// A reusable animated counter component to replace your old vanilla JS script
const StatCounter = ({ end, label, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration]);

  return (
    <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
      <div className="text-4xl font-bold text-gray-900 mb-2">
        {count}<span className="text-yellow-500">+</span>
      </div>
      <div className="text-gray-600 font-medium">{label}</div>
    </div>
  );
};

export default function About() {
  const { t } = useLanguage();
  return (
    <div className="pt-24 pb-12 bg-gray-50 min-h-screen">
      
      {/* Header Section */}
      <section className="container mx-auto px-6 md:px-12 mb-20">
        <div className="max-w-3xl">
          <div className="w-16 h-1 bg-yellow-500 mb-6"></div>
          <p className="eyebrow">{t('aboutEyebrow')}</p><h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{t('aboutTitle')}</h1>
          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            {t('aboutText1')}
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            {t('aboutText2')}
          </p>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="container mx-auto px-6 md:px-12 mb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <StatCounter end={30} label={t('yearsExperience')} />
          <StatCounter end={81} label={t('skilledOperators')} />
          <StatCounter end={25} label={t('machines')} />
          <StatCounter end={100} label={t('completed')} />
        </div>
      </section>

      {/* Image Gallery */}
      <section className="container mx-auto px-6 md:px-12 mb-20">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-xl overflow-hidden shadow-lg h-80">
            <img src="/images/project-2.png" alt="Excavation site" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg h-80">
            <img src="/images/project-3.png" alt="Heavy machinery" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
        </div>
      </section>

      {/* Technical Team & Machinery Split */}
      <section className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Team */}
          <div>
            <div className="w-16 h-1 bg-yellow-500 mb-6"></div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('team')}</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              {t('teamText')}
            </p>
            <div className="rounded-xl overflow-hidden shadow-lg h-64">
              <img src="/images/project-7.png" alt="Our Team" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Machinery */}
          <div>
            <div className="w-16 h-1 bg-yellow-500 mb-6"></div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('fleet')}</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              {t('fleetText')}
            </p>
            <div className="rounded-xl overflow-hidden shadow-lg h-64">
              <img src="/images/project-8.png" alt="Machinery Fleet" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
