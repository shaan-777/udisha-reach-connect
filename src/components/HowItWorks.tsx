export const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      title: "Zarurat Pehchaan",
      description: "Door-to-door survey, SHG/ASHA linkage, school/anganwadi referrals ke through community ki actual needs identify karte hain."
    },
    {
      number: "2", 
      title: "Sahi Yojna Milaan",
      description: "Education scholarships, PMAY, toilets, PMJAY, pensions, PMJDY, skilling, DBT—sahi scheme match karte hain."
    },
    {
      number: "3",
      title: "Apply + Follow-up", 
      description: "Forms, documentation, online submission, tracking, grievance—benefit milne tak complete saath dete hain."
    }
  ];

  return (
    <section className="bg-background py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
          Kaise Kaam Karta Hai
        </h2>
        <div className="grid md:grid-cols-3 gap-8 mt-10">
          {steps.map((step) => (
            <div key={step.number} className="text-center p-8 bg-udisha-bg rounded-2xl hover:transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-udisha text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                {step.title}
              </h3>
              <p className="text-text-muted leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};