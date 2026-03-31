"use client";

import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  index?: number;
}

export default function ProjectCard({
  title,
  description,
  tags,
  githubUrl,
  liveUrl,
  imageUrl,
  index = 0,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative flex flex-col rounded-2xl glass overflow-hidden transition-all duration-300 hover:bg-white/10 hover:shadow-2xl hover:shadow-white/5"
    >
      {imageUrl && (
        <div className="relative w-full h-48 sm:h-64 overflow-hidden border-b border-white/10">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}
      
      <div className="p-6 md:p-8 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold tracking-tight text-white mb-3">
          {title}
        </h3>
        <p className="text-gray-400 mb-6 flex-grow leading-relaxed">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-8">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-semibold rounded-full bg-white/5 text-blue-300 border border-white/10"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4 items-center mt-auto">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-white hover:text-blue-400 transition-colors"
            >
              <FaGithub size={18} /> 
              Code
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-white transition-colors bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-full"
            >
              <FaExternalLinkAlt size={14} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
