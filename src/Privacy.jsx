import { useLanguage } from './LanguageContext';

export default function Privacy() {
  const { language } = useLanguage();
  const ar = language === 'ar';
  const content = ar ? {
    eyebrow: 'الخصوصية', title: 'سياسة الخصوصية', updated: 'آخر تحديث: يوليو 2026',
    intro: 'تحترم شركة بن فضل للمقاولات العامة خصوصيتك. تشرح هذه السياسة البيانات التي نجمعها عند استخدامك لموقعنا وكيف نستخدمها.',
    collect: 'المعلومات التي نجمعها', collectText: 'عند إرسال نموذج طلب عرض سعر، قد نجمع اسمك وبريدك الإلكتروني ورقم هاتفك وتفاصيل مشروعك وموقعه وميزانيته التقديرية.',
    use: 'كيف نستخدم المعلومات', useText: 'نستخدم هذه المعلومات للرد على استفسارك، وإعداد عرض سعر، والتواصل معك بخصوص مشروعك. لا نبيع بياناتك الشخصية.',
    sharing: 'مشاركة البيانات', sharingText: 'تتم معالجة طلبات النماذج عبر FormSubmit وإرسالها إلى بريد الشركة. قد يستخدم الموقع أيضاً خرائط Google لعرض موقعنا.',
    contact: 'تواصل معنا', contactText: 'لأي سؤال عن خصوصيتك أو لطلب تعديل أو حذف بياناتك، راسلنا على a.fadhl76@gmail.com.'
  } : {
    eyebrow: 'Privacy', title: 'Privacy policy', updated: 'Last updated: July 2026',
    intro: 'Ben Fadel General Construction Company respects your privacy. This policy explains what information we collect when you use our website and how we use it.',
    collect: 'Information we collect', collectText: 'When you submit a quote request, we may collect your name, email address, phone number, project details, location and estimated budget.',
    use: 'How we use your information', useText: 'We use this information to reply to your enquiry, prepare a quote and communicate with you about your project. We do not sell your personal information.',
    sharing: 'Data sharing', sharingText: 'Form requests are processed through FormSubmit and delivered to the company email inbox. The website may also use Google Maps to display our location.',
    contact: 'Contact us', contactText: 'For privacy questions, or to request a correction or deletion of your details, email a.fadhl76@gmail.com.'
  };
  return <main className="min-h-screen bg-stone-100 pb-20 pt-32"><article className="site-shell max-w-3xl"><p className="eyebrow">{content.eyebrow}</p><h1 className="text-4xl font-extrabold text-slate-950 sm:text-5xl">{content.title}</h1><p className="mt-4 text-sm text-slate-500">{content.updated}</p><p className="mt-10 text-lg leading-relaxed text-slate-700">{content.intro}</p><div className="mt-10 space-y-9">{[['collect', 'collectText'], ['use', 'useText'], ['sharing', 'sharingText'], ['contact', 'contactText']].map(([heading, text]) => <section key={heading}><h2 className="text-xl font-extrabold text-slate-950">{content[heading]}</h2><p className="mt-3 leading-relaxed text-slate-600">{content[text]}</p></section>)}</div></article></main>;
}
