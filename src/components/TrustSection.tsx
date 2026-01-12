import { Zap, Shield, Palette, Layers } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';

const TrustSection = () => {
  const { t, isRTL } = useLanguage();

  const features = [
    {
      icon: Zap,
      title: t('trust.onTimeDelivery.title'),
      description: t('trust.onTimeDelivery.description'),
    },
    {
      icon: Shield,
      title: t('trust.enterpriseSecurity.title'),
      description: t('trust.enterpriseSecurity.description'),
    },
    {
      icon: Palette,
      title: t('trust.premiumDesign.title'),
      description: t('trust.premiumDesign.description'),
    },
    {
      icon: Layers,
      title: t('trust.scalableArchitecture.title'),
      description: t('trust.scalableArchitecture.description'),
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-primary border-y border-border">
      <div className="container-custom px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`flex flex-col items-center text-center group animate-fade-in-up rtl-content lang-transition`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-lg bg-accent/20 flex items-center justify-center mb-4 group-hover:bg-accent/30 transition-colors duration-300">
                <feature.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-1 text-primary-foreground">{feature.title}</h3>
              <p className="text-primary-foreground/70 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
