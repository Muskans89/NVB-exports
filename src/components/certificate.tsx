const WhyChooseUs = () => {
  const reasons = [
    {
      id: 1,
      icon: 'verified', // Google Material Icon name
      title: '3 Decades',
      description: 'Our team of experts has over 3 decades of experience in the industry.',
    },
    {
      id: 2,
      icon: 'eco', // Google Material Icon name
      title: 'Non-Toxic',
      description: 'Our products are safe, non-toxic, herbal, and organic.',
    },
    {
      id: 3,
      icon: 'local_shipping', // Google Material Icon name
      title: 'Custom Packaging',
      description: 'We offer custom packaging and a wide variety of colours.',
    },
    {
      id: 4,
      icon: 'thumb_up', // Google Material Icon name
      title: '100% Satisfaction',
      description: 'We guarantee complete satisfaction with our offerings.',
    },
  ];

  return (
    <div className="py-8 bg-red-500"> {/* Set background to red */}
      <h2 className="text-center font-bold text-xl md:text-2xl mb-8 font-nunito text-white"> {/* Title in white */}
        Why Choose Us?
      </h2>
      <div className="font-nunito max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {reasons.map((reason) => (
          <div
            key={reason.id}
            className="text-center p-4 sm:p-5 transition-transform duration-300 hover:scale-105" // Removed gradient background
          >
            {/* Icon in white */}
            <span className="material-icons text-4xl mb-2 text-white">{reason.icon}</span>
            {/* Title in white */}
            <h3 className="font-bold text-base sm:text-lg mb-2 text-white">{reason.title}</h3>
            {/* Description in white */}
            <p className="text-xs sm:text-sm text-white">{reason.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
