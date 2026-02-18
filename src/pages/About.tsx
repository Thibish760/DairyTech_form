import { useState, useEffect } from 'react';
import { HeroSection } from '../screens/DesktopScreen/sections/HeroSection';
import { FooterSection } from '../screens/DesktopScreen/sections/FooterSection';
import { Navbar } from "../components/Navbar";
// ─── SVG Diamond Icons ────────────────────────────────────────────────────────

const DiamondWrapper = ({ children }: { children: React.ReactNode }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
    <rect x="12" y="12" width="76" height="76" rx="6"
      transform="rotate(45 50 50)"
      fill="white"
      stroke="#d1d5db"
      strokeWidth="1.5"
    />
    {children}
  </svg>
);

const PlanningIcon = () => (
  <DiamondWrapper>
    <g transform="translate(28, 26)">
      <rect x="4" y="0" width="36" height="42" rx="3" stroke="#1a1a1a" strokeWidth="2.2" fill="none"/>
      <rect x="13" y="-4" width="18" height="8" rx="2" fill="white" stroke="#1a1a1a" strokeWidth="2"/>
      <line x1="10" y1="16" x2="34" y2="16" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round"/>
      <line x1="10" y1="23" x2="34" y2="23" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round"/>
      <line x1="10" y1="30" x2="24" y2="30" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round"/>
    </g>
    <circle cx="68" cy="68" r="9" fill="white" stroke="#1a1a1a" strokeWidth="2"/>
    <polyline points="63,68 66,72 73,63" stroke="#1a1a1a" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
  </DiamondWrapper>
);

const TechnologyIcon = () => (
  <DiamondWrapper>
    <g transform="translate(28, 28)">
      <circle cx="22" cy="22" r="12" stroke="#1a1a1a" strokeWidth="2.2" fill="none"/>
      <circle cx="22" cy="22" r="5" stroke="#1a1a1a" strokeWidth="2" fill="none"/>
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
        const r1 = 14, r2 = 18;
        const rad = (angle * Math.PI) / 180;
        const x1 = 22 + r1 * Math.cos(rad), y1 = 22 + r1 * Math.sin(rad);
        const x2 = 22 + r2 * Math.cos(rad), y2 = 22 + r2 * Math.sin(rad);
        return <line key={`line-${angle}`} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#1a1a1a" strokeWidth="3" strokeLinecap="round"/>;
      })}
      <line x1="34" y1="22" x2="44" y2="22" stroke="#1a1a1a" strokeWidth="1.8" strokeLinecap="round"/>
      <line x1="44" y1="22" x2="44" y2="14" stroke="#1a1a1a" strokeWidth="1.8" strokeLinecap="round"/>
      <circle cx="44" cy="12" r="2.5" fill="#1a1a1a"/>
      <line x1="44" y1="22" x2="44" y2="30" stroke="#1a1a1a" strokeWidth="1.8" strokeLinecap="round"/>
      <circle cx="44" cy="32" r="2.5" fill="#1a1a1a"/>
    </g>
  </DiamondWrapper>
);

const AutomationIcon = () => (
  <DiamondWrapper>
    <circle cx="50" cy="46" r="11" stroke="#1a1a1a" strokeWidth="2.2" fill="none"/>
    <circle cx="50" cy="46" r="4" stroke="#1a1a1a" strokeWidth="1.8" fill="none"/>
    {[0, 60, 120, 180, 240, 300].map((angle) => {
      const r1 = 13, r2 = 17;
      const rad = (angle * Math.PI) / 180;
      const x1 = 50 + r1 * Math.cos(rad), y1 = 46 + r1 * Math.sin(rad);
      const x2 = 50 + r2 * Math.cos(rad), y2 = 46 + r2 * Math.sin(rad);
      return <line key={`tech-line-${angle}`} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#1a1a1a" strokeWidth="3.5" strokeLinecap="round"/>;
    })}
    <circle cx="68" cy="34" r="7" stroke="#1a1a1a" strokeWidth="2" fill="none"/>
    <circle cx="68" cy="34" r="2.5" stroke="#1a1a1a" strokeWidth="1.5" fill="none"/>
    {[0, 90, 180, 270].map((angle) => {
      const r1 = 8.5, r2 = 11;
      const rad = (angle * Math.PI) / 180;
      const x1 = 68 + r1 * Math.cos(rad), y1 = 34 + r1 * Math.sin(rad);
      const x2 = 68 + r2 * Math.cos(rad), y2 = 34 + r2 * Math.sin(rad);
      return <line key={`automation-line1-${angle}`} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#1a1a1a" strokeWidth="3" strokeLinecap="round"/>;
    })}
    <circle cx="34" cy="63" r="7" stroke="#1a1a1a" strokeWidth="2" fill="none"/>
    <circle cx="34" cy="63" r="2.5" stroke="#1a1a1a" strokeWidth="1.5" fill="none"/>
    {[0, 90, 180, 270].map((angle) => {
      const r1 = 8.5, r2 = 11;
      const rad = (angle * Math.PI) / 180;
      const x1 = 34 + r1 * Math.cos(rad), y1 = 63 + r1 * Math.sin(rad);
      const x2 = 34 + r2 * Math.cos(rad), y2 = 63 + r2 * Math.sin(rad);
      return <line key={`automation-line2-${angle}`} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#1a1a1a" strokeWidth="3" strokeLinecap="round"/>;
    })}
  </DiamondWrapper>
);

