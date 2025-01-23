import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";

export const DropDownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed w-16 h-20 z-10 right-0">
      <div
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <button className="absolute w-16 h-20 right-0 top-0  px-4 py-8 rounded-md">
          <CiMenuBurger size={40} className=" " />
        </button>

        {isOpen && (
          <ul className={ulStyle}>
            {sectionRefs.map((section) => (
              <li className={listStyle}>
                <a
                  href={section}
                  className="block text-base font-medium text-gray-800 dark:text-black "
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
const listStyle =
  "group px-4 py-3 hover:bg-primaryBg dark:text-black transition duration-300 ease-in-out";
const ulStyle =
  "absolute right-0 top-16 mt-2 w-56 bg-white border border-slate-900 border-t-0 border-r-0 rounded-lg shadow-xl z-40 overflow-hidden";
const sectionRefs = [
  "#home",
  "#about",
  "#achievements",
  "#skills",
  "#projects",
  "#contact",
];
