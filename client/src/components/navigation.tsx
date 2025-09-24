import { useState } from "react";
import { Heart, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-card shadow-lg fixed w-full top-0 z-50" data-testid="navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-primary" data-testid="logo">
              <Heart className="inline mr-2" size={24} />
              Aarvika
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-foreground hover:text-primary transition-colors duration-300"
                data-testid="nav-home"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-foreground hover:text-primary transition-colors duration-300"
                data-testid="nav-about"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-foreground hover:text-primary transition-colors duration-300"
                data-testid="nav-services"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('team')}
                className="text-foreground hover:text-primary transition-colors duration-300"
                data-testid="nav-team"
              >
                Team
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="text-foreground hover:text-primary transition-colors duration-300"
                data-testid="nav-testimonials"
              >
                Reviews
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-foreground hover:text-primary transition-colors duration-300"
                data-testid="nav-contact"
              >
                Contact
              </button>
            </div>
          </div>
          
          <div className="hidden md:block">
            <Button 
              onClick={() => scrollToSection('booking')}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
              data-testid="nav-book-appointment"
            >
              Book Appointment
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              data-testid="mobile-menu-toggle"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden" data-testid="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-card border-t">
              <button 
                onClick={() => scrollToSection('home')}
                className="block w-full text-left px-3 py-2 text-foreground hover:text-primary"
                data-testid="mobile-nav-home"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block w-full text-left px-3 py-2 text-foreground hover:text-primary"
                data-testid="mobile-nav-about"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="block w-full text-left px-3 py-2 text-foreground hover:text-primary"
                data-testid="mobile-nav-services"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('team')}
                className="block w-full text-left px-3 py-2 text-foreground hover:text-primary"
                data-testid="mobile-nav-team"
              >
                Team
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="block w-full text-left px-3 py-2 text-foreground hover:text-primary"
                data-testid="mobile-nav-testimonials"
              >
                Reviews
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-3 py-2 text-foreground hover:text-primary"
                data-testid="mobile-nav-contact"
              >
                Contact
              </button>
              <Button 
                onClick={() => scrollToSection('booking')}
                className="w-full mt-2 bg-primary text-primary-foreground hover:bg-primary/90"
                data-testid="mobile-book-appointment"
              >
                Book Appointment
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