const PerformanceIcon = () => (
  <DiamondWrapper>
    <g transform="translate(22, 24)">
      <rect x="0" y="0" width="56" height="38" rx="3" stroke="#1a1a1a" strokeWidth="2.2" fill="none"/>
      <polyline
        points="6,28 14,18 22,23 34,10 48,15"
        stroke="#1a1a1a" strokeWidth="2.5" fill="none"
        strokeLinejoin="round" strokeLinecap="round"
      />
      <line x1="28" y1="38" x2="28" y2="48" stroke="#1a1a1a" strokeWidth="2.2"/>
      <line x1="14" y1="48" x2="42" y2="48" stroke="#1a1a1a" strokeWidth="2.2" strokeLinecap="round"/>
    </g>
  </DiamondWrapper>
);

const features = [
  { label: 'Planning',    Icon: PlanningIcon    },
  { label: 'Technology',  Icon: TechnologyIcon  },
  { label: 'Automation',  Icon: AutomationIcon  },
  { label: 'Performance', Icon: PerformanceIcon },
];

// ─── Main Page Component ──────────────────────────────────────────────────────

export default function Aboutus() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  const fade = (delayClass: string) => `${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'} transition-all duration-700 ${delayClass}`;

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'DM Sans', 'Segoe UI', sans-serif" }}>

      {/* Navigation */}
      <Navbar showOnlyNav />

      {/* Styles converted to Tailwind — removed inline <style> block */}

      {/* ══════════════════════════════════════════════
          HERO  — contained
      ══════════════════════════════════════════════ */}
      <div className="max-w-[1200px] mx-auto pt-24 px-8">
        <div className={`grid md:grid-cols-2 gap-16 items-center ${fade('delay-75')}`}>

          {/* Left — farm image */}
          <div className="flex justify-center">
            <img src="/image-354.png" alt="Modern Dairy Farm Facility" className="w-full max-w-[480px] h-[500px] object-cover rounded-2xl shadow-2xl" />
          </div>

          {/* Right — copy */}
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase mb-3 tracking-wider">Farm 360</p>

            <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
              Transforming Your Land Into A <span className="text-lime-600">Fully Automated, Technology-Driven Dairy Farm Ecosystem.</span>
            </h1>

            <p className="text-base text-gray-600 leading-relaxed mb-6">
              Azhizen Dairy Tech Solution Design And Implement Smart Dairy Infrastructure Equipped With Automation, Real-Time Monitoring, And Data-Driven Management Systems To Maximize Productivity And Ensure Sustainable Farm Operations.
            </p>

            <div className="grid grid-cols-3 gap-4 border-t-2 border-green-50 pt-6">
              {[['15+','Team Members'],['10+','Happy Clients'],['99%','Client Satisfaction']].map(([n,l]) => (
                <div key={l}>
                  <div className="text-4xl font-extrabold text-lime-500 mb-1">{n}</div>
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider">{l}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* ══════════════════════════════════════════════
          GOAL STATEMENT — full-width gray band
      ══════════════════════════════════════════════ */}
      <div className={`${fade('delay-200')} w-full bg-slate-100 mt-20 py-20`}> 
        <div className="max-w-[1200px] mx-auto px-8">
          <p className="text-base font-bold text-lime-600 mb-2">Our</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">Goal Statement</h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-[980px]">
            With Years Of Industry Experience, We Are Committed To Delivering Intelligent Solutions That Address The Evolving Challenges Of The Dairy Sector. We Connect You With The Right Expertise, Technology, And Resources To Achieve Sustainable And Profitable Dairy Farming.
          </p>
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          GREEN FEATURE BAR — full-width
      ══════════════════════════════════════════════ */}
      <div className={`${fade('delay-400')} w-full bg-lime-500 py-6`}> 
        <div className="max-w-[1200px] mx-auto flex items-center justify-between gap-6 px-8">
          {features.map(({ label, Icon }) => (
            <div className="flex items-center gap-4 flex-1 min-w-[160px]" key={label}>
              <div className="w-20 h-20 flex-shrink-0"><Icon /></div>
              <span className="text-xl font-bold text-gray-900">{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <FooterSection />
    </div>
  );
}


