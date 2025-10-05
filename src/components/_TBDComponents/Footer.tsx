import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card/50 border-t border-border/50 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Logo and Description */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-gradient mb-2">Abid Ramay</h3>
            <p className="text-muted-foreground max-w-xs">
              Crafting digital experiences with passion and precision.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6">
            <a 
              href="https://github.com" 
              className="text-muted-foreground hover:text-primary transition-smooth hover-scale p-2 rounded-full hover:bg-primary/10"
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com" 
              className="text-muted-foreground hover:text-primary transition-smooth hover-scale p-2 rounded-full hover:bg-primary/10"
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:alex.dubois@example.com" 
              className="text-muted-foreground hover:text-primary transition-smooth hover-scale p-2 rounded-full hover:bg-primary/10"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border/30 text-center">
          <p className="text-muted-foreground text-sm flex items-center justify-center">
            © {currentYear} Abid Ramay. Made with 
            <Heart size={16} className="mx-1 text-primary" fill="currentColor" />
            in SF Bay Area, California 🇺🇸
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;