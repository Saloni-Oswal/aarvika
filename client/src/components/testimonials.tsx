import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "James Miller",
      role: "Marathon Runner",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
      content: "After my knee surgery, I was worried I'd never run again. Dr. Johnson's expertise and encouraging approach helped me not only recover but become stronger than before. I'm back to marathon training!"
    },
    {
      name: "Maria Garcia",
      role: "Mother of Two",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b5bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
      content: "The team at Aarvika helped my daughter overcome her developmental delays. Their pediatric specialists are amazing with children and made therapy fun and engaging."
    },
    {
      name: "Robert Thompson", 
      role: "Retired Teacher",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
      content: "Professional, caring, and effective. The manual therapy sessions with Dr. Chen resolved my chronic back pain that I'd suffered with for years. Highly recommended!"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-background" data-testid="testimonials-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6" data-testid="testimonials-title">
            What Our Patients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed" data-testid="testimonials-subtitle">
            Real stories from patients who have experienced exceptional care and successful recoveries with our team.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card rounded-2xl p-8 shadow-lg" data-testid={`testimonial-${index}`}>
              <div className="flex items-center mb-6">
                <div className="flex text-yellow-500 text-lg">
                  {[...Array(5)].map((_, starIndex) => (
                    <Star key={starIndex} size={20} className="fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed italic" data-testid={`testimonial-content-${index}`}>
                "{testimonial.content}"
              </p>
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                  data-testid={`testimonial-image-${index}`}
                />
                <div>
                  <h4 className="font-semibold text-foreground" data-testid={`testimonial-name-${index}`}>
                    {testimonial.name}
                  </h4>
                  <p className="text-muted-foreground text-sm" data-testid={`testimonial-role-${index}`}>
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
