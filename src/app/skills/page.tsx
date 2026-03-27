import Section from "../components/Section";
import SkillBadge from "../components/SkillBadge";
import { AiFillLayout } from "react-icons/ai";
import { FaDatabase, FaServer, FaWrench } from "react-icons/fa";


export default function Skills() {
  const categories = [
    {
      title: "Frontend Development",
      icon: AiFillLayout,
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vue.js", "HTML/CSS"],
    },
    {
      title: "Backend Development",
      icon: FaServer,
      skills: ["Node.js", "Express", "Python", "Django", "Go", "REST APIs", "GraphQL"],
    },
    {
      title: "Database & Cloud",
      icon: FaDatabase,
      skills: ["PostgreSQL", "MongoDB", "Redis", "AWS", "Vercel", "Docker", "Firebase"],
    },
    {
      title: "Tools & Others",
      icon: FaWrench,
      skills: ["Git", "GitHub Actions", "Jest", "Cypress", "Figma", "Linux", "Webpack"],
    },
  ];

  return (
    <Section id="skills">
      <div className="mb-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Skills</h1>
        <p className="text-gray-400 text-lg max-w-2xl">
          The technologies and tools I work with every day to build modern applications.
        </p>
      </div>

      <div className="space-y-16">
        {categories.map((category, index) => (
          <div key={category.title} className="flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <category.icon className="text-blue-500" size={28} />
              <h2 className="text-2xl font-semibold">{category.title}</h2>
            </div>
            <div className="flex flex-wrap gap-4">
              {category.skills.map((skill) => (
                <SkillBadge key={skill} name={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
