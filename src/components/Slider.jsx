// import React, { useState, useEffect } from "react";
// import images from "../constants/images"; // array of {src, alt}

// function Slider() {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 4000); // auto-slide every 4s
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="flex flex-col items-center mt-6 sm:mt-10 px-4">
//       {/* IMAGE CONTAINER */}
//       <div className="relative w-full max-w-4xl overflow-hidden rounded-2xl shadow-xl">
//         <img
//           src={images[index].src}
//           alt={images[index].alt}
//           className="w-full h-[220px] sm:h-[300px] md:h-[400px] object-cover transition-transform duration-700 ease-in-out hover:scale-105"
//         />

//         {/* OVERLAY TEXT */}
//         <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
//           <h2 className="text-white text-lg sm:text-2xl md:text-3xl font-bold text-center">
//             {images[index].alt}
//           </h2>
//         </div>

//         {/* LEFT BUTTON */}
//         <button
//           onClick={() => setIndex((index - 1 + images.length) % images.length)}
//           className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded-full hover:bg-green-600 transition"
//         >
//           ❮
//         </button>

//         {/* RIGHT BUTTON */}
//         <button
//           onClick={() => setIndex((index + 1) % images.length)}
//           className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded-full hover:bg-green-600 transition"
//         >
//           ❯
//         </button>
//       </div>

//       {/* DOTS */}
//       <div className="flex gap-2 mt-4">
//         {images.map((_, i) => (
//           <div
//             key={i}
//             onClick={() => setIndex(i)}
//             className={`w-3 h-3 rounded-full cursor-pointer transition ${
//               i === index ? "bg-green-500 scale-125" : "bg-gray-300"
//             }`}
//           ></div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Slider;
