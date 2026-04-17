
import bgImage from "../assets/bg.png";

const About = () => {
  return (
    <section
      className="min-h-screen flex items-center justify-center text-white relative"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* CENTER CONTENT */}
      <div className="relative z-10 flex items-center justify-center w-full px-4">
        
        {/* BOX */}
        <div className="bg-gray-950/90 p-8 rounded-lg max-w-xl w-full text-center">
          <h2 className="text-3xl font-bold text-green-400 mb-4">About Me</h2>

          <p className="text-gray-300 leading-relaxed">
            I’m Manish Kumar Ray, a frontend developer and UI/UX designer based
            in Nepal. I specialize in creating visually appealing, responsive,
            and user-friendly websites using React.
          </p>

          <ul className="mt-6 space-y-2 text-gray-300">
            <li>🎓 Bachelor of Computer Application (BCA)</li>
            <li>📍 Haripurwa-3, Dhankaul, Nepal</li>
            <li>💡 Passionate about UI/UX and web design</li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default About;