export const Menu = () => {
  return (
    <div className="flex justify-center">
      <div className="flex justify-items-center fixed text-primaryText z-10 bg-white/10 backdrop-blur-sm rounded-b-lg">
        {sectionRefs.map((section, index) => (
          <div
            className="text-center  hover:border-b-2 hover:border-black w-[12vw] lg:w-[6vw] py-3  "
            key={index}
          >
            <a
              href={section}
              className="block font-semibold overflow-hidden text-[clamp(8px,1.2vw,14px)]"
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
  "#welcome",
  "#overview",
  "#education",
  "#research",
  "#skills",
  "#experience",
  "#contact",
];
