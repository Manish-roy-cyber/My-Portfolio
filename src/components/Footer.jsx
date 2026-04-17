import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-300 py-15 ">
      <div className="w-11/12 md:w-4/5 mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        
        <p className="text-sm">
          © 2026 Manish Kumar Ray. All Rights Reserved.
        </p>

        <div className="flex gap-6">
          <Link to="/" className="hover:text-green-400">Home</Link>
          <Link to="/projects" className="hover:text-green-400">Projects</Link>
          <Link to="/contact" className="hover:text-green-400">Contact</Link>
        </div>

        <div className="flex gap-4">
          <a href="https://github.com" target="_blank">GitHub</a>
          <a href="https://linkedin.com" target="_blank">LinkedIn</a>
          <a href="https://facebook.com" target="_blank">Facebook</a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;