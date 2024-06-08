import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-row justify-between mx-4 mt-8">
      <img src="abstractly.png" alt="logo" className="w-32" />
      <button
        onClick={handleClick}
        className="flex flex-col justify-center items-center gap-0.5"
      >
        <span
          className={`bg-neutral-600 block transition-all duration-300 ease-out h-0.5 w-4  ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-neutral-600 block transition-all duration-300 ease-out h-0.5 w-4 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-neutral-600 block transition-all duration-300 ease-out   h-0.5 w-4  ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>
      <ul className={isOpen ? "flex" : "hidden"}>
        <li>Home</li>
        <li>Features</li>
        <li>Pricing</li>
        <li>About Us</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
