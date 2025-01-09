import { useState } from 'react';
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { Button } from '../components/ui/button';
import E_commerce from '../assets/projects/ECommerce.png';
import Parallax from '../assets/projects/Parallax.png';
import AdviceAndJoke from "../assets/projects/Advice&Joke.png";
import ColorFlipper from '../assets/projects/ColorFlipper.png';
import TextToVoice from '../assets/projects/Converter.png';
import ShoeShop from '../assets/projects/ShoeShop.png';
import StopWatch from '../assets/projects/StopWatch.png';
import KabulCambridge from '../assets/projects/Kabul-cambridge.png';
interface Project{
  id: string;
  title: string;
  description: string;
  technologies: string;
  github_url: string;
  url: string;
  image: string;
}
const projects: Project[] = [
  {
    id: "01",
    title: "Frontend Project",
    description: "A modern e-commerce platform built with React and Next.js, featuring a responsive design and seamless user experience.",
    github_url: "#",
    url: "#",
    technologies: "React.js, Chakra ui, TypeScript",
    image: E_commerce,
  },
  {
    id: "02",
    title: "Full Stack Website",
    description: "A website with user authentication, creating newsletters, posts, real-time updates, and a sleek UI built using the MERN stack.",
    technologies: "React, Node.js, Express, MongoDB",
    github_url: "#",
    url: "https://kabul-cambridge-institute.netlify.app/",
    image: KabulCambridge,
  },
  {
    id: "03",
    title: "Advice and Joke Generator",
    description: "Entertaining advice and joke generator project built with React, Tailwind CSS, and TypeScript, showcasing API integration prowess.",
    technologies: "React, Tailwind, TypeScript",
    github_url: "https://github.com/Zabihkeraam1/AdviceAndJokeGenerator",
    url: "#",
    image: AdviceAndJoke,
  },
  {
    id: "04",
    title: "Color flipper",
    description: "Interactive color flipper project demonstrating DOM manipulation using HTML, CSS, and JavaScript.",
    technologies: "HTML, CSS and JavaScript",
    github_url: "https://github.com/Zabihkeraam1/Color-Flipper",
    url: "#",
    image: ColorFlipper,
  },
  {
    id: "05",
    title: "Text to Voice Converter",
    description: "Color flipper project focused on working with dom.",
    technologies: 'HTML, CSS, JavaScript',
    github_url: "https://github.com/Zabihkeraam1/Text-to-Voice-Converter",
    url: "#",
    image: TextToVoice,
  },
  {
    id: "06",
    title: "Shoe Shop",
    description: "Stylish text-to-voice converter project using HTML and CSS for sleek presentation.",
    technologies: 'HTML, CSS',
    github_url: "#",
    url: "#",
    image: ShoeShop,
  },
  {
    id: '07',
    title: "Parallax design",
    description: "Immersive React parallax design using Framer Motion & TypeScript for captivating user experiences",
    technologies: "React, Framer motion, TypeScript",
    github_url: "#",
    url: "#",
    image: Parallax,
  },
{
  id: "08",
  title: "Stop Watch",
  description: "Interactive stopwatch project leveraging HTML, CSS, and JavaScript for seamless DOM manipulation.",
  technologies: 'HTML, CSS, and JavaScript',
  github_url: "https://github.com/Zabihkeraam1/Stop-Watch",
  url: "#",
  image: StopWatch,
},
];

export default function Work() {
  const [currentProject, setCurrentProject] = useState(0);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const project = projects[currentProject];

  return (
    <div className="min-h-screen bg-zinc-950 py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid gap-12">
          <div className="p-8 bg-zinc-900/50 border-zinc-800 rounded-lg">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="text-8xl font-mono text-zinc-700">{project.id}</div>
                <h2 className="text-4xl font-mono text-white">{project.title}</h2>
                <p className="text-zinc-400">
                  {project.description}
                </p>
                <div className="space-y-2">
                  <p className="text-[#00FF94] font-mono">{project.technologies}</p>
                  <div className="flex gap-4">
                    <a href={project.url} target='_blank'>
                    <Button variant="outline" size="icon" className="border border-[#00FF94] rounded-3xl bg-black text-[#00FF94] hover:bg-[#00FF94] hover:text-black">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                    </a>
                    <a href={project.github_url} target='_blank'>
                    <Button variant="outline" size="icon" className="border border-[#00FF94] rounded-3xl bg-black text-[#00FF94] hover:bg-[#00FF94] hover:text-black">
                      <FaGithub className="w-4 h-4" />
                    </Button>
                    </a>
                  </div>
                </div>
              </div>
              <div className="transition-all duration-500 relative aspect-video bg-zinc-800 rounded-lg overflow-hidden">
                <img
                  src={project.image}
                  alt="Project preview"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-end gap-4 pr-8">    
            <Button variant="outline" size="icon" className="border border-[#00FF94] rounded-3xl bg-black text-[#00FF94] hover:bg-[#00FF94] hover:text-black" onClick={prevProject}>
              <ArrowLeft className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="icon" className="border border-[#00FF94] rounded-3xl bg-black text-[#00FF94] hover:bg-[#00FF94] hover:text-black" onClick={nextProject}>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

