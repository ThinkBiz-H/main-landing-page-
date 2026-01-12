import { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Send, Globe } from 'lucide-react';

import { buildWhatsAppUrl, openWhatsAppWithFormData, type ContactFormData } from '@/lib/whatsapp';
import { useLanguage } from '@/lib/i18n/LanguageContext';

const ContactSection = () => {
  const { t, isRTL } = useLanguage();
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
  budget: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    openWhatsAppWithFormData(formData);
  };

  const whatsappLink = buildWhatsAppUrl();

  return (
    <section id="contact" className="section-padding bg-section-light">
      <div className="container-custom">
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 rtl-content lang-transition`}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent font-medium text-sm mb-4">
            {t('contact.badge')}
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl mb-6 text-primary">
            {t('contact.title')}{' '}
            <span className="gradient-text">{t('contact.titleHighlight')}</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div className={`rtl-content lang-transition ${isRTL ? 'text-right' : 'text-left'}`}>
            <h3 className="font-display font-bold text-2xl mb-6 text-primary">{t('contact.teamTitle')}</h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              {t('contact.teamSubtitle')}
            </p>

            <div className="space-y-4 mb-8">
              <a 
                href="tel:+918512001218" 
                className={`flex items-center gap-4 p-4 rounded-lg bg-card border border-border hover:border-accent/30 transition-colors ${isRTL ? 'flex-row-reverse' : ''}`}
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <div className="font-medium text-sm text-muted-foreground">{t('contact.phone')}</div>
                  <div className="font-display font-semibold text-primary">+91 85120 01218</div>
                </div>
              </a>

              <a 
                href="mailto:info@thinkbizhightech.com" 
                className={`flex items-center gap-4 p-4 rounded-lg bg-card border border-border hover:border-accent/30 transition-colors ${isRTL ? 'flex-row-reverse' : ''}`}
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <div className="font-medium text-sm text-muted-foreground">{t('contact.email')}</div>
                  <div className="font-display font-semibold text-primary">info@thinkbizhightech.com</div>
                </div>
              </a>

              <div className={`flex items-center gap-4 p-4 rounded-lg bg-card border border-border ${isRTL ? 'flex-row-reverse' : ''}`}>
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <div className="font-medium text-sm text-muted-foreground">{t('contact.office')}</div>
                  <div className="font-display font-semibold text-primary">B-46, B Block, Sector 63, Noida, UP 201301</div>
                </div>
              </div>
             <div className={`flex items-center gap-4 p-4 rounded-lg bg-card border border-border ${isRTL ? 'flex-row-reverse' : ''}`}>
  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
    <Globe className="w-6 h-6 text-accent" />
  </div>
  <div>
    <div className="font-medium text-sm text-muted-foreground">
      {t('Website')}
    </div>
    <a
      href="https://www.thinkbizhightech.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="font-display font-semibold text-primary hover:text-accent transition"
    >
      www.thinkbizhightech.com
    </a>
  </div>
</div>

            </div>

            {/* WhatsApp CTA */}
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp w-full justify-center text-lg py-4"
            >
              <MessageCircle className="w-5 h-5" />
              {t('contact.whatsappCta')}
            </a>
          </div>

          {/* Contact Form */}
          <div className={`bg-card rounded-xl p-6 md:p-8 border border-border rtl-content lang-transition ${isRTL ? 'text-right' : 'text-left'}`}>
            <h3 className="font-display font-bold text-xl mb-6 text-primary">{t('contact.form.title')}</h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block font-medium text-sm mb-2 text-primary">
                  {t('contact.form.fullName')} *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all"
                  placeholder={t('contact.form.fullNamePlaceholder')}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="email" className="block font-medium text-sm mb-2 text-primary">
                    {t('contact.form.businessEmail')} *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all"
                    placeholder={t('contact.form.emailPlaceholder')}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block font-medium text-sm mb-2 text-primary">
                    {t('contact.form.phoneNumber')}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all"
                    placeholder={t('contact.form.phonePlaceholder')}
                  />
                </div>
              </div>
<div>
                <label htmlFor="message" className="block font-medium text-sm mb-2 text-primary">
                  {t('What are you looking to build or improve')} *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all resize-none"
                  placeholder={t('contact.form.requirementsPlaceholder')}
                />
              </div>
              

               <div>
  <label htmlFor="service" className="block font-medium text-sm mb-2 text-primary">
    {t('contact.form.service')}
  </label>

  <select
    id="service"
    name="service"
    value={formData.service}
    onChange={handleChange}
    className="w-full px-4 py-3 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all"
  >
    <option value="">{t('contact.form.selectService')}</option>
    <option value="Web Development">{t('contact.form.webDevelopment')}</option>
    <option value="Digital Design">{t('contact.form.digitalDesign')}</option>
    <option value="Mobile Applications">{t('contact.form.mobileApps')}</option>
    <option value="E-commerce Platforms">{t('contact.form.ecommerce')}</option>
    <option value="UI/UX Consulting">{t('contact.form.uiux')}</option>
    <option value="Custom Software">{t('contact.form.customSoftware')}</option>
    <option value="Seo">{t('contact.form.Seo')}</option>
  </select>
</div>
<div>
  <label className="block font-medium text-sm mb-3 text-primary">
    {t('Budget')}
  </label>

  <div className="space-y-2">
    {[
      'Under - AED 5k ',
      'AED 8k – AED 12k',
      'AED 13K – AED 20K',
      'AED 20K+',
      'Not Sure yet',
    ].map((item) => (
      <label
        key={item}
        className="flex items-center gap-3 cursor-pointer"
      >
        <input
          type="checkbox"
          name="budget"
          value={item}
          checked={formData.budget === item}
          onChange={(e) =>
            setFormData({
              ...formData,
              budget: e.target.checked ? item : '',
            })
          }
          className="w-4 h-4 accent-primary"
        />
        <span className="text-sm text-foreground">{item}</span>
      </label>
    ))}
  </div>
</div>


              <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2 py-4 text-lg">
                <Send className="w-5 h-5" />
                {t('contact.form.submit')}
              </button>

              <p className="text-muted-foreground text-sm text-center">
                {t('contact.form.disclaimer')}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
