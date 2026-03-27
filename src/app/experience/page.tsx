import Section from "../components/Section";
import { FaBriefcase,FaCalendarCheck } from "react-icons/fa";

export default function Experience() {
  const experiences = [
    {
      id: 1,
      role: "Senior Full Stack Engineer",
      company: "TechNova Solutions",
      period: "Jan 2023 - Present",
      description: "Leading the development of scalable cloud applications using Next.js and Node.js. Architected microservices improving system response time by 40% and mentored junior developers.",
    },
    {
      id: 2,
      role: "Frontend Developer",
      company: "Creative Digital Agency",
      period: "Jun 2020 - Dec 2022",
      description: "Built pixel-perfect, highly responsive marketing sites and web applications. Migrated legacy jQuery codebases to React and introduced standardized component libraries.",
    },
    {
      id: 3,
      role: "Software Engineering Intern",
      company: "Global Innovations Inc.",
      period: "May 2019 - Aug 2019",
      description: "Assisted in building internal dashboards for data analytics using Vue.js and Python. Contributed to writing unit tests and debugging legacy code.",
    },
  ];

  return (
    <Section id="experience">
      <div className="mb-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Experience</h1>
        <p className="text-gray-400 text-lg max-w-2xl">
          My professional journey and the companies where I have built software.
        </p>
      </div>

      <div className="relative border-l border-white/10 ml-4 md:ml-6 space-y-12 pb-8">
        {experiences.map((exp, index) => (
          <div key={exp.id} className="relative pl-8 md:pl-12">
            {/* Timeline Dot */}
            <div className="absolute -left-[21px] top-1 h-10 w-10 flex items-center justify-center rounded-full bg-black border-2 border-blue-500 text-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]">
              <FaBriefcase size={16} />
            </div>

            <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
              <h2 className="text-2xl font-bold text-white">{exp.role}</h2>
              <div className="flex items-center gap-2 mt-2 md:mt-0 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-gray-300 w-fit">
                <FaCalendarCheck size={14} />
                <span>{exp.period}</span>
              </div>
            </div>

            <h3 className="text-xl text-blue-400 font-medium mb-4">{exp.company}</h3>
            
            <p className="text-gray-400 leading-relaxed text-lg">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
