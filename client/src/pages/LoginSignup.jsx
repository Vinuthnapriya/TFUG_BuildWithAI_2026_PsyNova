import React from 'react';

const LoginSignup = () => {
  return (
    <div className="bg-background text-on-background font-body min-h-screen neural-bg selection:bg-primary selection:text-on-primary overflow-x-hidden relative">
      <main className="relative min-h-screen flex flex-col items-center justify-center px-6 py-12 md:py-24">
        <div className="mb-12 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="material-symbols-outlined text-primary text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>psychology</span>
            <h1 className="font-headline text-4xl font-bold bg-gradient-to-r from-[#ff7cf5] to-[#00d2fd] bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(255,124,245,0.5)]">
              PsyNova
            </h1>
          </div>
          <p className="text-on-surface-variant font-light tracking-wide max-w-xs mx-auto">
            Step into your luminous sanctuary of cognitive clarity.
          </p>
        </div>
        
        <div className="w-full max-w-[440px] glass-panel p-8 md:p-10 rounded-[32px] relative group border border-white/5">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-[32px] blur opacity-0 group-hover:opacity-100 transition duration-1000"></div>
          <div className="relative">
            <div className="flex gap-8 mb-10 border-b border-outline-variant/20">
              <button className="pb-4 text-primary font-headline font-bold text-lg relative group/tab">
                Login
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary shadow-[0_0_8px_#ff7cf5]"></span>
              </button>
              <button className="pb-4 text-on-surface-variant font-headline font-medium text-lg hover:text-on-surface transition-colors">
                Sign Up
              </button>
            </div>
            <form className="space-y-6">
              <div className="space-y-2 group/input">
                <label className="block font-label text-[11px] uppercase tracking-[0.2em] text-primary/80 ml-1">Email Address</label>
                <div className="relative flex items-center bg-surface-container-highest/50 rounded-xl neon-glow-primary border-b-2 border-outline-variant/30 focus-within:border-primary transition-all duration-300">
                  <span className="material-symbols-outlined absolute left-4 text-on-surface-variant">alternate_email</span>
                  <input className="w-full bg-transparent border-none py-4 pl-12 pr-4 text-on-surface placeholder:text-outline focus:ring-0 focus:outline-none" placeholder="name@sanctuary.ai" type="email"/>
                </div>
              </div>
              <div className="space-y-2 group/input">
                <div className="flex justify-between items-center px-1">
                  <label className="block font-label text-[11px] uppercase tracking-[0.2em] text-primary/80">Password</label>
                  <a className="text-[10px] uppercase tracking-wider text-on-surface-variant hover:text-secondary transition-colors" href="#">Forgot?</a>
                </div>
                <div className="relative flex items-center bg-surface-container-highest/50 rounded-xl neon-glow-primary border-b-2 border-outline-variant/30 focus-within:border-primary transition-all duration-300">
                  <span className="material-symbols-outlined absolute left-4 text-on-surface-variant">lock_open</span>
                  <input className="w-full bg-transparent border-none py-4 pl-12 pr-12 text-on-surface placeholder:text-outline focus:ring-0 focus:outline-none" placeholder="••••••••" type="password"/>
                  <button className="absolute right-4 text-on-surface-variant hover:text-primary" type="button">
                    <span className="material-symbols-outlined text-sm">visibility</span>
                  </button>
                </div>
              </div>
              <button className="w-full py-4 mt-4 rounded-full bg-gradient-to-r from-primary to-secondary text-on-primary-fixed font-headline font-bold uppercase tracking-widest text-sm shadow-[0_4px_20px_rgba(255,124,245,0.3)] hover:shadow-[0_4px_30px_rgba(0,210,253,0.4)] hover:scale-[1.02] active:scale-95 transition-all duration-300" type="submit">
                Enter Sanctuary
              </button>
            </form>
            <div className="flex items-center my-10 gap-4">
              <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-outline-variant/30"></div>
              <span className="font-label text-[10px] text-outline uppercase tracking-widest">Or Continue With</span>
              <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-outline-variant/30"></div>
            </div>
            <button className="w-full flex items-center justify-center gap-3 py-4 rounded-full border border-secondary/30 bg-secondary/5 hover:bg-secondary/10 hover:border-secondary transition-all duration-300 group/social">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path className="text-secondary" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="currentColor"></path>
                <path className="text-secondary/80" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="currentColor"></path>
                <path className="text-secondary/60" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="currentColor"></path>
                <path className="text-secondary/80" d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="currentColor"></path>
              </svg>
              <span className="font-headline font-semibold text-secondary text-sm tracking-wide">Login with Google</span>
            </button>
          </div>
        </div>
        <div className="fixed top-[-10%] right-[-10%] w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="fixed bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="mt-12 max-w-sm text-center">
          <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full bg-surface-container-high/60 backdrop-blur-md border-l-2 border-tertiary">
            <span className="material-symbols-outlined text-tertiary text-sm">verified_user</span>
            <span className="font-label text-[10px] text-on-surface uppercase tracking-widest font-semibold">Ethical AI Protection Active</span>
          </div>
          <p className="text-[11px] text-on-surface-variant/60 leading-relaxed font-light">
            By entering PsyNova, you acknowledge our commitment to human-centric mental wellness. Your neural data is encrypted with zero-knowledge protocols.
          </p>
        </div>
      </main>
      <footer className="absolute bottom-8 left-0 w-full px-8 flex justify-between items-center pointer-events-none opacity-20">
        <div className="hidden md:block">
          <div className="w-24 h-[1px] bg-gradient-to-r from-primary to-transparent mb-1"></div>
          <p className="font-label text-[8px] uppercase tracking-[0.4em] text-primary">v2.4.0 Neural Core</p>
        </div>
        <div className="flex gap-4">
          <div className="w-1 h-1 bg-secondary rounded-full"></div>
          <div className="w-1 h-1 bg-primary rounded-full"></div>
          <div className="w-1 h-1 bg-tertiary rounded-full"></div>
        </div>
        <div className="hidden md:block text-right">
          <p className="font-label text-[8px] uppercase tracking-[0.4em] text-secondary">Privacy First Philosophy</p>
          <div className="w-24 h-[1px] bg-gradient-to-l from-secondary to-transparent mt-1 ml-auto"></div>
        </div>
      </footer>
    </div>
  );
};

export default LoginSignup;
