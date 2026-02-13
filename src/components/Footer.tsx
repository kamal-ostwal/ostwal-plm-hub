import ostwalLogo from "@/assets/ostwal-logo.jpg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 bg-primary text-primary-foreground">
      <div className="container px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <img src={ostwalLogo} alt="Ostwal LLC" className="h-8 w-auto rounded" />
            <div>
              <span className="font-display text-lg font-bold">Ostwal LLC</span>
              <p className="text-primary-foreground/60 text-xs">IT Consulting · PLM Solutions</p>
            </div>
          </div>

          <nav className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#services" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Services</a>
            <a href="#about" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">About</a>
            <a href="#contact" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Contact</a>
          </nav>

          <p className="text-primary-foreground/50 text-xs">
            © {currentYear} Ostwal LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
