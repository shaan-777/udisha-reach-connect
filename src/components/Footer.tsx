export const Footer = () => {
  const footerSections = [
    {
      title: "Contact",
      items: [
        "📞 Helpline: +91 98765 43210",
        "📧 help@udishafoundation.org", 
        "📍 Patna, Bihar"
      ]
    },
    {
      title: "Quick Links",
      items: [
        { text: "Scheme Check", link: "#eligibility" },
        { text: "Volunteer", link: "#volunteer" },
        { text: "Success Stories", link: "#" },
        { text: "Resources", link: "#" }
      ]
    },
    {
      title: "Legal",
      items: [
        { text: "Privacy Policy", link: "#" },
        { text: "Terms of Service", link: "#" },
        { text: "Grievance Redressal", link: "#" }
      ]
    },
    {
      title: "Follow Us",
      items: [
        { text: "Facebook", link: "#" },
        { text: "Instagram", link: "#" },
        { text: "YouTube", link: "#" },
        { text: "LinkedIn", link: "#" }
      ]
    }
  ];

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="text-lg font-semibold mb-6 text-udisha">
                {section.title}
              </h4>
              <div className="space-y-3">
                {section.items.map((item, itemIndex) => (
                  <div key={itemIndex}>
                    {typeof item === 'string' ? (
                      <p className="text-gray-300 leading-relaxed">{item}</p>
                    ) : (
                      <a
                        href={item.link}
                        className="text-gray-300 hover:text-udisha transition-colors duration-300 block"
                      >
                        {item.text}
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 pt-8 border-t border-gray-700">
          <p className="text-gray-300">
            &copy; 2025 Udisha Foundation. Sabke saath, sabka vikas.
          </p>
        </div>
      </div>
    </footer>
  );
};