const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 bg-primary text-primary-foreground">
      <div className="container px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <span className="font-display text-xl font-bold">
              Ostwal<span className="text-accent">LLC</span>
            </span>
            <p className="text-primary-foreground/70 text-sm mt-1">
              IT Consulting | PLM Solutions
            </p>
          </div>
          
          <nav className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#services" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              Services
            </a>
            <a href="#about" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              About
            </a>
            <a href="#contact" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              Contact
            </a>
          </nav>
          
          <p className="text-primary-foreground/60 text-sm">
            © {currentYear} Ostwal LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
