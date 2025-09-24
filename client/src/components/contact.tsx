import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleContact = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    // Simulate form submission delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Show success message
    toast({
      title: "Message Received",
      description: "Thank you for your message! We will get back to you within 24 hours.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
    
    setIsSubmitting(false);
  };

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleContact(formData);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Location",
      content: ["123 Health Street", "Downtown Medical District", "City, State 12345"],
      bgColor: "bg-primary"
    },
    {
      icon: Phone,
      title: "Phone",
      content: ["Main: (555) 123-4567", "Emergency: (555) 123-4568"],
      bgColor: "bg-accent"
    },
    {
      icon: Mail,
      title: "Email",
      content: ["info@aarvikaphysio.com", "appointments@aarvikaphysio.com"],
      bgColor: "bg-primary"
    },
    {
      icon: Clock,
      title: "Hours",
      content: ["Monday - Friday: 8:00 AM - 7:00 PM", "Saturday: 9:00 AM - 5:00 PM", "Sunday: Closed"],
      bgColor: "bg-accent"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background" data-testid="contact-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6" data-testid="contact-title">
            Contact Us
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed" data-testid="contact-subtitle">
            Get in touch with our team. We're here to help with any questions about our services.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start" data-testid={`contact-info-${index}`}>
                  <div className={`${info.bgColor} text-white rounded-full p-3 mr-4 mt-1`}>
                    <info.icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2" data-testid={`contact-info-title-${index}`}>
                      {info.title}
                    </h3>
                    <div className="text-muted-foreground leading-relaxed">
                      {info.content.map((line, lineIndex) => (
                        <p key={lineIndex} data-testid={`contact-info-content-${index}-${lineIndex}`}>
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="bg-card rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-foreground mb-6" data-testid="contact-form-title">
                Send us a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
                <div>
                  <Label htmlFor="name" className="block text-foreground font-semibold mb-2">
                    Name *
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder="Your name"
                    required
                    data-testid="input-name"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="block text-foreground font-semibold mb-2">
                    Email *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="Your email"
                    required
                    data-testid="input-email"
                  />
                </div>
                <div>
                  <Label htmlFor="subject" className="block text-foreground font-semibold mb-2">
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => handleInputChange("subject", e.target.value)}
                    placeholder="Message subject"
                    data-testid="input-subject"
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="block text-foreground font-semibold mb-2">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Your message"
                    required
                    data-testid="textarea-message"
                  />
                </div>
                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-primary-foreground py-3 font-semibold hover:bg-primary/90"
                  data-testid="button-send-message"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
