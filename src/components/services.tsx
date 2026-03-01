import React from "react";
import { Activity, Bone, Brain, Baby, Hand, Heart } from "lucide-react";

interface ServiceItemProps {
  service: ServiceItemType;
}

type ServiceItemType = {
  id: string;
  Icon:
    | typeof Activity
    | typeof Bone
    | typeof Brain
    | typeof Baby
    | typeof Hand
    | typeof Heart;
  title: string;
  description: string;
  price?: string;
  backgroundColor: string;
};

const ServiceItem: React.FC<ServiceItemProps> = ({ service }) => {
  const { id, backgroundColor, Icon, title, description, price } = service;
  return (
    <div
      className='bg-card rounded-2xl p-2 md:p-8 shadow-lg card-hover'
      data-testid={`service-card-${id}`}
    >
      <div
        className={`${backgroundColor} text-white rounded-full w-10 h-10 md:w-16 md:h-16 flex items-center justify-center mb-2 md:mb-6 mx-auto`}
      >
        <Icon size={32} />
      </div>
      <h3
        className='text-md md:text-xl font-bold text-foreground text-center mb-2 md:mb-4'
        data-testid={`service-title-${id}`}
      >
        {title}
      </h3>
      <p
        className='text-muted-foreground text-center mb-4 md:mb-6 leading-relaxed'
        data-testid={`service-description-${id}`}
      >
        {description}
      </p>
      {price && (
        <div className='text-center'>
          <span
            className='text-2xl font-bold text-primary'
            data-testid={`service-price-${id}`}
          >
            {price}
          </span>
          <span className='text-muted-foreground text-sm block'>
            per session
          </span>
        </div>
      )}
    </div>
  );
};
export default function Services() {
  const SERVICES = [
    {
      id: "Sports",
      Icon: Activity,
      title: "Sports Physiotherapy",
      description:
        "Specialized treatment for sports injuries, performance enhancement, and injury prevention for athletes of all levels.",
      // price: "From 800/-",
      backgroundColor: "bg-primary",
    },
    {
      id: "Orthopedic",
      Icon: Bone,
      title: "Orthopedic Rehabilitation",
      description:
        "Post-surgical recovery and treatment for musculoskeletal conditions, fractures, and joint replacements.",
      // price: "From 750/-",
      backgroundColor: "bg-accent",
    },
    {
      id: "Neurological",
      Icon: Brain,
      title: "Neurological Physiotherapy",
      description:
        "Specialized care for stroke recovery, Parkinson's disease, multiple sclerosis, and other neurological conditions.",
      // price: "From 900/-",
      backgroundColor: "bg-primary",
    },
    {
      id: "Pediatric",
      Icon: Baby,
      title: "Pediatric Physiotherapy",
      description:
        "Gentle, play-based therapy for children with developmental delays, injuries, or movement disorders.",
      // price: "From 700/-",
      backgroundColor: "bg-accent",
    },
    {
      id: "Manual",
      Icon: Hand,
      title: "Manual Therapy",
      description:
        "Hands-on treatment techniques including joint mobilization, soft tissue massage, and myofascial release.",
      // price: "From 850/-",
      backgroundColor: "bg-primary",
    },
    {
      id: "Cardiopulmonary",
      Icon: Heart,
      title: "Cardiopulmonary Rehab",
      description:
        "Rehabilitation for heart and lung conditions, improving cardiovascular fitness and respiratory function.",
      // price: "From 950/-",
      backgroundColor: "bg-accent",
    },
  ];

  return (
    <section
      id='services'
      className='bg-background scroll-mt-20'
      data-testid='services-section'
    >
      <div className='max-w-7xl mx-auto p-4 sm:px-6 lg:px-8 lg:py-18'>
        <div className='text-center mb-4 md:mb-16'>
          <h2
            className='text-xl md:text-5xl font-bold text-foreground mb-2 md:mb-6 text-center'
            data-testid='services-title'
          >
            Services Offered
          </h2>
          <p
            className='text-sm md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed'
            data-testid='services-subtitle'
          >
            Comprehensive physiotherapy treatments tailored to help you recover,
            strengthen, and maintain optimal health.
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8'>
          {SERVICES.map((service) => (
            <ServiceItem key={service.id} service={service}></ServiceItem>
          ))}
        </div>
      </div>
    </section>
  );
}
