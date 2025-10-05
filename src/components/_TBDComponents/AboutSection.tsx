import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import avatarImg from "@/assets/avatar.jpg";
import Image from "next/image";

const AboutSection = () => {
  const skills = [
    "React", "TypeScript", "Node.js", "Python", "PostgreSQL", 
    "Tailwind CSS", "Next.js", "Docker", "AWS", "GraphQL"
  ];

  return (
    <section id="about" className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary to-accent rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-smooth"></div>
            <Card className="relative card-gradient border-border/50 hover-scale transition-spring">
              <CardContent className="p-8">
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-md opacity-50"></div>
                    <Image 
                      src={avatarImg} 
                      alt="Developer Portrait"
                      className="relative w-48 h-48 rounded-full object-cover border-4 border-primary/20"
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-foreground">Abid Ramay</h3>
                  <p className="text-primary font-medium mb-4">Developer</p>
                  <p className="text-muted-foreground leading-relaxed">
                    Based in SF Bay Area, California 🇺🇸. 5+ years of experience building 
                    scalable web applications and digital experiences.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* About Content */}
          <div className="space-y-8">
            <Card className="card-gradient border-border/50 hover-scale transition-spring">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-primary">My Journey</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  I'm a passionate full-stack developer with a keen eye for design and 
                  user experience. I specialize in building modern web applications 
                  using cutting-edge technologies.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  When I'm not coding, you'll find me exploring new technologies, 
                  contributing to open-source projects, or enjoying the vibrant tech 
                  scene in the SF Bay Area.
                </p>
              </CardContent>
            </Card>
            
            <Card className="card-gradient border-border/50 hover-scale transition-spring">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-primary">Technical Skills</h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      className="bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-smooth px-4 py-2 text-sm font-medium hover-scale"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;