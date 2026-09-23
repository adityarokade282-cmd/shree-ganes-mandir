import { ChevronRight, Bell } from 'lucide-react';
import { OmSymbol } from '@/components/decorative/OmSymbol';

const heroImage = 'https://images.pexels.com/photos/28265483/pexels-photo-28265483.jpeg?auto=compress&cs=tinysrgb&w=1600';

export function Hero() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Lord Ganesha idol decorated with gold"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-deepred-950/70 via-deepred-900/50 to-saffron-900/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-cream-50 via-transparent to-transparent" />
      </div>

      {/* Floating diyas */}
      <div className="absolute top-1/4 left-[8%] hidden md:block animate-float">
        <div className="w-3 h-3 rounded-full bg-gold-300 shadow-[0_0_30px_10px_rgba(247,201,72,0.5)]" />
      </div>
      <div className="absolute top-1/3 right-[10%] hidden md:block animate-float" style={{ animationDelay: '2s' }}>
        <div className="w-3 h-3 rounded-full bg-gold-300 shadow-[0_0_30px_10px_rgba(247,201,72,0.5)]" />
      </div>
      <div className="absolute bottom-1/4 left-[15%] hidden md:block animate-float" style={{ animationDelay: '4s' }}>
        <div className="w-3 h-3 rounded-full bg-gold-300 shadow-[0_0_30px_10px_rgba(247,201,72,0.5)]" />
      </div>

      {/* Temple bells decoration */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 text-gold-300/40 animate-bell-swing hidden sm:block">
        <Bell className="w-8 h-8" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-20 pb-32">
        <div className="animate-fade-in-down mb-4">
          <OmSymbol className="text-5xl sm:text-6xl text-gold-300 drop-shadow-lg" />
        </div>

        <p
          className="devanagari text-gold-200 text-lg sm:text-xl mb-3 animate-fade-in"
          style={{ animationDelay: '0.2s', opacity: 0 }}
        >
          श्री गणेशाय नमः
        </p>

        <h1
          className="devanagari text-5xl sm:text-7xl md:text-8xl font-bold text-white text-shadow-lg animate-fade-in-up mb-6"
          style={{ animationDelay: '0.3s', opacity: 0 }}
        >
          श्री गणेश मंदिर
        </h1>

        <div
          className="flex items-center justify-center gap-3 mb-6 animate-fade-in"
          style={{ animationDelay: '0.5s', opacity: 0 }}
        >
          <div className="h-px w-12 bg-gold-400" />
          <span className="heading-serif text-gold-300 text-sm tracking-[0.3em] uppercase">Shree Ganesh Mandir</span>
          <div className="h-px w-12 bg-gold-400" />
        </div>

        <p
          className="text-white/90 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10 animate-fade-in-up text-shadow-md"
          style={{ animationDelay: '0.6s', opacity: 0 }}
        >
          विघ्नहर्ता श्री गणेश जी के चरणों में समर्पित यह पवित्र मंदिर,
          श्रद्धा और भक्ति का केंद्र है। यहाँ आए भक्तों की सारी मनोकामनाएँ पूरी होती हैं।
        </p>

        <div
          className="flex flex-wrap items-center justify-center gap-4 animate-fade-in-up"
          style={{ animationDelay: '0.8s', opacity: 0 }}
        >
          <button onClick={() => scrollTo('#darshan')} className="btn-primary text-base">
            दर्शन करें
            <ChevronRight className="w-5 h-5" />
          </button>
          <button onClick={() => scrollTo('#booking')} className="btn-primary text-base bg-gradient-to-r from-deepred-700 to-deepred-600 shadow-deepred-500/30">
            पूजा बुक करें
            <ChevronRight className="w-5 h-5" />
          </button>
          <button onClick={() => scrollTo('#contact')} className="btn-outline text-base">
            संपर्क करें
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-gold-300/60 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 rounded-full bg-gold-300 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
