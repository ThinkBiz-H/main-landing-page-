import { useState } from "react";
import { ArrowRight, MessageCircle, Send } from "lucide-react";
import { buildWhatsAppUrl, openWhatsAppWithFormData } from "@/lib/whatsapp";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const Hero = () => {
  const { t, isRTL } = useLanguage();
  const whatsappLink = buildWhatsAppUrl();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    service: "",
    budget: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    openWhatsAppWithFormData(formData);
  };

  return (
    <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div className={`max-w-2xl ${isRTL ? "text-right" : "text-left"}`}>
            <div className="inline-flex items-center gap-5 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              {t("hero.badge")}
            </div>

            <h1 className="font-extrabold text-4xl md:text-5xl lg:text-6xl mb-6 text-primary">
              {t("hero.title")}{" "}
              <span className="gradient-text">
                {t("hero.titleHighlight")}
              </span>
            </h1>

            <p className="text-lg text-muted-foreground mb-8">
              {t("hero.subtitle")}
            </p>

            <div className={`flex flex-col sm:flex-row gap-4 ${isRTL ? "sm:flex-row-reverse" : ""}`}>
              <a href="#contact" className="btn-primary flex items-center gap-2">
                {t("Get Free Consultation")}
                <ArrowRight className={`w-5 h-5 ${isRTL ? "rotate-180" : ""}`} />
              </a>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                {t("hero.secondaryCta")}
              </a>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className={`bg-card bg-[#e6e7e9] rounded-xl p-6 md:p-8 border border-border rtl-content lang-transition ${isRTL ? 'text-right' : 'text-left'}`}>
            <h3 className="font-display font-bold text-xl mb-6 text-primary">{t('contact.form.title')}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder={t("contact.form.fullName")}
                className="w-full input"
              />

              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder={t("contact.form.businessEmail")}
                className="w-full input"
              />

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder={t("contact.form.phoneNumber")}
                className="w-full input"
              />

              <textarea
                name="message"
                required
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder={t("What are you looking to build or improve")}
                className="w-full input resize-none"
              />

              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full input"
              >
                <option value="">{t("contact.form.selectService")}</option>
                <option value="Web Development">Web Development</option>
                <option value="Mobile App">Mobile Applications</option>
                <option value="UI/UX">UI/UX</option>
                <option value="SEO">SEO</option>
              </select>

              <div>
                <p className="font-medium mb-2">{t("Budget")}</p>
                {[
                  "Under AED 5k",
                  "AED 8k – 12k",
                  "AED 13k – 20k",
                  "AED 20k+",
                  "Not Sure",
                ].map((b) => (
                  <label key={b} className="flex items-center gap-2 text-sm">
                    <input
                      type="radio"
                      name="budget"
                      value={b}
                      checked={formData.budget === b}
                      onChange={handleChange}
                    />
                    {b}
                  </label>
                ))}
              </div> */}
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
{/* <div>
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
                  className="w-full px-1 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all resize-none"
                  placeholder={t('contact.form.requirementsPlaceholder')}
                />
              </div>
               */}

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
      'Not Sure Yet',
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

              <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                <Send className="w-5 h-5" />
                {t("contact.form.submit")}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;