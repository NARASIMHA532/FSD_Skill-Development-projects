
import { FaGithub, FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaFileDownload, FaLaptopCode, FaEnvelope } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SiTelegram } from "react-icons/si";
import LeetcodeLogo from "../Images/leetcodeicon.png"; // Replace with actual path
import CodechefLogo from "../Images/codecheflogo.jpg"; // Replace with actual path
import CodeforcesLogo from "../Images/codeforcesicon.jpg"; // Replace with actual path
import HackerrankLogo from "../Images/hackerranklogo.png"; // Replace with actual path
import GfgLogo from "../Images/geeksforgeekslogo.png"; // Replace with actual path
import MentorPickLogo from "../Images/mentorpickicon.jpg"; // Replace with actual path
import aboutImage from "../Images/charithProfile.jpg";

const AboutPage = () => {
  return (
    <div id="about" className="bg-gray-100 w-full min-h-screen flex flex-col items-center py-10">
      <h1 className="text-4xl font-bold text-indigo-600 mb-6 mt-9">About Me</h1>
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 px-6">
        {/* Profile Image */}
        <div className="w-72 h-72 rounded-full overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
          <img src={aboutImage} alt="About Me" className="w-full h-full object-cover" />
        </div>

        {/* About Description */}
        <div className="flex flex-col max-w-2xl text-center md:text-left">
          <p className="text-lg text-gray-700 leading-relaxed">
            Hello! I'm <span className="font-bold text-indigo-600">Charith</span>, 
            a BTech undergraduate in Computer Science and Engineering with a deep passion for creating 
            intuitive, user-friendly applications. I thrive on solving complex problems with efficient, 
            innovative solutions and enjoy exploring emerging technologies like <span className="font-bold">AI</span> 
            and <span className="font-bold">IoT</span>.
          </p>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            When I'm not coding, you'll find me learning about the latest advancements in web development, contributing to open-source projects, or exploring creative ideas for side projects. My goal is to grow continuously as a developer while delivering impactful solutions.
          </p>
        </div>
      </div>

      {/* Coding Profiles, Resume, and Contact Section */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Download Resume */}
        <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300">
          <FaFileDownload className="text-4xl text-indigo-500 mx-auto mb-4" />
          <h2 className="text-xl font-semibold mb-2">Resume</h2>
          <p className="text-gray-600">Download my resume to learn more about my experiences:</p>
          <div className="mt-4">
            <button
              onClick={() => window.open('https://drive.google.com/file/d/1zJoAfdiJBMnn1aPsABosFF7-cbxb6Zwb/view?usp=sharing', '_blank')}
              className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600 transition-colors"
            >
              My Resume
            </button>
          </div>
        </div>

        {/* Coding Platforms */}
        <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300">
          <FaLaptopCode className="text-4xl text-indigo-500 mx-auto mb-4" />
          <h2 className="text-xl font-semibold mb-2">Coding Platforms</h2>
          <p className="text-gray-600">Active on platforms like:</p>
          <div className="mt-4 flex justify-center gap-6">
            <a href="https://leetcode.com/u/charithreddy2004/" target="_blank" rel="noopener noreferrer">
              <img src={LeetcodeLogo} alt="LeetCode" className="w-10 h-10" />
            </a>
            <a href="https://www.codechef.com/users/charith07" target="_blank" rel="noopener noreferrer">
              <img src={CodechefLogo} alt="CodeChef" className="w-10 h-10" />
            </a>
            <a href="https://codeforces.com/profile/charith08" target="_blank" rel="noopener noreferrer">
              <img src={CodeforcesLogo} alt="Codeforces" className="w-10 h-10" />
            </a>
            <a href="https://www.hackerrank.com/profile/charithreddy2004" target="_blank" rel="noopener noreferrer">
              <img src={HackerrankLogo} alt="HackerRank" className="w-10 h-10" />
            </a>
            <a href="https://www.geeksforgeeks.org/user/charithrekymt/" target="_blank" rel="noopener noreferrer">
              <img src={GfgLogo} alt="GeeksforGeeks" className="w-10 h-10" />
            </a>
            <a href="https://mentorpick.com/profile/22h51a0503-charith" target="_blank" rel="noopener noreferrer">
              <img src={MentorPickLogo} alt="MentorPick" className="w-10 h-10" />
            </a>
          </div>
        </div>

        {/* Contact Me */}
        <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300">
          <FaEnvelope className="text-4xl text-indigo-500 mx-auto mb-4" />
          <h2 className="text-xl font-semibold mb-2">Contact Me</h2>
          <p className="text-gray-600">Feel free to reach out via:</p>
          <div className="flex mt-6 gap-6 justify-center">
            <a href="https://www.linkedin.com/in/charith-reddy-32b53a248/" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-800 hover:text-blue-700">
              <FaLinkedin />
            </a>
            <a href="mailto:charithreddy564@gmail.com" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-800 hover:text-red-500">
              <MdEmail />
            </a>
            <a href="https://github.com/charith079" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-800 hover:text-indigo-500">
              <FaGithub />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100017216950462&sk=photos" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-800 hover:text-blue-500">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/charith2004/" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-800 hover:text-pink-500">
              <FaInstagram />
            </a>
            <a href="https://twitter.com/your-twitter-handle" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-800 hover:text-blue-400">
              <FaTwitter />
            </a>
            <a href="https://t.me/your-telegram-charith079" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-800 hover:text-blue-300">
              <SiTelegram />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
