import { FaCloudDownloadAlt } from "react-icons/fa";
import Section from "../components/Section";

export default function About() {
  return (
    <Section id="about">
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">About Me</h1>
        
        <div className="prose prose-invert prose-lg text-gray-400 leading-relaxed mb-12">
          <p className="mb-6">
            Hello! I am a passionate software engineer specializing in building exceptional digital 
            experiences. With a profound interest in both frontend aesthetics and backend architectures, 
            I strive to create software that not only functions flawlessly but also provides an 
            intuitive and engaging user experience.
          </p>
          <p className="mb-6">
            Over the past few years, I have had the privilege of working with early-stage startups, 
            large corporations, and ambitious agencies. My core stack includes React, Next.js, 
            Node.js, and TypeScript, but I am always eager to learn and adapt to new technologies.
          </p>
          <p>
            When I am not at my computer, you usually find me reading, exploring the outdoors, 
            or contributing to open-source software.
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
