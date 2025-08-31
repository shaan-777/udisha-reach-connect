export const FocusAreas = () => {
  const focusAreas = [
    {
      icon: "📚",
      title: "Education Access",
      description: "Scholarships, dropout re-enrolment, bicycle, uniform, hostel schemes tak access ensure karna."
    },
    {
      icon: "🚿",
      title: "Hygiene & Sanitation", 
      description: "Toilets, menstrual health sessions, clean water linkages aur community hygiene programs."
    },
    {
      icon: "📱",
      title: "Digital Inclusion",
      description: "Aadhaar/PAN updates, DigiLocker setup, online applications aur digital literacy support."
    },
    {
      icon: "💰",
      title: "Financial Upliftment",
      description: "SHG credit, skilling programs, entrepreneurship support, pensions aur insurance schemes."
    }
  ];

  return (
    <section className="bg-gray-200 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
          Hamare Priority Focus Areas
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
          {focusAreas.map((area, index) => (
            <div 
              key={index} 
              className="bg-background p-8 rounded-2xl text-center shadow-card hover:transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl"
            >
              <div className="w-20 h-20 bg-udisha text-white rounded-full flex items-center justify-center text-3xl mx-auto mb-6">
                {area.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                {area.title}
              </h3>
              <p className="text-text-muted leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};