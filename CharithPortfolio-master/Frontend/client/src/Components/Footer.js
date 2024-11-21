import React from "react";
import { FaGithub, FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { SiTelegram } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        {/* Grid Layout for Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Charith Portfolio</h3>
            <p className="text-sm text-gray-400">
              Thank you for visiting my personal portfolio website. Connect with me over socials.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-400 hover:text-white">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-white">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Follow Me</h3>
            <div className="flex mt-6 gap-6 justify-center">
              <a href="https://www.linkedin.com/in/charith-reddy-32b53a248/" target="_blank" rel="noopener noreferrer" className="text-2xl text-white hover:text-blue-700" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="mailto:charithreddy564@gmail.com" className="text-2xl text-white hover:text-red-500" aria-label="Email">
                <MdEmail />
              </a>
              <a href="https://github.com/charith079" target="_blank" rel="noopener noreferrer" className="text-2xl text-white hover:text-indigo-500" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="https://www.facebook.com/profile.php?id=100017216950462&sk=photos" target="_blank" rel="noopener noreferrer" className="text-2xl text-white hover:text-blue-500" aria-label="Facebook">
                <FaFacebook />
              </a>
              <a href="https://www.instagram.com/charith2004/" target="_blank" rel="noopener noreferrer" className="text-2xl text-white hover:text-pink-500" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://twitter.com/charith079" target="_blank" rel="noopener noreferrer" className="text-2xl text-white hover:text-blue-400" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="https://t.me/charith079" target="_blank" rel="noopener noreferrer" className="text-2xl text-white hover:text-blue-300" aria-label="Telegram">
                <SiTelegram />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-6"></div>

        {/* Footer Bottom */}
        <div className="text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Charith. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
