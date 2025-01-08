import { useEffect, useState } from 'react';
import { Download } from 'lucide-react';
import { Button } from '../components/ui/button';
import profile from '../assets/profile/profile-pic (1).png';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa6';
import { FaWhatsapp } from 'react-icons/fa';

const stats = [
  { label: "Years of experience", value: 3 },
  { label: "Projects completed", value: 10 },
  { label: "Technologies mastered", value: 6 },
  { label: "Code commits", value: 100 },
];

export default function Home() {
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const intervals = stats.map((stat, index) => {
      return setInterval(() => {
        setCounts(prevCounts => 
          prevCounts.map((count, i) => 
            i === index ? Math.min(count + 1, stat.value) : count
          )
        );
      }, 20);
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950">
      <main className="container mx-auto px-4 pt-32 pb-16 lg:px-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 space-y-8">
            <h2 className="text-gray-300 text-xl font-mono">Full stack web Developer</h2>
            <h1 className="text-white text-5xl lg:text-6xl font-mono leading-tight">
              Hello I'm{" "}
              <span className="block text-[#00FF94] mt-2">Zabih Keraam</span>
            </h1>
            <p className="text-gray-400 max-w-xl">
              I excel at crafting elegant digital experiences and I am proficient in full stack web development and various
              technologies.
            </p>
            <div className="flex items-center gap-6">
            <a href="../../public/cv/MyCV.pdf" download={true}>
              <Button variant="outline" className="border-[#00FF94] rounded-3xl bg-black text-[#00FF94] hover:bg-[#00FF94] hover:text-black">
                
              DOWNLOAD CV<Download className="ml-2 h-5 w-5" /> 
              </Button>
              </a>
              <div className="flex items-center gap-4">
                <a href="https://github.com/Zabihkeraam1" target="_blank">
                <Button variant="ghost" size="icon" className="border border-[#00FF94] rounded-3xl bg-black text-[#00FF94] hover:bg-[#00FF94] hover:text-black">
                  <FaGithub className="h-5 w-5"/>
                </Button>
                </a>
                <a href="https://linkedin.com/in/zabih-keraam" target="_blank">
                <Button variant="ghost" size="icon" className="border border-[#00FF94] rounded-3xl bg-black text-[#00FF94] hover:bg-[#00FF94] hover:text-black]">
                  <FaLinkedin className="h-5 w-5"/>
                </Button>
                </a>
                <a href="https://facebook.com/zabih.hasanzada?mibextid=ZbWKwL" target="_blank">
                <Button variant="ghost" size="icon" className="border border-[#00FF94] rounded-3xl bg-black text-[#00FF94] hover:bg-[#00FF94] hover:text-black">
                  <FaFacebook className="h-5 w-5"/>
                </Button>
                </a>
                <a href="https://wa.me/93729063120" target="_blank">

                <Button variant="ghost" size="icon" className="border border-[#00FF94] rounded-3xl bg-black text-[#00FF94] hover:bg-[#00FF94] hover:text-black">
                  <FaWhatsapp className="h-6 w-6"/>
                </Button>
                </a>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="w-52 h-52 lg:w-60 lg:h-60 rounded-full overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#00FF94]/20 to-transparent animate-pulse"></div>
              <img
                src={profile}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
              <circle 
                cx="50" 
                cy="50" 
                r="54" 
                fill="none" 
                stroke="#00FF94" 
                strokeWidth="0.5"
                strokeDasharray="0.5,3"
                className="animate-spin-slow"
              />
            </svg>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 text-center">
          {stats.map((stat, index) => (
            <div key={stat.label} className="flex space-x-2">
              <h3 className="text-white text-4xl font-bold">{counts[index]}+</h3>
              <p className="text-gray-400 text-sm w-16 text-start">{stat.label}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

