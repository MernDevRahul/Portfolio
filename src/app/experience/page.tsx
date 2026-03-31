import Section from "../components/Section";
import { FaBriefcase,FaCalendarCheck } from "react-icons/fa";

export default function Experience() {
  const experiences = [
    {
      id: 1,
      role: "Full Stack Web Developer",
      company: "National Marketing Projects Inc.",
      period: "Nov 2024 - Present",
      description: ["Collaborating with a team to create and maintain scalable web applications using various technologies",
        "Creating responsive and efficient web applications with a strong emphasis on user experience and architecture",
        "Managing and maintaining VPS servers to ensure efficient deployment of web applications",
        "Making updates, fixes, and performance enhancements to existing web applications",
        "Creating applications on both frontend and backend to provide a complete solution"
      ],
    },
    {
      id: 2,
      role: "Web Developer",
      company: "Orangus India Pvt. Ltd.",
      period: "Jan 2024 - Oct 2024",
      description: ["Developed and delivered multiple client-based websites according to the business requirements",
        "Designed responsive and visually appealing user interfaces by applying the latest frontend development techniques",
        "Integrated backend functionalities and APIs to develop end-to-end solutions",
        "Worked in collaboration with clients to successfully deliver the projects on time.",
        "Emphasized on writing clean, maintainable, and reusable code"
      ],
    },
    {
      id: 3,
      role: "Web Developer Intern",
      company: "Reyedin Techstack Pvt. Ltd",
      period: "Oct 2023 - Dec 2023",
      description: ["Helped to develop the Learning Management System (LMS) with the guidance of senior engineers",
        "Assisted in the development of front-end components and back-end functionalities",
        "Acquired practical experience working with actual development processes and collaborating with teams",
        "Acquired the best practices for coding, debugging, and the entire SDLC"
      ],
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
              <ul className="list-disc pl-5 space-y-2">
                {exp.description.map((desc, index) => (
                  <li key={index}>{desc}</li>
                ))}
              </ul>
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
