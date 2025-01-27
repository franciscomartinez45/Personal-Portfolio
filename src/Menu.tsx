export const Menu = () => {
  return (
    <div className="fixed flex justify-center item h-15 z-10 w-screen bg-primaryBg dark:bg-darkPrimaryBg text-primaryText dark:text-darkPrimaryText">
      <div className="flex">
        {sectionRefs.map((section) => (
          <div className=" px-4 py-3  hover:bg-secondaryBg dark:hover:bg-darkSecondaryBg">
            <a href={section} className="block text-base font-medium    ">
              {section.replace("#", "").toUpperCase()}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

const sectionRefs = [
  "#home",
  "#overview",
  "#achievements",
  "#skills",
  "#projects",
  "#research",
  "#contact",
];
