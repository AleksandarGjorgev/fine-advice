import Link from "next/link";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-card py-8 text-muted">
      <div className="container mx-auto px-4 text-center md:text-left">
        <div className="flex flex-col md:flex-row justify-between mb-8">
          {/* About Section */}
          <div className="mb-6 md:mb-0">
            <Link href="/">
              <span className="text-8xl font-bold bg-gradient-to-r from-accent to-secondary text-transparent bg-clip-text h-full flex items-center">
                AG
              </span>
            </Link>
          </div>

          {/* Quick Links Section */}
          <div className="mb-6 md:mb-0">
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:underline">About</a></li>
              <li><a href="#journey" className="hover:underline">Experience</a></li>
              <li><a href="#skills" className="hover:underline">Skills</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="mb-6 md:mb-0">
            <h4 className="text-lg font-bold mb-4">Contact Information</h4>
            <p className="flex items-center mb-2"><FaEnvelope className="mr-2" /> <a href="mailto:gjorgevaleks@gmail.com" className="hover:underline">gjorgevaleks@gmail.com</a></p>
          </div>

          {/* Social Media Section */}
          <div>
            <h4 className="text-lg font-bold mb-4">Follow Me</h4>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="https://linkedin.com/in/aleksandar-gjorgev" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-all flex items-center">
                <FaLinkedin className="mr-1" /> LinkedIn
              </a>
              <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-all flex items-center">
                <FaGithub className="mr-1" /> GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-muted pt-4 text-center">
          <p>© 2024 Aleksandar Gjorgev. All Rights Reserved.</p>
          <p>Made with ❤️ using Next.js and Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}