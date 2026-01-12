import { Facebook, Instagram, ArrowUp } from 'lucide-react';
import logo from '/public/logo (1).png';
import { useLanguage } from '@/lib/i18n/LanguageContext';

const Footer = () => {
  const { t, isRTL } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom section-padding pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          {/* Company Info */}
          <div className={`lg:col-span-1 rtl-content lang-transition ${isRTL ? 'text-right' : 'text-left'}`}>
           <a href="#" className="flex items-center gap-2 mb-6">
              <img src={logo} alt="ThinkBiz High Tech" className="h-50" />
            </a>
            <p className="text-primary-foreground/70 mb-6 leading-relaxed">
              {t('footer.description')}
            </p>
            <div className={`flex gap-3 ${isRTL ? 'justify-end' : ''}`}>
              <a href="https://www.facebook.com/ThinkBizHT/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/thinkbizht/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className={`rtl-content lang-transition ${isRTL ? 'text-right' : 'text-left'}`}>
            <h4 className="font-display font-semibold text-lg mb-6">{t('footer.services')}</h4>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  {t('contact.form.webDevelopment')}
                </a>
              </li>
              <li>
                <a href="#services" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  {t('contact.form.digitalDesign')}
                </a>
              </li>
              <li>
                <a href="#services" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  {t('contact.form.mobileApps')}
                </a>
              </li>
              <li>
                <a href="#services" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  {t('contact.form.ecommerce')}
                </a>
              </li>
              <li>
                <a href="#services" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  {t('contact.form.uiux')}
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className={`rtl-content lang-transition ${isRTL ? 'text-right' : 'text-left'}`}>
            <h4 className="font-display font-semibold text-lg mb-6">{t('footer.company')}</h4>
            <ul className="space-y-3">
              <li>
                <a href="#why-us" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  {t('footer.aboutUs')}
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  {t('footer.portfolio')}
                </a>
              </li>
              <li>
                <a href="#process" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  {t('footer.methodology')}
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  {t('footer.careers')}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  {t('footer.contact')}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className={`rtl-content lang-transition ${isRTL ? 'text-right' : 'text-left'}`}>
            <h4 className="font-display font-semibold text-lg mb-6">{t('footer.contact')}</h4>
            <ul className="space-y-3 text-primary-foreground/70">
              <li>
                <a href="tel:+918512001218" className="hover:text-accent transition-colors">
                  +91 85120 01218
                </a>
              </li>
              <li>
                <a href="mailto:info@thinkbizhightech.com" className="hover:text-accent transition-colors">
                  info@thinkbizhightech.com
                </a>
              </li>
              <li>
                B-46, B Block, Sector 63,<br />
                Noida, Uttar Pradesh 201301, India
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/50 text-sm text-center md:text-start">
            © {new Date().getFullYear()} {t('footer.copyright')}
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-primary-foreground/50 text-sm hover:text-accent transition-colors">
              {t('footer.privacyPolicy')}
            </a>
            <a href="#" className="text-primary-foreground/50 text-sm hover:text-accent transition-colors">
              {t('footer.termsOfService')}
            </a>
            <button 
              onClick={scrollToTop}
              className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center hover:bg-[hsl(43,74%,45%)] transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5 text-accent-foreground" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
