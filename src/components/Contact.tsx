import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import { LotusDivider } from '@/components/decorative/OmSymbol';

const contactInfo = [
  { icon: MapPin, sanskrit: 'पता', english: 'Address', value: 'गणेश चौक, पुणे, महाराष्ट्र 411001, भारत' },
  { icon: Phone, sanskrit: 'फ़ोन', english: 'Phone', value: '+91 98765 43210' },
  { icon: Mail, sanskrit: 'ईमेल', english: 'Email', value: 'info@shreeganeshmandir.org' },
  { icon: Clock, sanskrit: 'समय', english: 'Hours', value: 'रोज़ 5:00 AM – 10:00 PM' },
];

export function Contact() {
  const { ref, isVisible } = useReveal();

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-gold-50/30 to-cream-50 relative">
      <div className="container-max">
        <div ref={ref} className={`text-center mb-12 reveal ${isVisible ? 'is-visible' : ''}`}>
          <p className="devanagari text-saffron-600 text-lg mb-2">संपर्क</p>
          <h2 className="heading-serif text-4xl md:text-5xl font-bold gradient-text-saffron mb-4">
            Contact Us
          </h2>
          <LotusDivider />
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact info cards */}
          <div className={`reveal ${isVisible ? 'is-visible' : ''} space-y-4`} style={{ transitionDelay: '0.2s' }}>
            {contactInfo.map((info) => (
              <div
                key={info.english}
                className="flex items-start gap-4 bg-white rounded-2xl p-5 shadow-md border border-gold-200/50 card-hover"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-saffron-500 to-deepred-600 flex items-center justify-center shrink-0 shadow-md">
                  <info.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="devanagari text-lg font-bold text-saffron-800">{info.sanskrit}</p>
                  <p className="text-xs text-gold-600 mb-1">{info.english}</p>
                  <p className="text-sm text-saffron-900/80">{info.value}</p>
                </div>
              </div>
            ))}

            {/* WhatsApp button */}
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold shadow-lg shadow-green-500/30 hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
            >
              <MessageCircle className="w-6 h-6" />
              <span>WhatsApp पर संपर्क करें</span>
            </a>
          </div>

          {/* Google Map */}
          <div className={`reveal ${isVisible ? 'is-visible' : ''}`} style={{ transitionDelay: '0.3s' }}>
            <div className="rounded-3xl overflow-hidden shadow-xl border-2 border-gold-200/50 h-full min-h-[400px]">
              <iframe
                title="Shree Ganesh Mandir Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.9!2d73.8567!3d18.5204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDMxJzEzLjQiTiA3M8KwNTEnMjQuMiJF!5e0!3m2!1sen!2sin!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
