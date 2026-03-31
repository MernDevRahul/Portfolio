import Section from "./components/Section";
import ProjectCard from "./components/ProjectCard";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Section id="home" className="min-h-[80vh] flex flex-col justify-center">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
          Hi, I am <span className="text-blue-500">Rahul Shrivastav</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mb-10 leading-relaxed">
          A Full Stack Developer with 2+ years of experience in developing scalable and high-performance web applications. My expertise lies in the MERN technology stack, along with other cutting-edge frameworks such as Next.js and Prisma.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/projects"
            className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20"
          >
            View Projects <FaArrowRight className="ml-2" size={18} />
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium rounded-full bg-white/5 text-white hover:bg-white/10 border border-white/10 transition-colors"
          >
            More About Me
          </Link>
        </div>
      </Section>

      {/* Featured Projects Highlight */}
      <Section id="featured-projects" delay={0.2}>
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-2">Featured Work</h2>
            <p className="text-gray-400">Some of my recent projects</p>
          </div>
          <Link href="/projects" className="hidden sm:inline-flex items-center text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors">
            View All <FaArrowRight className="ml-1" size={16} />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ProjectCard
            title="E-Commerce Platform"
            description="A modern e-commerce platform built with Next.js, Stripe, and Tailwind CSS. Features dynamic routing and edge computing."
            tags={["Next.js", "TypeScript", "Tailwind", "Stripe"]}
            githubUrl="https://github.com/example/ecommerce"
            index={0}
          />
          <ProjectCard
            title="Real-time Chat App"
            description="WebSocket-based chat application with real-time updates, read receipts, and typing indicators."
            tags={["React", "Node.js", "Socket.IO", "PostgreSQL"]}
            githubUrl="https://github.com/example/chat"
            index={1}
          />
        </div>
        
        <div className="mt-8 text-center sm:hidden">
          <Link href="/projects" className="inline-flex items-center text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors">
            View All Projects <FaArrowRight className="ml-1" size={16} />
          </Link>
        </div>
      </Section>
    </>
  );
}
