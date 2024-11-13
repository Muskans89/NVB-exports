import 'flag-icon-css/css/flag-icons.css';
import { motion } from 'framer-motion';

const ExportCountries = () => {
  const countries = [
    { name: "Italy", code: "it" },
    { name: "Spain", code: "es" },
    { name: "Netherlands", code: "nl" },
    { name: "Germany", code: "de" },
    { name: "France", code: "fr" },
    { name: "Japan", code: "jp" },
    { name: "Thailand", code: "th" },
    { name: "Indonesia", code: "id" },
    { name: "Australia", code: "au" },
    { name: "UK", code: "gb" },
  ];

  // Duplicate countries array for seamless scroll
  const duplicatedCountries = [...countries, ...countries];

  return (
    <motion.section className="py-16 px-6 bg-gray-100 max-w-screen-lg mx-auto">
      <h2
        className="text-xl md:text-2xl font-semibold text-center mb-12"
        style={{ fontFamily: 'The Seasons' }}
      >
        Trusted Globally
      </h2>
      {/* Scroll wrapper with gray background for the section */}
      <div className="overflow-hidden bg-gray-100">
        <div className="flex animate-scroll">
          {duplicatedCountries.map((country, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center mx-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <span className={`flag-icon flag-icon-${country.code} w-24 h-16 mb-2`} />
              <span className="text-sm " style={{ fontFamily: 'Poppins' }}>
                {country.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Injecting custom CSS for scroll animation */}
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-scroll {
          display: flex;
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </motion.section>
  );
};

export default ExportCountries;
