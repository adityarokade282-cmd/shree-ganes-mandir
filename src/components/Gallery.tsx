import { useReveal } from '@/hooks/useReveal';
import { LotusDivider } from '@/components/decorative/OmSymbol';

const galleryImages = [
  { url: 'https://images.pexels.com/photos/28265483/pexels-photo-28265483.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'गणेश प्रतिमा', eng: 'Ganesh Idol', category: 'Idol' },
  { url: 'https://images.pexels.com/photos/9404692/pexels-photo-9404692.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'मंदिर दृश्य', eng: 'Temple View', category: 'Temple' },
  { url: 'https://images.pexels.com/photos/30425298/pexels-photo-30425298.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'आरती', eng: 'Aarti', category: 'Aarti' },
  { url: 'https://images.pexels.com/photos/29761493/pexels-photo-29761493.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'गणेश उत्सव', eng: 'Festival', category: 'Festival' },
  { url: 'https://images.pexels.com/photos/29215357/pexels-photo-29215357.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'सजावट', eng: 'Decorations', category: 'Decoration' },
  { url: 'https://images.pexels.com/photos/28288474/pexels-photo-28288474.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'भक्तगण', eng: 'Devotees', category: 'Devotees' },
  { url: 'https://images.pexels.com/photos/39626459/pexels-photo-39626459.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'विराजमान गणेश', eng: 'Adorned Ganesha', category: 'Idol' },
  { url: 'https://images.pexels.com/photos/34428307/pexels-photo-34428307.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'दीयों की रोशनी', eng: 'Diya Lights', category: 'Decoration' },
  { url: 'https://images.pexels.com/photos/30722659/pexels-photo-30722659.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'माला पूजा', eng: 'Garland Puja', category: 'Aarti' },
];

export function Gallery() {
  const { ref, isVisible } = useReveal();

  return (
    <section id="gallery" className="section-padding bg-gradient-to-b from-cream-50 to-gold-50/30 relative">
      <div className="container-max">
        <div ref={ref} className={`text-center mb-12 reveal ${isVisible ? 'is-visible' : ''}`}>
          <p className="devanagari text-saffron-600 text-lg mb-2">गैलरी</p>
          <h2 className="heading-serif text-4xl md:text-5xl font-bold gradient-text-saffron mb-4">
            Temple Gallery
          </h2>
          <LotusDivider />
          <p className="text-saffron-900/70 max-w-xl mx-auto mt-4 text-sm">
            मंदिर के पवित्र क्षणों की झलकियाँ — गणेश प्रतिमा, आरती, उत्सव और भक्तों की श्रद्धा।
          </p>
        </div>

        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className={`reveal ${isVisible ? 'is-visible' : ''} group relative break-inside-avoid overflow-hidden rounded-2xl shadow-lg cursor-pointer`}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <img
                src={img.url}
                alt={img.eng}
                className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deepred-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <p className="devanagari text-white font-semibold text-lg">{img.title}</p>
                <p className="text-gold-200 text-xs">{img.eng}</p>
              </div>
              {/* Category badge */}
              <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-saffron-500/90 text-white text-[10px] font-bold uppercase tracking-wide backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {img.category}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
