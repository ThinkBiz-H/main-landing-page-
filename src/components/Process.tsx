import { ClipboardList, Palette, Code2, TestTube, Rocket } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';

const Process = () => {
  const { t, isRTL } = useLanguage();

  const steps = [
    {
      icon: ClipboardList,
      step: '01',
      titleKey: 'process.steps.discovery.title',
      descKey: 'process.steps.discovery.description',
    },
    {
      icon: Palette,
      step: '02',
      titleKey: 'process.steps.design.title',
      descKey: 'process.steps.design.description',
    },
    {
      icon: Code2,
      step: '03',
      titleKey: 'process.steps.development.title',
      descKey: 'process.steps.development.description',
    },
    {
      icon: TestTube,
      step: '04',
      titleKey: 'process.steps.qa.title',
      descKey: 'process.steps.qa.description',
    },
    {
      icon: Rocket,
      step: '05',
      titleKey: 'process.steps.launch.title',
      descKey: 'process.steps.launch.description',
    },
  ];

  return (
    <section id="process" className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 rtl-content lang-transition`}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent font-medium text-sm mb-4">
            {t('process.badge')}
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl mb-6 text-primary">
            {t('process.title')}{' '}
            <span className="gradient-text">{t('process.titleHighlight')}</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            {t('process.subtitle')}
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2 z-0" />

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="relative group"
              >
                <div className={`bg-card rounded-xl p-6 border border-border text-center relative z-10 h-full card-hover rtl-content lang-transition`}>
                  {/* Step Number */}
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground font-display font-bold flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    {step.step}
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-8 h-8 text-accent" />
                  </div>

                  <h3 className="font-display font-bold text-lg mb-3 text-primary">{t(step.titleKey)}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{t(step.descKey)}</p>
                </div>

                {/* Arrow for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 z-20">
                    <div className="w-6 h-6 rounded-full bg-accent/20 border-2 border-accent" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
