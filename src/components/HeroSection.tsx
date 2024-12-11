const HeroSection = () => {
  return (
    <div className="h-screen w-full herosection-bg-image flex flex-col justify-around items-center space-y-20">
      <div className="slide-down w-full relative lg:-top-5 top-0">
        <h1 className="uppercase lg:text-8xl md:text-6xl text-6xl overflow-hidden flex justify-center font-bold herosection-transparent-heading relative z-10">
          cybertruck
        </h1>
        <div className="relative lg:-top-14 -top-5 z-20 flex flex-col justify-center items-center space-y-2">
          <h2 className="uppercase lg:text-7xl md:text-6xl text-5xl font-bold">
            cybertruck
          </h2>
          <p className="w-1/2 lg:w-2/5 text-center lg:text-[9px] text-[6px]">
            durable and rugged enough to go anywhere. tackle anything with
            electronically adaptive air suspension that offers 12" of travel and
            17" of clearance.
          </p>
        </div>
      </div>
      <div className="w-4/5 flex justify-center md:justify-between items-start text-[7px] slide-up">
        <div className="hidden lg:flex flex-col items-start justify-center w-60">
          <span className="text-sm">ADVENTURE GOING</span>
          <span>
            Lorem ipsum dolor sit amet adipisicing Ut dolores iure? dolor Dicta,
            autem!
          </span>
        </div>
        <div className="flex items-start justify-center space-x-12 w-full">
          <div className="flex flex-col items-center justify-center">
            <span className="text-sm">11,000 LBS</span>
            <span>TOWING CAPACITY</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="text-sm">350 MILES</span>
            <span>EST RANGE</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="text-sm">2.0 SEC</span>
            <span>0-60 MPH</span>
          </div>
        </div>
        <div className="hidden lg:flex flex-col items-start justify-center w-60 pr-20">
          <span className="text-sm">SPECS</span>
          <span>durable and rugged enough to go anywhere.</span>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
