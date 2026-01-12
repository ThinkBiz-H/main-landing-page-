import Header from '@/components/Header';
import Hero from '@/components/Hero';
import TrustSection from '@/components/TrustSection';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import Process from '@/components/Process';
import Portfolio from '@/components/Portfolio';
import Testimonials from '@/components/Testimonials';
import CTASection from '@/components/CTASection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <TrustSection />
        <Services />
        <WhyChooseUs />
        <Process />
        <Portfolio />
        <Testimonials />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
