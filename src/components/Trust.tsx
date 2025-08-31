export const Trust = () => {
  const trustLogos = [
    "District Collector Office",
    "Block Development Office", 
    "Rural Development Dept",
    "Education Department"
  ];

  const testimonials = [
    {
      text: "Udisha team ki madad se meri beti ko scholarship mil gayi. Bahut achha kaam kar rahe hain ye log.",
      author: "Sunita Devi, Madhubani"
    },
    {
      text: "Toilet scheme ke liye documentation mein bohot help kiya. Ab ghar mein proper sanitation hai.",
      author: "Ramesh Kumar, Sitamarhi"
    },
    {
      text: "SHG loan process bilkul easy kar diya. Business start karne mein madad mili.",
      author: "Kavita Singh, Vaishali"
    }
  ];

  return (
    <section className="bg-background py-16 text-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-foreground">
          Bharosemand Partners
        </h2>
        
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {trustLogos.map((logo, index) => (
            <div key={index} className="px-6 py-3 bg-gray-100 rounded-lg text-text-muted font-semibold">
              {logo}
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-10">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-udisha-bg p-8 rounded-2xl text-left hover:transform hover:-translate-y-2 transition-all duration-300">
              <p className="text-text-light italic mb-4 leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="font-semibold text-udisha">
                - {testimonial.author}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};