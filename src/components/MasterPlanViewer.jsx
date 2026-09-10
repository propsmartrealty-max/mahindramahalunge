import React, { useState } from 'react';

const masterPlanZones = [
  {
    id: 'clubhouse',
    name: 'Grand Clubhouse & Wellness Sanctum',
    category: 'Lifestyle',
    cx: 300,
    cy: 220,
    radius: 35,
    tag: 'Zone 01',
    description: 'A multi-level 35,000+ sq.ft. social destination featuring a heated indoor pool, badminton courts, banquet salon, luxury spa, and rooftop lounge.',
    highlights: ['Multi-cuisine Dining Terrace', 'Temperature Controlled Infinity Pool', 'State-of-the-art TechnoGym']
  },
  {
    id: 'towers-alpha',
    name: 'Signature High-Rise Towers (Phase 1)',
    category: 'Residences',
    cx: 170,
    cy: 140,
    radius: 40,
    tag: 'Zone 02',
    description: 'Elegantly proportioned towers designed with optimal solar orientation, cross-ventilation fins, and uninterrupted views toward the Mula river and Hinjewadi skyline.',
    highlights: ['3 & 4 BHK Luxury Residences', 'High-speed destination elevators', 'Double-height arrival lobbies']
  },
  {
    id: 'central-greens',
    name: 'The Central Forest Reserve & Meadow',
    category: 'Landscape',
    cx: 430,
    cy: 160,
    radius: 45,
    tag: 'Zone 03',
    description: 'Over 4 acres of continuous vehicle-free bio-diversity greens, indigenous forest groves, fruit orchards, and oxygen-rich walking trails.',
    highlights: ['Dense Miyawaki plantation', 'Reflective water body', 'Herbal butterfly gardens']
  },
  {
    id: 'sports-arena',
    name: 'Active Sports Complex & Courts',
    category: 'Active Life',
    cx: 460,
    cy: 310,
    radius: 36,
    tag: 'Zone 04',
    description: 'Floodlit outdoor sports amenities designed to international specifications for tennis, half-court basketball, cricket nets, and skating rink.',
    highlights: ['Fitted synthetic tennis courts', 'Jogging track with shock-absorbent turf', 'Kids skating promenade']
  },
  {
    id: 'grand-entrance',
    name: 'The Grand Boulevard & Security Portal',
    category: 'Infrastructure',
    cx: 150,
    cy: 340,
    radius: 30,
    tag: 'Zone 05',
    description: 'A monumental 60-foot palm-lined entry boulevard with RFID automated barrier access, visitor management lounge, and peripheral drop-off bays.',
    highlights: ['Multi-tier biometric security', 'EV high-speed fast charging stations', 'Driver waiting lounge']
  }
];

