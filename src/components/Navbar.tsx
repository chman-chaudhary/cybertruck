import { ChevronDown, Dot, Home } from "lucide-react";

const navItems = ["Vehicles", "Energy", "Charging", "Discover"];

const Navbar = () => {
  return (
    <div className="fixed top-0 w-full flex justify-center lg:justify-between items-start px-8 font-sans cursor-pointer z-50">
      <span className="font-orbitron pt-2 text-xl w-60 hidden lg:block">
        cybertruck
      </span>
      <ul className="navbar-shape hidden lg:inline-flex bg-white text-black space-x-2 py-3 px-20 text-[8px] uppercase font-orbitron slide-down-delay">
        {navItems.map((item, idx) => (
          <li
            key={idx}
            className="font-semibold flex items-center justify-center text-gray-500/60 hover:text-gray-800"
          >
            <Dot className="size-4" />
            {item}
          </li>
        ))}
      </ul>

      <div className="navbar-shape bg-white text-black py-2 md:py-3 px-16 md:px-28 text-lg font-orbitron flex items-center justify-center slide-down-delay lg:hidden">
        cybertruck
      </div>

      <span className="space-x-4 py-2 text-xs w-60 hidden lg:flex justify-end">
        <button className="uppercase bg-transparent text-white border-white border pl-2 pr-1 py-1 rounded-full">
          <span className="w-full flex items-center space-x-2">
            <span className="flex items-center">
              <ChevronDown className="size-2 mr-1" /> <span>LOGIN</span>
            </span>
            <div className="h-5 w-5 rounded-full overflow-hidden">
              <img
                src="/user.avif"
                className="h-full w-full object-cover"
                alt=""
              />
            </div>
          </span>
        </button>
        <button className="uppercase bg-white text-black border-black border pl-2 pr-1 py-1 rounded-full">
          <span className="w-full flex items-center space-x-2">
            <span className="pl-2">MENU</span>
            <div className="h-5 w-5 rounded-full overflow-hidden border-black border-[0.2px] text-white bg-black flex justify-center items-center">
              <Home className="size-3 object-cover" />
            </div>
          </span>
        </button>
      </span>
    </div>
  );
};

export default Navbar;
