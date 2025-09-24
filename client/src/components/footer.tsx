import { Heart, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { name: "About Us", section: "about" },
    { name: "Our Services", section: "services" },
    { name: "Our Team", section: "team" },
    { name: "Testimonials", section: "testimonials" },
    { name: "Contact", section: "contact" }
  ];

  const services = [
    "Sports Physiotherapy",
    "Orthopedic Rehab", 
    "Neurological Therapy",
    "Pediatric Care",
    "Manual Therapy"
  ];

  const socialLinks = [
    { icon: Facebook, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Linkedin, href: "#" },
    { icon: Twitter, href: "#" }
  ];

  return (
    <footer className="bg-foreground text-background py-16" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="text-3xl font-bold mb-4" data-testid="footer-logo">
              <Heart className="inline mr-2 text-primary" size={32} />
              Aarvika
            </div>
            <p className="text-background/80 mb-6 leading-relaxed" data-testid="footer-description">
              Professional physiotherapy services dedicated to helping you achieve optimal health and mobility. Expert care with a personal touch.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href} 
                  className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-primary/80 transition-colors duration-300"
                  data-testid={`social-link-${index}`}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4" data-testid="quick-links-title">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button 
                    onClick={() => scrollToSection(link.section)}
                    className="text-background/80 hover:text-primary transition-colors duration-300 text-left"
                    data-testid={`quick-link-${index}`}
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4" data-testid="services-title">Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <button 
                    onClick={() => scrollToSection('services')}
                    className="text-background/80 hover:text-primary transition-colors duration-300 text-left"
                    data-testid={`service-link-${index}`}
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-background/20 mt-12 pt-8 text-center">
          <p className="text-background/60" data-testid="footer-copyright">
            © 2024 Aarvika Physiotherapy Clinic. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
}
