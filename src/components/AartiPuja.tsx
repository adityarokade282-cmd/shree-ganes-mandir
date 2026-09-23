import { Flame, Sparkles, Crown, Droplets, Star, Gift } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import { LotusDivider } from '@/components/decorative/OmSymbol';

const aartiPujas = [
  {
    icon: Flame,
    sanskrit: 'ककड़ आरती',
    english: 'Kakad Aarti',
    time: '5:30 AM',
    desc: 'प्रातः जागृति के समय भगवान की प्रथम आरती',
    price: '₹51',
  },
  {
    icon: Sparkles,
    sanskrit: 'गणेश आरती',
    english: 'Ganesh Aarti',
    time: '7:00 PM',
    desc: 'संध्या समय भगवान गणेश की विशेष आरती',
    price: '₹101',
  },
  {
    icon: Crown,
    sanskrit: 'महा आरती',
    english: 'Maha Aarti',
    time: '8:00 PM',
    desc: 'रविवार एवं उत्सवों पर भव्य महा आरती',
    price: '₹251',
  },
  {
    icon: Droplets,
    sanskrit: 'अभिषेक पूजा',
    english: 'Abhishek Puja',
    time: '6:00 AM',
    desc: 'पंचामृत से भगवान का पवित्र अभिषेक',
    price: '₹501',
  },
  {
    icon: Star,
    sanskrit: 'विशेष पूजा',
    english: 'Special Puja',
    time: 'समय चुनें',
    desc: 'व्यक्तिगत मनोकामना पूजा अर्चना',
    price: '₹1,001',
  },
  {
    icon: Gift,
    sanskrit: 'गणेश चतुर्थी पूजा',
    english: 'Ganesh Chaturthi Puja',
    time: 'विशेष दिन',
    desc: 'गणेश चतुर्थी पर विशेष उत्सव पूजा',
    price: '₹2,100',
  },
];

export function AartiPuja() {
  const { ref, isVisible } = useReveal();

  return (
    <section id="aarti" className="section-padding bg-cream-50 relative bg-pattern-dots">
      <div className="container-max">
        <div ref={ref} className={`text-center mb-14 reveal ${isVisible ? 'is-visible' : ''}`}>
          <p className="devanagari text-saffron-600 text-lg mb-2">आरती एवं पूजा</p>
          <h2 className="heading-serif text-4xl md:text-5xl font-bold gradient-text-saffron mb-4">
            Aarti &amp; Puja Services
          </h2>
          <LotusDivider />
          <p className="text-saffron-900/70 max-w-xl mx-auto mt-4 text-sm">
            विभिन्न प्रकार की आरती और पूजा सेवाएँ उपलब्ध हैं। अपनी श्रद्धा अनुसार पूजा बुक करें और भगवान गणेश का आशीर्वाद प्राप्त करें।
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {aartiPujas.map((item, i) => (
            <div
              key={item.english}
              className={`reveal ${isVisible ? 'is-visible' : ''} group relative bg-white rounded-2xl p-6 card-hover border-2 border-gold-200/50 hover:border-saffron-300 overflow-hidden`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {/* Top gradient bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-saffron-400 via-gold-400 to-saffron-400" />

              {/* Corner decoration */}
              <div className="absolute -bottom-6 -right-6 w-20 h-20 rounded-full bg-saffron-50 group-hover:bg-gold-100 transition-colors duration-500" />

              <div className="relative flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-saffron-500 to-deepred-600 flex items-center justify-center shadow-md group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-right">
                  <p className="text-xs text-saffron-600 font-medium">दान</p>
                  <p className="text-xl font-bold gradient-text-saffron">{item.price}</p>
                </div>
              </div>

              <h3 className="devanagari text-xl font-bold text-saffron-800 mb-1">{item.sanskrit}</h3>
              <p className="heading-serif text-sm text-gold-700 mb-3">{item.english}</p>
              <p className="text-sm text-saffron-900/70 leading-relaxed mb-4">{item.desc}</p>

              <div className="flex items-center justify-between pt-3 border-t border-gold-100">
                <span className="inline-flex items-center gap-1.5 text-xs text-saffron-600">
                  <span className="devanagari">समय:</span> {item.time}
                </span>
                <button
                  onClick={() => document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-xs font-semibold text-saffron-600 hover:text-saffron-700 hover:underline"
                >
                  बुक करें →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
