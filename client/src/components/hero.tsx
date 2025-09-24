import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-gradient text-white pt-16 pb-20 fade-in" data-testid="hero-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[600px]">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight" data-testid="hero-title">
              Professional Physiotherapy for Your Health & Recovery
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed" data-testid="hero-description">
              Expert care and personalized treatment plans to help you move better, feel stronger, and live pain-free.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={() => scrollToSection('booking')}
                className="bg-white text-primary px-8 py-4 text-lg font-semibold hover:bg-white/90"
                data-testid="hero-book-consultation"
              >
                Book Consultation
              </Button>
              <Button 
                onClick={() => scrollToSection('services')}
                variant="outline"
                className="border-2 border-white text-white px-8 py-4 text-lg font-semibold hover:bg-white hover:text-primary"
                data-testid="hero-our-services"
              >
                Our Services
              </Button>
            </div>
          </div>
          <div className="text-center">
            <img 
              src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Modern physiotherapy clinic interior" 
              className="rounded-2xl shadow-2xl w-full h-auto"
              data-testid="hero-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
