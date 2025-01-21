import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
export const DropDownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed w-16 h-20  z-10 right-0">
      <div
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <button className="absolute w-16 h-20 right-0 top-0  text-white px-4 py-8 rounded-md">
          <CiMenuBurger
            size={36}
            style={{ justifySelf: "center", color: "white" }}
          />
        </button>
        {isOpen && (
          <ul className="absolute right-0 top-16 mt-2 w-40 bg-white border border-gray-300 rounded-md shadow-lg">
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              <a
                href="#home"
                className="block"
                onClick={() => setIsOpen(false)}
              >
                Home
              </a>
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              <a
                href="#skills"
                className="block"
                onClick={() => setIsOpen(false)}
              >
                Skills
              </a>
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              <a
                href="#projects"
                className="block"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </a>
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              <a
                href="#about"
                className="block"
                onClick={() => setIsOpen(false)}
              >
                About Me
              </a>
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              <a
                href="#Contact"
                className="block"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};
