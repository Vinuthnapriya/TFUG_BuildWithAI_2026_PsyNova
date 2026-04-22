import React from 'react';
import { Link } from 'react-router-dom';

const Assessment = () => {
  return (
    <div className="bg-background text-on-surface min-h-screen flex flex-col overflow-x-hidden relative">
      <header className="fixed top-0 w-full z-50 bg-[#0e0e0e]/60 backdrop-blur-[20px] border-b border-white/5 flex justify-between items-center px-6 py-4">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-[#ff7cf5] text-3xl" data-icon="psychology">psychology</span>
          <h1 className="font-headline text-2xl font-bold bg-gradient-to-r from-[#ff7cf5] to-[#00d2fd] bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(255,124,245,0.5)] tracking-tight">PsyNova</h1>
        </div>
        <div className="flex items-center gap-6">
          <button className="text-white/60 hover:text-[#00d2fd] transition-colors duration-300">
            <span className="material-symbols-outlined" data-icon="notifications">notifications</span>
          </button>
          <div className="w-10 h-10 rounded-full border border-white/10 p-0.5">
            <img alt="User Profile" className="w-full h-full rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQOV-Jn6i_CsDi_r4zR1Y6cmPy8J8CJPSL_Bw1scukRSZzfyyQNSxrqmXWXbRrjSB4HeWAPi64FE7eu_d0ENkjvwm08h0FpezZaPnz3EpbxvemK0zR7qbiHxK-anrupp3SJtt-Rpl7OgUwC50taImst-Cvb2s4P0D5d8GrvpJjgWjx2QukBpy46HcagXvum0pvb598T3Fau8OXqkRk29QSsUWZ3W8qzA7dZHN8UMFAoHuNMssq_5-MciN6HE6UCIjPu8ZuTz-8ik4" />
          </div>
        </div>
      </header>
      
      <main className="flex-grow flex flex-col items-center justify-center px-4 pt-24 pb-12 relative">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -z-10"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] -z-10"></div>
        <div className="w-full max-w-2xl flex flex-col gap-10">
          <div className="space-y-4">
            <div className="flex justify-between items-end">
              <div>
                <span className="text-primary font-headline text-xs font-bold uppercase tracking-[0.2em]">Assessment Stage</span>
                <h2 className="text-on-surface font-headline text-xl font-semibold mt-1">Emotional Resilience</h2>
              </div>
              <span className="text-white/40 font-headline text-sm tabular-nums">4 / 12</span>
            </div>
            <div className="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden">
              <div className="h-full w-[33%] bg-gradient-to-r from-primary to-secondary rounded-full shadow-[0_0_15px_rgba(0,210,253,0.4)]"></div>
            </div>
          </div>
          
          <section className="glass-card rounded-[32px] p-8 md:p-12 border border-white/5 relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDrDz-KxnXFfAQLFxvDqvdJlI0eHAV-WIlYgIn4l93Y00n895JAKspfTdxj7ph4Q6S6Pily0KLQT_jilBR97ZcmpbqbtpaaH-iC4Y4jyLhKmZnWWrG2LzmrmoKIFDYpWAFUATrCZCzpLvtKLxc7fU1D6-k62_uoFPKy6dZFlnB5pPWKBmLoYGCiE1k0dAsm3swu8oqR0HqQrTFHZJU6mFeyBiEF_nK1iMURSGY9h1fLqrGhtCX_-vjN_PzX4Vv8NC3k6sADNF_-yIc')" }}></div>
            <div className="relative z-10 space-y-8">
              <div className="space-y-4">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container/30 text-secondary text-xs font-bold uppercase tracking-wider">
                  <span className="material-symbols-outlined text-[14px]" data-icon="work">work</span>
                  Workplace Scenario
                </span>
                <h3 className="text-on-surface font-headline text-2xl md:text-3xl font-bold leading-tight">
                  How do you respond when you feel overwhelmed at work?
                </h3>
                <p className="text-on-surface-variant text-lg">
                  Imagine a deadline is approaching and multiple high-priority tasks are landing on your desk simultaneously.
                </p>
              </div>
              
              <div className="grid grid-cols-1 gap-4">
                <button className="option-tile group text-left p-5 rounded-2xl bg-surface-container-high/40 border border-white/5 hover:border-secondary/30 transition-all duration-300 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-surface-container-highest flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                    <span className="material-symbols-outlined text-white/40 group-hover:text-secondary" data-icon="self_improvement">self_improvement</span>
                  </div>
                  <span className="text-on-surface font-medium">I take a 5-minute deep breathing break to recalibrate.</span>
                </button>
                <button className="option-tile option-active group text-left p-5 rounded-2xl flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary" data-icon="assignment_late" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}>assignment_late</span>
                  </div>
                  <span className="text-on-surface font-semibold">I reorganize my task list and prioritize based on impact.</span>
                </button>
                <button className="option-tile group text-left p-5 rounded-2xl bg-surface-container-high/40 border border-white/5 hover:border-secondary/30 transition-all duration-300 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-surface-container-highest flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                    <span className="material-symbols-outlined text-white/40 group-hover:text-secondary" data-icon="bolt">bolt</span>
                  </div>
                  <span className="text-on-surface font-medium">I power through immediately until the most urgent task is complete.</span>
                </button>
                <button className="option-tile group text-left p-5 rounded-2xl bg-surface-container-high/40 border border-white/5 hover:border-secondary/30 transition-all duration-300 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-surface-container-highest flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                    <span className="material-symbols-outlined text-white/40 group-hover:text-secondary" data-icon="group">group</span>
                  </div>
                  <span className="text-on-surface font-medium">I seek support or delegate parts of the project to a colleague.</span>
                </button>
              </div>
            </div>
          </section>
          
          <div className="flex items-center justify-between mt-4">
            <button className="px-8 py-3 rounded-full font-headline font-semibold text-white/60 hover:text-white hover:bg-white/5 transition-all flex items-center gap-2">
              <span className="material-symbols-outlined text-lg" data-icon="arrow_back">arrow_back</span>
              Back
            </button>
            <Link to="/insights" className="group px-10 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-on-primary-fixed font-headline font-bold shadow-[0_10px_30px_rgba(255,124,245,0.2)] hover:shadow-[0_10px_40px_rgba(0,210,253,0.4)] hover:scale-[1.02] active:scale-95 transition-all flex items-center gap-2">
              Continue
              <span className="material-symbols-outlined text-lg transition-transform group-hover:translate-x-1" data-icon="arrow_forward">arrow_forward</span>
            </Link>
          </div>
        </div>
      </main>
      
      <footer className="py-8 px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/5 bg-surface-container-low/40 backdrop-blur-sm">
          <span className="material-symbols-outlined text-secondary text-sm" data-icon="verified_user">verified_user</span>
          <p className="text-white/40 text-xs font-medium tracking-wide">AI-driven responses are encrypted and private to your profile.</p>
        </div>
      </footer>
      
      <div className="fixed inset-0 -z-20">
        <div className="absolute inset-0 bg-[#0e0e0e]"></div>
        <img alt="Background Atmosphere" className="w-full h-full object-cover opacity-10 mix-blend-screen" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqxtpgDJ2Pdg1EUJIUmEktNGBpvFTGJDG7fNo0dTXkZCRsg89JkoA2Yfhyyi1_5cCgBelAw9KPf1puMoqofUyERB1rwdedFHo23ps3tgfGiRLW1KmqrXjPi5pknLRybjrqyUR-bWZIEPTl6EtflxXp11faMe8gMSxLUwBapWddhKYifTmYAGj2tEdQkXLrH6VmK5E-3FOxwmTah_6octu0gtCEB_g_g7a_UOq2qZJRJ6lYkkcwjz283_z_ml4XIPbRt20SmSMTVpY" />
      </div>
    </div>
  );
};

export default Assessment;
