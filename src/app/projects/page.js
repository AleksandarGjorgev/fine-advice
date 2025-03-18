"use client";
import HeroProjects from "@/components/HeroProjects";
import { faFlutter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaBootstrap, FaCss3Alt, FaDocker, FaHtml5, FaJsSquare, FaLaravel, FaNodeJs, FaPhp, FaPython, FaReact, FaTools, FaWordpress } from "react-icons/fa";
import { SiCplusplus, SiFlask, SiNextdotjs, SiTailwindcss } from "react-icons/si";

const projects = [
  {
    title: "Self-Service POS System",
    description: "Integration of Glory CI-10, payment systems, and kiosks.",
    technologies: [
      { name: "Flutter", icon: () => <FontAwesomeIcon icon={faFlutter} />, color: "bg-blue-200 text-blue-800" },
      { name: "Python", icon: FaPython, color: "bg-yellow-200 text-yellow-800" },
      { name: "Flask", icon: SiFlask, color: "bg-gray-200 text-gray-800" },
      { name: "SOAP", icon: FaTools, color: "bg-purple-200 text-purple-800" }
    ],
    imageUrl: "/projects/self-serv.png",
    videoUrl: "/projects/self-serv.mp4",
  },
  {
    title: "Car Booking Platform",
    description: "A web platform for booking vehicles.",
    technologies: [
      { name: "Laravel", icon: FaLaravel, color: "bg-red-200 text-red-800" },
      { name: "PHP", icon: FaPhp, color: "bg-indigo-200 text-indigo-800" },
      { name: "JavaScript", icon: FaJsSquare, color: "bg-yellow-200 text-yellow-800" },
      { name: "Docker", icon: FaDocker, color: "bg-blue-200 text-blue-800" }
    ],
    imageUrl: "/projects/avant2go.png",
    projectUrl: "https://avant2go.si",
  },
  {
    title: "Company Frontend Website",
    description: "Developed the frontend interface using Bootstrap and Node.js.",
    technologies: [
      { name: "Node.js", icon: FaNodeJs, color: "bg-green-200 text-green-800" },
      { name: "HTML", icon: FaHtml5, color: "bg-orange-200 text-orange-800" },
      { name: "CSS", icon: FaCss3Alt, color: "bg-blue-200 text-blue-800" },
      { name: "Bootstrap", icon: FaBootstrap, color: "bg-purple-200 text-purple-800" }
    ],
    imageUrl: "/projects/methodyca.png",
    projectUrl: "https://methodyca.com",
  },
  {
    title: "Portfolio Website",
    description: "My personal portfolio showcasing my work and skills.",
    technologies: [
      { name: "Next.js", icon: SiNextdotjs, color: "bg-black text-white" },
      { name: "React", icon: FaReact, color: "bg-blue-200 text-blue-800" },
      { name: "TailwindCSS", icon: SiTailwindcss, color: "bg-teal-200 text-teal-800" }
    ],
    imageUrl: "/projects/portfolio.png",
    projectUrl: "https://www.aleksandar-gjorgev.com/",
  },
  {
    title: "Time-Tracking App",
    description: "A time-tracking application to monitor work hours.",
    technologies: [
      { name: "Next.js", icon: SiNextdotjs, color: "bg-black text-white" },
      { name: "ASP.NET", icon: FaTools, color: "bg-blue-200 text-blue-800" },
      { name: "C#", icon: SiCplusplus, color: "bg-blue-300 text-blue-900" }
    ],
    imageUrl: "/projects/time-tracking.png",
    projectUrl: "https://time-tracking-app-beta.vercel.app",
  },
  {
    title: "Gamespot Website",
    description: "A gaming arcade website developed for Gamespot.",
    technologies: [
      { name: "Next.js", icon: SiNextdotjs, color: "bg-black text-white" },
      { name: "TailwindCSS", icon: SiTailwindcss, color: "bg-teal-200 text-teal-800" }
    ],
    imageUrl: "/projects/gamespot.png",
    projectUrl: "https://gamespot.si",
  },
  {
    title: "DejaVisuals Website",
    description: "A marketing agency website in collaboration with a partner.",
    technologies: [
      { name: "Next.js", icon: SiNextdotjs, color: "bg-black text-white" },
      { name: "TailwindCSS", icon: SiTailwindcss, color: "bg-teal-200 text-teal-800" }
    ],
    imageUrl: "/projects/dejavisuals.png",
    projectUrl: "https://dejavisuals.si",
  },
  {
    title: "Printec Website",
    description: "Corporate website developed for Printec using WordPress.",
    technologies: [
      { name: "WordPress", icon: FaWordpress, color: "bg-blue-200 text-blue-800" },
      { name: "PHP", icon: FaPhp, color: "bg-indigo-200 text-indigo-800" },
      { name: "CSS", icon: FaCss3Alt, color: "bg-blue-200 text-blue-800" }
    ],
    imageUrl: "/projects/printec.png",
    projectUrl: "https://printecgroup.si",
  },
];

export default function PortfolioPage() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);

  const openVideo = (videoUrl) => {
    setCurrentVideo(videoUrl);
    setIsVideoOpen(true);
  };

  const closeVideo = () => {
    setCurrentVideo(null);
    setIsVideoOpen(false);
  };

  return (
    <>
      <HeroProjects />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="container mx-auto p-6"
      >
        <section className="mb-12">
          <h1 className="text-3xl font-bold mb-4">My Portfolio</h1>
          <p className="text-lg">A showcase of my projects and the technologies I used.</p>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative group bg-card rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative">
                {project.videoUrl ? (
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105 cursor-pointer"
                    onClick={() => openVideo(project.videoUrl)}
                  />
                ) : (
                  <a
                    href={project.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105 cursor-pointer"
                    />
                  </a>
                )}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                >
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-80 text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div>
                      <h2 className="text-xl font-bold mb-2">{project.title}</h2>
                      <p className="text-sm">{project.description}</p>
                      <div className="flex justify-center flex-wrap gap-2 mt-4">
                        {project.technologies.map((tech, idx) => (
                          <div
                            key={idx}
                            className={`flex items-center gap-2 px-3 py-1 rounded-full shadow-md ${tech.color}`}
                          >
                            <tech.icon className="text-xl" />
                            <span className="text-sm font-medium">{tech.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-background bg-opacity-80 p-4 transition-opacity duration-300 group-hover:opacity-0 pointer-events-auto">
                <h2 className="text-lg font-bold text-gray-200">{project.title}</h2>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.technologies.map((tech, idx) => (
                    <div
                      key={idx}
                      className={`flex items-center gap-2 px-3 py-1 rounded-full shadow-md ${tech.color}`}
                    >
                      <tech.icon className="text-xl" />
                      <span className="text-sm font-medium">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </section>
      </motion.div>

      {isVideoOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
          onClick={closeVideo}
        >
          <div
            className="relative w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-white text-4xl focus:outline-none"
              onClick={closeVideo}
            >
              &times;
            </button>
            <video
              src={currentVideo}
              controls
              autoPlay
              className="h-[70vh] mx-auto rounded-lg shadow-lg"
            ></video>
          </div>
        </motion.div>
      )}
    </>
  );
}
