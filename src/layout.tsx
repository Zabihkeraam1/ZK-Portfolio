import { useState } from "react";

const experiences = [
  {
    period: "2022 - 2023",
    title: "MERN Stack Developer",
    company: "Tech Company",
    details: "Developed full-stack web applications using MongoDB, Express.js, React, and Node.js",
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

const tabs = ["Experience", "Education", "Skills", "About me"];

export default function Resume() {
  const [activeTab, setActiveTab] = useState("Experience");

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
                <button
                  key={tab}
                  className={`w-full text-left py-2 px-4 rounded text-lg ${
                    activeTab === tab
                      ? "bg-[#00FF94] text-black hover:bg-[#00FF94]/90"
                      : "bg-zinc-900/50 text-white hover:bg-zinc-800"
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-mono text-white mb-8">My experience</h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="p-6 rounded-lg bg-zinc-900/50 border border-zinc-800 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-1 h-full bg-[#00FF94]" />
                  <div className="text-[#00FF94] font-mono mb-2">{exp.period}</div>
                  <h4 className="text-xl text-white mb-1">{exp.title}</h4>
                  <div className="text-zinc-400 mb-4">{exp.company}</div>
                  <p className="text-zinc-300">{exp.details}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

