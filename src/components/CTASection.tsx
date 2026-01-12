import { ArrowRight, MessageCircle } from 'lucide-react';
import { buildWhatsAppUrl } from '@/lib/whatsapp';
import { useLanguage } from '@/lib/i18n/LanguageContext';

const CTASection = () => {
  const { t, isRTL } = useLanguage();
  const whatsappLink = buildWhatsAppUrl();

  return (
    <section className="section-padding bg-primary">
      <div className="container-custom">
        <div className={`text-center max-w-4xl mx-auto rtl-content lang-transition`}>
          {/* Icon */}
          <div className="w-16 h-16 rounded-xl bg-accent/20 flex items-center justify-center mx-auto mb-8">
            <div className="w-8 h-8 rounded-lg bg-accent" />
          </div>

          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-primary-foreground mb-6">
            {t('cta.title')}{' '}
            <span className="text-accent">{t('cta.titleHighlight')}</span>
          </h2>

          <p className="text-primary-foreground/70 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            {t('cta.subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#contact" className="btn-primary flex items-center gap-2 text-lg px-8 py-4">
              {t('cta.primaryCta')}
              <ArrowRight className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} />
            </a>
            <a 
              href={whatsappLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-whatsapp text-lg px-8 py-4"
            >
              <MessageCircle className="w-5 h-5" />
              {t('cta.secondaryCta')}
            </a>
          </div>

          {/* Trust Badges */}
          {/*  */}
        </div>
      </div>
    </section>
  );
};

export default CTASection;
