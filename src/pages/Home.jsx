import myPhoto from "../assets/myphoto1.jpeg";
import bgImage from "../assets/bg.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section
      className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center md:justify-between text-white relative px-4 sm:px-6 md:px-10 py-10 md:py-0 gap-8 md:gap-0"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* dark overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* LEFT CONTENT */}
      <div className="relative z-10 max-w-xl text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-400 mb-3 md:mb-4">
          Manish Kumar Ray
        </h1>

        <p className="text-sm sm:text-base md:text-xl text-gray-300 mb-5 md:mb-6 leading-relaxed">
          I’m a BCA student passionate about web development and technology. I enjoy building simple, creative, and responsive websites using modern tools like React and JavaScript. I’m constantly learning and improving my skills to become a better developer and create meaningful digital experiences.
        </p>

        <Link to="/contact">
          <button className="bg-green-500 px-5 py-2.5 sm:px-6 sm:py-3 rounded-md hover:bg-green-600 transition">
            Get In Touch
          </button>
        </Link>
      </div>

      {/* RIGHT IMAGE */}
      <div className="relative z-10 flex justify-center w-full md:w-auto">
        <img
          src={myPhoto}
          alt="Manish Kumar Ray"
          className="w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 object-cover rounded-xl border-2 border-green-500 shadow-lg"
        />
      </div>
    </section>);
};

export default Home;