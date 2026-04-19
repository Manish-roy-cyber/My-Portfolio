import bgImage from "../assets/bg.png";

const projects = [
  {
    title: "Portfolio Website",
    desc: "Personal portfolio built with React and Tailwind CSS.",
    link: "#",
  },
  {
    title: "E-commerce UI",
    desc: "Modern shopping UI design with responsive layout.",
    link: "#",
  },
  {
    title: "Login System",
    desc: "Authentication UI with form validation.",
    link: "#",
  },
];

export default function Projects() {
  return (
    <section
      className="min-h-screen text-white flex items-center justify-center relative px-4 py-20"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl">
        
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-green-400 text-center mb-12">
          My Projects
        </h1>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg border border-white/20 hover:scale-105 transition duration-300"
            >
              <h2 className="text-xl font-semibold text-green-300 mb-3">
                {project.title}
              </h2>

              <p className="text-gray-300 mb-4">
                {project.desc}
              </p>

              <a
                href={project.link}
                className="text-green-400 hover:underline"
              >
                View Project →
              </a>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}