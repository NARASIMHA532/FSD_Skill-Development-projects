
import * as React from 'react';

const Header = () => {
    return (
        <div className="block h-20 bg-transparent w-full fixed scroll-smooth text-gray-950 disable hover:enable">
            <div className="flex justify-between items-center h-full px-10 scroll-smooth">
                {/* Logo or Title */}
                <div className="text-[25px] font-bold">
                    <a href="#home">Charith Portfolio</a>
                </div>
                {/* Navigation Links */}
                <ol className="flex space-x-20 text-[20px] mr-20 scroll-smooth">
                    <li className="hover:text-gray-600 cursor-pointer font-bold"><a href="#home">Home</a></li>
                    <li className="hover:text-gray-600 cursor-pointer font-bold"><a href="#about">About</a></li>
                    <li className="hover:text-gray-600 cursor-pointer font-bold"><a href="#skills">Skills</a></li>
                    <li className="hover:text-gray-600 cursor-pointer font-bold"><a href="#experience">Experience</a></li>
                    <li className="hover:text-gray-600 cursor-pointer font-bold"><a href="#contact">Contact</a></li>
                </ol>
            </div>
        </div>
    );
};

export default Header;


// import * as React from 'react';

// const Header = () => {
//     return (
//         <div className="block h-20 bg-transparent w-full fixed scroll-smooth text-gray-950 group">
//             <div className="flex justify-between items-center h-full px-10 scroll-smooth opacity-0 group-hover:opacity-100 transition duration-300">
//                 {/* Logo or Title */}
//                 <div className="text-[25px] font-bold">
//                     charith portfolio
//                 </div>
//                 {/* Navigation Links */}
//                 <ol className="flex space-x-20 text-[20px] mr-20 scroll-smooth">
//                     <li className="font-bold">
//                         <a
//                             href="#home"
//                             className="text-gray-950 hover:text-gray-600 transition duration-200"
//                         >
//                             Home
//                         </a>
//                     </li>
//                     <li className="font-bold">
//                         <a
//                             href="#about"
//                             className="text-gray-950 hover:text-gray-600 transition duration-200"
//                         >
//                             About
//                         </a>
//                     </li>
//                     <li className="font-bold">
//                         <a
//                             href="#skills"
//                             className="text-gray-950 hover:text-gray-600 transition duration-200"
//                         >
//                             Skills
//                         </a>
//                     </li>
//                     <li className="font-bold">
//                         <a
//                             href="#experience"
//                             className="text-gray-950 hover:text-gray-600 transition duration-200"
//                         >
//                             Experience
//                         </a>
//                     </li>
//                     <li className="font-bold">
//                         <a
//                             href="#contact"
//                             className="text-gray-950 hover:text-gray-600 transition duration-200"
//                         >
//                             Contact
//                         </a>
//                     </li>
//                 </ol>
//             </div>
//         </div>
//     );
// };

// export default Header;

