import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectValue,
  SelectItem,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  service: string;
  message: string;
}

export default function Contact() {
  const { toast } = useToast();
  const [selectedService, setSelectedService] = useState("");

  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const FORMSPREE_ENDPOINT = "https://formspree.io/f/xpwywaov";

  const handleContact = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          subject: data.subject,
          service: data.service,
          message: data.message,
          _replyto: data.email, // Sets the reply-to address
          _subject: data.subject || "New contact form submission", // Email subject
        }),
      });

      if (response.ok) {
        // Show success message
        toast({
          title: "Message Sent Successfully!",
          description:
            "Thank you for your message! We will get back to you within 24 hours.",
        });

        // Reset form
        setFormData({
          name: "",
          email: "",
          subject: "",
          service: "",
          message: "",
        });
      } else {
        // Handle error
        toast({
          title: "Error",
          description:
            "There was a problem sending your message. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: "Error",
        description:
          "Network error. Please check your connection and try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    if (field === "service" && value === "unassigned") value = "";
    console.log(value);
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    handleContact(formData);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      content: [
        "Laxmi Nivas",
        "Ground Floor, Near Vighnaharta Ganpati Mandir,",
        "Gangapur Rd., Nashik",
      ],
      bgColor: "bg-primary",
    },
    {
      icon: Phone,
      title: "Phone",
      content: ["Main: +91 9421693111", "Emergency: +91 0000000000"],
      bgColor: "bg-accent",
    },
    {
      icon: Mail,
      title: "Email",
      content: ["rashmi.bafana@gmail.com"],
      bgColor: "bg-primary",
    },
    {
      icon: Clock,
      title: "Hours",
      content: [
        "Monday - Saturday: 10:00 AM - 1:00 PM | 4:00 PM - 7:00 PM",
        "Sunday: Closed",
      ],
      bgColor: "bg-accent",
    },
  ];

  return (
    <section
      id='contact'
      className='py-20 bg-background'
      data-testid='contact-section'
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <h2
            className='text-3xl md:text-5xl font-bold text-foreground mb-6'
            data-testid='contact-title'
          >
            Contact
          </h2>
          <p
            className='text-xl text-muted-foreground leading-relaxed'
            data-testid='contact-subtitle'
          >
            Relieving your pain is my priority. Send me a message and I’ll be in
            touch shortly.
          </p>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16'>
          <div>
            <div className='space-y-8'>
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className='flex items-start'
                  data-testid={`contact-info-${index}`}
                >
                  <div
                    className={`${info.bgColor} text-white rounded-full p-3 mr-4 mt-1`}
                  >
                    <info.icon size={24} />
                  </div>
                  <div>
                    <h3
                      className='text-xl font-bold text-foreground mb-2'
                      data-testid={`contact-info-title-${index}`}
                    >
                      {info.title}
                    </h3>
                    <div className='text-muted-foreground leading-relaxed'>
                      {info.content.map((line, lineIndex) => (
                        <p
                          key={lineIndex}
                          data-testid={`contact-info-content-${index}-${lineIndex}`}
                        >
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
            <div className='bg-card rounded-2xl p-8 shadow-lg'>
              <h3
                className='text-2xl font-bold text-foreground mb-6'
                data-testid='contact-form-title'
              >
                Send a Message
              </h3>
              <form
                onSubmit={handleSubmit}
                className='space-y-6'
                data-testid='contact-form'
              >
                <div>
                  <Label
                    htmlFor='name'
                    className='block text-foreground font-semibold mb-2'
                  >
                    Name *
                  </Label>
                  <Input
                    id='name'
                    type='text'
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder='Your name'
                    required
                    data-testid='input-name'
                  />
                </div>
                <div>
                  <Label
                    htmlFor='email'
                    className='block text-foreground font-semibold mb-2'
                  >
                    Email *
                  </Label>
                  <Input
                    id='email'
                    type='email'
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder='Your email'
                    required
                    data-testid='input-email'
                  />
                </div>
                <div>
                  <Label
                    htmlFor='subject'
                    className='block text-foreground font-semibold mb-2'
                  >
                    Subject
                  </Label>
                  <Input
                    id='subject'
                    type='text'
                    value={formData.subject}
                    onChange={(e) =>
                      handleInputChange("subject", e.target.value)
                    }
                    placeholder='Message subject'
                    data-testid='input-subject'
                  />
                </div>
                <div>
                  <Label
                    htmlFor='serviceType'
                    className='block text-foreground font-semibold mb-2'
                  >
                    Service Type
                  </Label>
                  <Select
                    onValueChange={(value) =>
                      handleInputChange("service", value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder='Select a service' />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value='unassigned'>
                        Select a service
                      </SelectItem>
                      <SelectItem value='Sports Physiotherapy'>
                        Sports Physiotherapy
                      </SelectItem>
                      <SelectItem value='Orthopedic Rehabilitation'>
                        Orthopedic Rehabilitation
                      </SelectItem>
                      <SelectItem value='Pediatric Physiotherapy'>
                        Pediatric Physiotherapy
                      </SelectItem>
                      <SelectItem value='Neurological Physiotherapy'>
                        Neurological Physiotherapy
                      </SelectItem>
                      <SelectItem value='Manual Therapy'>
                        Manual Therapy
                      </SelectItem>
                      <SelectItem value='Cardiopulmonary Rehab'>
                        Cardiopulmonary Rehab{" "}
                      </SelectItem>
                    </SelectContent>
                  </Select>

                  {/* <select
                    id='serviceType'
                    name='Service Type'
                    value={formData.service}
                    onChange={(e) =>
                      handleInputChange("service", e.target.value)
                    }
                    className='flex h-9 w-full rounded-md border border-input px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50'
                    data-testid='select-serviceType'
                  >
                    <option value=''>Select a service</option>
                    <option value='Sports Physiotherapy'>
                      Sports Physiotherapy
                    </option>
                    <option value='Orthopedic Rehabilitation'>
                      Orthopedic Rehabilitation
                    </option>
                    <option value='Neurological Physiotherapy'>
                      Neurological Physiotherapy
                    </option>
                    <option value='Pediatric Physiotherapy'>
                      Pediatric Physiotherapy
                    </option>
                    <option value='Manual Therapy'>Manual Therapy</option>
                    <option value='Cardiopulmonary Rehab'>
                      Cardiopulmonary Rehab
                    </option>
                    <option value='Other'>Other</option>
                  </select> */}
                </div>
                <div>
                  <Label
                    htmlFor='message'
                    className='block text-foreground font-semibold mb-2'
                  >
                    Message *
                  </Label>
                  <Textarea
                    id='message'
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      handleInputChange("message", e.target.value)
                    }
                    placeholder='Your message'
                    required
                    data-testid='textarea-message'
                  />
                </div>
                <Button
                  type='submit'
                  disabled={isSubmitting}
                  className='w-full bg-primary text-primary-foreground py-3 font-semibold hover:bg-primary/90'
                  data-testid='button-send-message'
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
