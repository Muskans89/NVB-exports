const VideoBanner = () => {
    return (
      <div className="relative w-full bg-cream2 py-4">
        {/* Top Text above the video */}
        <div className="text-center py-2 md:text-2xl text-md font-semibold font-nunito">
          Good For You, Good For The Planet & Good For The People Who Make It
        </div>
  
        {/* YouTube Video Background with Border */}
        <div className="relative max-w-4xl mx-auto border-4 border-yellow-300 rounded-lg overflow-hidden">
          <iframe
            className="w-full h-[350px] md:h-[450px]"
            src="https://www.youtube.com/embed/iL8hazgcJHY?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&playlist=iL8hazgcJHY"
            frameBorder="0"
            allow="autoplay; loop; encrypted-media"
            allowFullScreen
            title="YouTube Video Background"
          ></iframe>
  
          {/* Text Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            {/* You can add text overlay here if needed */}
          </div>
        </div>
      </div>
    );
  };
  
  export default VideoBanner;
  