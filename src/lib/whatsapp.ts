// WhatsApp Configuration
export const WHATSAPP_CONFIG = {
  phoneNumber: '918512001218',
  defaultMessage: "Hi, I'm interested in discussing enterprise IT solutions for my business in Bahrain.",
};

// Build WhatsApp URL with pre-filled message
export const buildWhatsAppUrl = (message?: string): string => {
  const text = message || WHATSAPP_CONFIG.defaultMessage;
  const encodedMessage = encodeURIComponent(text);
  return `https://wa.me/${WHATSAPP_CONFIG.phoneNumber}?text=${encodedMessage}`;
};

// Build form data message for WhatsApp
export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  budget?: string;   // ✅ ADDED
  message: string;
}

export const buildFormMessage = (data: ContactFormData): string => {
  const sanitize = (str: string) => str.trim().slice(0, 500);

  return `
Hello, I'm interested in your services.

*Name:* ${sanitize(data.name)}
*Email:* ${sanitize(data.email)}
*Phone:* ${data.phone ? sanitize(data.phone) : 'Not provided'}
*Service:* ${data.service || 'Not specified'}
*Budget:* ${data.budget || 'Not specified'}
*Message:* ${sanitize(data.message)}
  `.trim();
};

// Open WhatsApp chat
export const openWhatsApp = (message?: string): void => {
  const url = buildWhatsAppUrl(message);
  window.open(url, '_blank', 'noopener,noreferrer');
};

// Open WhatsApp with form data
export const openWhatsAppWithFormData = (data: ContactFormData): void => {
  const message = buildFormMessage(data);
  openWhatsApp(message);
};
