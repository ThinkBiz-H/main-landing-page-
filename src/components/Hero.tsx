import { ArrowRight, MessageCircle } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const Hero = () => {
  const { t, isRTL } = useLanguage();
  const whatsappLink = buildWhatsAppUrl();

  return (
    <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* LEFT CONTENT */}
          <div
            className={`max-w-2xl rtl-content lang-transition ${
              isRTL ? "text-right" : "text-left"
            }`}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6 animate-fade-in-up">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              {t("hero.badge")}
            </div>

            {/* Heading */}
            <h1 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 animate-fade-in-up animate-delay-100 text-primary">
              {t("hero.title")}{" "}
              <span className="gradient-text">
                {t("hero.titleHighlight")}
              </span>{" "}
              {t("")}
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 animate-fade-in-up animate-delay-200">
              {t("hero.subtitle")}
            </p>

            {/* CTA */}
            <div
              className={`flex flex-col sm:flex-row gap-4 animate-fade-in-up animate-delay-300 ${
                isRTL ? "sm:flex-row-reverse sm:justify-end" : ""
              }`}
            >
              <a
                href="#contact"
                className="btn-primary flex items-center justify-center gap-2 text-lg"
              >
                {t("Get Free Consultation")}
                <ArrowRight
                  className={`w-5 h-5 ${isRTL ? "rotate-180" : ""}`}
                />
              </a>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp flex items-center justify-center gap-2 text-lg"
              >
                <MessageCircle className="w-5 h-5" />
                {t("hero.secondaryCta")}
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-6 mt-10 pt-10 border-t border-border animate-fade-in-up animate-delay-400">
              <div>
                <div className="font-display font-bold text-3xl text-primary">
                  500+
                </div>
                <div className="text-muted-foreground text-sm">
                  Projects Delivered
                </div>
              </div>

              <div className="w-px h-12 bg-border" />

              <div>
                <div className="font-display font-bold text-3xl text-primary">
                  98%
                </div>
                <div className="text-muted-foreground text-sm">
                  Client Retention
                </div>
              </div>

              <div className="w-px h-12 bg-border" />

              <div>
                <div className="font-display font-bold text-3xl text-primary">
                  4+
                </div>
                <div className="text-muted-foreground text-sm">
                  Years of Excellence
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative animate-fade-in-up animate-delay-200">
           
              <img
                src="/hero.png"
                alt="Mobile App Preview"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Glow Effects */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent/20 blur-3xl rounded-full -z-10" />
            <div className="absolute -bottom-8 left-6 w-40 h-40 bg-primary/10 blur-3xl rounded-full -z-10" />
          </div>

       
      </div>
    </section>
  );
};

export default Hero;
