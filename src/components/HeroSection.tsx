const HeroSection = () => {
  return (
    <div className="h-screen w-full herosection-bg-image flex flex-col justify-center items-center space-y-20">
      <div className="">
        <h1 className="uppercase text-8xl font-bold herosection-transparent-heading relative z-10">
          cybertruck
        </h1>
        <div className="relative -top-14 z-20 flex flex-col justify-center items-center space-y-2">
          <h2 className="uppercase text-7xl font-bold">cybertruck</h2>
          <p className="w-1/2 text-center text-[8px]">
            durable and rugged enough to go anywhere. tackle anything with
            electronically adaptive air suspension that offers 12" of travel and
            17" of clearance.
          </p>
        </div>
      </div>
      <div>
        <span className="uppercase font-semibold">Adventure</span>
      </div>
    </div>
  );
};

export default HeroSection;
