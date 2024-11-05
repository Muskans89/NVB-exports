const IntroSection = () => {
  return (
    <section className="relative bg-oliveGreen py-20 px-4 md:px-8 lg:px-16 font-nunito"> {/* Applied Nunito font as a fallback */}
      <div className="max-w-3xl mx-auto text-center text-white">
        <h2 className="text-4xl font-bold mb-4 font-seasons"> {/* Applied Seasons font for the heading */}
          Adding Colours to Your Life
        </h2>
        <p className="text-xl mb-8 font-poppins">ABOUT US</p> {/* Applied Poppins font for this paragraph */}
        <p className="text-lg md:text-xl leading-relaxed mb-8 font-poppins"> {/* Applied Poppins font for the main paragraph */}
          At NVB Exports, we specialize in producing high-quality, vibrant Holi Colours for our customers. Our team of color experts has years of experience perfecting our range of colors to meet all of your needs. Our Holi Colours are designed to be safe and non-toxic and are perfect for activities such as Holi festivals, parties, and more. Our commitment to quality and safety makes NVB Exports the perfect choice for all of your Holi Colour needs.
        </p>
        <p className="text-lg md:text-xl italic font-poppins">Experience the Joy of Colours with NVB Exports!</p> {/* Applied Poppins font for the italic paragraph */}
        <button className="mt-8 bg-white text-black font-semibold py-2 px-4 rounded hover:bg-gray-300 transition duration-300">
          More About Us
        </button>
      </div>
    </section>
  );
};

export default IntroSection;
