import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Github, Linkedin, Twitter } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Let's Work Together
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="card-gradient border-border/50 hover-scale transition-spring">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-primary">Send a Message</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Your name"
                      className="bg-input border-border/50 focus:border-primary transition-smooth"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      className="bg-input border-border/50 focus:border-primary transition-smooth"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    type="text"
                    placeholder="Project inquiry"
                    className="bg-input border-border/50 focus:border-primary transition-smooth"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="bg-input border-border/50 focus:border-primary transition-smooth resize-none"
                  />
                </div>
                
                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-lg font-medium hover-glow transition-spring"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
          
          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="card-gradient border-border/50 hover-scale transition-spring">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-primary">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Mail className="text-primary" size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <p className="text-muted-foreground">abid.ramay@example.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Phone className="text-primary" size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Phone</p>
                      <p className="text-muted-foreground">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <MapPin className="text-primary" size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Location</p>
                      <p className="text-muted-foreground">SF Bay Area, California 🇺🇸</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="card-gradient border-border/50 hover-scale transition-spring">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-primary">Follow Me</h3>
                <div className="grid grid-cols-2 gap-4">
                  <a 
                    href="https://github.com" 
                    className="flex items-center space-x-3 p-4 bg-primary/5 rounded-lg hover:bg-primary/10 transition-smooth hover-scale"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Github className="text-primary" size={20} />
                    <span className="text-foreground font-medium">GitHub</span>
                  </a>
                  
                  <a 
                    href="https://linkedin.com" 
                    className="flex items-center space-x-3 p-4 bg-primary/5 rounded-lg hover:bg-primary/10 transition-smooth hover-scale"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="text-primary" size={20} />
                    <span className="text-foreground font-medium">LinkedIn</span>
                  </a>
                  
                  <a 
                    href="https://twitter.com" 
                    className="flex items-center space-x-3 p-4 bg-primary/5 rounded-lg hover:bg-primary/10 transition-smooth hover-scale"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Twitter className="text-primary" size={20} />
                    <span className="text-foreground font-medium">Twitter</span>
                  </a>
                  
                  <a 
                    href="mailto:abid.ramay@example.com" 
                    className="flex items-center space-x-3 p-4 bg-primary/5 rounded-lg hover:bg-primary/10 transition-smooth hover-scale"
                  >
                    <Mail className="text-primary" size={20} />
                    <span className="text-foreground font-medium">Email</span>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;