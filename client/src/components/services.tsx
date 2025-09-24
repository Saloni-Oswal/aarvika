import { Activity, Bone, Brain, Baby, Hand, Heart } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Activity,
      title: "Sports Physiotherapy",
      description: "Specialized treatment for sports injuries, performance enhancement, and injury prevention for athletes of all levels.",
      price: "From $80",
      bgColor: "bg-primary"
    },
    {
      icon: Bone,
      title: "Orthopedic Rehabilitation", 
      description: "Post-surgical recovery and treatment for musculoskeletal conditions, fractures, and joint replacements.",
      price: "From $75",
      bgColor: "bg-accent"
    },
    {
      icon: Brain,
      title: "Neurological Physiotherapy",
      description: "Specialized care for stroke recovery, Parkinson's disease, multiple sclerosis, and other neurological conditions.",
      price: "From $90", 
      bgColor: "bg-primary"
    },
    {
      icon: Baby,
      title: "Pediatric Physiotherapy",
      description: "Gentle, play-based therapy for children with developmental delays, injuries, or movement disorders.",
      price: "From $70",
      bgColor: "bg-accent"
    },
    {
      icon: Hand,
      title: "Manual Therapy",
      description: "Hands-on treatment techniques including joint mobilization, soft tissue massage, and myofascial release.",
      price: "From $85",
      bgColor: "bg-primary"
    },
    {
      icon: Heart,
      title: "Cardiopulmonary Rehab",
      description: "Rehabilitation for heart and lung conditions, improving cardiovascular fitness and respiratory function.",
      price: "From $95",
      bgColor: "bg-accent"
    }
  ];

  return (
    <section id="services" className="py-20 bg-background" data-testid="services-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6" data-testid="services-title">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed" data-testid="services-subtitle">
            Comprehensive physiotherapy treatments tailored to help you recover, strengthen, and maintain optimal health.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-card rounded-2xl p-8 shadow-lg card-hover" data-testid={`service-card-${index}`}>
              <div className={`${service.bgColor} text-white rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto`}>
                <service.icon size={32} />
              </div>
              <h3 className="text-xl font-bold text-foreground text-center mb-4" data-testid={`service-title-${index}`}>
                {service.title}
              </h3>
              <p className="text-muted-foreground text-center mb-6 leading-relaxed" data-testid={`service-description-${index}`}>
                {service.description}
              </p>
              <div className="text-center">
                <span className="text-2xl font-bold text-primary" data-testid={`service-price-${index}`}>
                  {service.price}
                </span>
                <span className="text-muted-foreground text-sm block">per session</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
