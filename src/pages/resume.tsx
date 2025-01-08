import { useState } from "react";
import { Button } from "../components/ui/button";
import '../index.css';
const experiences = [
  {
    period: "2022 - 2023",
    title: "MERN Stack Developer",
    company: "Tech Company",
    details: "Developed full-stack web applications using MongoDB, Express.js, React, and Node.js",
  },
  {
    period: "2023 - 2024",
    title: "Kabul Cambridge Institute Website",
    company: "Kabul Cambridge Institute",
    details: "Developed their website using MongoDB, Express.js, React, and Node.js",
  },
  {
    period: "2023 - 2024",
    title: "KPU Digital Library",
    company: "Kabul Polytechnic University",
    details: "Worked as a frontend developer and use React, Tailwind and other tools",
  },
  {
    period: "2021 - 2022",
    title: "Frontend Developer",
    company: "Digital Agency",
    details: "Created responsive web interfaces and implemented modern UI/UX designs",
  },
  {
    period: "2020 - 2021",
    title: "Junior Web Developer",
    company: "Startup",
    details: "Worked on various web development projects using HTML, CSS, and JavaScript",
  },
];

const education = [
  {
    period: "2014 - 2018",
    title: "Bachelor's in Computer Science",
    institution: "Kabul Polytechnic University",
    details: "Studied fundamental programming concepts, data structures, and algorithms",
  },
];

const skills = [
  "JavaScript (ES6+)",
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "HTML5 & CSS3",
  "Tailwind CSS",
  "Git & GitHub",
];

const aboutMe = `
  I am a passionate MERN stack developer with 3 years of experience in building modern web applications. 
  My journey in web development started with a curiosity to create interactive and user-friendly websites, 
  which led me to dive deep into the world of JavaScript and its ecosystem. 
  I enjoy tackling complex problems and turning ideas into reality through code.
`;

const tabs = [
  { id: "experience", label: "Experience", content: experiences },
  { id: "education", label: "Education", content: education },
  { id: "skills", label: "Skills", content: skills },
  { id: "about", label: "About me", content: aboutMe },
];

export default function Resume() {
  const [activeTab, setActiveTab] = useState("experience");

  const renderContent = () => {
    switch (activeTab) {
      case "experience":
        return experiences.map((exp, index) => (
          <div
            key={index}
            className="p-6 rounded-lg bg-zinc-900/50 border border-zinc-800 relative overflow-hidden mb-6"
          >
            <div className="absolute top-0 right-0 w-1 h-full bg-[#00FF94]" />
            <div className="text-[#00FF94] font-mono mb-2">{exp.period}</div>
            <h4 className="text-xl text-white mb-1">{exp.title}</h4>
            <div className="text-zinc-400 mb-4">{exp.company}</div>
            <p className="text-zinc-300">{exp.details}</p>
          </div>
        ));
      case "education":
        return education.map((edu, index) => (
          <div
            key={index}
            className="p-6 rounded-lg bg-zinc-900/50 border border-zinc-800 relative overflow-hidden mb-6"
          >
            <div className="absolute top-0 right-0 w-1 h-full bg-[#00FF94]" />
            <div className="text-[#00FF94] font-mono mb-2">{edu.period}</div>
            <h4 className="text-xl text-white mb-1">{edu.title}</h4>
            <div className="text-zinc-400 mb-4">{edu.institution}</div>
            <p className="text-zinc-300">{edu.details}</p>
          </div>
        ));
      case "skills":
        return (
          <div className="grid grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <div key={index} className="p-4 bg-zinc-900/50 rounded-lg border border-zinc-800">
                <p className="text-white">{skill}</p>
              </div>
            ))}
          </div>
        );
      case "about":
        return (
          <div className="p-6 rounded-lg bg-zinc-900/50 border border-zinc-800">
            <p className="text-zinc-300 whitespace-pre-line">{aboutMe}</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-3 gap-12">
          <div>
            <h2 className="text-4xl font-mono text-white mb-4">Why hire me?</h2>
            <p className="text-zinc-400 mb-8">
              Passionate MERN stack developer with 3 years of experience building modern web applications.
            </p>
            <div className="space-y-4">
              {tabs.map((tab) => (
                <Button
                  key={tab.id}
                  variant={activeTab === tab.id ? "default" : "secondary"}
                  className={`w-full justify-start text-lg ${
                    activeTab === tab.id
                      ? "bg-[#00FF94] text-black hover:bg-[#00FF94]/90"
                      : "bg-zinc-900/50 text-white hover:bg-zinc-800"
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </Button>
              ))}
            </div>
          </div>
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-mono text-white mb-8">{tabs.find(tab => tab.id === activeTab)?.label}</h3>
            <div className="h-[60vh] overflow-y-auto pr-4">
              {renderContent()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}