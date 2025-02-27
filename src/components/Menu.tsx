export const Menu = () => {
  return (
    <div className="fixed flex justify-center z-10   bg-primaryBg dark:bg-darkPrimaryBg text-primaryText dark:text-darkPrimaryText w-[100vw] ">
      <div className="flex justify-items-center">
        {sectionRefs.map((section, index) => (
          <div
            className="text-center py-3 hover:bg-secondaryBg dark:hover:bg-darkSecondaryBg w-[clamp(12vw,12vw,14vw)]"
            key={index}
          >
            <a
              href={section}
              className="block font-semibold overflow-hidden text-[clamp(8px,1.2vw,20px)]"
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
  "#status",
  "#achievements",
  "#skills",
  "#projects",
  "#research",
  "#contact",
];
