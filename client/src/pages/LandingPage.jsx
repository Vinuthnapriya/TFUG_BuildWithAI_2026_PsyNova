import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-[#0e0e0e]/60 backdrop-blur-[20px] border-b border-white/5 flex justify-between items-center px-6 py-4">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-[#ff7cf5]" style={{ fontVariationSettings: "'FILL' 1" }}>psychology</span>
          <h1 className="font-['Space_Grotesk'] text-2xl font-bold bg-gradient-to-r from-[#ff7cf5] to-[#00d2fd] bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(255,124,245,0.5)] tracking-tight">PsyNova</h1>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a className="text-[#ff7cf5] font-bold font-['Space_Grotesk'] tracking-tight hover:text-[#00d2fd] transition-colors duration-300" href="#">Home</a>
          <a className="text-white/60 font-['Space_Grotesk'] tracking-tight hover:text-[#00d2fd] transition-colors duration-300" href="#">Research</a>
          <a className="text-white/60 font-['Space_Grotesk'] tracking-tight hover:text-[#00d2fd] transition-colors duration-300" href="#">Methodology</a>
          <a className="text-white/60 font-['Space_Grotesk'] tracking-tight hover:text-[#00d2fd] transition-colors duration-300" href="#">Privacy</a>
        </nav>
        <div className="flex items-center gap-4">
          <button className="p-2 text-white/60 hover:text-[#ff7cf5] transition-all active:scale-95">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <button className="md:hidden p-2 text-white/60">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </header>
      <main className="relative min-h-screen overflow-hidden flex flex-col pt-20">
        <div className="absolute inset-0 pointer-events-none neural-bg z-0">
          <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-primary rounded-full opacity-40 blur-sm"></div>
          <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-secondary rounded-full opacity-30 blur-sm"></div>
          <div className="absolute bottom-1/3 left-1/2 w-1 h-1 bg-primary rounded-full opacity-20 blur-sm"></div>
          <div className="absolute top-2/3 left-1/3 w-2 h-2 bg-secondary rounded-full opacity-10 blur-md"></div>
        </div>
        <section className="relative z-10 flex flex-col md:flex-row items-center justify-center flex-grow px-6 md:px-20 py-12 gap-12">
          <div className="w-full md:w-1/2 flex flex-col items-start space-y-8 order-2 md:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container/20 border border-secondary/20">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary">Neural Intelligence Alpha</span>
            </div>
            <h2 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-on-surface leading-[1.1]">
              Understand <br/>
              <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] bg-clip-text text-transparent">your mind</span> <br/>
              before it overwhelms you.
            </h2>
            <p className="font-body text-lg md:text-xl text-on-surface-variant max-w-lg leading-relaxed">
              PsyNova leverages high-fidelity neural mapping and ethical AI to provide deep insights into your mental landscape. Experience clarity like never before.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/login" className="px-8 py-4 rounded-full bg-gradient-to-r from-primary to-secondary text-on-primary-fixed font-bold font-headline tracking-tight shadow-[0_0_20px_rgba(255,124,245,0.4)] hover:shadow-[0_0_30px_rgba(255,124,245,0.6)] hover:scale-105 transition-all duration-300">
                Begin Assessment
              </Link>
              <button className="px-8 py-4 rounded-full glass-panel border border-white/10 text-on-surface font-semibold font-headline tracking-tight hover:bg-white/10 transition-all">
                Learn More
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/2 relative flex justify-center items-center order-1 md:order-2">
            <div className="relative w-full aspect-square max-w-[500px]">
              <img alt="Neon 3D Brain Visualization" className="w-full h-full object-contain drop-shadow-[0_0_50px_rgba(0,210,253,0.3)]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCoX8sS-QQKBK9-oihcUazk6RDgeLwZ4O9orngNdOZ085Iy96xaDDyOzGXkOBVM2dWx3x9J_DvPow1lTDJNnatF9E-GCplV6bXbNU5VGltkOs4Jqfc1COA7DOrR5q2AwXwQWBLM3Ao6ceFesdkl-zpX-Up-B_mHWs9NRAwt3HOmnDmi6rCpslIt8B35DrigjtRYJ859WJAgcCnAIoJm7JkrsGU_jDSGf13FkZ0ror8EpT0vf23n3DgYE2S0tokxqCUBMw44wxfvm_A"/>
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/20 rounded-full blur-[60px]"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary/20 rounded-full blur-[80px]"></div>
              <div className="absolute top-1/4 -right-4 glass-panel p-4 rounded-xl border border-white/5 shadow-2xl hidden lg:block">
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-center gap-8">
                    <span className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">Cognitive Load</span>
                    <span className="text-[10px] text-secondary">Optimal</span>
                  </div>
                  <div className="w-32 h-1 bg-surface-container-highest rounded-full overflow-hidden">
                    <div className="w-[65%] h-full bg-secondary"></div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-1/4 -left-8 glass-panel p-4 rounded-xl border border-white/5 shadow-2xl hidden lg:block">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-on-surface">AI Synthesis</p>
                    <p className="text-[10px] text-on-surface-variant">98.4% Accuracy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="relative z-10 px-6 md:px-20 py-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 bg-surface-container-low rounded-[32px] p-8 md:p-12 flex flex-col justify-between group overflow-hidden relative border border-white/5">
              <div className="relative z-10">
                <span className="label-sm text-primary font-bold uppercase tracking-widest mb-4 block">Personalized Mapping</span>
                <h3 className="text-4xl font-headline font-bold text-on-surface mb-6 max-w-md">The Blueprint of your <span className="text-secondary">Subconscious</span></h3>
                <p className="text-on-surface-variant text-lg max-w-sm mb-8">Identify hidden patterns in your mental health before they manifest physically. Our proprietary AI maps over 1,400 cognitive nodes.</p>
                <button className="text-primary font-bold inline-flex items-center gap-2 group-hover:gap-4 transition-all">
                  Explore Neural Nodes <span className="material-symbols-outlined">arrow_forward</span>
                </button>
              </div>
              <div className="absolute -right-20 -bottom-20 w-80 h-80 opacity-20 group-hover:opacity-40 transition-opacity">
                <img alt="Neural Grid" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAseDgQlAwXymHks2lPdO3AWO3Mw7HDMekblAPwOzoK1QoP6fhSAr9ULSs1m9bVkHx1YiE_Pf878DUcURss7QQm-NW4ONcgjEF3CIdB9k0lH-3kz4ItugJzsYanlpliqPwjepqUNX9UjqIymEZcAV62d5MJqw30yxiW28n-yaVJc9BTiVu6cQUudL1caAPeQWdAgD-TuTx80TsFFwkp4Jg8Cgb675VdD0kTMPThY46W5xlvrHe0DcQivLlyTlwhAFApihWIYzlBNv4"/>
              </div>
            </div>
            <div className="bg-surface-container-highest rounded-[32px] p-8 flex flex-col border border-white/5 relative overflow-hidden group">
              <span className="material-symbols-outlined text-4xl text-secondary mb-6" style={{ fontVariationSettings: "'FILL' 1" }}>shield_with_heart</span>
              <h3 className="text-2xl font-headline font-bold text-on-surface mb-4">Ethical Guardianship</h3>
              <p className="text-on-surface-variant mb-6">Your data is locally encrypted. We don't just protect your privacy; we respect your mental sovereignty.</p>
              <div className="mt-auto w-full h-32 rounded-2xl overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                <img alt="Encryption" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzunxF4JyFB8SHsvWVCyURgCtVXSsIyec6VG1uJTQFAAd9XFgl8Vt7Z6o7S3yIfoS_YLagejSn1Po5WdLTTJJn2stZUnyrnA3qVsIgXLEoxIg9FJdEwI14AXy1FtkeIpHLmTYJphfUOWz6xWWZdq6Vdsr8jcNWOrLMNkE8QOBW3p2s1KEmY-uepeZzt4W1i9r2NS90Jz56wcq7HCiUEpvj0mJQ1_gNovShx-6nGwWuEElqNxfjvW-GLhb4lYcsEo0rXKINBLuksSc"/>
              </div>
            </div>
            <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-surface-container rounded-[24px] p-6 border border-white/5 hover:border-primary/30 transition-colors">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-primary">analytics</span>
                </div>
                <h4 className="font-headline font-bold mb-2">Deep Analytics</h4>
                <p className="text-sm text-on-surface-variant">Real-time sentiment tracking and longitudinal health markers.</p>
              </div>
              <div className="bg-surface-container rounded-[24px] p-6 border border-white/5 hover:border-secondary/30 transition-colors">
                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-secondary">self_improvement</span>
                </div>
                <h4 className="font-headline font-bold mb-2">Guided Synthesis</h4>
                <p className="text-sm text-on-surface-variant">Bespoke meditation and cognitive exercises tailored to your state.</p>
              </div>
              <div className="bg-surface-container rounded-[24px] p-6 border border-white/5 hover:border-white/20 transition-colors">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-white/40">groups</span>
                </div>
                <h4 className="font-headline font-bold mb-2">Expert Integration</h4>
                <p className="text-sm text-on-surface-variant">Connect your data directly with your mental health practitioners.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="relative z-10 px-6 md:px-20 py-24 mb-32">
          <div className="bg-gradient-to-br from-surface-container-high to-surface-container-low rounded-[48px] p-12 md:p-24 text-center relative overflow-hidden border border-white/5">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_70%)] from-primary/5"></div>
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-headline font-bold mb-8 leading-tight">Ready to see your <br/><span className="text-primary">Inner Universe?</span></h2>
              <p className="text-on-surface-variant text-xl mb-12">The assessment takes less than 10 minutes and provides a lifetime of clarity. Start your journey into the self today.</p>
              <button className="px-12 py-6 rounded-full bg-primary text-on-primary-fixed font-bold text-xl font-headline shadow-[0_0_40px_rgba(255,124,245,0.3)] hover:scale-105 active:scale-95 transition-all">
                Launch Initial Scan
              </button>
              <p className="mt-8 text-on-surface-variant/60 text-sm flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-sm">lock</span>
                HIPAA Compliant • 256-bit Encryption • Zero Knowledge Protocol
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-surface-container-lowest border-t border-white/5 py-12 px-6 md:px-20 relative z-10 hidden md:block">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[#ff7cf5]" style={{ fontVariationSettings: "'FILL' 1" }}>psychology</span>
              <h3 className="font-headline font-bold text-xl tracking-tight">PsyNova</h3>
            </div>
            <p className="text-on-surface-variant max-w-xs text-sm">Empowering humanity through deep neural understanding and ethical AI companionship.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
            <div className="flex flex-col gap-4">
              <h4 className="font-headline font-bold text-on-surface uppercase tracking-widest text-xs">Platform</h4>
              <a className="text-on-surface-variant hover:text-primary text-sm transition-colors" href="#">Assessments</a>
              <a className="text-on-surface-variant hover:text-primary text-sm transition-colors" href="#">Neural Journal</a>
              <a className="text-on-surface-variant hover:text-primary text-sm transition-colors" href="#">AI Insights</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default LandingPage;
