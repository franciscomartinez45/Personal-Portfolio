export const Menu = () => {
  return (
    <div className="fixed flex justify-center  item h-15 z-10 bg-primaryBg dark:bg-darkPrimaryBg text-primaryText dark:text-darkPrimaryText w-[100vw] ">
      <div className="flex justify-items-center ">
        {sectionRefs.map((section, index) => (
          <div
            className="text-center py-3 w-[clamp(12vw,1vw,10vw)]   hover:bg-secondaryBg dark:hover:bg-darkSecondaryBg"
            key={index}
          >
            <a
              href={section}
              className="block text-base font-medium text-[clamp(9px,1vw,32px)]  "
            >
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
