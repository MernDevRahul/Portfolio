import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter, FaMailBulk } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10 py-8 mt-12 glass">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex flex-col items-center md:items-start">
          <Link href="/" className="text-xl font-bold tracking-tighter">
            Rahul Shrivastav<span className="text-blue-500">.</span>
          </Link>
          <p className="text-sm text-gray-400 mt-2 text-center md:text-left">
            Building digital products, brands, and experience.
          </p>
        </div>

        <div className="flex items-center space-x-6">
          <a href="https://github.com/MernDevRahul" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <FaGithub size={20} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <FaLinkedin size={20} />
          </a>
          <a href="mailto:tech.rahul.shrivastav@gmail.com" className="text-gray-400 hover:text-white transition-colors">
            <FaMailBulk size={20} />
          </a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-8 flex justify-center md:justify-end">
        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} Rahul Shrivastav. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
