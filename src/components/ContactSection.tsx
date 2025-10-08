"use client";
import { useEffect, useState, useRef } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const ContactSection = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="container px-8 md:px-16 py-32 bg-background">
      <div className="border-t border-border opacity-20"></div>
      
      <div className={`pt-24 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Section Header */}
        <div className="space-y-8 mb-16">
          <div className="flex items-center gap-4">
            <div className="w-8 h-px bg-muted-foreground opacity-30"></div>
            <span className="text-sm font-light tracking-wider uppercase opacity-70">
              Contact
            </span>
          </div>
          
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-thin tracking-wider leading-none">
            Get in touch
          </h2>
        </div>

        {/* Contact Info */}
        <div className="space-y-12">
          <div className="space-y-6">
            <a 
              href="mailto:abid.ramay@example.com"
              className="group block text-2xl md:text-3xl font-light text-muted-foreground hover:text-foreground transition-all duration-300"
            >
              <span className="border-b border-transparent group-hover:border-current pb-1 transition-all duration-300">
                abid.ramay@example.com
              </span>
            </a>
            
            <div className="text-lg font-light text-muted-foreground opacity-70">
              San Francisco, CA
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4 pt-8">
            <div className="text-sm font-light tracking-wider uppercase opacity-50 mb-6">
              Elsewhere
            </div>
            <div className="flex flex-col gap-4">
              <a 
                href="https://linkedin.com/in/aramay"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-lg font-light text-muted-foreground hover:text-foreground transition-all duration-300 w-fit"
              >
                <FaLinkedin size={20} />
                <span className="border-b border-transparent group-hover:border-current pb-1 transition-all duration-300">
                  LinkedIn
                </span>
              </a>
              <a 
                href="https://github.com/aramay"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-lg font-light text-muted-foreground hover:text-foreground transition-all duration-300 w-fit"
              >
                <FaGithub size={20} />
                <span className="border-b border-transparent group-hover:border-current pb-1 transition-all duration-300">
                  GitHub
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}

        <div className="mt-24 pt-12 border-t border-border opacity-20"></div>
        <div className="flex justify-between items-center text-sm font-light text-muted-foreground">
          <div className="">© 2025 Abid Ramay</div>
          <div>Crafted with precision</div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;