import { Users, Search, Smartphone, DollarSign, Headphones, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';

const WhyChooseUs = () => {
  const { t, isRTL } = useLanguage();

  const reasons = [
    {
      icon: Users,
      titleKey: 'whyUs.reasons.seniorTeam.title',
      descKey: 'whyUs.reasons.seniorTeam.description',
    },
    {
      icon: Search,
      titleKey: 'whyUs.reasons.seo.title',
      descKey: 'whyUs.reasons.seo.description',
    },
    {
      icon: Smartphone,
      titleKey: 'whyUs.reasons.mobilFirst.title',
      descKey: 'whyUs.reasons.mobilFirst.description',
    },
    {
      icon: DollarSign,
      titleKey: 'whyUs.reasons.transparent.title',
      descKey: 'whyUs.reasons.transparent.description',
    },
    {
      icon: Headphones,
      titleKey: 'whyUs.reasons.support.title',
      descKey: 'whyUs.reasons.support.description',
    },
  ];

  return (
    <section id="why-us" className="section-padding bg-section-light">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className={`rtl-content lang-transition ${isRTL ? 'text-right' : 'text-left'}`}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent font-medium text-sm mb-4">
              {t('whyUs.badge')}
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl mb-6 text-primary">
              {t('whyUs.title')}{' '}
              <span className="gradient-text">{t('whyUs.titleHighlight')}</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              {t('whyUs.subtitle')}
            </p>

            <div className="space-y-4">
              {reasons.map((reason, index) => (
                <div 
                  key={index}
                  className={`flex gap-4 p-4 rounded-lg bg-card border border-border hover:border-accent/30 transition-colors duration-300 ${isRTL ? 'flex-row-reverse' : ''}`}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    <reason.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg mb-1 text-primary">{t(reason.titleKey)}</h3>
                    <p className="text-muted-foreground text-sm">{t(reason.descKey)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Card */}
          <div className="relative">
            <div className={`bg-card rounded-2xl p-8 md:p-10 border border-border shadow-xl rtl-content lang-transition`}>
              <h3 className="font-display font-bold text-2xl mb-8 text-center text-primary">
                {t('whyUs.stats.title')}
              </h3>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 rounded-xl bg-section-light">
                  <div className="font-display font-bold text-4xl text-accent mb-2">500+</div>
                  <div className="text-muted-foreground font-medium">{t('whyUs.stats.projects')}</div>
                </div>
                <div className="text-center p-6 rounded-xl bg-section-light">
                  <div className="font-display font-bold text-4xl text-accent mb-2">98%</div>
                  <div className="text-muted-foreground font-medium">{t('whyUs.stats.retention')}</div>
                </div>
                <div className="text-center p-6 rounded-xl bg-section-light">
                  <div className="font-display font-bold text-4xl text-accent mb-2">50+</div>
                  <div className="text-muted-foreground font-medium">{t('whyUs.stats.engineers')}</div>
                </div>
                <div className="text-center p-6 rounded-xl bg-section-light">
                  <div className="font-display font-bold text-4xl text-accent mb-2">24/7</div>
                  <div className="text-muted-foreground font-medium">{t('whyUs.stats.support')}</div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-border">
                <div className="flex items-center justify-center gap-2 text-muted-foreground">
                  <CheckCircle2 className="w-5 h-5 text-accent" />
                  <span>{t('whyUs.stats.certification')}</span>
                </div>
              </div>
            </div>

            {/* Decorative */}
            <div className="absolute -z-10 -top-4 -right-4 w-full h-full rounded-2xl bg-accent/10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
