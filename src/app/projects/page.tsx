import Section from "../components/Section";
import ProjectCard from "../components/ProjectCard";

// Fallback data in case GitHub API fails
const fallbackProjects = [
  {
    name: "Portfolio Website",
    description: "My personal portfolio built with Next.js App Router, Tailwind CSS, and Framer Motion.",
    topics: ["nextjs", "react", "tailwind"],
    html_url: "https://github.com",
    homepage: "https://portfolio.com",
  },
  {
    name: "E-Commerce App",
    description: "A full-stack e-commerce solution with Stripe integration.",
    topics: ["typescript", "stripe", "prisma"],
    html_url: "https://github.com",
    homepage: "",
  },
  {
    name: "Task Management Tool",
    description: "A productivity app with drag-and-drop boards and real-time collaboration. Features a sleek dark mode.",
    topics: ["react", "socketio", "express"],
    html_url: "https://github.com",
    homepage: "",
  }
];

export const revalidate = 3600; // Revalidate every hour

export default async function Projects() {
  let repos = fallbackProjects;
  
  try {
    // Fetch from a placeholder user or the user's actual GitHub
    // Using octocat as a placeholder, replace with your GitHub username
    const res = await fetch("https://api.github.com/users/vercel/repos?sort=updated&per_page=6", {
      next: { revalidate: 3600 }
    });
    
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) {
        repos = data;
      }
    }
  } catch (error) {
    console.error("Failed to fetch GitHub repos:", error);
  }

  return (
    <Section id="projects">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Projects</h1>
        <p className="text-gray-400 text-lg max-w-2xl">
          A showcase of my recent work, side projects, and open-source contributions. 
          Fetched dynamically using the GitHub API.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {repos.map((repo: any, index: number) => (
          <ProjectCard
            key={repo.id || index}
            title={repo.name}
            description={repo.description || "No description provided."}
            tags={repo.topics || []}
            githubUrl={repo.html_url}
            liveUrl={repo.homepage || "https://vercel.com"}
            index={index}
          />
        ))}
      </div>
    </Section>
  );
}
