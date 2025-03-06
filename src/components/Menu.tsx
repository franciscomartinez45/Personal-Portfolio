export const Menu = () => {
  return (
    <div className="fixed flex justify-center z-10  text-secondaryText w-[100vw]">
      <div className="flex justify-items-center">
        {sectionRefs.map((section, index) => (
          <div
            className="text-center py-3 hover:bg-primaryBg w-[clamp(12vw,12vw,14vw)] bg-secondaryBg border-r-2 p-3"
            key={index}
          >
            <a
              href={section}
              className="block font-semibold overflow-hidden text-[clamp(8px,1.2vw,16px)]"
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
  "#education",
  "#research",
  "#skills",
  "#experience",
  "#contact",
];
