import React from 'react';
import { Link } from 'react-router-dom';

const AiInsights = () => {
  return (
    <div className="bg-background text-on-surface font-body selection:bg-primary selection:text-on-primary-fixed overflow-x-hidden min-h-screen relative">
      <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-4 bg-[#0e0e0e]/60 backdrop-blur-[20px] border-b border-white/5 shadow-[0_10px_30px_rgba(0,210,253,0.05)]">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-[#ff7cf5] text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>psychology</span>
          <h1 className="font-headline text-2xl font-bold bg-gradient-to-r from-[#ff7cf5] to-[#00d2fd] bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(255,124,245,0.5)] tracking-tight">PsyNova</h1>
        </div>
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex items-center gap-8 font-label text-sm uppercase tracking-widest">
            <a className="text-white/60 hover:text-[#00d2fd] transition-colors duration-300" href="#">Analysis</a>
            <a className="text-white/60 hover:text-[#00d2fd] transition-colors duration-300" href="#">Patterns</a>
            <a className="text-[#ff7cf5] font-bold" href="#">Results</a>
          </nav>
          <button className="material-symbols-outlined text-white/60 hover:text-[#00d2fd] transition-colors">notifications</button>
        </div>
      </header>
      <main className="pt-28 pb-32 px-6 max-w-7xl mx-auto">
        <div className="mb-12">
          <span className="text-primary font-label text-sm font-bold uppercase tracking-[0.2em] mb-3 block">Neural Assessment Complete</span>
          <h2 className="text-5xl md:text-7xl font-headline font-bold leading-tight tracking-tighter max-w-4xl">
            Decoding your <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">cognitive landscape.</span>
          </h2>
        </div>
        <div className="asymmetric-grid">
          <section className="space-y-8">
            <div className="relative overflow-hidden rounded-xl bg-surface-container-low p-8 border border-white/5 group">
              <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>
              <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-secondary/10 rounded-full blur-[100px] pointer-events-none"></div>
              <div className="relative z-10">
                <h3 className="font-headline text-2xl font-semibold mb-6">Mental Wellness Overview</h3>
                <p className="text-2xl md:text-3xl text-on-surface-variant font-light leading-relaxed mb-8">
                  Based on your responses, your current mental wellness level appears to be <span className="text-secondary font-semibold border-b-2 border-secondary/30">MODERATE</span>.
                </p>
                <div className="flex flex-wrap gap-4 items-center">
                  <div className="bg-surface-container-highest px-6 py-3 rounded-full flex items-center gap-2 border border-white/5">
                    <span className="material-symbols-outlined text-primary text-sm">auto_graph</span>
                    <span className="text-sm font-label uppercase tracking-wider">Stability: Steady</span>
                  </div>
                  <div className="bg-surface-container-highest px-6 py-3 rounded-full flex items-center gap-2 border border-white/5">
                    <span className="material-symbols-outlined text-secondary text-sm">bolt</span>
                    <span className="text-sm font-label uppercase tracking-wider">Engagement: High</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="font-headline text-3xl font-bold px-2">Pathways to Optimization</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-surface-container-high p-8 rounded-xl hover:translate-y-[-4px] transition-all duration-300">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-6">
                    <span className="material-symbols-outlined text-primary">calendar_today</span>
                  </div>
                  <h4 className="font-headline text-xl font-bold mb-3">Routine structuring</h4>
                  <p className="text-on-surface-variant text-sm leading-relaxed">
                    Implementing consistent anchor points in your day can reduce cognitive load by 30%. Start with a 15-minute morning ritual.
                  </p>
                </div>
                <div className="bg-surface-container-high p-8 rounded-xl hover:translate-y-[-4px] transition-all duration-300">
                  <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center mb-6">
                    <span className="material-symbols-outlined text-secondary">self_improvement</span>
                  </div>
                  <h4 className="font-headline text-xl font-bold mb-3">Mindfulness exercises</h4>
                  <p className="text-on-surface-variant text-sm leading-relaxed">
                    Deep-breathing protocols twice daily help regulate the nervous system and enhance emotional resilience during peak stress.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <aside className="space-y-8">
            <div className="bg-surface-container-highest p-8 rounded-xl border border-white/10 flex flex-col items-center justify-center text-center">
              <h3 className="font-headline text-lg font-semibold mb-8 uppercase tracking-[0.2em] text-on-surface-variant">AI Confidence</h3>
              <div className="relative w-48 h-48 flex items-center justify-center mb-6">
                <div className="absolute inset-0 rounded-full border-[12px] border-white/5"></div>
                <div className="absolute inset-0 rounded-full neon-ring mask-image-radial p-[12px]">
                  <div className="w-full h-full bg-surface-container-highest rounded-full"></div>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-5xl font-headline font-bold text-on-surface">84<span className="text-2xl text-secondary">%</span></span>
                  <span className="text-[10px] font-label uppercase tracking-widest text-secondary/60 mt-1">High Accuracy</span>
                </div>
              </div>
              <p className="text-xs text-on-surface-variant italic leading-relaxed max-w-[200px]">
                Analysis based on 24 data points from your recent session patterns.
              </p>
            </div>
            <div className="relative overflow-hidden rounded-xl group cursor-pointer">
              <img className="w-full h-64 object-cover brightness-50 group-hover:scale-110 transition-transform duration-700" alt="Modern therapist office with soft warm lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLM_mZuXUi6XYmcZsiJp6_MwBX82DVzpiRG6g5Q8xXPHdab0Dc_Qi7KJGi4KMgRPjO2mXTmCIY6HwGmuBwjbmhYvzBvX9HhOnmsptFkQl4NHlPsssKCIFG4QBYLkvn2lVTl6Hzdh6wkTGsVlgtvxInwAMw8gTYBo-Somt1H5W2uyV4Y-rD0ZNgO4LS2bgMjYQXrAiembvOzRMBiQGL38bNR3T-NDADADn0PGOwzeU9_imflImT3qAVEAY6z2KnkiuXB03c75_VnqQ" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent p-8 flex flex-col justify-end">
                <h4 className="font-headline text-2xl font-bold mb-2">Deepen your insights</h4>
                <p className="text-sm text-white/70 mb-6">Connect with a certified neuro-specialist for a guided walkthrough of your metrics.</p>
                <button className="w-full bg-gradient-to-r from-primary to-secondary py-4 rounded-full text-on-primary-fixed font-bold flex items-center justify-center gap-2 active:scale-95 transition-all shadow-[0_0_20px_rgba(255,124,245,0.3)]">
                  Speak with a Specialist
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
            </div>
            <div className="p-6 border-l-2 border-tertiary bg-tertiary/5 rounded-r-xl">
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-tertiary">warning</span>
                <div>
                  <h5 className="text-tertiary font-bold text-xs uppercase tracking-widest mb-1">Notice</h5>
                  <p className="text-[11px] text-on-surface-variant leading-normal">
                    This report is generated by PsyNova's AI engine for informational purposes. This is <strong className="text-on-surface">NOT a medical diagnosis</strong>. If you are experiencing a crisis, please contact professional emergency services immediately.
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>
      <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-8 pt-4 bg-[#0e0e0e]/40 backdrop-blur-[25px] border-t border-white/10 shadow-[0_-10px_40px_rgba(138,43,226,0.15)] md:hidden">
        <Link className="flex flex-col items-center justify-center text-white/40 hover:text-white transition-all" to="/dashboard">
          <span className="material-symbols-outlined mb-1">grid_view</span>
          <span className="font-['Manrope'] text-[11px] font-semibold uppercase tracking-widest">Dashboard</span>
        </Link>
        <button className="flex flex-col items-center justify-center text-white/40 hover:text-white transition-all">
          <span className="material-symbols-outlined mb-1">edit_note</span>
          <span className="font-['Manrope'] text-[11px] font-semibold uppercase tracking-widest">Journal</span>
        </button>
        <button className="flex flex-col items-center justify-center text-[#ff7cf5] drop-shadow-[0_0_12px_rgba(255,124,245,0.8)] scale-110">
          <span className="material-symbols-outlined mb-1">event</span>
          <span className="font-['Manrope'] text-[11px] font-semibold uppercase tracking-widest">Booking</span>
        </button>
        <button className="flex flex-col items-center justify-center text-white/40 hover:text-white transition-all">
          <span className="material-symbols-outlined mb-1">auto_stories</span>
          <span className="font-['Manrope'] text-[11px] font-semibold uppercase tracking-widest">Learn</span>
        </button>
      </nav>
    </div>
  );
};

export default AiInsights;
