import React, { useState, useEffect } from 'react';

export default function LeadModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    configuration: '3 BHK',
    purpose: 'Self Use',
    interaction: 'Brochure & Price Details',
    name: '',
    phone: '',
    email: '',
    consent: true,
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleOpen = (e) => {
      if (e.detail?.unit) {
        setFormData((prev) => ({ ...prev, configuration: e.detail.unit }));
      }
      if (e.detail?.interest) {
        setFormData((prev) => ({ ...prev, interaction: e.detail.interest }));
      }
      setSubmitted(false);
      setStep(1);
      setIsOpen(true);
    };

    window.addEventListener('open-lead-modal', handleOpen);
    return () => window.removeEventListener('open-lead-modal', handleOpen);
  }, []);

  const handleNext = (e) => {
    e?.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Complete submission
      if (!formData.name || !formData.phone) {
        alert('Please provide your name and valid contact number.');
        return;
      }
      // Save lead locally
      try {
        const existingLeads = JSON.parse(localStorage.getItem('mahindra_leads') || '[]');
        existingLeads.push({ ...formData, timestamp: new Date().toISOString() });
        localStorage.setItem('mahindra_leads', JSON.stringify(existingLeads));
      } catch (err) {
        console.error(err);
      }
      setSubmitted(true);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-lg bg-charcoal-900 border border-white/10 rounded-xl shadow-2xl overflow-hidden text-stone-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="px-6 pt-6 pb-4 border-b border-white/10 flex items-center justify-between">
          <div>
            <span className="text-[10px] tracking-widest text-gold-400 uppercase font-bold">Mahindra Lifespaces Mahalunge</span>
            <h3 className="font-serif text-lg font-bold text-stone-100">
              {submitted ? 'Priority Pass Confirmed' : 'Priority Expression of Interest'}
            </h3>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="p-1 rounded-full text-stone-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Progress Dots */}
        {!submitted && (
          <div className="flex items-center justify-center space-x-2 py-3 bg-charcoal-950/50 border-b border-white/5">
            <span className={`h-1.5 rounded-full transition-all duration-300 ${step === 1 ? 'w-8 bg-gold-400' : 'w-2 bg-stone-700'}`} />
            <span className={`h-1.5 rounded-full transition-all duration-300 ${step === 2 ? 'w-8 bg-gold-400' : 'w-2 bg-stone-700'}`} />
            <span className={`h-1.5 rounded-full transition-all duration-300 ${step === 3 ? 'w-8 bg-gold-400' : 'w-2 bg-stone-700'}`} />
          </div>
        )}

        {/* Form Body */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 mx-auto rounded-full bg-gold-500/20 text-gold-400 flex items-center justify-center border border-gold-500/40">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h4 className="font-serif text-xl text-stone-100 font-semibold">Thank You, {formData.name}</h4>
              <p className="text-xs text-stone-400 max-w-sm mx-auto leading-relaxed">
                Your interest in the upcoming 13.46-acre Mahindra Mahalunge development has been logged. An official relationship advisor will connect with you with the confidential project brief.
              </p>
              
              <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                <a 
                  href={`https://wa.me/912067000000?text=Hi%20Mahindra%20Lifespaces%2C%20I%20am%20interested%20in%20the%20upcoming%20Mahalunge%20project%20for%20${encodeURIComponent(formData.configuration)}.`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-2 px-5 py-2.5 rounded bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-semibold tracking-wider uppercase transition-colors"
                >
                  <span>Chat on WhatsApp</span>
                </a>
                <button
                  onClick={() => setIsOpen(false)}
                  className="px-5 py-2.5 rounded border border-white/20 text-stone-300 hover:text-white text-xs uppercase tracking-wider"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleNext} className="space-y-5">
              
              {/* STEP 1: Configuration */}
              {step === 1 && (
                <div className="space-y-4 animate-fadeIn">
                  <label className="block text-xs font-semibold uppercase tracking-widest text-stone-300">
                    Step 1 of 3: Preferred Residence Configuration
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {['2 BHK Luxe', '3 BHK Premium', '4 BHK Signature', 'Penthouse / Duplex'].map((conf) => (
                      <button
                        type="button"
                        key={conf}
                        onClick={() => setFormData({ ...formData, configuration: conf })}
                        className={`p-3.5 text-left rounded-lg border transition-all text-xs ${
                          formData.configuration === conf
                            ? 'border-gold-400 bg-gold-500/10 text-white font-semibold'
                            : 'border-white/10 bg-charcoal-950/60 text-stone-400 hover:border-stone-500'
                        }`}
                      >
                        <div className="font-serif text-sm text-stone-100">{conf}</div>
                        <span className="text-[10px] text-stone-400">Master-planned residences</span>
                      </button>
                    ))}
                  </div>

                  <div className="pt-2">
                    <label className="block text-xs font-semibold uppercase tracking-widest text-stone-300 mb-2">
                      Purpose of Purchase
                    </label>
                    <div className="flex gap-2">
                      {['Self Use', 'Investment', 'Second Home'].map((p) => (
                        <button
                          type="button"
                          key={p}
                          onClick={() => setFormData({ ...formData, purpose: p })}
                          className={`flex-1 py-2 text-xs rounded border transition-all ${
                            formData.purpose === p
                              ? 'border-gold-400 bg-gold-500/10 text-white font-medium'
                              : 'border-white/10 bg-charcoal-950/60 text-stone-400'
                          }`}
                        >
                          {p}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 2: Preferred Service */}
              {step === 2 && (
                <div className="space-y-4 animate-fadeIn">
                  <label className="block text-xs font-semibold uppercase tracking-widest text-stone-300">
                    Step 2 of 3: What information would you like first?
                  </label>
                  <div className="space-y-2.5">
                    {[
                      { title: 'Project Brochure & Master Layout', desc: 'Detailed architectural overview & site topography' },
                      { title: 'Tentative Cost Sheet & Payment Plan', desc: 'Pre-launch priority expressions & early incentives' },
                      { title: 'Schedule a Guided Site Visit', desc: 'Experience the 13.46-acre Mahalunge corridor in person' },
                      { title: 'Instant Relationship Manager Callback', desc: 'Get all questions answered over a quick call' },
                    ].map((item) => (
                      <button
                        type="button"
                        key={item.title}
                        onClick={() => setFormData({ ...formData, interaction: item.title })}
                        className={`w-full p-3 text-left rounded-lg border transition-all flex items-start space-x-3 ${
                          formData.interaction === item.title
                            ? 'border-gold-400 bg-gold-500/10 text-white'
                            : 'border-white/10 bg-charcoal-950/60 text-stone-400 hover:border-stone-500'
                        }`}
                      >
                        <div className={`mt-0.5 w-4 h-4 rounded-full border flex items-center justify-center flex-shrink-0 ${
                          formData.interaction === item.title ? 'border-gold-400 bg-gold-400' : 'border-stone-500'
                        }`}>
                          {formData.interaction === item.title && <div className="w-1.5 h-1.5 rounded-full bg-charcoal-950" />}
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-stone-100">{item.title}</div>
                          <div className="text-[10px] text-stone-400">{item.desc}</div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 3: Contact Details */}
              {step === 3 && (
                <div className="space-y-4 animate-fadeIn">
                  <label className="block text-xs font-semibold uppercase tracking-widest text-stone-300">
                    Step 3 of 3: Your Confidential Contact Details
                  </label>
                  <div className="space-y-3">
                    <div>
                      <input
                        type="text"
                        required
                        placeholder="Full Name *"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-charcoal-950 border border-white/15 rounded text-xs text-white placeholder-stone-500 focus:outline-none focus:border-gold-400"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        required
                        placeholder="Phone Number (e.g. 9820123456) *"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-charcoal-950 border border-white/15 rounded text-xs text-white placeholder-stone-500 focus:outline-none focus:border-gold-400"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder="Email Address (Optional)"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-charcoal-950 border border-white/15 rounded text-xs text-white placeholder-stone-500 focus:outline-none focus:border-gold-400"
                      />
                    </div>
                    <div className="flex items-start space-x-2 pt-1">
                      <input
                        type="checkbox"
                        id="consent"
                        checked={formData.consent}
                        onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                        className="mt-0.5 rounded border-stone-600 text-gold-500 focus:ring-0"
                      />
                      <label htmlFor="consent" className="text-[10px] text-stone-400 leading-tight">
                        I authorize Mahindra Lifespaces and its authorized representatives to contact me via Call, SMS or WhatsApp regarding the Mahalunge project.
                      </label>
                    </div>
                  </div>
                </div>
              )}

              {/* Modal Action Buttons */}
              <div className="pt-3 flex items-center justify-between border-t border-white/10">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="text-xs text-stone-400 hover:text-white uppercase tracking-wider font-medium"
                  >
                    ← Back
                  </button>
                ) : <span />}

                <button
                  type="submit"
                  className="px-6 py-2.5 rounded bg-gradient-to-r from-gold-400 via-gold-500 to-gold-400 text-charcoal-950 text-xs font-bold uppercase tracking-widest hover:shadow-lg transition-all"
                >
                  {step === 3 ? 'Confirm Priority Pass' : 'Continue →'}
                </button>
              </div>

            </form>
          )}
        </div>
      </div>
    </div>
  );
}
