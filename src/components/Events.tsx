import { Calendar, MapPin, ChevronRight } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import { LotusDivider } from '@/components/decorative/OmSymbol';

const events = [
  {
    sanskrit: 'गणेश चतुर्थी',
    english: 'Ganesh Chaturthi',
    date: '28 अगस्त 2026',
    time: 'सुबह 5:00 बजे',
    desc: 'भगवान गणेश का जन्मोत्सव, 11 दिन का भव्य आयोजन',
    image: 'https://images.pexels.com/photos/29761493/pexels-photo-29761493.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: true,
  },
  {
    sanskrit: 'संकष्टी चतुर्थी',
    english: 'Sankashti Chaturthi',
    date: 'हर माह कृष्ण चतुर्थी',
    time: 'सायं 6:00 बजे',
    desc: 'चंद्र दर्शन के साथ विशेष व्रत एवं पूजा',
    image: 'https://images.pexels.com/photos/34428307/pexels-photo-34428307.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: false,
  },
  {
    sanskrit: 'अंगारकी चतुर्थी',
    english: 'Angarki Chaturthi',
    date: 'मंगलवार को संकष्टी',
    time: 'सायं 7:00 बजे',
    desc: 'मंगलवार के दिन संकष्टी चतुर्थी का विशेष महत्व',
    image: 'https://images.pexels.com/photos/30425298/pexels-photo-30425298.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: false,
  },
  {
    sanskrit: 'विशेष आरती',
    english: 'Special Aarti',
    date: 'प्रत्येक रविवार',
    time: 'सायं 8:00 बजे',
    desc: 'रविवार को महा आरती एवं भजन संध्या',
    image: 'https://images.pexels.com/photos/32357382/pexels-photo-32357382.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: false,
  },
  {
    sanskrit: 'मंदिर उत्सव',
    english: 'Temple Festivals',
    date: 'वर्ष भर',
    time: 'विभिन्न समय',
    desc: 'दीपावली, मकर संक्रांति, होली पर विशेष आयोजन',
    image: 'https://images.pexels.com/photos/29215357/pexels-photo-29215357.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: false,
  },
];

export function Events() {
  const { ref, isVisible } = useReveal();
  const [featured, ...rest] = events;

  return (
    <section id="events" className="section-padding bg-gradient-to-b from-gold-50/50 to-cream-50 relative">
      <div className="container-max">
        <div ref={ref} className={`text-center mb-14 reveal ${isVisible ? 'is-visible' : ''}`}>
          <p className="devanagari text-saffron-600 text-lg mb-2">आगामी कार्यक्रम</p>
          <h2 className="heading-serif text-4xl md:text-5xl font-bold gradient-text-saffron mb-4">
            Upcoming Events
          </h2>
          <LotusDivider />
        </div>

        {/* Featured event */}
        <div className={`reveal ${isVisible ? 'is-visible' : ''} mb-8`} style={{ transitionDelay: '0.2s' }}>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-saffron-900/20 group">
            <img
              src={featured.image}
              alt={featured.english}
              className="w-full h-[400px] md:h-[450px] object-cover group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deepred-950/90 via-deepred-900/40 to-transparent" />

            {/* Featured badge */}
            <div className="absolute top-6 left-6 px-4 py-2 rounded-full bg-saffron-500 text-white text-xs font-bold tracking-wide shadow-lg animate-glow">
              ★ विशेष कार्यक्रम
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
              <p className="devanagari text-gold-200 text-sm mb-1">{featured.date}</p>
              <h3 className="devanagari text-3xl md:text-4xl font-bold text-white mb-2 text-shadow-md">{featured.sanskrit}</h3>
              <p className="heading-serif text-gold-300 text-lg mb-3">{featured.english}</p>
              <p className="text-white/90 max-w-lg leading-relaxed mb-4 text-sm md:text-base">{featured.desc}</p>
              <div className="flex flex-wrap gap-4 items-center">
                <span className="inline-flex items-center gap-2 text-gold-200 text-sm">
                  <Calendar className="w-4 h-4" /> {featured.date}
                </span>
                <span className="inline-flex items-center gap-2 text-gold-200 text-sm">
                  <MapPin className="w-4 h-4" /> {featured.time}
                </span>
                <button
                  onClick={() => document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' })}
                  className="btn-primary text-sm"
                >
                  पूजा बुक करें
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Other events grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {rest.map((event, i) => (
            <div
              key={event.english}
              className={`reveal ${isVisible ? 'is-visible' : ''} group rounded-2xl overflow-hidden bg-white shadow-lg card-hover border border-gold-200/50`}
              style={{ transitionDelay: `${(i + 1) * 0.1}s` }}
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.english}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-saffron-900/60 to-transparent" />
                <div className="absolute bottom-2 left-3 right-3">
                  <p className="devanagari text-white font-semibold text-sm">{event.date}</p>
                </div>
              </div>
              <div className="p-5">
                <h3 className="devanagari text-lg font-bold text-saffron-800">{event.sanskrit}</h3>
                <p className="heading-serif text-xs text-gold-700 mb-2">{event.english}</p>
                <p className="text-xs text-saffron-900/70 leading-relaxed mb-3">{event.desc}</p>
                <p className="text-xs text-saffron-600 font-medium flex items-center gap-1">
                  <MapPin className="w-3 h-3" /> {event.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
