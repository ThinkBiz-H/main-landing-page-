  import { ExternalLink, Globe, Smartphone } from 'lucide-react';
  import { useLanguage } from '@/lib/i18n/LanguageContext';

  import mobileAppImg from "@/public/mobileapp.webp";

  const Portfolio = () => {
    const { t, isRTL } = useLanguage();

    const projects = [
  {
    titleKey: 'portfolio.projects.financeFlow.title',
    categoryKey: 'portfolio.projects.financeFlow.category',
    type: 'web',
    descKey: 'portfolio.projects.financeFlow.description',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
  },
  {
    titleKey: 'portfolio.projects.gulfCommerce.title',
    categoryKey: 'portfolio.projects.gulfCommerce.category',
    type: 'web',
    descKey: 'portfolio.projects.gulfCommerce.description',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
  },

  // ✅ FIXED MOBILE APP PROJECT
  {
    titleKey: 'portfolio.projects.healthTrack.title',
    categoryKey: 'portfolio.projects.healthTrack.category',
    type: 'mobile',
    descKey: 'portfolio.projects.healthTrack.description',
    image: 'https://main-landing-page-wheat.vercel.app/mobileapp.webp',
  },

  {
    titleKey: 'portfolio.projects.propertyHub.title',
    categoryKey: 'portfolio.projects.propertyHub.category',
    type: 'web',
    descKey: 'portfolio.projects.propertyHub.description',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop',
  },
  {
    titleKey: 'portfolio.projects.deliverEase.title',
    categoryKey: 'portfolio.projects.deliverEase.category',
    type: 'mobile',
    descKey: 'portfolio.projects.deliverEase.description',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=400&fit=crop',
  },
  {
    titleKey: 'portfolio.projects.eduLearn.title',
    categoryKey: 'portfolio.projects.eduLearn.category',
    type: 'web',
    descKey: 'portfolio.projects.eduLearn.description',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=400&fit=crop',
  },
];

    return (
      <section id="portfolio" className="section-padding bg-section-light">
        <div className="container-custom">
          {/* Section Header */}
          <div className={`text-center max-w-3xl mx-auto mb-16 rtl-content lang-transition`}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent font-medium text-sm mb-4">
              {t('portfolio.badge')}
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl mb-6 text-primary">
              {t('portfolio.title')}{' '}
              <span className="gradient-text">{t('portfolio.titleHighlight')}</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              {t('portfolio.subtitle')}
            </p>
          </div>

          {/* Portfolio Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative bg-card rounded-xl overflow-hidden border border-border card-hover"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={t(project.titleKey)}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <button className="btn-primary inline-flex items-center gap-2 w-fit">
                      {t('portfolio.viewCaseStudy')}
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-md bg-background/90 backdrop-blur-sm">
                    {project.type === 'mobile' ? (
                      <Smartphone className="w-4 h-4 text-accent" />
                    ) : (
                      <Globe className="w-4 h-4 text-accent" />
                    )}
                    <span className="text-sm font-medium text-primary">{t(project.categoryKey)}</span>
                  </div>
                </div>

                {/* Content */}
                <div className={`p-6 rtl-content lang-transition ${isRTL ? 'text-right' : 'text-left'}`}>
                  <h3 className="font-display font-bold text-xl mb-2 text-primary group-hover:text-accent transition-colors">
                    {t(project.titleKey)}
                  </h3>
                  <p className="text-muted-foreground text-sm">{t(project.descKey)}</p>
                </div>
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-12">
            <button className="btn-outline inline-flex items-center gap-2">
              {t('portfolio.viewAllProjects')}
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    );
  };

  export default Portfolio;
