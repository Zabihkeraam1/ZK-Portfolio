import { ArrowUpRight } from 'lucide-react';

const services = [
  {
    id: "01",
    title: "Web Development",
    description: "Building responsive and performant web applications using modern technologies and best practices.",
    highlighted: true,
  },
  {
    id: "02",
    title: "Database Management",
    description: "Designing efficient database schemas, managing data integrity, and optimizing queries for high performance.",
  },
  {
    id: "03",
    title: "Web Security",
    description: "Implementing robust security measures to protect applications from vulnerabilities like XSS, SQL injection, and CSRF.",
  },
  {
    id: "04",
    title: "SEO",
    description: "Optimizing websites for search engines to improve visibility and organic traffic.",
  },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-zinc-950 py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div key={service.id} className="p-8 rounded-lg bg-zinc-900/50 border border-zinc-800 group">
              <div className="flex justify-between items-start mb-6">
                <div className="transition-all duration-300 text-4xl font-mono text-zinc-700 group-hover:text-[#00FF94]">{service.id}</div>
                <button
                  className={`transition-all duration-300 hover:rotate-45 p-2 rounded-full border border-[#00FF94] text-[#00FF94] group-hover:text-black group-hover:bg-[#00FF94]/90
                  }`}
                >
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
              <h3 className={`text-2xl font-mono mb-4 transition-all duration-500 group-hover:text-[#00FF94]`}>
                {service.title}
              </h3>
              <p className="text-zinc-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

