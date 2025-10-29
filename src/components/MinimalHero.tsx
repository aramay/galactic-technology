"use client"
import { useEffect, useState } from "react";


const ARHero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen bg-background text-foreground flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute top-1/4 left-1/6 text-[8rem] font-bold opacity-30 select-none pointer-events-none"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        >
          REACT
        </div>
        <div 
          className="absolute top-2/3 right-1/4 text-[4rem] font-thin opacity-20 select-none pointer-events-none"
          style={{ transform: `translateY(${scrollY * -0.05}px)` }}
        >
          TypeScript
        </div>
        <div 
          className="absolute bottom-1/3 left-1/12 text-[6rem] font-bold opacity-25 select-none pointer-events-none"
          style={{ transform: `translateY(${scrollY * 0.08}px)` }}
        >
          CSS
        </div>
      </div>

      {/* Main Content */}
      <div className="container px-8 md:px-16">
        <div className="space-y-12 animate-fade-in">
          {/* Name */}
          <div className="overflow-hidden">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-thin tracking-wider leading-none animate-slide-up">
              Frontend
            </h1>
          </div>
          
          <div className="overflow-hidden">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-thin tracking-wider leading-none animate-slide-up" style={{ animationDelay: '0.1s' }}>
              Developer
            </h1>
          </div>

          {/* Title */}
          <div className="space-y-4 mt-16">
            <div className="overflow-hidden">
              <p className="text-xl md:text-2xl text-muted-foreground font-light tracking-wide animate-slide-up" style={{ animationDelay: '0.2s' }}>
                Abid Ramay
              </p>
            </div>
            
            {/* <div className="overflow-hidden">
              <p className="text-lg md:text-xl text-muted-foreground font-light opacity-70 animate-slide-up" style={{ animationDelay: '0.3s' }}>
                Based in San Francisco
              </p>
            </div> */}
          </div>

          {/* Status */}
          <div className="flex items-center gap-3 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-light tracking-wider uppercase opacity-70">
              Available for work
            </span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-8 md:left-16">
        <div className="flex items-center gap-2 text-xs font-light tracking-wider uppercase opacity-50 animate-float">
          <div className="w-px h-12 bg-muted-foreground opacity-30"></div>
          <span className="writing-mode-vertical-rl">Scroll</span>
        </div>
      </div>
    </section>
  );
};

export default ARHero;