export default function MasterPlanViewer() {
  const [activeZone, setActiveZone] = useState(masterPlanZones[0]);

  return (
    <div className="w-full bg-charcoal-900 border border-white/10 rounded-2xl p-6 lg:p-10 shadow-2xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div>
          <span className="text-[11px] uppercase tracking-widest text-gold-400 font-bold">13.46-Acre Land Parcel Blueprint</span>
          <h3 className="font-serif text-2xl lg:text-3xl text-stone-100 font-bold">Interactive Master Layout</h3>
        </div>
        <div className="flex items-center space-x-2 text-xs text-stone-400">
          <span className="inline-block w-3 h-3 rounded-full bg-gold-400 animate-pulse"></span>
          <span>Click any hotspot on the map to inspect zone details</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8 items-center">
        
        {/* SVG Interactive Map */}
        <div className="lg:col-span-7 bg-charcoal-950 rounded-xl border border-white/10 p-4 relative overflow-hidden">
          <svg viewBox="0 0 600 450" className="w-full h-auto cursor-pointer select-none">
            {/* Background Site Contour */}
            <rect x="10" y="10" width="580" height="430" rx="12" fill="#111317" stroke="#222731" strokeWidth="2" />
            
            {/* Organic Landscape Swirls */}
            <path d="M40 380 Q 200 400 320 280 T 560 200" fill="none" stroke="#1d2621" strokeWidth="60" strokeLinecap="round" />
            <path d="M40 380 Q 200 400 320 280 T 560 200" fill="none" stroke="#2a4030" strokeWidth="12" strokeLinecap="round" strokeDasharray="6,6" />

            {/* Perimeter Roads */}
            <path d="M20 400 L 580 400" stroke="#333a46" strokeWidth="16" />
            <text x="300" y="420" fill="#6b7280" fontSize="10" fontFamily="sans-serif" textAnchor="middle" letterSpacing="2">PROPOSED PMRDA 36M ACCESS ROAD</text>

            {/* Zone Shapes */}
            {masterPlanZones.map((zone) => {
              const isSelected = activeZone.id === zone.id;
              return (
                <g 
                  key={zone.id} 
                  onClick={() => setActiveZone(zone)}
                  className="transition-all duration-300"
                >
                  <circle
                    cx={zone.cx}
                    cy={zone.cy}
                    r={zone.radius}
                    fill={isSelected ? '#c5a368' : '#1c212b'}
                    fillOpacity={isSelected ? 0.35 : 0.65}
                    stroke={isSelected ? '#c5a368' : '#4b5563'}
                    strokeWidth={isSelected ? 2.5 : 1.5}
                    className="hover:stroke-gold-400 transition-colors"
                  />
                  <circle
                    cx={zone.cx}
                    cy={zone.cy}
                    r={8}
                    fill={isSelected ? '#dfc08f' : '#c5a368'}
                    className="animate-ping origin-center"
                    style={{ animationDuration: '3s' }}
                  />
                  <circle
                    cx={zone.cx}
                    cy={zone.cy}
                    r={6}
                    fill={isSelected ? '#dfc08f' : '#c5a368'}
                  />
                  <text
                    x={zone.cx}
                    y={zone.cy - zone.radius - 8}
                    fill={isSelected ? '#f3ede2' : '#9ca3af'}
                    fontSize="11"
                    fontFamily="Cinzel"
                    fontWeight="bold"
                    textAnchor="middle"
                  >
                    {zone.tag}
                  </text>
                </g>
              );
            })}

            {/* Compass */}
            <g transform="translate(530, 60)">
              <circle cx="0" cy="0" r="22" fill="#14171d" stroke="#c5a368" strokeWidth="1" />
              <path d="M0 -16 L4 0 L-4 0 Z" fill="#c5a368" />
              <path d="M0 16 L4 0 L-4 0 Z" fill="#4b5563" />
              <text x="0" y="-19" fill="#c5a368" fontSize="10" fontWeight="bold" textAnchor="middle">N</text>
            </g>
          </svg>
        </div>

        {/* Right Info Box */}
        <div className="lg:col-span-5 space-y-5">
          <div className="inline-block px-3 py-1 rounded bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-widest">
            {activeZone.category} • {activeZone.tag}
          </div>
          
          <h4 className="font-serif text-2xl text-stone-100 font-bold">
            {activeZone.name}
          </h4>

          <p className="text-xs text-stone-400 leading-relaxed">
            {activeZone.description}
          </p>

          <div className="pt-2">
            <h5 className="text-xs uppercase tracking-widest text-stone-300 font-semibold mb-3">Zone Highlights</h5>
            <div className="space-y-2">
              {activeZone.highlights.map((h, i) => (
                <div key={i} className="flex items-center space-x-2 text-xs text-stone-300">
                  <span className="text-gold-400">✦</span>
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => {
                window.dispatchEvent(new CustomEvent('open-lead-modal', {
                  detail: { interest: `Master Plan - ${activeZone.name}` }
                }));
              }}
              className="px-6 py-3 rounded bg-gradient-to-r from-gold-400 to-gold-500 text-charcoal-950 text-xs font-bold uppercase tracking-widest hover:shadow-lg transition-all"
            >
              Request High-Res Master Plan
            </button>
          </div>

          <p className="text-[10px] text-stone-500">
            *Master plan layout is conceptual based on the acquired 13.46-acre land parcel and remains subject to official town planning approvals.
          </p>
        </div>

      </div>
    </div>
  );
}
