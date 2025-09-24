import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function Booking() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedService, setSelectedService] = useState("");

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
          <form 
            action="https://formsubmit.co/info@aarvikaphysio.com" 
            method="POST"
            className="grid grid-cols-1 md:grid-cols-2 gap-6" 
            data-testid="booking-form"
            onSubmit={() => setIsSubmitting(true)}
          >
            {/* FormSubmit Configuration */}
            <input type="hidden" name="_subject" value="New Appointment Request - Aarvika Physiotherapy" />
            <input type="hidden" name="_next" value="https://formsubmit.co/thankyou.html" />
            <input type="hidden" name="_template" value="table" />
            
            {/* Honeypot anti-spam field */}
            <input type="text" name="_honey" style={{display: "none"}} tabIndex={-1} autoComplete="off" />
            
            <div>
              <Label htmlFor="fullName" className="block text-foreground font-semibold mb-2">
                Full Name *
              </Label>
              <Input
                id="fullName"
                name="Full Name"
                type="text"
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
                name="Phone Number"
                type="tel"
                placeholder="Enter your phone number (e.g., 555-123-4567)"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
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
                name="email"
                type="email"
                placeholder="Enter your email"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                required
                data-testid="input-email"
              />
            </div>
            <div>
              <Label htmlFor="serviceType" className="block text-foreground font-semibold mb-2">
                Service Type *
              </Label>
              <select 
                id="serviceType"
                name="Service Type"
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                required
                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                data-testid="select-serviceType"
              >
                <option value="">Select a service</option>
                <option value="Sports Physiotherapy">Sports Physiotherapy</option>
                <option value="Orthopedic Rehabilitation">Orthopedic Rehabilitation</option>
                <option value="Neurological Physiotherapy">Neurological Physiotherapy</option>
                <option value="Pediatric Physiotherapy">Pediatric Physiotherapy</option>
                <option value="Manual Therapy">Manual Therapy</option>
                <option value="Cardiopulmonary Rehab">Cardiopulmonary Rehab</option>
              </select>
            </div>
            <div>
              <Label htmlFor="preferredDate" className="block text-foreground font-semibold mb-2">
                Preferred Date
              </Label>
              <Input
                id="preferredDate"
                name="Preferred Date"
                type="date"
                data-testid="input-preferredDate"
              />
            </div>
            <div>
              <Label htmlFor="preferredTime" className="block text-foreground font-semibold mb-2">
                Preferred Time
              </Label>
              <select 
                id="preferredTime"
                name="Preferred Time"
                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                data-testid="select-preferredTime"
              >
                <option value="">Select time</option>
                <option value="Morning (9AM - 12PM)">Morning (9AM - 12PM)</option>
                <option value="Afternoon (12PM - 5PM)">Afternoon (12PM - 5PM)</option>
                <option value="Evening (5PM - 7PM)">Evening (5PM - 7PM)</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <Label htmlFor="condition" className="block text-foreground font-semibold mb-2">
                Tell us about your condition
              </Label>
              <Textarea
                id="condition"
                name="Condition Details"
                rows={4}
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
