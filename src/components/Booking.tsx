import { useState, type FormEvent } from 'react';
import { User, Phone, Mail, Calendar, Clock, Users, MessageSquare, Send, CheckCircle, Loader2 } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { useReveal } from '@/hooks/useReveal';
import { LotusDivider } from '@/components/decorative/OmSymbol';

const pujaOptions = [
  'ककड़ आरती (Kakad Aarti)',
  'गणेश आरती (Ganesh Aarti)',
  'महा आरती (Maha Aarti)',
  'अभिषेक पूजा (Abhishek Puja)',
  'विशेष पूजा (Special Puja)',
  'गणेश चतुर्थी पूजा (Ganesh Chaturthi Puja)',
];

interface FormState {
  devoteeName: string;
  mobileNumber: string;
  email: string;
  pujaType: string;
  preferredDate: string;
  preferredTime: string;
  numberOfDevotees: string;
  message: string;
}

const initialForm: FormState = {
  devoteeName: '',
  mobileNumber: '',
  email: '',
  pujaType: '',
  preferredDate: '',
  preferredTime: '',
  numberOfDevotees: '1',
  message: '',
};

export function Booking() {
  const { ref, isVisible } = useReveal();
  const [form, setForm] = useState<FormState>(initialForm);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});

  const validate = (): boolean => {
    const e: Partial<Record<keyof FormState, string>> = {};
    if (!form.devoteeName.trim()) e.devoteeName = 'कृपया नाम दर्ज करें';
    if (!/^[6-9]\d{9}$/.test(form.mobileNumber)) e.mobileNumber = 'वैध मोबाइल नंबर दर्ज करें';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'वैध ईमेल दर्ज करें';
    if (!form.pujaType) e.pujaType = 'पूजा चुनें';
    if (!form.preferredDate) e.preferredDate = 'तिथि चुनें';
    if (!form.preferredTime) e.preferredTime = 'समय चुनें';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('loading');
    const { error } = await supabase.from('puja_bookings').insert({
      devotee_name: form.devoteeName.trim(),
      mobile_number: form.mobileNumber.trim(),
      email: form.email.trim(),
      puja_type: form.pujaType,
      preferred_date: form.preferredDate,
      preferred_time: form.preferredTime,
      number_of_devotees: parseInt(form.numberOfDevotees, 10) || 1,
      message: form.message.trim() || null,
    });

    if (error) {
      setStatus('error');
    } else {
      setStatus('success');
      setForm(initialForm);
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const inputClass = (field: keyof FormState) =>
    `w-full pl-11 pr-4 py-3 rounded-xl border-2 bg-white/80 text-saffron-900 placeholder-saffron-400/60 focus:outline-none focus:ring-2 focus:ring-saffron-400/50 transition-all ${
      errors[field] ? 'border-deepred-400 bg-deepred-50/30' : 'border-gold-200 focus:border-saffron-400'
    }`;

  return (
    <section id="booking" className="section-padding bg-gradient-to-br from-saffron-900 via-deepred-800 to-saffron-800 relative overflow-hidden">
      {/* Decorative pattern */}
      <div className="absolute inset-0 bg-pattern-mandala opacity-20" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent" />

      <div className="container-max relative">
        <div ref={ref} className={`text-center mb-12 reveal ${isVisible ? 'is-visible' : ''}`}>
          <p className="devanagari text-gold-300 text-lg mb-2">ऑनलाइन पूजा बुकिंग</p>
          <h2 className="heading-serif text-4xl md:text-5xl font-bold text-white mb-4">
            Online Puja Booking
          </h2>
          <LotusDivider className="[&_div]:bg-gold-400 [&_svg]:text-gold-300" />
          <p className="text-gold-200/80 max-w-xl mx-auto mt-4 text-sm">
            अपनी श्रद्धा अनुसार पूजा बुक करें। फॉर्म भरें और हमारी टीम आपको शीघ्र संपर्क करेगी।
          </p>
        </div>

        <div className={`reveal ${isVisible ? 'is-visible' : ''} max-w-3xl mx-auto`} style={{ transitionDelay: '0.2s' }}>
          <div className="bg-cream-50 rounded-3xl shadow-2xl p-6 md:p-10 relative overflow-hidden">
            {/* Corner decorations */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-gold-200/40 to-transparent rounded-br-[100px]" />
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-saffron-200/40 to-transparent rounded-tl-[100px]" />

            {status === 'success' ? (
              <div className="relative text-center py-12">
                <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6 animate-scale-in">
                  <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="devanagari text-2xl font-bold text-saffron-800 mb-2">बुकिंग सफल!</h3>
                <p className="text-saffron-900/70 mb-4">आपकी पूजा बुकिंग सफलतापूर्वक दर्ज हो गई है।</p>
                <p className="text-sm text-saffron-600">हमारी टीम जल्द ही आपसे संपर्क करेगी। 🙏</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="relative space-y-5" noValidate>
                <div className="grid sm:grid-cols-2 gap-5">
                  {/* Devotee Name */}
                  <div>
                    <label className="block text-sm font-medium text-saffron-700 mb-1.5">
                      भक्त नाम <span className="text-deepred-500">*</span>
                    </label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-saffron-400" />
                      <input
                        type="text"
                        value={form.devoteeName}
                        onChange={(e) => handleChange('devoteeName', e.target.value)}
                        placeholder="आपका पूरा नाम"
                        className={inputClass('devoteeName')}
                      />
                    </div>
                    {errors.devoteeName && <p className="text-deepred-500 text-xs mt-1">{errors.devoteeName}</p>}
                  </div>

                  {/* Mobile Number */}
                  <div>
                    <label className="block text-sm font-medium text-saffron-700 mb-1.5">
                      मोबाइल नंबर <span className="text-deepred-500">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-saffron-400" />
                      <input
                        type="tel"
                        value={form.mobileNumber}
                        onChange={(e) => handleChange('mobileNumber', e.target.value.replace(/\D/g, '').slice(0, 10))}
                        placeholder="98765 43210"
                        className={inputClass('mobileNumber')}
                      />
                    </div>
                    {errors.mobileNumber && <p className="text-deepred-500 text-xs mt-1">{errors.mobileNumber}</p>}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-saffron-700 mb-1.5">
                      ईमेल <span className="text-deepred-500">*</span>
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-saffron-400" />
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        placeholder="bhakt@example.com"
                        className={inputClass('email')}
                      />
                    </div>
                    {errors.email && <p className="text-deepred-500 text-xs mt-1">{errors.email}</p>}
                  </div>

                  {/* Puja Type */}
                  <div>
                    <label className="block text-sm font-medium text-saffron-700 mb-1.5">
                      पूजा चुनें <span className="text-deepred-500">*</span>
                    </label>
                    <div className="relative">
                      <Send className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-saffron-400" />
                      <select
                        value={form.pujaType}
                        onChange={(e) => handleChange('pujaType', e.target.value)}
                        className={inputClass('pujaType')}
                      >
                        <option value="">पूजा चुनें</option>
                        {pujaOptions.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>
                    {errors.pujaType && <p className="text-deepred-500 text-xs mt-1">{errors.pujaType}</p>}
                  </div>
                </div>

                <div className="grid sm:grid-cols-3 gap-5">
                  {/* Date */}
                  <div>
                    <label className="block text-sm font-medium text-saffron-700 mb-1.5">
                      तिथि <span className="text-deepred-500">*</span>
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-saffron-400 z-10" />
                      <input
                        type="date"
                        value={form.preferredDate}
                        min={new Date().toISOString().split('T')[0]}
                        onChange={(e) => handleChange('preferredDate', e.target.value)}
                        className={inputClass('preferredDate')}
                      />
                    </div>
                    {errors.preferredDate && <p className="text-deepred-500 text-xs mt-1">{errors.preferredDate}</p>}
                  </div>

                  {/* Time */}
                  <div>
                    <label className="block text-sm font-medium text-saffron-700 mb-1.5">
                      समय <span className="text-deepred-500">*</span>
                    </label>
                    <div className="relative">
                      <Clock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-saffron-400 z-10" />
                      <input
                        type="time"
                        value={form.preferredTime}
                        onChange={(e) => handleChange('preferredTime', e.target.value)}
                        className={inputClass('preferredTime')}
                      />
                    </div>
                    {errors.preferredTime && <p className="text-deepred-500 text-xs mt-1">{errors.preferredTime}</p>}
                  </div>

                  {/* Number of Devotees */}
                  <div>
                    <label className="block text-sm font-medium text-saffron-700 mb-1.5">
                      भक्तों की संख्या
                    </label>
                    <div className="relative">
                      <Users className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-saffron-400" />
                      <input
                        type="number"
                        min="1"
                        max="100"
                        value={form.numberOfDevotees}
                        onChange={(e) => handleChange('numberOfDevotees', e.target.value)}
                        className={inputClass('numberOfDevotees')}
                      />
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-saffron-700 mb-1.5">
                    संदेश (वैकल्पिक)
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3.5 top-3.5 w-5 h-5 text-saffron-400" />
                    <textarea
                      rows={3}
                      value={form.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      placeholder="अपनी मनोकामना या विशेष निर्देश यहाँ लिखें..."
                      className={inputClass('message')}
                    />
                  </div>
                </div>

                {/* Error message */}
                {status === 'error' && (
                  <div className="bg-deepred-50 border border-deepred-200 text-deepred-700 rounded-xl p-4 text-sm">
                    बुकिंग में त्रुटि हुई। कृपया पुनः प्रयास करें।
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn-primary w-full text-base disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      बुक हो रहा है...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      बुकिंग जमा करें
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
