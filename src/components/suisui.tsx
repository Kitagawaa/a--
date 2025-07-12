import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";

const skills = [
  { name: "HTML", icon: "/src/asset/html.svg" }, 
  { name: "CSS", icon: "/src/asset/css.svg" }, 
  { name: "Tailwind CSS", icon: "/src/asset/tailwind css.svg" }, 
  { name: "JavaScript", icon: "/src/asset/js.svg" },
  { name: "TypeScript", icon: "/src/asset/ts.svg" },
  { name: "Vue", icon: "/src/asset/vue.svg" },
  { name: "React", icon: "/src/asset/react.svg" },
  { name: "Magic UI", icon: "/src/asset/magicui.svg" },
  { name: "Ant Design", icon: "/src/asset/antd.svg" },
  { name: "Figma", icon: "/src/asset/figma.svg" }, 

  { name: "Apifox", icon: "/src/asset/apifox.svg" }, 
  { name: "Postman", icon: "/src/asset/postman.svg" }, 

  { name: "Java", icon: "/src/asset/java.svg" },
  { name: "Spring", icon: "/src/asset/spring.svg" },
  { name: "Maven", icon: "/src/asset/maven.svg" },
  { name: "MySQL", icon: "/src/asset/mysql.svg" },
  { name: "Redis", icon: "/src/asset/redis.svg" },

  { name: "Linux", icon: "/src/asset/linux.svg" },
  { name: "Docker", icon: "/src/asset/docker.svg" },
  { name: "Git", icon: "/src/asset/git.svg" },
  { name: "GitHub", icon: "/src/asset/github.svg" },
  { name: "Nginx", icon: "/src/asset/nginx.svg" },

];

const firstRow = skills.slice(0, skills.length / 2);
const secondRow = skills.slice(skills.length / 2);

const SkillCard = ({
  icon,
  name,
}: {
  icon: string;
  name: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-20 w-20 cursor-pointer overflow-hidden rounded-2xl border p-2",
        "flex flex-col items-center justify-center", // Center content
        // light styles
        "border-gray-950/[.1] bg-white transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-[0_0_8px_rgba(218,112,214,0.3)]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:scale-105 dark:hover:shadow-[0_0_8px_rgba(218,112,214,0.3)]"
      )}
    >
      <img className="h-10 w-10" alt={name} src={icon} />
    </figure>
  );
};

const SkillItem = ({ skill }: { skill: { name: string; icon: string } }) => (
  <div className="flex flex-col items-center justify-center w-24 mx-0.5">
    <SkillCard icon={skill.icon} name={skill.name} />
    <p className="mt-2 text-sm font-medium dark:text-white text-center">{skill.name}</p>
  </div>
);

export function suisui() {
  return (
    <div className="relative flex w-2/3 flex-col items-center justify-center overflow-hidden mx-auto space-y-6 ">
      <h2 className="text-3xl font-bold text-center">My Skills</h2>
      <Marquee pauseOnHover className="[--duration:120s]">
        {firstRow.map((skill) => (
          <SkillItem key={skill.name} skill={skill} />
        ))}
      </Marquee>
      <Marquee pauseOnHover reverse className="[--duration:120s]">
        {secondRow.map((skill) => (
          <SkillItem key={skill.name} skill={skill} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}

export default suisui;