import { useEffect, useState } from 'react';
import { Menu, X, Phone, ChevronRight } from 'lucide-react';

const navLinks = [
  { label: 'होम',  labelEn: 'Home',     href: '#home' },
  { label: 'मंदिर',  labelEn: 'About',    href: '#about' },
  { label: 'दर्शन',  labelEn: 'Darshan',  href: '#darshan' },
  { label: 'आरती',  labelEn: 'Aarti',    href: '#aarti' },
  { label: 'कार्यक्रम', labelEn: 'Events',   href: '#events' },
  { label: 'गैलरी',  labelEn: 'Gallery',  href: '#gallery' },
  { label: 'प्रसाद',  labelEn: 'Prasad',   href: '#prasad' },
  { label: 'संपर्क',  labelEn: 'Contact',  href: '#contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Top info bar */}
      <div className="bg-deepred-800 text-gold-100 text-xs sm:text-sm py-2 px-4 hidden md:block">
        <div className="container-max flex items-center justify-between">
          <p className="devanagari">ॐ गं गणपतये नमः</p>
          <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-white transition-colors">
            <Phone className="w-3.5 h-3.5" />
            <span>+91 98765 43210</span>
          </a>
        </div>
      </div>

      {/* Main nav */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-cream-50/95 backdrop-blur-md shadow-lg shadow-saffron-900/5'
            : 'bg-cream-50/80 backdrop-blur-sm'
        }`}
      >
        <div className="container-max flex items-center justify-between py-3 px-4 sm:px-6">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group" onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}>
            <div className="w-11 h-11 rounded-full gradient-saffron flex items-center justify-center shadow-lg shadow-saffron-500/30 group-hover:scale-110 transition-transform duration-300">
              <span className="devanagari text-white text-xl font-bold">ॐ</span>
            </div>
            <div className="leading-tight">
              <p className="devanagari text-lg sm:text-xl font-bold text-saffron-700">श्री गणेश मंदिर</p>
              <p className="heading-serif text-xs text-gold-700 tracking-wider">SHREE GANESH MANDIR</p>
            </div>
          </a>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className="px-3 py-2 rounded-lg text-sm font-medium text-saffron-800 hover:bg-saffron-100 hover:text-saffron-600 transition-all duration-300 flex flex-col items-center leading-tight"
                >
                  <span className="devanagari text-[15px]">{link.label}</span>
                  <span className="text-[10px] text-gold-600 tracking-wide uppercase">{link.labelEn}</span>
                </a>
              </li>
            ))}
            <li>
              <button
                onClick={() => handleNavClick('#booking')}
                className="btn-primary text-sm ml-2"
              >
                पूजा बुक करें
                <ChevronRight className="w-4 h-4" />
              </button>
            </li>
          </ul>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 rounded-lg text-saffron-700 hover:bg-saffron-100 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            mobileOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <ul className="px-4 pb-4 space-y-1 bg-cream-50 border-t border-gold-200">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className="flex items-center justify-between py-3 px-4 rounded-lg text-saffron-800 hover:bg-saffron-100 transition-colors"
                >
                  <span>
                    <span className="devanagari text-base block">{link.label}</span>
                    <span className="text-xs text-gold-600">{link.labelEn}</span>
                  </span>
                  <ChevronRight className="w-4 h-4 text-gold-500" />
                </a>
              </li>
            ))}
            <li className="pt-2">
              <button
                onClick={() => handleNavClick('#booking')}
                className="btn-primary w-full"
              >
                पूजा बुक करें
                <ChevronRight className="w-4 h-4" />
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
