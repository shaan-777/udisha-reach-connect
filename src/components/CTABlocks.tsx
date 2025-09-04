export const CTABlocks = () => {
  const ctaBlocks = [
    {
      title: "Madad Chahiye?",
      description: "Camp chahiye? Form bharne mein madad? Team ko bulaayen—hum aapke gaon aayenge.",
      buttonText: "Call Now",
      buttonLink: "tel:+919876543210",
      isPrimary: true
    },
    {
      title: "Volunteer Banein",
      description: "Local volunteers, SHGs, NGOs ka swagat hai—training aur digital toolkit uplabdh hai.",
      buttonText: "Join Team",
      buttonLink: "https://forms.gle/SZ7ajMjvXBhSPTEK6", // 🔥 Updated link
      isPrimary: false
    },
    {
      title: "Partner With Us",
      description: "CSR partners, government departments, aur community organizations ke saath collaborate karte hain.",
      buttonText: "Partner Now",
      buttonLink: "mailto:partner@udishafoundation.org",
      isPrimary: false
    }
  ];

  return (
    <section id="volunteer" className="bg-gray-100 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
          Join Our Mission
        </h2>
        <div className="grid md:grid-cols-3 gap-8 mt-10">
          {ctaBlocks.map((block, index) => (
            <div key={index} className="bg-background p-8 rounded-2xl text-center shadow-card hover:transform hover:-translate-y-2 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                {block.title}
              </h3>
              <p className="text-text-muted mb-6 leading-relaxed">
                {block.description}
              </p>
              <a
                href={block.buttonLink}
                target={block.buttonLink.startsWith('http') ? '_blank' : '_self'} // 🔥 Open link in new tab
                rel="noopener noreferrer"
                className={`inline-block px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                  block.isPrimary
                    ? 'bg-udisha text-white hover:bg-udisha-dark shadow-lg hover:shadow-xl transform hover:-translate-y-1'
                    : 'bg-transparent text-udisha border-2 border-udisha hover:bg-udisha hover:text-white'
                }`}
              >
                {block.buttonText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
