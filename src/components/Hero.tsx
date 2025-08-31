export const Hero = () => {
  return (
    <section className="bg-gradient-hero py-16 text-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground leading-tight">
          Strong Women, Strong World – Udisha Foundation
        </h1>
        <p className="text-xl text-text-muted mb-10 max-w-3xl mx-auto leading-relaxed">
          Sarkari yojnaon ko Bihar ke sabse door kshetron tak pahunchana—jahaan na padhai, na swachhta, na technology ka sahara hai.
        </p>
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
          <a 
            href="#eligibility" 
            className="bg-udisha text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-udisha-dark transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Yojna Check Karein
          </a>
          <a 
            href="#volunteer" 
            className="bg-background text-udisha px-8 py-4 rounded-full font-semibold text-lg border-2 border-udisha hover:bg-udisha hover:text-white transition-all duration-300 shadow-lg"
          >
            Volunteer Banein
          </a>
        </div>
      </div>
    </section>
  );
};