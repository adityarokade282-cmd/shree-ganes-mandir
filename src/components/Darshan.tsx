import { Sunrise, Sun, Sunset, Moon } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import { LotusDivider } from '@/components/decorative/OmSymbol';

const darshanTimings = [
  {
    icon: Sunrise,
    sanskrit: 'प्रातः दर्शन',
    english: 'Morning Darshan',
    time: '5:00 AM – 8:00 AM',
    desc: 'ककड़ आरती के साथ प्रातः दर्शन',
    color: 'from-amber-400 to-saffron-500',
    bg: 'from-amber-50 to-saffron-50',
  },
  {
    icon: Sun,
    sanskrit: 'मध्यान्ह दर्शन',
    english: 'Afternoon Darshan',
    time: '12:00 PM – 1:00 PM',
    desc: 'नैवेद्य अर्पण का पावन समय',
    color: 'from-saffron-500 to-gold-500',
    bg: 'from-saffron-50 to-gold-50',
  },
  {
    icon: Sunset,
    sanskrit: 'संध्या आरती',
    english: 'Evening Aarti',
    time: '7:00 PM – 8:00 PM',
    desc: 'दीपमाला और भजन के साथ संध्या आरती',
    color: 'from-deepred-500 to-saffron-600',
    bg: 'from-deepred-50 to-saffron-50',
  },
  {
    icon: Moon,
    sanskrit: 'रात्रि दर्शन',
    english: 'Night Darshan',
    time: '8:30 PM – 10:00 PM',
    desc: 'शयन आरती से पूर्व अंतिम दर्शन',
    color: 'from-deepred-700 to-deepred-500',
    bg: 'from-deepred-50 to-cream-100',
  },
];

export function Darshan() {
  const { ref, isVisible } = useReveal();

  return (
    <section id="darshan" className="section-padding bg-gradient-to-b from-cream-50 to-gold-50/50 relative">
      <div className="container-max">
        <div ref={ref} className={`text-center mb-14 reveal ${isVisible ? 'is-visible' : ''}`}>
          <p className="devanagari text-saffron-600 text-lg mb-2">नित्य दर्शन</p>
          <h2 className="heading-serif text-4xl md:text-5xl font-bold gradient-text-saffron mb-4">
            Daily Darshan Timings
          </h2>
          <LotusDivider />
          <p className="text-saffron-900/70 max-w-xl mx-auto mt-4 text-sm">
            प्रतिदिन चार विशेष समय पर भगवान गणेश के दर्शन होते हैं। भक्त अपनी सुविधानुसार किसी भी समय दर्शन हेतु आ सकते हैं।
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {darshanTimings.map((d, i) => (
            <div
              key={d.english}
              className={`reveal ${isVisible ? 'is-visible' : ''} group relative bg-gradient-to-b ${d.bg} rounded-2xl p-6 card-hover border border-gold-200/60 overflow-hidden`}
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              {/* Decorative circle */}
              <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-white/40 group-hover:scale-150 transition-transform duration-700" />

              <div className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${d.color} flex items-center justify-center shadow-lg mb-4 group-hover:rotate-6 transition-transform duration-500`}>
                <d.icon className="w-7 h-7 text-white" />
              </div>

              <h3 className="devanagari text-xl font-bold text-saffron-800 mb-1">{d.sanskrit}</h3>
              <p className="heading-serif text-sm text-gold-700 mb-3">{d.english}</p>

              <div className={`inline-block px-3 py-1.5 rounded-full bg-gradient-to-r ${d.color} text-white text-sm font-semibold shadow-sm mb-3`}>
                {d.time}
              </div>

              <p className="text-sm text-saffron-900/70 leading-relaxed">{d.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
