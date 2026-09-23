import { useState } from 'react';
import { ShoppingBag, CheckCircle, Loader2, Minus, Plus } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { useReveal } from '@/hooks/useReveal';
import { LotusDivider } from '@/components/decorative/OmSymbol';

const prasadItems = [
  {
    sanskrit: 'मोदक',
    english: 'Modak',
    desc: 'गणेश जी का प्रिय भोग, नारियल और गुड़ से बना परंपरागत मोदक',
    price: 51,
    image: 'https://images.pexels.com/photos/8887053/pexels-photo-8887053.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    sanskrit: 'पंचामृत प्रसाद',
    english: 'Panchamrit Prasad',
    desc: 'दूध, दही, घी, शहद और गुड़ से बना पवित्र पंचामृत',
    price: 31,
    image: 'https://images.pexels.com/photos/8819252/pexels-photo-8819252.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    sanskrit: 'लड्डू प्रसाद',
    english: 'Laddu Prasad',
    desc: 'बेसन के लड्डू, भगवान गणेश को समर्पित मीठा प्रसाद',
    price: 41,
    image: 'https://images.pexels.com/photos/8887078/pexels-photo-8887078.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    sanskrit: 'फल प्रसाद',
    english: 'Fruit Prasad',
    desc: 'ताजे फलों का प्रसाद, केला, सेब और अंगूर के साथ',
    price: 101,
    image: 'https://images.pexels.com/photos/39080855/pexels-photo-39080855.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

export function Prasad() {
  const { ref, isVisible } = useReveal();
  const [orderingIndex, setOrderingIndex] = useState<number | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [customerName, setCustomerName] = useState('');
  const [customerMobile, setCustomerMobile] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const startOrder = (index: number) => {
    setOrderingIndex(index);
    setQuantity(1);
    setStatus('idle');
  };

  const submitOrder = async () => {
    if (orderingIndex === null || !customerName.trim() || !customerMobile.trim() || !customerEmail.trim()) return;

    const item = prasadItems[orderingIndex];
    setStatus('loading');

    const { error } = await supabase.from('prasad_orders').insert({
      customer_name: customerName.trim(),
      mobile_number: customerMobile.trim(),
      email: customerEmail.trim(),
      prasad_name: item.english,
      quantity,
    });

    if (error) {
      setStatus('error');
    } else {
      setStatus('success');
      setTimeout(() => {
        setOrderingIndex(null);
        setCustomerName('');
        setCustomerMobile('');
        setCustomerEmail('');
        setStatus('idle');
      }, 3500);
    }
  };

  return (
    <section id="prasad" className="section-padding bg-cream-50 relative bg-pattern-mandala">
      <div className="container-max">
        <div ref={ref} className={`text-center mb-12 reveal ${isVisible ? 'is-visible' : ''}`}>
          <p className="devanagari text-saffron-600 text-lg mb-2">प्रसाद सेवा</p>
          <h2 className="heading-serif text-4xl md:text-5xl font-bold gradient-text-saffron mb-4">
            Prasad Section
          </h2>
          <LotusDivider />
          <p className="text-saffron-900/70 max-w-xl mx-auto mt-4 text-sm">
            भगवान गणेश का पवित्र प्रसाद घर लाएँ। विभिन्न प्रकार के प्रसाद उपलब्ध हैं।
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {prasadItems.map((item, i) => (
            <div
              key={item.english}
              className={`reveal ${isVisible ? 'is-visible' : ''} group bg-white rounded-2xl overflow-hidden shadow-lg card-hover border border-gold-200/50`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.english}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-saffron-900/30 to-transparent" />
                <div className="absolute top-3 left-3 px-3 py-1.5 rounded-full bg-saffron-500 text-white text-sm font-bold shadow-lg">
                  ₹{item.price}
                </div>
              </div>
              <div className="p-5">
                <h3 className="devanagari text-xl font-bold text-saffron-800">{item.sanskrit}</h3>
                <p className="heading-serif text-sm text-gold-700 mb-2">{item.english}</p>
                <p className="text-sm text-saffron-900/70 leading-relaxed mb-4">{item.desc}</p>
                <button
                  onClick={() => startOrder(i)}
                  className="btn-primary w-full text-sm"
                >
                  <ShoppingBag className="w-4 h-4" />
                  ऑर्डर करें
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Order modal */}
      {orderingIndex !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-deepred-950/60 backdrop-blur-sm animate-fade-in"
          onClick={() => setOrderingIndex(null)}
        >
          <div
            className="bg-cream-50 rounded-3xl shadow-2xl max-w-md w-full p-6 md:p-8 relative overflow-hidden animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-saffron-500 to-gold-400" />

            {status === 'success' ? (
              <div className="text-center py-6">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="devanagari text-xl font-bold text-saffron-800 mb-1">ऑर्डर सफल!</h3>
                <p className="text-sm text-saffron-700">प्रसाद जल्द भेजा जाएगा। 🙏</p>
              </div>
            ) : (
              <>
                <div className="flex items-center gap-4 mb-5">
                  <img
                    src={prasadItems[orderingIndex].image}
                    alt={prasadItems[orderingIndex].english}
                    className="w-16 h-16 rounded-xl object-cover"
                  />
                  <div>
                    <h3 className="devanagari text-xl font-bold text-saffron-800">{prasadItems[orderingIndex].sanskrit}</h3>
                    <p className="text-sm text-gold-700">₹{prasadItems[orderingIndex].price} × {quantity} = ₹{prasadItems[orderingIndex].price * quantity}</p>
                  </div>
                </div>

                {/* Quantity */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-sm text-saffron-700 font-medium">संख्या:</span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-8 h-8 rounded-lg bg-gold-100 text-saffron-700 flex items-center justify-center hover:bg-gold-200"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-10 text-center font-bold text-saffron-800">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-8 h-8 rounded-lg bg-gold-100 text-saffron-700 flex items-center justify-center hover:bg-gold-200"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <input
                  type="text"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="पूरा नाम"
                  className="w-full px-4 py-3 rounded-xl border-2 border-gold-200 focus:border-saffron-400 focus:outline-none text-saffron-900 mb-3"
                />
                <input
                  type="tel"
                  value={customerMobile}
                  onChange={(e) => setCustomerMobile(e.target.value.replace(/\D/g, '').slice(0, 10))}
                  placeholder="मोबाइल नंबर"
                  className="w-full px-4 py-3 rounded-xl border-2 border-gold-200 focus:border-saffron-400 focus:outline-none text-saffron-900 mb-3"
                />
                <input
                  type="email"
                  value={customerEmail}
                  onChange={(e) => setCustomerEmail(e.target.value)}
                  placeholder="ईमेल"
                  className="w-full px-4 py-3 rounded-xl border-2 border-gold-200 focus:border-saffron-400 focus:outline-none text-saffron-900 mb-4"
                />

                {status === 'error' && (
                  <p className="text-deepred-600 text-sm text-center mb-3">त्रुटि हुई। पुनः प्रयास करें।</p>
                )}

                <div className="flex gap-3">
                  <button onClick={() => setOrderingIndex(null)} className="btn-secondary flex-1 text-sm">
                    रद्द करें
                  </button>
                  <button
                    onClick={submitOrder}
                    disabled={status === 'loading' || !customerName.trim() || !customerMobile.trim() || !customerEmail.trim()}
                    className="btn-primary flex-1 text-sm disabled:opacity-50"
                  >
                    {status === 'loading' ? (
                      <><Loader2 className="w-4 h-4 animate-spin" /> भेजा जा रहा है...</>
                    ) : (
                      <><ShoppingBag className="w-4 h-4" /> ऑर्डर कन्फर्म</>
                    )}
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
