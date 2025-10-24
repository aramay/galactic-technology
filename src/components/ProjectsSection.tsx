"use client";
import { useEffect, useState, useRef } from "react";
import project1 from "../assets/project1.jpg"
import project2 from "../assets/project2.jpg"
import Image from "next/image";

const projects = [
  {
    id: "01",
    name: "E-Commerce Platform",
    description: "Full-stack e-commerce solution built with React, Node.js, and PostgreSQL",
    image: project1,
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
    link: "#",
    year: "2024"
  },
  {
    id: "02",
    name: "Task Management App", 
    description: "Collaborative task management platform with real-time updates",
    image: project2,
    technologies: ["React", "TypeScript", "Socket.io", "MongoDB"],
    link: "#",
    year: "2024"
  }
];

const ProjectsSection = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="container px-8 md:px-16 py-32 bg-background">
      {/* Section Header */}
      <div className={`space-y-8 mb-24 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="flex items-center gap-4">
          <div className="w-8 h-px bg-muted-foreground opacity-30"></div>
          <span className="text-sm font-light tracking-wider uppercase opacity-70">
            Selected Works
          </span>
        </div>
        
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-thin tracking-wider leading-none">
          Projects
        </h2>
      </div>

      {/* Projects List */}
      <div className="space-y-16 md:space-y-24">
        {projects.map((project, index) => (
          <div 
            key={project.id}
            className={`group transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: `${index * 0.2}s` }}
          >
            <div className="border-t border-border opacity-20 mb-8"></div>
            
            <a 
              href={project.link}
              className="block transition-all duration-500 hover:translate-x-2"
            >
              <div className="grid md:grid-cols-12 gap-8 items-start">
                {/* Project Number & Year */}
                <div className="md:col-span-2">
                  <div className="space-y-2">
                    <span className="text-sm font-light tracking-wider uppercase opacity-50">
                      {project.id}
                    </span>
                    <div className="text-xs font-light opacity-30">
                      {project.year}
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="md:col-span-6 space-y-4">
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-thin tracking-wider leading-tight group-hover:text-primary transition-colors duration-300">
                    {project.name}
                  </h3>
                  
                  <p className="text-lg text-muted-foreground font-light leading-relaxed max-w-lg">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-3 pt-4">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="text-xs font-light tracking-wider uppercase opacity-50 border-b border-muted-foreground border-opacity-20 pb-1"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Image */}
                <div className="md:col-span-4">
                  <div className="aspect-[4/3] overflow-hidden bg-muted/20">
                    <Image 
                      src={project.image} 
                      alt={project.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;