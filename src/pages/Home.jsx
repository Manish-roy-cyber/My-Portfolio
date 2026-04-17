import myPhoto from "../assets/myphoto1.jpeg";
import bgImage from "../assets/bg.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section
      className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-between text-white relative px-6 md:px-10"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* left content */}
      <div className="relative z-10 max-w-xl">
        <h1 className="text-5xl font-bold text-green-400 mb-4">
          Manish Kumar Ray
        </h1>

        <p className="text-xl text-gray-300 mb-6">
          I’m a BCA student passionate about web development and technology. I enjoy building simple, creative, and responsive websites using modern tools like React and JavaScript. I’m constantly learning and improving my skills to become a better developer and create meaningful digital experiences.
        </p>

       <Link to="/contact">
  <button className="bg-green-500 px-6 py-3 rounded hover:bg-green-600 transition">
    Get In Touch
  </button>
</Link>
      </div>

      <div className=" relative z-10 w-4/1 flex justify-center">
        <img
          src={myPhoto}
          alt="Manish Kumar Ray"
          className="w-72 h-72 object-cover rounded-lg border-2 border-green-500"
        />
      </div>
      
    </section>
  );
};

export default Home;