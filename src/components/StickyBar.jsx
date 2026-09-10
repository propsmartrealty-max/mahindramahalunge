import React from 'react';

export default function StickyBar() {
  const openModal = (interest) => {
    window.dispatchEvent(new CustomEvent('open-lead-modal', {
      detail: { interest }
    }));
  };

  return (
    <>
      {/* Desktop Persistent Bottom Bar */}
      <div className="hidden md:flex fixed bottom-0 left-0 right-0 z-40 bg-charcoal-900/90 backdrop-blur-md border-t border-white/10 px-8 py-3 items-center justify-between text-xs">
        <div className="flex items-center space-x-3">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping"></span>
          <span className="font-serif font-semibold text-stone-100 uppercase tracking-wider">
            Mahindra Lifespaces Mahalunge
          </span>
          <span className="text-stone-400">|</span>
          <span className="text-stone-300">13.46-Acre Future-Ready Development</span>
        </div>

        <div className="flex items-center space-x-6 text-stone-300">
          <button 
            onClick={() => openModal('Floor Plans')}
            className="hover:text-gold-400 transition-colors uppercase tracking-widest text-[11px]"
          >
            Floor Plans
          </button>
          <button 
            onClick={() => openModal('Pricing Sheet')}
            className="hover:text-gold-400 transition-colors uppercase tracking-widest text-[11px]"
          >
            Tentative Pricing
          </button>
          <button 
            onClick={() => openModal('Brochure')}
            className="hover:text-gold-400 transition-colors uppercase tracking-widest text-[11px]"
          >
            Download Brochure
          </button>
          <button 
            onClick={() => openModal('Book Site Visit')}
            className="px-5 py-2 rounded bg-gradient-to-r from-gold-400 via-gold-500 to-gold-400 text-charcoal-950 font-bold tracking-widest uppercase hover:shadow-lg transition-all"
          >
            Enquire Now
          </button>
        </div>
      </div>

      {/* Mobile Persistent Bottom Dock */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-charcoal-950/95 backdrop-blur-lg border-t border-white/10 grid grid-cols-3 p-2 gap-2 text-center text-xs">
        <a 
          href="https://wa.me/912067000000?text=Hello%20Mahindra%20Lifespaces%2C%20please%20share%20details%20for%20Mahalunge%20project."
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded bg-emerald-900/40 border border-emerald-500/30 text-emerald-400 font-medium active:scale-95"
        >
          <svg className="w-4 h-4 mb-0.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
          </svg>
          <span className="text-[10px] tracking-wider uppercase">WhatsApp</span>
        </a>

        <a 
          href="tel:+912067000000"
          className="flex flex-col items-center justify-center py-2 px-1 rounded bg-charcoal-800 border border-white/10 text-stone-200 active:scale-95"
        >
          <svg className="w-4 h-4 mb-0.5 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
          </svg>
          <span className="text-[10px] tracking-wider uppercase">Call Direct</span>
        </a>

        <button 
          onClick={() => openModal('Mobile Quick Enquire')}
          className="flex flex-col items-center justify-center py-2 px-1 rounded bg-gradient-to-r from-gold-400 to-gold-500 text-charcoal-950 font-bold active:scale-95 shadow-md"
        >
          <svg className="w-4 h-4 mb-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
          <span className="text-[10px] tracking-wider uppercase">Enquire</span>
        </button>
      </div>
    </>
  );
}
