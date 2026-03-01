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
  subject?: string;
  service?: string;
  message: string;
}

interface ContactItemProps {
  contact: ContactItemType;
}

type ContactItemType = {
  id: string;
  Icon: typeof MapPin | typeof Phone | typeof Mail | typeof Clock;
  title: string;
  content: Array<string>;
  backgroundColor: string;
};

export default function Contact() {
  const { toast } = useToast();
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

  const CONTACT_INFO = [
    {
      id: "Location",
      Icon: MapPin,
      title: "Location",
      content: [
        "Laxmi Nivas",
        "Ground Floor, Near Vighnaharta Ganpati Mandir,",
        "Gangapur Rd., Nashik",
      ],
      backgroundColor: "bg-primary",
    },
    {
      id: "Phone",
      Icon: Phone,
      title: "Phone",
      content: ["Main: +91 9421693111", "Emergency: +91 0000000000"],
      backgroundColor: "bg-accent",
    },
    {
      id: "Email",
      Icon: Mail,
      title: "Email",
      content: ["rashmi.bafana@gmail.com"],
      backgroundColor: "bg-primary",
    },
    {
      id: "Hours",
      Icon: Clock,
      title: "Hours",
      content: [
        "Monday - Saturday: 10:00 AM - 1:00 PM | 5:00 PM - 9:00 PM",
        "Sunday: Closed",
      ],
      backgroundColor: "bg-accent",
    },
  ];

  const ContactItem: React.FC<ContactItemProps> = ({ contact }) => {
    const { id, Icon, title, content, backgroundColor } = contact;
    return (
      <div
        key={id}
        className='flex items-start'
        data-testid={`contact-info-${id}`}
      >
        <div
          className={`${backgroundColor} text-white rounded-full p-2 md:p-3 mr-3 md:mr-4 md:mt-1`}
        >
          <Icon className='w-4 h-4 md:w-8 md:h-8' />
        </div>
        <div>
          <h3
            className='text-sm md:text-xl font-bold text-foreground md:mb-2'
            data-testid={`contact-info-title-${id}`}
          >
            {title}
          </h3>
          <div className='text-muted-foreground leading-relaxed'>
            {content.map((line, lineIndex) => (
              <p
                className='text-sm md:text-xl'
                key={lineIndex}
                data-testid={`contact-info-content-${id}-${lineIndex}`}
              >
                {line}
              </p>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section
      id='contact'
      className='bg-muted scroll-mt-20'
      data-testid='contact-section'
    >
      <div className='max-w-7xl mx-auto p-4 sm:px-6 md:px-8 md:py-10'>
        <div className='text-center mb-4 md:mb-16'>
          <h2
            className='text-2xl md:text-5xl font-bold text-foreground mb-2 md:mb-6 text-center'
            data-testid='contact-title'
          >
            Contact
          </h2>
          <p
            className='text-sm md:text-xl text-muted-foreground leading-relaxed'
            data-testid='contact-subtitle'
          >
            Relieving your pain is my priority. Send me a message and I’ll be in
            touch shortly.
          </p>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16'>
          <div className='space-y-4 md:space-y-8'>
            {CONTACT_INFO.map((contact) => (
              <ContactItem key={contact.id} contact={contact}></ContactItem>
            ))}
          </div>
          <div className='bg-card rounded-2xl  p-4 md:p-8 shadow-lg'>
            <h3
              className='text-2xl font-bold text-foreground mb-4 md:mb-6 text-center md:text-left'
              data-testid='contact-form-title'
            >
              Send a Message
            </h3>
            <form
              onSubmit={handleSubmit}
              className='space-y-4 md:space-y-6'
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
                  onChange={(e) => handleInputChange("subject", e.target.value)}
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
                  onValueChange={(value) => handleInputChange("service", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder='Select a service' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value='unassigned'>Select a service</SelectItem>
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
                  onChange={(e) => handleInputChange("message", e.target.value)}
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
    </section>
  );
}
