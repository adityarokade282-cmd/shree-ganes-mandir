import { useState } from 'react';
import { Heart, CheckCircle, Loader2, Sparkles } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { useReveal } from '@/hooks/useReveal';
import { LotusDivider } from '@/components/decorative/OmSymbol';

const presetAmounts = [101, 501, 1001];

export function Donation() {
  const { ref, isVisible } = useReveal();
  const [selectedAmount, setSelectedAmount] = useState<number | null>(501);
  const [customAmount, setCustomAmount] = useState('');
  const [donorName, setDonorName] = useState('');
  const [donorMobile, setDonorMobile] = useState('');
  const [donorEmail, setDonorEmail] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const finalAmount = customAmount ? parseInt(customAmount, 10) : selectedAmount;

  const handleDonate = async () => {
    if (!finalAmount || finalAmount < 1 || !donorName.trim() || !donorMobile.trim() || !donorEmail.trim()) return;

    setStatus('loading');
    const { error } = await supabase.from('donations').insert({
      donor_name: donorName.trim(),
      mobile_number: donorMobile.trim(),
      email: donorEmail.trim(),
      amount: finalAmount,
    });

    if (error) {
      setStatus('error');
    } else {
      setStatus('success');
      setTimeout(() => {
        setStatus('idle');
        setShowForm(false);
        setDonorName('');
        setDonorMobile('');
        setDonorEmail('');
        setCustomAmount('');
        setSelectedAmount(501);
      }, 4000);
    }
  };

  return (
    <section id="donation" className="section-padding bg-cream-50 relative bg-pattern-dots">
      <div className="container-max">
        <div ref={ref} className={`text-center mb-12 reveal ${isVisible ? 'is-visible' : ''}`}>
          <p className="devanagari text-saffron-600 text-lg mb-2">दान सेवा</p>
          <h2 className="devanagari text-4xl md:text-5xl font-bold gradient-text-saffron mb-4">
            मंदिर सेवा में अपना योगदान दें
          </h2>
          <LotusDivider />
          <p className="text-saffron-900/70 max-w-xl mx-auto mt-4 text-sm">
            आपके दान से मंदिर के रखरखाव, अन्नदान, और विभिन्न सेवा कार्यों में सहायता होती है। हर योगदान भगवान गणेश को समर्पित है।
          </p>
        </div>

        <div className={`reveal ${isVisible ? 'is-visible' : ''} max-w-2xl mx-auto`} style={{ transitionDelay: '0.2s' }}>
          <div className="bg-white rounded-3xl shadow-2xl shadow-saffron-900/10 p-8 md:p-10 border-2 border-gold-200/60 relative overflow-hidden">
            {/* Decorative top bar */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-saffron-500 via-gold-400 to-deepred-500" />

            {status === 'success' ? (
              <div className="text-center py-8">
                <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6 animate-scale-in">
                  <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="devanagari text-2xl font-bold text-saffron-800 mb-2">धन्यवाद!</h3>
                <p className="text-saffron-900/70">आपके दान के लिए हृदय से आभार। 🙏</p>
                <p className="text-sm text-saffron-600 mt-2">भगवान गणेश आपको आशीर्वाद दें।</p>
              </div>
            ) : showForm ? (
              <div className="space-y-5">
                <div className="text-center mb-4">
                  <p className="text-sm text-saffron-700">दान राशि चुनें</p>
                  <p className="text-3xl font-bold gradient-text-saffron">₹{finalAmount || 0}</p>
                </div>

                {/* Amount buttons */}
                <div className="grid grid-cols-3 gap-3 mb-4">
                  {presetAmounts.map((amt) => (
                    <button
                      key={amt}
                      onClick={() => { setSelectedAmount(amt); setCustomAmount(''); }}
                      className={`py-3 rounded-xl font-bold text-lg transition-all ${
                        selectedAmount === amt && !customAmount
                          ? 'bg-gradient-to-r from-saffron-500 to-saffron-600 text-white shadow-lg scale-105'
                          : 'bg-gold-50 text-saffron-700 border-2 border-gold-200 hover:border-saffron-300'
                      }`}
                    >
                      ₹{amt}
                    </button>
                  ))}
                </div>

                <div className="relative mb-4">
                  <input
                    type="number"
                    min="1"
                    value={customAmount}
                    onChange={(e) => { setCustomAmount(e.target.value); setSelectedAmount(null); }}
                    placeholder="अपनी राशि दर्ज करें (Custom Amount)"
                    className="w-full px-4 py-3 rounded-xl border-2 border-gold-200 focus:border-saffron-400 focus:outline-none focus:ring-2 focus:ring-saffron-400/30 text-saffron-900"
                  />
                </div>

                {/* Donor info */}
                <input
                  type="text"
                  value={donorName}
                  onChange={(e) => setDonorName(e.target.value)}
                  placeholder="पूरा नाम"
                  className="w-full px-4 py-3 rounded-xl border-2 border-gold-200 focus:border-saffron-400 focus:outline-none text-saffron-900"
                />
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="tel"
                    value={donorMobile}
                    onChange={(e) => setDonorMobile(e.target.value.replace(/\D/g, '').slice(0, 10))}
                    placeholder="मोबाइल नंबर"
                    className="w-full px-4 py-3 rounded-xl border-2 border-gold-200 focus:border-saffron-400 focus:outline-none text-saffron-900"
                  />
                  <input
                    type="email"
                    value={donorEmail}
                    onChange={(e) => setDonorEmail(e.target.value)}
                    placeholder="ईमेल"
                    className="w-full px-4 py-3 rounded-xl border-2 border-gold-200 focus:border-saffron-400 focus:outline-none text-saffron-900"
                  />
                </div>

                {status === 'error' && (
                  <p className="text-deepred-600 text-sm text-center">त्रुटि हुई। कृपया पुनः प्रयास करें।</p>
                )}

                <div className="flex gap-3">
                  <button
                    onClick={() => setShowForm(false)}
                    className="btn-secondary flex-1"
                  >
                    वापस
                  </button>
                  <button
                    onClick={handleDonate}
                    disabled={status === 'loading' || !finalAmount || !donorName.trim() || !donorMobile.trim() || !donorEmail.trim()}
                    className="btn-primary flex-1 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === 'loading' ? (
                      <><Loader2 className="w-5 h-5 animate-spin" /> दान हो रहा है...</>
                    ) : (
                      <><Heart className="w-5 h-5" /> दान करें</>
                    )}
                  </button>
                </div>
              </div>
            ) : (
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-saffron-500 to-deepred-600 flex items-center justify-center mx-auto mb-6 shadow-lg animate-float">
                  <Heart className="w-8 h-8 text-white" fill="white" />
                </div>

                <div className="grid grid-cols-3 gap-3 mb-6">
                  {presetAmounts.map((amt) => (
                    <button
                      key={amt}
                      onClick={() => { setSelectedAmount(amt); setCustomAmount(''); setShowForm(true); }}
                      className="py-4 rounded-xl font-bold text-xl bg-gold-50 text-saffron-700 border-2 border-gold-200 hover:border-saffron-400 hover:bg-saffron-50 hover:scale-105 transition-all"
                    >
                      ₹{amt}
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => setShowForm(true)}
                  className="btn-secondary w-full mb-4"
                >
                  <Sparkles className="w-5 h-5" />
                  Custom Amount
                </button>

                <button
                  onClick={() => { setSelectedAmount(501); setShowForm(true); }}
                  className="btn-primary w-full text-base"
                >
                  <Heart className="w-5 h-5" />
                  Donate Now
                </button>

                <p className="text-xs text-saffron-600/60 mt-4">
                  आपका दान सुरक्षित रूप से दर्ज किया जाता है
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
