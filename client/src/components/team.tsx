export default function Team() {
  const teamMembers = [
    {
      name: "Dr. Sarah Johnson",
      role: "Lead Physiotherapist",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
      description: "15+ years experience in orthopedic and sports physiotherapy. Specialized in manual therapy and injury prevention.",
      certifications: ["DPT", "Manual Therapy"]
    },
    {
      name: "Dr. Michael Chen",
      role: "Sports Physiotherapist", 
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
      description: "Former team physiotherapist for professional sports teams. Expert in sports injury rehabilitation and performance optimization.",
      certifications: ["DPT", "Sports Medicine"]
    },
    {
      name: "Dr. Emily Rodriguez", 
      role: "Neurological Specialist",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
      description: "Specialized in neurological rehabilitation with focus on stroke recovery and movement disorders. Certified in NDT.",
      certifications: ["DPT", "Neurology"]
    }
  ];

  return (
    <section id="team" className="py-20 bg-muted" data-testid="team-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6" data-testid="team-title">
            Meet Our Expert Team
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed" data-testid="team-subtitle">
            Our qualified physiotherapists bring years of experience and specialized training to provide you with the best possible care.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-card rounded-2xl p-8 text-center shadow-lg card-hover" data-testid={`team-member-${index}`}>
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
                data-testid={`team-image-${index}`}
              />
              <h3 className="text-xl font-bold text-foreground mb-2" data-testid={`team-name-${index}`}>
                {member.name}
              </h3>
              <p className="text-primary font-semibold mb-4" data-testid={`team-role-${index}`}>
                {member.role}
              </p>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed" data-testid={`team-description-${index}`}>
                {member.description}
              </p>
              <div className="flex justify-center space-x-3">
                {member.certifications.map((cert, certIndex) => (
                  <span 
                    key={certIndex}
                    className={`${certIndex % 2 === 0 ? 'bg-primary' : 'bg-accent'} text-white px-3 py-1 rounded-full text-xs`}
                    data-testid={`team-cert-${index}-${certIndex}`}
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
