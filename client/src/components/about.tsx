import { Check } from "lucide-react";

export default function About() {
  const features = [
    {
      title: "Expert Care",
      description: "Licensed professionals with years of experience"
    },
    {
      title: "Personalized Treatment", 
      description: "Customized plans for your specific condition"
    },
    {
      title: "Modern Equipment",
      description: "State-of-the-art facilities and technology"
    },
    {
      title: "Holistic Approach",
      description: "Comprehensive care for mind and body"
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted" data-testid="about-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6" data-testid="about-title">
            About Aarvika Physiotherapy
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed" data-testid="about-subtitle">
            Dedicated to providing exceptional physiotherapy services with a patient-centered approach, combining expertise with compassionate care.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Physiotherapist working with patient" 
              className="rounded-2xl shadow-lg w-full h-auto"
              data-testid="about-image"
            />
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6" data-testid="mission-title">
              Our Mission
            </h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed" data-testid="mission-description">
              At Aarvika Physiotherapy Clinic, we believe in empowering our patients to achieve optimal health and mobility. Our evidence-based treatments and personalized care plans are designed to address your unique needs and goals.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start" data-testid={`feature-${index}`}>
                  <div className={`${index % 2 === 0 ? 'bg-primary' : 'bg-accent'} text-white rounded-full p-2 mr-4 mt-1`}>
                    <Check size={16} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2" data-testid={`feature-title-${index}`}>
                      {feature.title}
                    </h4>
                    <p className="text-muted-foreground text-sm" data-testid={`feature-description-${index}`}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
