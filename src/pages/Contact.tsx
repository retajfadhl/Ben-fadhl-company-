import { CheckCircle2, MapPin, Phone, Mail, Send } from 'lucide-react';
import type { ComponentType, ReactNode } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';

export default function Contact() {
  const { t } = useLanguage();
  const sent = new URLSearchParams(window.location.search).get('sent') === 'true';
  const inputClass = 'w-full border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-500/40';
  const infoCards: { icon: ComponentType<{ size?: number; strokeWidth?: number; className?: string }>; title: string; body: ReactNode }[] = [
    { icon: MapPin, title: t('office'), body: <p className="text-slate-600">{t('address')}</p> },
    { icon: Mail, title: t('emailUs'), body: <><a href="mailto:a.fadhl76@gmail.com" className="block text-slate-600 hover:text-amber-600">a.fadhl76@gmail.com</a><a href="mailto:retajfadhl@gmail.com" className="mt-1 block text-slate-600 hover:text-amber-600">retajfadhl@gmail.com</a></> },
    { icon: Phone, title: t('callUs'), body: <><p className="text-slate-600">+218 92 376 4655</p><p className="text-slate-600">+218 94 269 7940</p></> },
  ];

  return <div className="bg-stone-100 pb-12 pt-24 md:pt-20">
    <section className="site-shell mb-16 max-w-2xl text-center sm:mb-20">
      <p className="eyebrow mx-auto w-fit">{t('contactEyebrow')}</p>
      <h1 className="text-4xl font-extrabold text-slate-950 sm:text-5xl">{t('contactTitle')}</h1>
      <p className="mt-5 text-lg leading-relaxed text-slate-600">{t('contactText')}</p>
    </section>

    <section className="site-shell mb-16 sm:mb-20">
      <div className="grid gap-px bg-slate-200 md:grid-cols-3">
        {infoCards.map(({ icon: Icon, title, body }) => (
          <div key={title} className="bg-white p-8 text-center sm:p-10">
            <Icon size={30} strokeWidth={1.6} className="mx-auto text-amber-600" />
            <h3 className="mt-5 text-lg font-extrabold text-slate-950">{title}</h3>
            <div className="mt-3 leading-relaxed">{body}</div>
          </div>
        ))}
      </div>
    </section>

    <section className="site-shell">
      <div className="grid overflow-hidden bg-white shadow-sm md:grid-cols-2">
        <div className="p-8 sm:p-10 md:p-14">
          <p className="eyebrow">{t('formTitle')}</p>
          <h2 className="text-3xl font-extrabold text-slate-950">{t('formTitle')}</h2>
          <p className="mt-3 text-slate-600">{t('formText')}</p>
          {sent && <div role="status" className="mt-6 flex gap-3 border border-green-200 bg-green-50 p-4 text-sm font-medium text-green-800"><CheckCircle2 className="shrink-0" size={20} />{t('success')}</div>}
          <form id="quote-form" action="https://formsubmit.co/a.fadhl76@gmail.com" method="POST" className="mt-8 space-y-5">
            <input type="hidden" name="_subject" value="New website quote request - Ben Fadel Construction" /><input type="hidden" name="_template" value="table" /><input type="hidden" name="_captcha" value="true" /><input type="hidden" name="_autoresponse" value="Thank you for contacting Ben Fadel Construction. We have received your request and our team will get back to you shortly. شكراً لتواصلكم مع شركة بن فضل للمقاولات. استلمنا طلبكم وسيتواصل معكم فريقنا قريباً." /><input type="hidden" name="_next" value={`${window.location.origin}/contact?sent=true`} />
            <div className="grid gap-5 sm:grid-cols-2"><label className="text-sm font-semibold text-slate-700">{t('name')}<input name="name" required className={`${inputClass} mt-2`} placeholder={t('namePlaceholder')} /></label><label className="text-sm font-semibold text-slate-700">{t('email')}<input name="email" type="email" required className={`${inputClass} mt-2`} placeholder={t('emailPlaceholder')} /></label></div>
            <div className="grid gap-5 sm:grid-cols-2"><label className="text-sm font-semibold text-slate-700">{t('phone')}<input name="phone" type="tel" required className={`${inputClass} mt-2`} placeholder={t('phonePlaceholder')} /></label><label className="text-sm font-semibold text-slate-700">{t('projectType')}<select name="project_type" required defaultValue="" className={`${inputClass} mt-2`}><option value="" disabled>{t('choose')}</option><option>{t('excavationOption')}</option><option>{t('roadOption')}</option><option>{t('rentalOption')}</option><option>{t('other')}</option></select></label></div>
            <div className="grid gap-5 sm:grid-cols-2"><label className="text-sm font-semibold text-slate-700">{t('projectLocation')}<input name="project_location" required className={`${inputClass} mt-2`} placeholder={t('locationPlaceholder')} /></label><label className="text-sm font-semibold text-slate-700">{t('startDate')}<input name="preferred_start_date" type="date" className={`${inputClass} mt-2`} /></label></div>
            <label className="block text-sm font-semibold text-slate-700">{t('budget')}<select name="estimated_budget" defaultValue="" className={`${inputClass} mt-2`}><option value="">{t('choose')}</option><option>{t('budgetOption1')}</option><option>{t('budgetOption2')}</option><option>{t('budgetOption3')}</option><option>{t('budgetOption4')}</option></select></label>
            <label className="block text-sm font-semibold text-slate-700">{t('message')}<textarea name="message" rows={5} required className={`${inputClass} mt-2`} placeholder={t('message')} /></label>
            <button type="submit" className="button-primary w-full"><Send size={18} />{t('send')}</button><p className="text-center text-xs leading-relaxed text-slate-500">{t('privacy')} <Link to="/privacy" className="font-semibold text-slate-700 underline hover:text-amber-700">{t('privacyLink')}</Link></p>
          </form>
        </div>
        <div className="relative min-h-[360px]"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3389.9238384954754!2d20.180402800000003!3d32.1001667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDA2JzAwLjYiTiAyMMKwMTAnNTguNyJF!5e0!3m2!1sen!2sly!4v1700000000000" className="absolute inset-0 h-full w-full border-0 grayscale-[15%]" allowFullScreen loading="lazy" title="Ben Fadhl Location" /></div>
      </div>
    </section>
  </div>;
}
