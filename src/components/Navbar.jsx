import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className={`flex flex-row justify-between px-4 pt-8 ${
          isOpen ? "bg-white" : ""
        }`}
      >
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
      </div>
      <ul
        className={
          isOpen
            ? "flex flex-col bg-white pt-6 px-4 w-full h-full max-h-screen transition ease-in-out delay-50"
            : "translate-x-1 hidden"
        }
      >
        <li className="mt-2 py-2 px-3">Home</li>
        <li className="mt-2 py-2 px-3">Features</li>
        <li className="mt-2 py-2 px-3">Pricing</li>
        <li className="mt-2 py-2 px-3">About Us</li>
        <li className="mt-2 py-2 px-3">Contact</li>
      </ul>
    </>
  );
};

export default Navbar;
