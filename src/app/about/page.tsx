import { FaCloudDownloadAlt } from "react-icons/fa";
import Section from "../components/Section";

export default function About() {
  return (
    <Section id="about">
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 text-blue-500">About Me</h1>
        
        <div className="prose prose-invert prose-lg text-gray-400 leading-relaxed mb-12">
          <p className="mb-6">
            I am a Full Stack Developer with over 2+ years of experience in developing high-performance and scalable web applications. I have expertise in the MERN Stack and hands-on experience working with the latest technologies such as Next.js, PostgreSQL, and Prisma.
          </p>
          <p className="mb-6">
            I have a passion for working on the entire development process of a project, from designing a responsive user interface to developing robust and efficient server-side solutions. I focus on delivering clean code and providing a seamless user experience.
          </p>
          <p>
            I have hands-on experience working on real-world projects such as authentication systems, database development, API development, and deploying projects on platforms such as Vercel and Render. I am always eager to learn new technologies and improve my development skills.
          </p>
        </div>
        
        <a 
          href="/resume.pdf" 
          target="_blank"
          className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium rounded-full bg-white/5 text-white hover:bg-white/10 border border-white/10 transition-colors"
        >
          <FaCloudDownloadAlt className="mr-2" size={18} /> Download Resume
        </a>
      </div>
    </Section>
  );
}
