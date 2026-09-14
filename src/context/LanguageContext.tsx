/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

export type Language = 'en' | 'ar';
type Tuple2 = [string, string];
type CopyValue = string | Tuple2[];
type CopyDict = Record<string, CopyValue>;

const copy: Record<Language, CopyDict> = {
  en: {
    navHome: 'Home', navAbout: 'About us', navProjects: 'Projects', navContact: 'Contact', quote: 'Request a quote',
    heroEyebrow: 'Built for Libya', heroTitleA: 'Groundwork for', heroTitleB: 'what comes next.', heroText: 'Earthworks, roads and heavy-equipment solutions delivered with the experience your project deserves.', startProject: 'Start a project', capabilities: 'Our capabilities', years: '30+ years of experience', operators: 'Skilled in-house operators', location: 'Benghazi, Libya',
    servicesEyebrow: 'What we do', servicesTitle: 'Practical expertise. Built to last.', servicesText: 'We bring people, planning and machinery together to make demanding sites move forward.', excavation: 'Excavation & earthworks', excavationText: 'Hard rock, soft rock, soil, pipelines and electrical trenches prepared with precision.', roads: 'Road construction', roadsText: 'Paved and unpaved roads built to approved regional specifications and project needs.', rental: 'Equipment rental', rentalText: 'Reliable heavy machinery backed by highly skilled, experienced operators.',
    footerText: 'Delivering complex infrastructure projects with practical management, honesty and integrity.', footerLegal: 'All rights reserved.', talk: 'Talk to our team', findUs: 'Find us', contact: 'Contact', address: 'Airport Road, in front of Al-Alban factory, Benghazi, Libya',
    aboutEyebrow: 'Our company', aboutTitle: 'Who we are', aboutText1: 'Ben Fadel General Construction Company is a leading earthworks and construction firm with over 30 years of experience delivering complex infrastructure projects across Libya.', aboutText2: 'Our proactive management style, honesty and integrity allow us to deliver lasting value for customers, suppliers and employees.', yearsExperience: 'Years experience', skilledOperators: 'Skilled operators', machines: 'Heavy machines', completed: 'Projects completed', team: 'Technical team', teamText: 'Supported by drivers, operators, mechanics and a specialist planning team, we bring precision to every project.', fleet: 'Machinery fleet', fleetText: 'Our fleet includes excavators, bulldozers, dump trucks, graders and specialist road-construction machinery.',
    contactEyebrow: 'Get in touch', contactTitle: 'Let’s build something lasting.', contactText: 'Tell us about your project and our team will get back to you promptly.', office: 'Office address', emailUs: 'Email us', callUs: 'Call us', formTitle: 'Request a quote', formText: 'Share a few details and we will prepare the right next step.', success: 'Thank you — your request has been sent. Our team will reply shortly.', name: 'Your name', namePlaceholder: 'John Doe', email: 'Email address', emailPlaceholder: 'john@example.com', phone: 'Phone number', phonePlaceholder: '+218 ...', projectType: 'Project type', projectLocation: 'Project location', locationPlaceholder: 'Benghazi', startDate: 'Preferred start date', budget: 'Estimated budget', subject: 'Subject', message: 'Tell us about your project', choose: 'Choose one', excavationOption: 'Excavation & earthworks', roadOption: 'Road construction', rentalOption: 'Equipment rental', other: 'Other', budgetOption1: 'Under 50,000 LYD', budgetOption2: '50,000–150,000 LYD', budgetOption3: '150,000–500,000 LYD', budgetOption4: 'Over 500,000 LYD', send: 'Send quote request', privacy: 'By sending this form, you agree that we may use your details to respond to your enquiry.',
    whatsapp: 'Chat on WhatsApp', language: 'العربية', privacyLink: 'Read our privacy policy',
    projectsEyebrow: 'Our experience', projectsHeroTitle: 'Projects built on decades of know-how.', projectsIntro: 'From gas and water pipelines to reservoirs, roads and housing, we have delivered complex earthworks throughout Libya.', projectsDownload: 'Download company profile & projects', projectsSelected: 'Selected projects', projectsSelectedText: 'A record of completed contracts across infrastructure, energy, water and construction.', projectsFleetTitle: 'Our fleet', projectsFleetText: 'Reliable machinery and experienced operators for demanding work.', projectsServicesTitle: 'Complete services', projectsServicesText: 'From site preparation to excavation, backfilling, roads and equipment rental.', projectsGalleryTitle: 'Worksite gallery', projectsGalleryText: 'Our equipment and teams at work on site.',
    projectItems: [
      ['Western Libya Gas Line', 'Excavation and pipe-placement works from Wafa Oil Field to Derj over 75 km, plus a 65 km Melita-Hawamid pipeline project.'],
      ['Benghazi Gas Line & High Voltage Towers', 'Pipeline excavation from Ras Elmengar to Benghazi Sea Port over 18 km, plus construction works for 250 high-voltage towers.'],
      ['Waha & Mabrouk Oil Field Projects', 'Excavation, machinery rental and site-leveling support for oil-field and energy projects.'],
      ['Water Networks & Man-Made River', 'Excavation for the Benghazi water and sewage network and Man-Made River projects in Sirte.'],
      ['Omer El Mokhtar El Kabeer Reservoir', 'Stockpile preparation, rock crushing, fill-material mixing and equipment rental for a major irrigation reservoir.'],
      ['Al Marj Housing Development', 'Excavation and transport for 167 housing blocks, project roads and aggregate supply.'],
    ],
    fleetItems: [['8', 'Hyundai excavators'], ['1', 'CAT D9H bulldozers'], ['3', 'Loaders'], ['2', 'CAT 12G graders'], ['9', 'Transport trucks'], ['2', 'BOMAG compactors'], ['1', 'Komatsu 155 bulldozers'], ['1', 'Komatsu 275 bulldozers'], ['1', 'JCB Backhoe Loader']],
    serviceItems: [['Excavation', 'Hard rock, soft rock, soil, pipeline and electrical-trench excavation'], ['Road construction', 'Paved and unpaved road construction'], ['Equipment rental', 'Heavy equipment rental with skilled operators']],
  },
  ar: {
    navHome: 'الرئيسية', navAbout: 'من نحن', navProjects: 'المشاريع', navContact: 'تواصل معنا', quote: 'اطلب عرض سعر',
    heroEyebrow: 'نبني ليبيا', heroTitleA: 'أساس متين', heroTitleB: 'لما هو قادم.', heroText: 'حلول لأعمال الحفر والطرق والمعدات الثقيلة، بخبرة يستحقها مشروعك.', startProject: 'ابدأ مشروعك', capabilities: 'قدراتنا', years: 'أكثر من 30 عاماً من الخبرة', operators: 'مشغلون مهرة ضمن فريقنا', location: 'بنغازي، ليبيا',
    servicesEyebrow: 'خدماتنا', servicesTitle: 'خبرة عملية. تنفيذ يدوم.', servicesText: 'نجمع بين الكوادر والتخطيط والمعدات لتحريك المشاريع الصعبة إلى الأمام.', excavation: 'الحفر والأعمال الترابية', excavationText: 'حفر الصخور الصلبة واللينة والتربة وخطوط الأنابيب والخنادق الكهربائية بدقة.', roads: 'إنشاء الطرق', roadsText: 'طرق معبدة وغير معبدة وفق المواصفات الإقليمية المعتمدة واحتياجات المشروع.', rental: 'تأجير المعدات', rentalText: 'معدات ثقيلة موثوقة مع مشغلين ذوي خبرة وكفاءة عالية.',
    footerText: 'ننفذ مشاريع البنية التحتية المعقدة بإدارة عملية ونزاهة والتزام.', footerLegal: 'جميع الحقوق محفوظة.', talk: 'تحدث مع فريقنا', findUs: 'موقعنا', contact: 'تواصل', address: 'طريق المطار، أمام مصنع الألبان، بنغازي، ليبيا',
    aboutEyebrow: 'عن الشركة', aboutTitle: 'من نحن', aboutText1: 'شركة بن فضل للمقاولات العامة هي شركة رائدة في الأعمال الترابية والإنشاءات بخبرة تزيد على 30 عاماً في تنفيذ مشاريع البنية التحتية المعقدة في ليبيا.', aboutText2: 'أسلوبنا الإداري الاستباقي ونزاهتنا يقدمان قيمة مستدامة لعملائنا وموردينا وموظفينا.', yearsExperience: 'سنوات الخبرة', skilledOperators: 'مشغلون مهرة', machines: 'معدات ثقيلة', completed: 'مشاريع منجزة', team: 'الفريق الفني', teamText: 'بدعم من السائقين والمشغلين والميكانيكيين وفريق تخطيط متخصص، نحقق الدقة في كل مشروع.', fleet: 'أسطول المعدات', fleetText: 'يشمل أسطولنا حفارات وجرافات وشاحنات قلابات وممهدات ومعدات متخصصة لإنشاء الطرق.',
    contactEyebrow: 'تواصل معنا', contactTitle: 'لنبنِ شيئاً يدوم.', contactText: 'أخبرنا عن مشروعك وسيتواصل معك فريقنا قريباً.', office: 'عنوان المكتب', emailUs: 'راسلنا', callUs: 'اتصل بنا', formTitle: 'اطلب عرض سعر', formText: 'شارك بعض التفاصيل وسنجهز لك الخطوة المناسبة التالية.', success: 'شكراً لك — تم إرسال طلبك. سيتواصل معك فريقنا قريباً.', name: 'الاسم', namePlaceholder: 'الاسم الكامل', email: 'البريد الإلكتروني', emailPlaceholder: 'name@example.com', phone: 'رقم الهاتف', phonePlaceholder: '+218 ...', projectType: 'نوع المشروع', projectLocation: 'موقع المشروع', locationPlaceholder: 'بنغازي', startDate: 'تاريخ البدء المفضل', budget: 'الميزانية التقديرية', subject: 'الموضوع', message: 'أخبرنا عن مشروعك', choose: 'اختر', excavationOption: 'الحفر والأعمال الترابية', roadOption: 'إنشاء الطرق', rentalOption: 'تأجير المعدات', other: 'أخرى', budgetOption1: 'أقل من 50,000 دينار ليبي', budgetOption2: '50,000–150,000 دينار ليبي', budgetOption3: '150,000–500,000 دينار ليبي', budgetOption4: 'أكثر من 500,000 دينار ليبي', send: 'إرسال طلب عرض السعر', privacy: 'بإرسال هذا النموذج، توافق على استخدام بياناتك للرد على استفسارك.',
    whatsapp: 'تواصل عبر واتساب', language: 'English', privacyLink: 'اقرأ سياسة الخصوصية',
    projectsEyebrow: 'خبرتنا', projectsHeroTitle: 'مشاريع صنعتها خبرة تمتد لعقود.', projectsIntro: 'من خطوط الغاز والمياه إلى الخزانات والطرق والإسكان، نفذنا أعمالاً أرضية معقدة في أنحاء ليبيا.', projectsDownload: 'تحميل ملف الشركة والمشاريع', projectsSelected: 'مشاريع مختارة', projectsSelectedText: 'سجل من العقود المنفذة في البنية التحتية والطاقة والمياه والإنشاءات.', projectsFleetTitle: 'أسطولنا', projectsFleetText: 'معدات موثوقة ومشغلون ذوو خبرة لتنفيذ المشاريع الصعبة.', projectsServicesTitle: 'خدمات شاملة', projectsServicesText: 'من تجهيز الموقع إلى الحفر والردم والطرق وتأجير المعدات.', projectsGalleryTitle: 'صور من مواقع العمل', projectsGalleryText: 'معداتنا وفرقنا في مواقع العمل.',
    projectItems: [
      ['مشروع خط غاز غرب ليبيا', 'أعمال حفر وتركيب خطوط أنابيب من حقل الوفاء إلى درج بطول 75 كم، ومشروع مليتة إلى الحوامد بطول 65 كم.'],
      ['خط غاز بنغازي وأبراج الجهد العالي', 'حفر خط أنابيب من رأس المنقار إلى ميناء بنغازي بطول 18 كم، وأعمال إنشائية لـ 250 برج جهد عالٍ.'],
      ['مشاريع حقل الواحة ومبروك', 'أعمال حفر وتأجير معدات وتسوية مواقع لمشاريع النفط والطاقة.'],
      ['شبكات المياه والنهر الصناعي', 'حفر خطوط شبكة المياه والصرف الصحي في بنغازي ومشاريع النهر الصناعي في سرت.'],
      ['خزان عمر المختار الكبير', 'تجهيز مخزونات المواد وسحق الصخور وخلط مواد الردم وتأجير معدات لمشروع خزان للري.'],
      ['مشروع إسكان المرج', 'حفر ونقل مواد لـ 167 مبنى سكني وحفر طرق المشروع وتوريد الركام.'],
    ],
    fleetItems: [['8', 'حفارات Hyundai'], ['1', 'جرافات CAT D9H'], ['3', 'لوادر'], ['2', 'ممهدات CAT 12G'], ['9', 'شاحنات نقل'], ['2', 'ضاغطات BOMAG'], ['1', 'جرافات Komatsu 155'], ['1', 'جرافات Komatsu 275'], ['1', 'حفار باكهو JCB']],
    serviceItems: [['الحفر', 'الصخور الصلبة واللينة والتربة وخنادق الأنابيب والكهرباء'], ['الطرق', 'إنشاء الطرق المعبدة وغير المعبدة'], ['المعدات', 'تأجير المعدات الثقيلة مع مشغلين مهرة']],
  },
};

interface LanguageContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
  t: <T = string>(key: string) => T;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => (localStorage.getItem('language') as Language) || 'en');
  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    localStorage.setItem('language', language);
  }, [language]);
  const t = <T = string,>(key: string) => copy[language][key] as T;
  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>;
}

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider');
  return ctx;
};
