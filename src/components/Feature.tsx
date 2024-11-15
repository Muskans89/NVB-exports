import processMobile from '../assets/process2.jpg';
import processDesktop from '../assets/process.jpg';

const Process = () => {
  return (
    <div className="bg-cream py-10">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
          
 
            <h2 className="text-center text-xl md:text-2xl font-bold mb-8 font-nunito"  style={{ fontFamily: 'The Seasons' }}>
        Production® Process
        </h2>

        {/* Process Steps */}
        <div className="grid grid-cols-1 gap-8">
          {/* Image container for mobile and desktop */}
          <div className="flex items-start justify-center">
            <div className="w-full">
              {/* Mobile Image */}
              <img
                src={processMobile}
                alt="Production Process"
                className="w-full h-auto block md:hidden" // Mobile: displayed
              />

              {/* Desktop Image */}
              <img
                src={processDesktop}
                alt="Production Process"
                className="w-full h-auto hidden md:block" // Desktop: displayed
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
