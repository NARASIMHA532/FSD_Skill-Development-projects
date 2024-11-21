import React from "react";
import HomePageImg from '../Images/HomePageImg.jpg';

const HomePage = () => {
  return (
    <div
      id="home" className="flex items-center justify-center h-screen bg-cover bg-center"
      style={{ backgroundImage: `url('${HomePageImg}')` }}
    >
      <div className="text-center animate-fadeIn">
        <h1 className="text-4xl font-bold text-sky-600 mb-4 animate-slideIn">
          Welcome to Charith's Portfolio
        </h1>
        <p className="text-lg text-sky-600 mb-8">
          Discover my projects, skills, and journey.
        </p>
        <a
          href="#about"
          className="bg-orange-500 text-white px-6 py-2 rounded-lg text-lg hover:bg-orange-600 transition transform hover:scale-110"
        >
          Get Started
        </a>
      </div>
    </div>
  );
};

export default HomePage;
