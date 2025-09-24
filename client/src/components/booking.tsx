import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

interface BookingFormData {
  fullName: string;
  phoneNumber: string;
  email: string;
  serviceType: string;
  preferredDate: string;
  preferredTime: string;
  condition: string;
}

export default function Booking() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: "",
    phoneNumber: "",
    email: "",
    serviceType: "",
    preferredDate: "",
    preferredTime: "",
    condition: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleBooking = async (data: BookingFormData) => {
    setIsSubmitting(true);
    
    // Simulate form submission delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Show success message
    toast({
      title: "Appointment Request Received",
      description: "Thank you for your appointment request! We will contact you soon to confirm.",
    });
    
    // Reset form
    setFormData({
      fullName: "",
      phoneNumber: "",
      email: "",
      serviceType: "",
      preferredDate: "",
      preferredTime: "",
      condition: ""
    });
    
    setIsSubmitting(false);
  };

  const handleInputChange = (field: keyof BookingFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleBooking(formData);
  };

  return (
    <section id="booking" className="py-20 bg-muted" data-testid="booking-section">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6" data-testid="booking-title">
            Book Your Appointment
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed" data-testid="booking-subtitle">
            Take the first step towards better health. Schedule your consultation today.
          </p>
        </div>
        <div className="bg-card rounded-2xl p-8 shadow-lg">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6" data-testid="booking-form">
            <div>
              <Label htmlFor="fullName" className="block text-foreground font-semibold mb-2">
                Full Name *
              </Label>
              <Input
                id="fullName"
                type="text"
                value={formData.fullName}
                onChange={(e) => handleInputChange("fullName", e.target.value)}
                placeholder="Enter your full name"
                required
                data-testid="input-fullName"
              />
            </div>
            <div>
              <Label htmlFor="phoneNumber" className="block text-foreground font-semibold mb-2">
                Phone Number *
              </Label>
              <Input
                id="phoneNumber"
                type="tel"
                value={formData.phoneNumber}
                onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
                placeholder="Enter your phone number"
                required
                data-testid="input-phoneNumber"
              />
            </div>
            <div>
              <Label htmlFor="email" className="block text-foreground font-semibold mb-2">
                Email Address *
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                placeholder="Enter your email"
                required
                data-testid="input-email"
              />
            </div>
            <div>
              <Label htmlFor="serviceType" className="block text-foreground font-semibold mb-2">
                Service Type *
              </Label>
              <Select value={formData.serviceType} onValueChange={(value) => handleInputChange("serviceType", value)} required>
                <SelectTrigger data-testid="select-serviceType">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sports">Sports Physiotherapy</SelectItem>
                  <SelectItem value="orthopedic">Orthopedic Rehabilitation</SelectItem>
                  <SelectItem value="neurological">Neurological Physiotherapy</SelectItem>
                  <SelectItem value="pediatric">Pediatric Physiotherapy</SelectItem>
                  <SelectItem value="manual">Manual Therapy</SelectItem>
                  <SelectItem value="cardio">Cardiopulmonary Rehab</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="preferredDate" className="block text-foreground font-semibold mb-2">
                Preferred Date
              </Label>
              <Input
                id="preferredDate"
                type="date"
                value={formData.preferredDate}
                onChange={(e) => handleInputChange("preferredDate", e.target.value)}
                data-testid="input-preferredDate"
              />
            </div>
            <div>
              <Label htmlFor="preferredTime" className="block text-foreground font-semibold mb-2">
                Preferred Time
              </Label>
              <Select value={formData.preferredTime} onValueChange={(value) => handleInputChange("preferredTime", value)}>
                <SelectTrigger data-testid="select-preferredTime">
                  <SelectValue placeholder="Select time" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="morning">Morning (9AM - 12PM)</SelectItem>
                  <SelectItem value="afternoon">Afternoon (12PM - 5PM)</SelectItem>
                  <SelectItem value="evening">Evening (5PM - 7PM)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="md:col-span-2">
              <Label htmlFor="condition" className="block text-foreground font-semibold mb-2">
                Tell us about your condition
              </Label>
              <Textarea
                id="condition"
                rows={4}
                value={formData.condition}
                onChange={(e) => handleInputChange("condition", e.target.value)}
                placeholder="Please describe your symptoms, injury, or reason for seeking physiotherapy..."
                data-testid="textarea-condition"
              />
            </div>
            <div className="md:col-span-2 text-center">
              <Button 
                type="submit"
                disabled={isSubmitting}
                className="bg-primary text-primary-foreground px-8 py-4 text-lg font-semibold hover:bg-primary/90"
                data-testid="button-schedule-appointment"
              >
                {isSubmitting ? "Scheduling..." : "Schedule Appointment"}
              </Button>
              <p className="text-muted-foreground text-sm mt-4">
                We'll contact you within 24 hours to confirm your appointment
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
