import { Globe, Smartphone, ShoppingCart, PenTool, Code2, Sparkles } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';

const Services = () => {
  const { t, tArray, isRTL } = useLanguage();

  const services = [
    {
      icon: Globe,
      titleKey: 'services.items.webDevelopment.title',
      descKey: 'services.items.webDevelopment.description',
      featuresKey: 'services.items.webDevelopment.features',
    },
    {
      icon: PenTool,
      titleKey: 'services.items.digitalDesign.title',
      descKey: 'services.items.digitalDesign.description',
      featuresKey: 'services.items.digitalDesign.features',
    },
    {
      icon: Smartphone,
      titleKey: 'services.items.mobileApps.title',
      descKey: 'services.items.mobileApps.description',
      featuresKey: 'services.items.mobileApps.features',
    },
    {
      icon: ShoppingCart,
      titleKey: 'services.items.ecommerce.title',
      descKey: 'services.items.ecommerce.description',
      featuresKey: 'services.items.ecommerce.features',
    },
    {
      icon: Sparkles,
      titleKey: 'services.items.uiux.title',
      descKey: 'services.items.uiux.description',
      featuresKey: 'services.items.uiux.features',
    },
    {
      icon: Code2,
      titleKey: 'services.items.customSoftware.title',
      descKey: 'services.items.customSoftware.description',
      featuresKey: 'services.items.customSoftware.features',
    },
  ];

  return (
    <section id="services" className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 rtl-content lang-transition`}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent font-medium text-sm mb-4">
            {t('services.badge')}
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl mb-6 text-primary">
            {t('services.title')}{' '}
            <span className="gradient-text">{t('services.titleHighlight')}</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group bg-card rounded-xl p-6 md:p-8 border border-border card-hover rtl-content lang-transition ${isRTL ? 'text-right' : 'text-left'}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent group-hover:scale-110 transition-all duration-300 ${isRTL ? 'ml-auto' : ''}`}>
                <service.icon className="w-7 h-7 text-accent group-hover:text-accent-foreground transition-colors duration-300" />
              </div>

              <h3 className="font-display font-bold text-xl mb-3 text-primary group-hover:text-accent transition-colors">
                {t(service.titleKey)}
              </h3>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {t(service.descKey)}
              </p>

              <div className={`flex flex-wrap gap-2 ${isRTL ? 'justify-end' : ''}`}>
                {tArray(service.featuresKey).map((feature, featureIndex) => (
                  <span
                    key={featureIndex}
                    className="px-3 py-1 rounded-md bg-muted text-muted-foreground text-sm font-medium"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
