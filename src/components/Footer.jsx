import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-950 text-white py-6 ">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center md:text-left">
        
        
        <div>
          <h2 className="text-2xl font-bold">Manish Kumar Ray</h2>
          
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">Contact</h3>
          <p>📞 +977 9812103000</p>
          <p>📍 Janakpur-Dham,Nepal</p>
        </div>

        
        <div>
          <h3 className="text-xl font-semibold mb-2">Follow us</h3>
          <div className="flex justify-center md:justify-start gap-4 text-2xl">
            <a href="https://facebook.com/greenlandnepal" target="_blank" rel="noreferrer">
              <FaFacebook className="hover:text-blue-400 transition" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram className="hover:text-pink-400 transition" />
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noreferrer">
              <FaTiktok className="hover:text-black transition" />
            </a>
          </div>
        </div>
      </div>

    
      <div className="text-center mt-8 text-sm border-t border-green-600 pt-4">
        @ 2026. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
