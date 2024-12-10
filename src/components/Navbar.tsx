const navItems = ["Vehicles", "Energy", "Charging", "Discover"];

const Navbar = () => {
  return (
    <div className="fixed top-0 w-full flex justify-between items-start px-8 font-sans cursor-pointer z-50">
      <span className="font-orbitron pt-2 text-xl">cybertruck</span>
      <ul className="navbar-shape inline-flex bg-white text-black space-x-5 py-4 px-20 text-[8px] uppercase font-orbitron">
        {navItems.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
      <span className="space-x-4 py-2 text-xs">
        <button className="uppercase bg-transparent text-amber-500 border-amber-500 border px-5 py-1 rounded-full">
          LOGIN
        </button>
        <button className="uppercase bg-transparent text-amber-500 border-amber-500 border px-5 py-1 rounded-full">
          MENU
        </button>
      </span>
    </div>
  );
};

export default Navbar;
