import React, { useState } from 'react';

const residencesData = {
  '2 BHK': [
    {
      id: '2bhk-optima',
      name: '2 BHK Optima Suite',
      carpetArea: '785 - 820 sq.ft.*',
      balconyArea: '68 sq.ft.*',
      orientation: 'East-Facing (Vastu Compliant)',
      view: 'Central Landscaped Greens & Courtyard',
      towers: 'Towers Alpha & Beta',
      floors: '2nd to 28th Floor',
      startingPrice: 'Early Expression Stage*',
      planSvg: `
        <svg viewBox="0 0 600 450" class="w-full h-full text-stone-300">
          <rect x="20" y="20" width="560" height="410" fill="#12151a" stroke="#c5a368" stroke-width="2" rx="4"/>
          <!-- Living & Dining -->
          <rect x="40" y="40" width="280" height="200" fill="#1b2028" stroke="#333d4b" stroke-dasharray="3,3"/>
          <text x="180" y="130" fill="#e5e3dc" font-family="Cinzel" font-size="14" text-anchor="middle">LIVING & DINING</text>
          <text x="180" y="150" fill="#9ca3af" font-size="11" text-anchor="middle">18'0" × 12'0"</text>
          
          <!-- Balcony Deck -->
          <rect x="320" y="40" width="100" height="130" fill="#1f2732" stroke="#c5a368" stroke-width="1.5"/>
          <text x="370" y="100" fill="#c5a368" font-size="11" text-anchor="middle" font-weight="bold">BALCONY DECK</text>
          <text x="370" y="120" fill="#9ca3af" font-size="9" text-anchor="middle">5'0" × 11'6"</text>

          <!-- Master Bedroom -->
          <rect x="40" y="250" width="220" height="160" fill="#1b2028" stroke="#333d4b"/>
          <text x="150" y="325" fill="#e5e3dc" font-family="Cinzel" font-size="13" text-anchor="middle">MASTER SUITE</text>
          <text x="150" y="345" fill="#9ca3af" font-size="11" text-anchor="middle">12'0" × 14'0"</text>

          <!-- Master Toilet -->
          <rect x="260" y="270" width="100" height="80" fill="#16191f" stroke="#2c333e"/>
          <text x="310" y="315" fill="#9ca3af" font-size="10" text-anchor="middle">ENSUITE</text>

          <!-- Bedroom 2 -->
          <rect x="360" y="180" width="200" height="150" fill="#1b2028" stroke="#333d4b"/>
          <text x="460" y="250" fill="#e5e3dc" font-family="Cinzel" font-size="13" text-anchor="middle">BEDROOM 02</text>
          <text x="460" y="270" fill="#9ca3af" font-size="11" text-anchor="middle">11'0" × 12'0"</text>

          <!-- Kitchen & Utility -->
          <rect x="430" y="40" width="130" height="130" fill="#1b2028" stroke="#333d4b"/>
          <text x="495" y="100" fill="#e5e3dc" font-family="Cinzel" font-size="12" text-anchor="middle">KITCHEN</text>
          <text x="495" y="120" fill="#9ca3af" font-size="10" text-anchor="middle">8'6" × 10'0"</text>

          <!-- North Indicator -->
          <circle cx="530" cy="380" r="22" fill="#111317" stroke="#c5a368"/>
          <text x="530" y="375" fill="#c5a368" font-size="12" font-weight="bold" text-anchor="middle">▲</text>
          <text x="530" y="392" fill="#c5a368" font-size="10" font-weight="bold" text-anchor="middle">N</text>
        </svg>
      `,
      highlights: [
        'Dedicated entry foyer ensuring complete living room privacy',
        'Cross-ventilation architectural orientation for natural air breeze',
        'Generous 5-foot deep panoramic deck overlooking central foliage',
        'Concealed air-conditioning and acoustic insulation provisioning'
      ]
    },
    {
      id: '2bhk-grande',
      name: '2 BHK Grande Residence',
      carpetArea: '860 - 895 sq.ft.*',
      balconyArea: '75 sq.ft.*',
      orientation: 'North-East Garden View',
      view: 'Mahalunge Hills & Infinity Green Belt',
      towers: 'Tower Gamma',
      floors: '5th to 30th Floor',
      startingPrice: 'Early Expression Stage*',
      planSvg: `
        <svg viewBox="0 0 600 450" class="w-full h-full text-stone-300">
          <rect x="20" y="20" width="560" height="410" fill="#12151a" stroke="#c5a368" stroke-width="2" rx="4"/>
          <rect x="40" y="40" width="300" height="210" fill="#1b2028" stroke="#333d4b"/>
          <text x="190" y="140" fill="#e5e3dc" font-family="Cinzel" font-size="14" text-anchor="middle">GRANDE LIVING & DINING</text>
          <text x="190" y="160" fill="#9ca3af" font-size="11" text-anchor="middle">20'6" × 12'6"</text>
          
          <rect x="350" y="40" width="190" height="130" fill="#1b2028" stroke="#333d4b"/>
          <text x="445" y="100" fill="#e5e3dc" font-family="Cinzel" font-size="12" text-anchor="middle">CHEF KITCHEN + UTILITY</text>
          
          <rect x="40" y="260" width="240" height="150" fill="#1b2028" stroke="#333d4b"/>
          <text x="160" y="335" fill="#e5e3dc" font-family="Cinzel" font-size="13" text-anchor="middle">MASTER SUITE + WALK-IN</text>

          <rect x="290" y="260" width="250" height="150" fill="#1b2028" stroke="#333d4b"/>
          <text x="415" y="335" fill="#e5e3dc" font-family="Cinzel" font-size="13" text-anchor="middle">BEDROOM 02</text>

          <circle cx="530" cy="210" r="20" fill="#111317" stroke="#c5a368"/>
          <text x="530" y="205" fill="#c5a368" font-size="10" font-weight="bold" text-anchor="middle">▲</text>
          <text x="530" y="220" fill="#c5a368" font-size="9" font-weight="bold" text-anchor="middle">N</text>
        </svg>
      `,
      highlights: [
        'Expanded living-dining layout with dedicated dining nook',
        'Parallel platform chef kitchen with separate dry utility balcony',
        'Master bedroom features provision for walk-in wardrobe space'
      ]
    }
  ],
  '3 BHK': [
    {
      id: '3bhk-luxe',
      name: '3 BHK Luxe Residence',
      carpetArea: '1,120 - 1,210 sq.ft.*',
      balconyArea: '92 sq.ft.*',
      orientation: 'East - West Cross Breeze',
      view: 'Double Landscape Vistas & Boulevard',
      towers: 'Towers Delta & Epsilon',
      floors: 'All Levels',
      startingPrice: 'Early Expression Stage*',
      planSvg: `
        <svg viewBox="0 0 600 450" class="w-full h-full text-stone-300">
          <rect x="20" y="20" width="560" height="410" fill="#12151a" stroke="#c5a368" stroke-width="2" rx="4"/>
          <!-- 3 BHK Layout Elements -->
          <rect x="40" y="40" width="310" height="190" fill="#1b2028" stroke="#333d4b"/>
          <text x="195" y="130" fill="#e5e3dc" font-family="Cinzel" font-size="14" text-anchor="middle">EXPANSIVE LIVING & DINING</text>
          <text x="195" y="150" fill="#9ca3af" font-size="11" text-anchor="middle">24'0" × 13'0"</text>

          <rect x="360" y="40" width="180" height="120" fill="#1b2028" stroke="#333d4b"/>
          <text x="450" y="95" fill="#e5e3dc" font-family="Cinzel" font-size="12" text-anchor="middle">ISLAND KITCHEN</text>

          <rect x="40" y="240" width="200" height="170" fill="#1b2028" stroke="#333d4b"/>
          <text x="140" y="325" fill="#e5e3dc" font-family="Cinzel" font-size="13" text-anchor="middle">MASTER SUITE</text>

          <rect x="250" y="240" width="160" height="170" fill="#1b2028" stroke="#333d4b"/>
          <text x="330" y="325" fill="#e5e3dc" font-family="Cinzel" font-size="12" text-anchor="middle">BEDROOM 02</text>

          <rect x="420" y="170" width="140" height="150" fill="#1b2028" stroke="#333d4b"/>
          <text x="490" y="245" fill="#e5e3dc" font-family="Cinzel" font-size="12" text-anchor="middle">GUEST / STUDY</text>

          <circle cx="530" cy="380" r="22" fill="#111317" stroke="#c5a368"/>
          <text x="530" y="375" fill="#c5a368" font-size="12" font-weight="bold" text-anchor="middle">▲</text>
          <text x="530" y="392" fill="#c5a368" font-size="10" font-weight="bold" text-anchor="middle">N</text>
        </svg>
      `,
      highlights: [
        'Triple-exposure cross ventilation maximising daylight and air flow',
        'Separate guest bedroom flexible as a hybrid work studio / library',
        'Large double-height balcony overlooking private organic groves',
        'Zero dead-space corridor architecture for optimal usable carpet area'
      ]
    }
  ],
  '4 BHK': [
    {
      id: '4bhk-signature',
      name: '4 BHK Signature Estate',
      carpetArea: '1,650 - 1,820 sq.ft.*',
      balconyArea: '145 sq.ft.*',
      orientation: 'North-East Panorama (Panoramic 270°)',
      view: 'Scenic Mula-Mutha Riverbed & Mahalunge Skyline',
      towers: 'Iconic Signature Tower',
      floors: 'High Floors (15th+)',
      startingPrice: 'Early Expression Stage*',
      planSvg: `
        <svg viewBox="0 0 600 450" class="w-full h-full text-stone-300">
          <rect x="20" y="20" width="560" height="410" fill="#12151a" stroke="#c5a368" stroke-width="2" rx="4"/>
          <rect x="40" y="40" width="340" height="200" fill="#1b2028" stroke="#333d4b"/>
          <text x="210" y="130" fill="#e5e3dc" font-family="Cinzel" font-size="15" text-anchor="middle">GRAND SALON & BANQUET DINING</text>
          <text x="210" y="155" fill="#9ca3af" font-size="12" text-anchor="middle">28'0" × 16'0"</text>

          <rect x="390" y="40" width="160" height="150" fill="#1f2732" stroke="#c5a368" stroke-width="2"/>
          <text x="470" y="110" fill="#c5a368" font-size="12" font-weight="bold" text-anchor="middle">PANORAMIC SKY DECK</text>

          <rect x="40" y="250" width="180" height="160" fill="#1b2028" stroke="#333d4b"/>
          <text x="130" y="325" fill="#e5e3dc" font-family="Cinzel" font-size="13" text-anchor="middle">PRESIDENTIAL SUITE</text>

          <rect x="230" y="250" width="150" height="160" fill="#1b2028" stroke="#333d4b"/>
          <text x="305" y="325" fill="#e5e3dc" font-family="Cinzel" font-size="12" text-anchor="middle">SUITE 02</text>

          <rect x="390" y="210" width="160" height="100" fill="#1b2028" stroke="#333d4b"/>
          <text x="470" y="255" fill="#e5e3dc" font-family="Cinzel" font-size="12" text-anchor="middle">SUITE 03</text>

          <rect x="390" y="320" width="160" height="90" fill="#1b2028" stroke="#333d4b"/>
          <text x="470" y="365" fill="#e5e3dc" font-family="Cinzel" font-size="12" text-anchor="middle">STUDY / SUITE 04</text>

          <circle cx="80" cy="80" r="22" fill="#111317" stroke="#c5a368"/>
          <text x="80" y="75" fill="#c5a368" font-size="12" font-weight="bold" text-anchor="middle">▲</text>
          <text x="80" y="92" fill="#c5a368" font-size="10" font-weight="bold" text-anchor="middle">N</text>
        </svg>
      `,
      highlights: [
        'Exclusive private elevator vestibule entrance lobby',
        'Grand 28-foot living room opening into an uninterrupted horizon sky deck',
        'Dual master bedrooms with luxury en-suite soaking bath accommodations',
        'Staff quarters with separate service ingress and utility corridor'
      ]
    }
  ]
};

