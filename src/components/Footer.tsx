import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, Twitter, Heart } from 'lucide-react';
import { OmSymbol } from '@/components/decorative/OmSymbol';

const quickLinks = [
  { label: 'होम', href: '#home' },
  { label: 'मंदर परिचय', href: '#about' },
  { label: 'नित्य दर्शन', href: '#darshan' },
  { label: 'आरती एवं पूजा', href: '#aarti' },
  { label: 'कार्यक्रम', href: '#events' },
  { label: 'गैलरी', href: '#gallery' },
  { label: 'प्रसाद', href: '#prasad' },
];

const aartiTimings = [
  { name: 'ककड़ आरती', time: '5:30 AM' },
  { name: 'गणेश आरती', time: '7:00 PM' },
  { name: 'महा आरती', time: '8:00 PM' },
  { name: 'शयन आरती', time: '9:30 PM' },
];

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Youtube, href: '#', label: 'YouTube' },
  { icon: Twitter, href: '#', label: 'Twitter' },
];

export function Footer() {
  const handleNavClick = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-deepred-950 text-gold-100 relative overflow-hidden">
      {/* Top decorative border */}
      <div className="h-1.5 bg-gradient-to-r from-saffron-500 via-gold-400 to-saffron-500" />

      <div className="absolute inset-0 bg-pattern-mandala opacity-10" />

      <div className="container-max relative py-14 px-4 sm:px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {/* Temple info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full gradient-saffron flex items-center justify-center shadow-lg">
                <OmSymbol className="text-white text-2xl" />
              </div>
              <div>
                <p className="devanagari text-xl font-bold text-gold-200">श्री गणेश मंदिर</p>
                <p className="heading-serif text-xs text-gold-400 tracking-wider">SHREE GANESH MANDIR</p>
              </div>
            </div>
            <p className="text-sm text-gold-200/70 leading-relaxed mb-5">
              विघ्नहर्ता श्री गणेश के चरणों में समर्पित पवित्र धाम।
              श्रद्धा, भक्ति और सेवा का केंद्र।
            </p>
            {/* Social icons */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-deepred-800 hover:bg-saffron-500 flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <social.icon className="w-5 h-5 text-gold-200" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="devanagari text-lg font-bold text-gold-200 mb-4 flex items-center gap-2">
              <span className="w-1 h-5 rounded-full bg-saffron-500" />
              त्वरित लिंक
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                    className="text-sm text-gold-200/70 hover:text-saffron-400 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-500 group-hover:bg-saffron-400 transition-colors" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Aarti timings */}
          <div>
            <h3 className="devanagari text-lg font-bold text-gold-200 mb-4 flex items-center gap-2">
              <span className="w-1 h-5 rounded-full bg-saffron-500" />
              आरती समय
            </h3>
            <ul className="space-y-3">
              {aartiTimings.map((timing) => (
                <li key={timing.name} className="flex items-center justify-between text-sm">
                  <span className="devanagari text-gold-200/80">{timing.name}</span>
                  <span className="text-saffron-400 font-medium">{timing.time}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="devanagari text-lg font-bold text-gold-200 mb-4 flex items-center gap-2">
              <span className="w-1 h-5 rounded-full bg-saffron-500" />
              संपर्क
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-saffron-400 shrink-0 mt-0.5" />
                <span className="text-gold-200/70">गणेश चौक, पुणे, महाराष्ट्र 411001, भारत</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-saffron-400 shrink-0" />
                <a href="tel:+919876543210" className="text-gold-200/70 hover:text-saffron-400 transition-colors">+91 98765 43210</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-saffron-400 shrink-0" />
                <a href="mailto:info@shreeganeshmandir.org" className="text-gold-200/70 hover:text-saffron-400 transition-colors">info@shreeganeshmandir.org</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-gold-800/40 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gold-300/60 text-center sm:text-left">
            © 2026 श्री गणेश मंदिर। सर्वाधिकार सुरक्षित।
          </p>
          <p className="text-xs text-gold-300/60 flex items-center gap-1.5">
            <span className="devanagari">श्रद्धा और भक्ति के साथ बनाया गया</span>
            <Heart className="w-3 h-3 text-saffron-500 fill-saffron-500" />
          </p>
        </div>
      </div>
    </footer>
  );
}
