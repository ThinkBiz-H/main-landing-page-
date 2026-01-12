import { MessageCircle } from 'lucide-react';
import { buildWhatsAppUrl } from '@/lib/whatsapp';

const WhatsAppButton = () => {
  const whatsappLink = buildWhatsAppUrl();

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 whatsapp-bounce"
      aria-label="Chat on WhatsApp"
    >
      <div className="relative whatsapp-pulse">
        <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[hsl(142,76%,49%)] flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300">
          <MessageCircle className="w-7 h-7 md:w-8 md:h-8 text-white" />
        </div>
      </div>
      
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-3 opacity-0 hover:opacity-100 pointer-events-none transition-opacity duration-300">
        <div className="bg-secondary text-secondary-foreground text-sm font-medium px-4 py-2 rounded-lg shadow-lg whitespace-nowrap">
          Chat with us
          <div className="absolute -bottom-1 right-6 w-2 h-2 bg-secondary rotate-45" />
        </div>
      </div>
    </a>
  );
};

export default WhatsAppButton;
