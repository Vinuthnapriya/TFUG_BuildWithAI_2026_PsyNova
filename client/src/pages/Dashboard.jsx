import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="bg-surface text-on-surface font-body selection:bg-primary-container selection:text-on-primary-container min-h-screen relative overflow-x-hidden">
      <header className="fixed top-0 left-0 w-full z-50 bg-[#0e0e0e]/60 backdrop-blur-[20px] border-b border-white/5 flex justify-between items-center px-6 py-4">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-[#ff7cf5]" data-icon="psychology">psychology</span>
          <h1 className="font-['Space_Grotesk'] text-2xl font-bold bg-gradient-to-r from-[#ff7cf5] to-[#00d2fd] bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(255,124,245,0.5)] tracking-tight">PsyNova</h1>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 rounded-full hover:bg-white/5 transition-colors text-white/60 hover:text-[#00d2fd]">
            <span className="material-symbols-outlined" data-icon="notifications">notifications</span>
          </button>
          <div className="w-10 h-10 rounded-full border border-primary/20 p-0.5">
            <img className="w-full h-full rounded-full object-cover" data-alt="portrait of a calm person in soft ethereal lighting with blue and pink ambient highlights" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlSZ-hw4tgC4nuSRBcU_nWCuKfiW3gChwhc9HeYGFa1LvL2ZDHhzsCBBC01N7L9LB91k6uRCfmpgjyxOZ_YFDLdc10PNM35b4NheeOzeynSydvhxm_o5Nu62QB7DLfGHCb0W4BfmuFLOhB9QM1XND5Sew0GudaePBvPQCI-_bYuVk6vx3c61qdl3LZYt0IciZy0HvjEkMZKRAoKcYcEnNmIozgru53f2HpI5cBHrHIx2IEOoihuwdDkLRO7NVxCOvQtjuv9ntBCxk" alt="Profile" />
          </div>
        </div>
      </header>
      <main className="pt-24 pb-32 px-6 max-w-7xl mx-auto space-y-8">
        <section className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-8 flex flex-col gap-6">
            <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-primary-container/20 to-secondary-container/10 p-8 border border-white/5 neural-glow group cursor-pointer">
              <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/20 blur-[80px] rounded-full"></div>
              <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="space-y-2">
                  <span className="text-primary font-label text-sm uppercase tracking-widest font-bold">Recommended for you</span>
                  <h2 className="text-3xl font-headline font-bold text-white">Start Daily Assessment</h2>
                  <p className="text-on-surface-variant max-w-md">Sync your current emotional state with our AI engine for personalized therapeutic insights.</p>
                </div>
                <button className="bg-gradient-to-r from-primary to-secondary text-on-primary-fixed font-bold py-4 px-8 rounded-full shadow-[0_0_20px_rgba(255,124,245,0.4)] hover:scale-105 transition-transform duration-300 whitespace-nowrap">
                  Begin Check-in
                </button>
              </div>
            </div>
            <div className="glass-card rounded-[2rem] p-8 border border-white/5 space-y-6">
              <div className="flex justify-between items-end">
                <div className="space-y-1">
                  <h3 className="text-xl font-headline font-semibold text-white">Wellness Overview</h3>
                  <p className="text-on-surface-variant text-sm">Your mood trends over the last 7 days</p>
                </div>
                <div className="flex gap-2">
                  <span className="text-xs px-3 py-1 rounded-full bg-surface-container-highest text-on-surface-variant">Weekly</span>
                </div>
              </div>
              <div className="h-48 w-full flex items-end justify-between px-2 gap-4">
                <div className="flex-1 flex flex-col items-center gap-2 group">
                  <div className="w-full bg-white/5 rounded-t-xl relative h-24 overflow-hidden">
                    <div className="absolute bottom-0 w-full bg-secondary/30 h-1/2 group-hover:bg-secondary/50 transition-all"></div>
                  </div>
                  <span className="text-[10px] text-white/40 font-label">MON</span>
                </div>
                <div className="flex-1 flex flex-col items-center gap-2 group">
                  <div className="w-full bg-white/5 rounded-t-xl relative h-32 overflow-hidden">
                    <div className="absolute bottom-0 w-full bg-primary/30 h-3/4 group-hover:bg-primary/50 transition-all"></div>
                  </div>
                  <span className="text-[10px] text-white/40 font-label">TUE</span>
                </div>
                <div className="flex-1 flex flex-col items-center gap-2 group">
                  <div className="w-full bg-white/5 rounded-t-xl relative h-28 overflow-hidden">
                    <div className="absolute bottom-0 w-full bg-secondary/30 h-2/3 group-hover:bg-secondary/50 transition-all"></div>
                  </div>
                  <span className="text-[10px] text-white/40 font-label">WED</span>
                </div>
                <div className="flex-1 flex flex-col items-center gap-2 group">
                  <div className="w-full bg-white/5 rounded-t-xl relative h-40 overflow-hidden">
                    <div className="absolute bottom-0 w-full bg-gradient-to-t from-primary/40 to-secondary/40 h-full group-hover:scale-y-105 origin-bottom transition-all"></div>
                  </div>
                  <span className="text-[10px] text-white font-label">THU</span>
                </div>
                <div className="flex-1 flex flex-col items-center gap-2 group">
                  <div className="w-full bg-white/5 rounded-t-xl relative h-20 overflow-hidden">
                    <div className="absolute bottom-0 w-full bg-white/10 h-1/3 group-hover:bg-white/20 transition-all"></div>
                  </div>
                  <span className="text-[10px] text-white/40 font-label">FRI</span>
                </div>
                <div className="flex-1 flex flex-col items-center gap-2 group">
                  <div className="w-full bg-white/5 rounded-t-xl relative h-24 overflow-hidden">
                    <div className="absolute bottom-0 w-full bg-white/10 h-1/2 group-hover:bg-white/20 transition-all"></div>
                  </div>
                  <span className="text-[10px] text-white/40 font-label">SAT</span>
                </div>
                <div className="flex-1 flex flex-col items-center gap-2 group">
                  <div className="w-full bg-white/5 rounded-t-xl relative h-16 overflow-hidden">
                    <div className="absolute bottom-0 w-full bg-white/10 h-1/4 group-hover:bg-white/20 transition-all"></div>
                  </div>
                  <span className="text-[10px] text-white/40 font-label">SUN</span>
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-4 flex flex-col gap-6">
            <div className="bg-surface-container-low rounded-[2rem] p-6 space-y-6">
              <h4 className="text-sm font-label uppercase tracking-widest text-primary/80 font-bold">Quick Actions</h4>
              <div className="grid grid-cols-1 gap-3">
                <button className="w-full group flex items-center justify-between p-4 rounded-2xl bg-surface-container hover:bg-surface-container-high transition-all border border-white/5">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined" data-icon="edit_note">edit_note</span>
                    </div>
                    <span className="font-semibold">Write Journal</span>
                  </div>
                  <span className="material-symbols-outlined text-white/20 group-hover:text-primary transition-colors" data-icon="chevron_right">chevron_right</span>
                </button>
                <button className="w-full group flex items-center justify-between p-4 rounded-2xl bg-surface-container hover:bg-surface-container-high transition-all border border-white/5">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
                      <span className="material-symbols-outlined" data-icon="event">event</span>
                    </div>
                    <span className="font-semibold">Book Session</span>
                  </div>
                  <span className="material-symbols-outlined text-white/20 group-hover:text-secondary transition-colors" data-icon="chevron_right">chevron_right</span>
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-surface-container-low rounded-[2rem] p-6 space-y-4 border border-white/5">
                <div className="flex justify-between items-start">
                  <span className="material-symbols-outlined text-secondary" data-icon="bedtime">bedtime</span>
                  <span className="text-xs text-secondary font-bold">8.4/10</span>
                </div>
                <div>
                  <p className="text-2xl font-headline font-bold">Sleep</p>
                  <p className="text-[10px] text-on-surface-variant uppercase tracking-tighter">Optimal Recovery</p>
                </div>
              </div>
              <div className="bg-surface-container-low rounded-[2rem] p-6 space-y-4 border border-white/5">
                <div className="flex justify-between items-start">
                  <span className="material-symbols-outlined text-primary" data-icon="bolt">bolt</span>
                  <span className="text-xs text-primary font-bold">3/10</span>
                </div>
                <div>
                  <p className="text-2xl font-headline font-bold">Stress</p>
                  <p className="text-[10px] text-on-surface-variant uppercase tracking-tighter">Low Intensity</p>
                </div>
              </div>
            </div>
            <div className="flex-1 bg-surface-container-low rounded-[2rem] p-6 border border-white/5 relative overflow-hidden flex flex-col justify-end min-h-[200px]">
              <img className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay" data-alt="abstract fluid aesthetic background with vibrant neon pink and electric blue gradients swirling together" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCuqSI9BK4_40WEPFmCDAVXPZMqNQtiZvG3UNTjurwusFzFad7UhnV6sMxm5FYbZrMA4e7xvk18e920oRwtUlDKOXLeI9twy-SNnEX3Jex79iyRl5SxlDrvwz-YPx7E18GtPKiDp64okxF-ogDjoVwrQHVvLvDw1mWwKQ66IkbzGiaEiqfc9IKM-9tW7EMNWm38Knk7IMEs2SUv3YcP7lFBCwyv-nSxin5Cd8y-nU_Rt0mvZ-Dqo9EmvPMghHn638dG4mRC4Vnndk" alt="" />
              <div className="relative z-10 space-y-2">
                <h4 className="text-lg font-headline font-bold">Daily Insight</h4>
                <p className="text-sm text-on-surface-variant italic">"Mindfulness is not a destination, it's the rhythm of your awareness."</p>
              </div>
            </div>
          </div>
        </section>
        <section className="space-y-6">
          <div className="flex justify-between items-center">
            <h3 className="text-2xl font-headline font-bold">Recommended for Exploration</h3>
            <button className="text-secondary text-sm font-label font-bold uppercase tracking-widest hover:underline">View All</button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="group bg-surface-container-low rounded-3xl overflow-hidden border border-white/5 hover:border-secondary/20 transition-all">
              <div className="h-40 overflow-hidden">
                <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="misty forest at dawn with cool blue tones and soft atmospheric perspective" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCS6vKVG0LZHsPdGhyhKQ6D5qeWqTwV88afBLMKI_2hVL14ihNbLsV_V29uHlOzMhdi2pNnIT3I5kI-TE7u0M5me1p_uVwRciGTLyfRmqxiQvUbf-R_0w-MHJNQyfJI9AqMQD9P20U-k_zJbMi2w1XP9YYQ8OhzK51MNrFK8PvV-hise0YJymbpGKX37jrdG_KoXk7NjjVZOIrxDXLYA0oQXFjIf1R-9yv5zgh50zNTGojLEOVd-M2mz5wHVadsfNF_pe_WQw40HoQ" alt="" />
              </div>
              <div className="p-6 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] bg-secondary/10 text-secondary px-2 py-1 rounded-md font-bold uppercase">Meditation</span>
                  <span className="text-xs text-on-surface-variant">12 min</span>
                </div>
                <h5 className="text-lg font-headline font-bold">Deep Neural Calm</h5>
                <p className="text-sm text-on-surface-variant line-clamp-2">Alpha-wave modulated soundscape designed to lower cortisol levels instantly.</p>
              </div>
            </div>
            <div className="group bg-surface-container-low rounded-3xl overflow-hidden border border-white/5 hover:border-primary/20 transition-all">
              <div className="h-40 overflow-hidden">
                <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="zen stone stack on a reflective surface with a soft purple and blue neon background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCu_emSfcNCDLQeqUh5NGjIfmxA2YD4q7Awa87gWil2VGMVJx6tUKq8fNi9KnuJvTsXH3RmavHPVDF1p6qLiHJXmMNlBF6Rqfy6irCaVLVYnsmbwYdmdJATmPVQrRI2YMqDVoXMoZbkzkEWxO52S6QUBGOc7SQRJErwGJPZ6SThCgy6BD8YXQrM0-s6xOK7jbMBZE-14MnqI4xnl5zRrF8u4XwU5wRDX2LgMvA6ga6u0-Ro4uUHZzOCFHIp6KigW_rmAHZVX0QOk_w" alt="" />
              </div>
              <div className="p-6 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] bg-primary/10 text-primary px-2 py-1 rounded-md font-bold uppercase">Breathing</span>
                  <span className="text-xs text-on-surface-variant">5 min</span>
                </div>
                <h5 className="text-lg font-headline font-bold">Rhythmic Resonance</h5>
                <p className="text-sm text-on-surface-variant line-clamp-2">Box breathing guided by bio-reactive visual cues to anchor your focus.</p>
              </div>
            </div>
            <div className="group bg-surface-container-low rounded-3xl overflow-hidden border border-white/5 hover:border-tertiary/20 transition-all">
              <div className="h-40 overflow-hidden">
                <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="macro close-up of water ripples with iridescent colors and neon lighting reflections" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkBkRLnY7TxNiYNbnbcz2W0uLtAhnIoMvW-mMNu5EDAbzet3M1ydbKApDRgIXfVwa-aMdwr4JmLMUZQCiOy0GoQtyiFfyKI81vVsGNcG-eyh-uhJuEDfSpE2pG0Ja0y5yKzLmi2a0NBvgVhzyu9v0RsF1ZTC1ztgit_woFRW9O0jgRk7CEDphT6nfD7TgTFuD92tbnpXRVedgLPWnNFd0QOoERnlh52rx0NZiXXemECvtwAqpPUw6Hv8JqdBbG07E9Io9sAdrOXa4" alt="" />
              </div>
              <div className="p-6 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] bg-tertiary/10 text-tertiary px-2 py-1 rounded-md font-bold uppercase">Sleep</span>
                  <span className="text-xs text-on-surface-variant">45 min</span>
                </div>
                <h5 className="text-lg font-headline font-bold">Circadian Drift</h5>
                <p className="text-sm text-on-surface-variant line-clamp-2">Immersive binaural narration helping you transition into deep REM sleep cycles.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <nav className="fixed bottom-0 left-0 w-full z-50 bg-[#0e0e0e]/40 backdrop-blur-[25px] flex justify-around items-center px-4 pb-8 pt-4 border-t border-white/10 rounded-t-[32px] shadow-[0_-10px_40px_rgba(138,43,226,0.15)] md:hidden">
        <Link className="flex flex-col items-center justify-center text-[#ff7cf5] drop-shadow-[0_0_12px_rgba(255,124,245,0.8)] scale-110 group" to="/dashboard">
          <span className="material-symbols-outlined text-2xl" data-icon="grid_view" style={{ fontVariationSettings: "'FILL' 1" }}>grid_view</span>
          <span className="font-['Manrope'] text-[11px] font-semibold uppercase tracking-widest mt-1">Dashboard</span>
        </Link>
        <button className="flex flex-col items-center justify-center text-white/40 hover:text-white transition-all group">
          <span className="material-symbols-outlined text-2xl" data-icon="edit_note">edit_note</span>
          <span className="font-['Manrope'] text-[11px] font-semibold uppercase tracking-widest mt-1">Journal</span>
        </button>
        <button className="flex flex-col items-center justify-center text-white/40 hover:text-white transition-all group">
          <span className="material-symbols-outlined text-2xl" data-icon="event">event</span>
          <span className="font-['Manrope'] text-[11px] font-semibold uppercase tracking-widest mt-1">Booking</span>
        </button>
        <button className="flex flex-col items-center justify-center text-white/40 hover:text-white transition-all group">
          <span className="material-symbols-outlined text-2xl" data-icon="auto_stories">auto_stories</span>
          <span className="font-['Manrope'] text-[11px] font-semibold uppercase tracking-widest mt-1">Learn</span>
        </button>
      </nav>
    </div>
  );
};

export default Dashboard;
