// import React from "react";
// import { useStickyBar } from "./useStickyBar"; // Custom hook for sticky footer visibility
// import { socialMediaLinks } from "./socialMediaLinks"; // Social media links data

// const StickyFoot = () => {
//   const showStickyBar = useStickyBar();

//   return (
//     <>
//       {/* Sticky Footer Marquee */}
//       <section
//         className={`fixed bottom-0 left-0 w-full z-50 transition-all duration-500 ${
//           showStickyBar ? "h-16 max-md:h-12" : "h-0"
//         } overflow-hidden`}
//       >
//         <div className="w-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white flex justify-center items-center py-3 px-5 shadow-xl">
//           <marquee className="font-semibold text-sm md:text-lg tracking-wide">
//             APPLY NOW for Ajay Kumar Garg University | Unlock Your Future Today! 🚀
//           </marquee>
//         </div>
//       </section>

//       {/* Social Media Box */}
//       <section className="fixed bottom-[50%] right-0 z-50 flex items-center">
//         <div className="flex flex-col items-center justify-center gap-3 bg-blue-700 text-white p-2 rounded-tl-lg shadow-lg">
//           {socialMediaLinks.map((link, index) => (
//             <div
//               key={index}
//               className="relative group flex items-center justify-center"
//             >
//               <a
//                 href={link.url}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center justify-center w-[30px] h-[30px] bg-blue-500 hover:bg-blue-600 rounded-full transition-all duration-300"
//               >
//                 {/* Icon */}
//                 <span className="flex w-[20px] h-[20px] items-center justify-center">
//                   {link.icon}
//                 </span>
//               </a>
//               {/* Tooltip (name) on hover */}
//               <span
//                 className="absolute left-[-50px] opacity-0 group-hover:opacity-100 group-hover:visible bg-gray-800 text-white text-xs font-bold py-1 px-2 rounded-lg shadow-md h-[30px] flex items-center justify-center transition-all duration-300"
//               >
//                 {link.name}
//               </span>
//             </div>
//           ))}
//         </div>
//       </section>
//     </>
//   );
// };

// export default StickyFoot;
import React from "react";
import { useStickyBar } from "./useStickyBar"; // Custom hook for sticky footer visibility
import { socialMediaLinks } from "./socialMediaLinks"; // Social media links data

const StickyFoot = () => {
  const showStickyBar = useStickyBar();

  return (
    <>
      {/* Sticky Footer Marquee */}
      <section
        className={`fixed bottom-0 left-0 w-full z-50 transition-all duration-500 ${
          showStickyBar ? "h-16 max-md:h-12" : "h-0"
        } overflow-hidden`}
      >
        <div className="w-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white flex justify-center items-center py-3 px-5 shadow-xl">
          <marquee className="font-semibold text-sm md:text-lg tracking-wide">
          Stay tuned on our social media channels for more updates, announcements, and sneak peaks into what's coming next!
          </marquee>
        </div>
      </section>

      {/* Social Media Box */}
      <section className="fixed bottom-[50%] right-0 z-50 flex items-center">
        <div className="flex flex-col items-center justify-center gap-3 p-2 bg-blue-700 rounded-lg shadow-lg">
          {socialMediaLinks.map((link, index) => (
            <div
              key={index}
              className="relative group flex items-center justify-center"
            >
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-[30px] h-[30px] rounded-full transition-all duration-300"
                style={{ backgroundColor: "#007bff" }} // Dynamic color for each icon
              >
                {/* Icon */}
                <span className="flex w-[20px] h-[20px] items-center justify-center text-white">
                  {link.icon}
                </span>
              </a>
              {/* Curtain Tooltip */}
              <span
                className="absolute right-[calc(100%+2px)] h-[30px] flex items-center justify-center px-3 text-xs font-semibold text-white rounded-l-lg shadow-md opacity-0 group-hover:opacity-100 transform transition-all duration-300"
                style={{
                  backgroundColor: "#007bff", // Matches icon background
                  minWidth: "fit-content",
                }}
              >
                {link.name}
              </span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default StickyFoot;

