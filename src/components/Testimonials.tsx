import { Star, Quote } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';

const Testimonials = () => {
  const { t, isRTL } = useLanguage();

  const testimonials = [
    {
      nameKey: 'testimonials.items.ahmed.name',
      roleKey: 'testimonials.items.ahmed.role',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
      rating: 5,
      reviewKey: 'testimonials.items.ahmed.review',
    },
    {
      nameKey: 'testimonials.items.fatima.name',
      roleKey: 'testimonials.items.fatima.role',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop',
      rating: 5,
      reviewKey: 'testimonials.items.fatima.review',
    },
    {
      nameKey: 'testimonials.items.mohammed.name',
      roleKey: 'testimonials.items.mohammed.role',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
      rating: 5,
      reviewKey: 'testimonials.items.mohammed.review',
    },
  ];

  return (
    <section className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 rtl-content lang-transition`}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent font-medium text-sm mb-4">
            {t('testimonials.badge')}
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl mb-6 text-primary">
            {t('testimonials.title')}{' '}
            <span className="gradient-text">{t('testimonials.titleHighlight')}</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            {t('testimonials.subtitle')}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-card rounded-xl p-6 md:p-8 border border-border relative card-hover rtl-content lang-transition ${isRTL ? 'text-right' : 'text-left'}`}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="w-12 h-12 text-accent" />
              </div>

              {/* Rating */}
              <div className={`flex gap-1 mb-4 ${isRTL ? 'justify-end' : ''}`}>
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Review */}
              <p className="text-foreground/80 leading-relaxed mb-6">
                "{t(testimonial.reviewKey)}"
              </p>

              {/* Author */}
              <div className={`flex items-center gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <img
                  src={testimonial.image}
                  alt={t(testimonial.nameKey)}
                  className="w-14 h-14 rounded-full object-cover border-2 border-accent/20"
                />
                <div>
                  <h4 className="font-display font-semibold text-primary">{t(testimonial.nameKey)}</h4>
                  <p className="text-muted-foreground text-sm">{t(testimonial.roleKey)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
