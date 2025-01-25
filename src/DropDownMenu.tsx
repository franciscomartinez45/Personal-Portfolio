import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";

export const DropDownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed w-16 h-20 z-10 right-0 bg-primaryBg dark:bg-darkPrimaryBg text-primaryText dark:text-darkPrimaryText">
      <div
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <button className="absolute w-16 h-20 right-0 top-0  px-4 py-8 rounded-md ">
          <CiMenuBurger size={40} className=" " />
        </button>

        {isOpen && (
          <ul className="absolute right-0 top-16 mt-2 w-56 bg-primaryBg dark:bg-darkPrimaryBg text-primaryText dark:text-darkPrimaryText border  border-slate-900 border-t-0 border-r-0 rounded-lg shadow-xl z-40 overflow-hidden">
            {sectionRefs.map((section) => (
              <li className="group px-4 py-3  transition duration-300 ease-in-out">
                <a
                  href={section}
                  className="block text-base font-medium  bg-primaryBg dark:bg-darkPrimaryBg text-primaryText dark:text-darkPrimaryText "
                  onClick={() => setIsOpen(false)}
                >
                  {section.replace("#", "").toUpperCase()}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

const sectionRefs = [
  "#home",
  "#about",
  "#achievements",
  "#skills",
  "#projects",
  "#research",
  "#contact",
];
