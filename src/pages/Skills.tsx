import SkillCard from "../components/SkillCard";

export interface Skills {
  skillName: string;
  tools: string[];
}

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="section-container bg-white/10 backdrop-blur-sm "
    >
      <div className="flex justify-center ">
        <div className=" flex flex-col justify-center items-center w-[90vw] lg:w-[40vw] justify-self-center">
          <h1 className=" font-semibold text-center mb-5 pt-20 text-headerFontColor">
            SKILLS
          </h1>
          <div className=" text-[clamp(12px,2vw,14px)] ">
            <div className="   justify-center items-center w-[80vw] lg:w-[40vw] justify-self-center p-4 mb-4 rounded-md">
              <h1 className="">
                Throughout my academic career, I have developed highly demanded
                industry skills within the following sections
              </h1>
            </div>
            <div className=" text-headerFontColor  overflow-hidden grid grid-cols-2 justify-center items-center w-[80vw] lg:w-[40vw] justify-self-center">
              {skills.map((skill) => (
                <SkillCard key={skill.skillName} {...skill}></SkillCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const skills: Skills[] = [
  {
    skillName: "Object-Oriented Programming",
    tools: ["Java", "C++", "Python"],
  },
  {
    skillName: "Web Development Frameworks",
    tools: ["React.js", "React Native", "Node.js", "Expo", "Vite"],
  },

  {
    skillName: "Data Management",
    tools: [
      "MySQL",
      "PostresSQL",
      "JDBC",
      "Supabase",
      "Firebase Firestore",
      "AWS S3",
    ],
  },

  { skillName: "Methodology", tools: ["Agile", "Scrum"] },
  {
    skillName: "Authentication",
    tools: ["PHP", "Firebase Auth"],
  },
  { skillName: "OS", tools: ["Windows", "Ubuntu Sub System"] },
  { skillName: "Web Scraping", tools: ["Beatiful Soup", "Selenium"] },
  {
    skillName: "Machine Learning",
    tools: ["Scikit-Learn", "PyTorch", "Matplot lib", "Numpy", "Networkx"],
  },

  { skillName: "Collaboration Tools", tools: ["Git", "GitHub", "Trello"] },
  { skillName: "Deployment", tools: ["Vercel", "Expo", "GitHub Actions"] },
];
