import { Clock, MapPin, Star, Award } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import { LotusDivider } from '@/components/decorative/OmSymbol';

const aboutImage = 'https://images.pexels.com/photos/9404692/pexels-photo-9404692.jpeg?auto=compress&cs=tinysrgb&w=1200';

const features = [
  { icon: Clock, title: 'नित्य दर्शन', desc: 'प्रातः 5:00 बजे से रात्रि 10:00 बजे तक' },
  { icon: MapPin, title: 'पवित्र स्थान', desc: 'प्राचीन मंदिर, शहर के मध्य' },
  { icon: Star, title: 'विशेष पूजा', desc: 'गणेश चतुर्थी पर भव्य आयोजन' },
  { icon: Award, title: 'प्राचीन विरासत', desc: '250 वर्षों की अमूल्य परंपरा' },
];

export function About() {
  const { ref, isVisible } = useReveal();

  return (
    <section id="about" className="section-padding bg-pattern-mandala bg-cream-50 relative">
      <div className="container-max">
        {/* Section heading */}
        <div ref={ref} className={`text-center mb-14 reveal ${isVisible ? 'is-visible' : ''}`}>
          <p className="devanagari text-saffron-600 text-lg mb-2">मंदिर परिचय</p>
          <h2 className="heading-serif text-4xl md:text-5xl font-bold gradient-text-saffron mb-4">
            About Our Temple
          </h2>
          <LotusDivider />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className={`relative reveal ${isVisible ? 'is-visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-saffron-900/20 group">
              <img
                src={aboutImage}
                alt="Lord Ganesha in beautifully adorned temple"
                className="w-full h-[480px] object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deepred-900/40 to-transparent" />
            </div>
            {/* Decorative frame */}
            <div className="absolute -inset-3 border-2 border-gold-300/40 rounded-3xl -z-10" />
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-5 border border-gold-200 hidden sm:block">
              <p className="devanagari text-3xl font-bold text-saffron-600">250+</p>
              <p className="text-sm text-saffron-700 font-medium">वर्षों की विरासत</p>
            </div>
          </div>

          {/* Content */}
          <div className={`space-y-6 reveal ${isVisible ? 'is-visible' : ''}`} style={{ transitionDelay: '0.3s' }}>
            <h3 className="devanagari text-3xl font-bold text-saffron-800">
              विघ्नेश्वर का पवित्र धाम
            </h3>

            <p className="text-saffron-900/80 leading-relaxed text-base">
              श्री गणेश मंदिर की स्थापना लगभग 250 वर्ष पूर्व एक पवित्र संत द्वारा की गई थी।
              कहा जाता है कि भगवान गणेश ने स्वयं इस स्थान पर एक भक्त के सपने में प्रकट होकर
              मंदिर स्थापना की आज्ञा दी थी। तब से आज तक, यह मंदिर असंख्य भक्तों की श्रद्धा और विश्वास का केंद्र बना हुआ है।
            </p>

            <p className="text-saffron-900/80 leading-relaxed text-base">
              मंदिर का गर्भगृह प्राचीन वास्तुकला का अद्भुत उदाहरण है, जिसमें स्वयंभू गणेश प्रतिमा
              विराजमान है। प्रतिदिन हजारों भक्त दर्शन हेतु आते हैं और अपनी मनोकामनाएँ पूरी करते हैं।
            </p>

            {/* Timings & location */}
            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              <div className="glass-card rounded-xl p-4">
                <div className="flex items-center gap-2 text-saffron-700 mb-1">
                  <Clock className="w-4 h-4" />
                  <span className="font-semibold text-sm">मंदिर समय</span>
                </div>
                <p className="text-sm text-saffron-900/70">प्रातः 5:00 – रात्रि 10:00</p>
                <p className="text-xs text-saffron-600 mt-1">दोपहर 1:00–4:00 बजे गर्भगृह बंद</p>
              </div>
              <div className="glass-card rounded-xl p-4">
                <div className="flex items-center gap-2 text-saffron-700 mb-1">
                  <MapPin className="w-4 h-4" />
                  <span className="font-semibold text-sm">स्थान</span>
                </div>
                <p className="text-sm text-saffron-900/70">गणेश चौक, पुणे</p>
                <p className="text-xs text-saffron-600 mt-1">महाराष्ट्र, भारत</p>
              </div>
            </div>

            {/* Features grid */}
            <div className="grid grid-cols-2 gap-3 pt-4">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="flex items-start gap-3 p-3 rounded-xl hover:bg-gold-50 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-saffron-100 flex items-center justify-center shrink-0">
                    <f.icon className="w-5 h-5 text-saffron-600" />
                  </div>
                  <div>
                    <p className="devanagari font-semibold text-saffron-800 text-sm">{f.title}</p>
                    <p className="text-xs text-saffron-700/70">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
