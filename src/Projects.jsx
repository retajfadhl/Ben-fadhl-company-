import { Download, Pickaxe, Route, Tractor, ArrowUpRight } from 'lucide-react';
import { useLanguage } from './LanguageContext';

const images = ['/images/project-2.png', '/images/project-3.png', '/images/project-4.png', '/images/project-5.png', '/images/project-6.png', '/images/project-7.png'];

export default function Projects() {
  const { language } = useLanguage();
  const ar = language === 'ar';
  const content = ar ? {
    eyebrow: 'خبرتنا', title: 'مشاريع صنعتها خبرة تمتد لعقود.', intro: 'من خطوط الغاز والمياه إلى الخزانات والطرق والإسكان، نفذنا أعمالاً أرضية معقدة في أنحاء ليبيا.', download: 'تحميل ملف الشركة والمشاريع', projects: 'مشاريع مختارة', projectsText: 'سجل من العقود المنفذة في البنية التحتية والطاقة والمياه والإنشاءات.', fleet: 'أسطولنا', fleetText: 'معدات موثوقة ومشغلون ذوو خبرة لتنفيذ المشاريع الصعبة.', services: 'خدمات شاملة', servicesText: 'من تجهيز الموقع إلى الحفر والردم والطرق وتأجير المعدات.',
    projectItems: [['مشروع خط غاز غرب ليبيا', 'أعمال حفر وتركيب خطوط أنابيب من حقل الوفاء إلى درج بطول 75 كم، ومشروع مليتة إلى الحوامد بطول 65 كم.'], ['خط غاز بنغازي وأبراج الجهد العالي', 'حفر خط أنابيب من رأس المنقار إلى ميناء بنغازي بطول 18 كم، وأعمال إنشائية لـ 250 برج جهد عالٍ.'], ['مشاريع حقل الواحة ومبروك', 'أعمال حفر وتأجير معدات وتسوية مواقع لمشاريع النفط والطاقة.'], ['شبكات المياه والنهر الصناعي', 'حفر خطوط شبكة المياه والصرف الصحي في بنغازي ومشاريع النهر الصناعي في سرت.'], ['خزان عمر المختار الكبير', 'تجهيز مخزونات المواد وسحق الصخور وخلط مواد الردم وتأجير معدات لمشروع خزان للري.'], ['مشروع إسكان المرج', 'حفر ونقل مواد لـ 167 مبنى سكني وحفر طرق المشروع وتوريد الركام.']],
    fleetItems: [['8', 'حفارات Hyundai'], ['5', 'جرافات CAT D8K'], ['3', 'لوادر'], ['2', 'ممهدات CAT 12G'], ['9', 'شاحنات نقل'], ['2', 'ضاغطات BOMAG']],
    serviceItems: [['الحفر', 'الصخور الصلبة واللينة والتربة وخنادق الأنابيب والكهرباء'], ['الطرق', 'إنشاء الطرق المعبدة وغير المعبدة'], ['المعدات', 'تأجير المعدات الثقيلة مع مشغلين مهرة']]
  } : {
    eyebrow: 'Our experience', title: 'Projects built on decades of know-how.', intro: 'From gas and water pipelines to reservoirs, roads and housing, we have delivered complex earthworks throughout Libya.', download: 'Download company profile & projects', projects: 'Selected projects', projectsText: 'A record of completed contracts across infrastructure, energy, water and construction.', fleet: 'Our fleet', fleetText: 'Reliable machinery and experienced operators for demanding work.', services: 'Complete services', servicesText: 'From site preparation to excavation, backfilling, roads and equipment rental.',
    projectItems: [['Western Libya Gas Line', 'Excavation and pipe-placement works from Wafa Oil Field to Derj over 75 km, plus a 65 km Melita-Hawamid pipeline project.'], ['Benghazi Gas Line & High Voltage Towers', 'Pipeline excavation from Ras Elmengar to Benghazi Sea Port over 18 km, plus construction works for 250 high-voltage towers.'], ['Waha & Mabrouk Oil Field Projects', 'Excavation, machinery rental and site-leveling support for oil-field and energy projects.'], ['Water Networks & Man-Made River', 'Excavation for the Benghazi water and sewage network and Man-Made River projects in Sirte.'], ['Omer El Mokhtar El Kabeer Reservoir', 'Stockpile preparation, rock crushing, fill-material mixing and equipment rental for a major irrigation reservoir.'], ['Al Marj Housing Development', 'Excavation and transport for 167 housing blocks, project roads and aggregate supply.']],
    fleetItems: [['8', 'Hyundai excavators'], ['5', 'CAT D8K bulldozers'], ['3', 'Loaders'], ['2', 'CAT 12G graders'], ['9', 'Transport trucks'], ['2', 'BOMAG compactors']],
    serviceItems: [['Excavation', 'Hard rock, soft rock, soil, pipeline and electrical-trench excavation'], ['Road construction', 'Paved and unpaved road construction'], ['Equipment rental', 'Heavy equipment rental with skilled operators']]
  };
  const icons = [Pickaxe, Route, Tractor];
  
  return (
    <main className="bg-stone-100 pt-20">
      <section className="bg-slate-950 py-20 text-white sm:py-28">
        <div className="site-shell">
          <p className="eyebrow !text-amber-400">{content.eyebrow}</p>
          <div className="grid gap-10 lg:grid-cols-[1.3fr_.7fr] lg:items-end">
            <div>
              <h1 className="max-w-3xl text-4xl font-extrabold leading-tight sm:text-6xl">{content.title}</h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">{content.intro}</p>
            </div>
            <a href="/ben-fadel-company-profile.pdf" download className="button-primary w-full sm:w-fit">
              <Download size={18} />
              {content.download}
            </a>
          </div>
        </div>
      </section>
      
      <section className="py-20 sm:py-28">
        <div className="site-shell">
          <p className="eyebrow">{content.projects}</p>
          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h2 className="max-w-xl text-4xl font-extrabold tracking-tight text-slate-950">{content.projects}</h2>
            <p className="max-w-md leading-relaxed text-slate-600">{content.projectsText}</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {content.projectItems.map(([title, description], index) => (
              <article key={title} className="group overflow-hidden bg-white shadow-sm">
                <div className="h-52 overflow-hidden">
                  <img src={images[index]} alt="" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <div className="p-7">
                  <span className="font-heading text-xs font-bold tracking-widest text-amber-600">0{index + 1}</span>
                  <h3 className="mt-3 text-xl font-extrabold text-slate-950">{title}</h3>
                  <p className="mt-3 leading-relaxed text-slate-600">{description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      
      <section className="bg-white py-20 sm:py-28">
        <div className="site-shell">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="eyebrow">{content.fleet}</p>
              <h2 className="text-4xl font-extrabold tracking-tight text-slate-950">{content.fleet}</h2>
              <p className="mt-5 max-w-lg leading-relaxed text-slate-600">{content.fleetText}</p>
              <div className="mt-9 grid grid-cols-2 gap-px bg-slate-200 sm:grid-cols-3">
                {content.fleetItems.map(([number, label]) => (
                  <div key={label} className="bg-stone-100 p-5">
                    <strong className="block font-heading text-3xl font-extrabold text-amber-600">{number}</strong>
                    <span className="mt-2 block text-sm font-semibold text-slate-700">{label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="overflow-hidden">
              <img src="/images/project-8.png" alt="Construction machinery" className="h-full min-h-80 w-full object-cover" />
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20 sm:py-28">
        <div className="site-shell">
          <p className="eyebrow">{content.services}</p>
          <h2 className="max-w-xl text-4xl font-extrabold tracking-tight text-slate-950">{content.services}</h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-slate-600">{content.servicesText}</p>
          <div className="mt-12 grid gap-px bg-slate-200 md:grid-cols-3">
            {content.serviceItems.map(([title, description], index) => { 
              const Icon = icons[index]; 
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
    </main>
  );
}