export default function ResidenceSelector() {
  const [activeTab, setActiveTab] = useState('3 BHK');
  const [selectedPlanIndex, setSelectedPlanIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [compareMode, setCompareMode] = useState(false);

  const activePlans = residencesData[activeTab] || [];
  const currentPlan = activePlans[selectedPlanIndex] || activePlans[0];

  const handleEnquire = (unitName) => {
    window.dispatchEvent(new CustomEvent('open-lead-modal', {
      detail: { interest: 'Floor Plan Request', unit: `${activeTab} - ${unitName}` }
    }));
  };

  return (
    <div className="w-full bg-charcoal-900 border border-white/10 rounded-2xl p-6 lg:p-10 shadow-2xl">
      
      {/* Top Selector Navigation */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <span className="text-[11px] uppercase tracking-widest text-gold-400 font-bold">Curated Living Spaces</span>
          <h3 className="font-serif text-2xl lg:text-3xl text-stone-100 font-bold">Interactive Residence Explorer</h3>
        </div>

        {/* Configuration Tabs */}
        <div className="flex items-center space-x-2 bg-charcoal-950 p-1.5 rounded-lg border border-white/10">
          {['2 BHK', '3 BHK', '4 BHK'].map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setSelectedPlanIndex(0);
              }}
              className={`px-5 py-2 rounded text-xs font-semibold uppercase tracking-widest transition-all ${
                activeTab === tab
                  ? 'bg-gold-500 text-charcoal-950 shadow-md font-bold'
                  : 'text-stone-400 hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Sub-variant selection if multiple exist */}
      {activePlans.length > 1 && (
        <div className="flex items-center space-x-3 mt-6">
          <span className="text-xs uppercase tracking-wider text-stone-400">Variant:</span>
          {activePlans.map((plan, idx) => (
            <button
              key={plan.id}
              onClick={() => setSelectedPlanIndex(idx)}
              className={`px-3 py-1.5 rounded text-xs font-medium border transition-all ${
                selectedPlanIndex === idx
                  ? 'border-gold-400 bg-gold-500/10 text-white'
                  : 'border-white/10 text-stone-400 hover:border-stone-500'
              }`}
            >
              {plan.name}
            </button>
          ))}
        </div>
      )}

      {/* Main Residence Detail Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8 items-start">
        
        {/* Left Col: Interactive Blueprint Canvas */}
        <div className="lg:col-span-7 bg-charcoal-950 rounded-xl border border-white/10 p-5 relative overflow-hidden group">
          <div className="flex items-center justify-between mb-3 text-xs text-stone-400 border-b border-white/5 pb-2">
            <span className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span className="text-[11px] uppercase tracking-wider">Concept Blueprint Representation</span>
            </span>
            <div className="flex items-center space-x-2">
              <button 
                onClick={() => setIsZoomed(!isZoomed)}
                className="px-2.5 py-1 rounded bg-white/5 hover:bg-white/10 text-stone-300 text-[10px] uppercase tracking-wider"
              >
                {isZoomed ? 'Reset View' : 'Zoom Blueprint'}
              </button>
            </div>
          </div>

          {/* SVG Floor Plan Container */}
          <div className={`transition-transform duration-300 ${isZoomed ? 'scale-125 origin-center' : 'scale-100'}`}>
            <div dangerouslySetInnerHTML={{ __html: currentPlan.planSvg }} />
          </div>

          <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-stone-400">
            <span>*Dimensions indicative of proposed layouts</span>
            <span className="text-gold-400">Vastu Compliant Orientation</span>
          </div>
        </div>

        {/* Right Col: Specifications & Features */}
        <div className="lg:col-span-5 space-y-6">
          <div>
            <div className="text-xs uppercase tracking-widest text-gold-400 font-semibold">{activeTab} Collection</div>
            <h4 className="font-serif text-2xl text-stone-100 font-bold mt-1">{currentPlan.name}</h4>
            <p className="text-xs text-stone-400 mt-2 leading-relaxed">
              Engineered with Mahindra Lifespaces' "Homes of Positive Energy" philosophy, prioritizing abundant natural ventilation, deep daylight penetration, and generous outdoor decks.
            </p>
          </div>

          {/* Key Specs Table */}
          <div className="bg-charcoal-950/60 rounded-xl border border-white/10 divide-y divide-white/5 text-xs">
            <div className="p-3.5 flex justify-between">
              <span className="text-stone-400">Tentative Carpet Area</span>
              <span className="font-semibold text-stone-100">{currentPlan.carpetArea}</span>
            </div>
            <div className="p-3.5 flex justify-between">
              <span className="text-stone-400">Exclusive Balcony Deck</span>
              <span className="font-semibold text-stone-100">{currentPlan.balconyArea}</span>
            </div>
            <div className="p-3.5 flex justify-between">
              <span className="text-stone-400">Primary Orientation</span>
              <span className="font-semibold text-stone-100">{currentPlan.orientation}</span>
            </div>
            <div className="p-3.5 flex justify-between">
              <span className="text-stone-400">Facing & Vista</span>
              <span className="font-semibold text-stone-100">{currentPlan.view}</span>
            </div>
            <div className="p-3.5 flex justify-between">
              <span className="text-stone-400">Proposed Ingress</span>
              <span className="font-semibold text-stone-100">{currentPlan.towers}</span>
            </div>
          </div>

          {/* Architectural Highlights */}
          <div>
            <h5 className="text-xs uppercase tracking-widest text-stone-300 font-semibold mb-3">Architectural Highlights</h5>
            <ul className="space-y-2">
              {currentPlan.highlights.map((h, i) => (
                <li key={i} className="flex items-start space-x-2 text-xs text-stone-400">
                  <span className="text-gold-400 mt-0.5">✦</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => handleEnquire(currentPlan.name)}
              className="flex-1 py-3 px-4 rounded bg-gradient-to-r from-gold-400 via-gold-500 to-gold-400 text-charcoal-950 font-bold text-xs uppercase tracking-widest hover:shadow-lg transition-all"
            >
              Enquire For This Layout
            </button>
            <button
              onClick={() => handleEnquire(`Download Plan ${currentPlan.name}`)}
              className="py-3 px-4 rounded border border-white/20 hover:border-gold-400 text-stone-200 hover:text-white text-xs uppercase tracking-wider transition-colors flex items-center justify-center space-x-2"
            >
              <svg className="w-4 h-4 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <span>Download Plan</span>
            </button>
          </div>

          <p className="text-[10px] text-stone-500 italic">
            *Final RERA carpet area, room configurations and structural columns are subject to MahaRERA and statutory sanctions.
          </p>
        </div>

      </div>

    </div>
  );
}
