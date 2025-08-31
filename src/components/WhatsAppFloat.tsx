export const WhatsAppFloat = () => {
  const whatsappMessage = "Namaste! Udisha Foundation ke baare mein jaanna chahta hun.";
  const whatsappLink = `https://wa.me/919876543210?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-whatsapp text-white p-4 rounded-full text-2xl shadow-whatsapp hover:scale-110 transition-transform duration-300 z-50"
      title="WhatsApp par connect karein"
    >
      💬
    </a>
  );
};