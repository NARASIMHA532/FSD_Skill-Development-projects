import React from "react";

const SkillsPage = () => {
  const skills = [
    { name: "JavaScript", logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" },
    { name: "React", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
    { name: "Node.js", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" },
    { name: "MongoDB", logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg" },
    { name: "Express", logo: "https://media.licdn.com/dms/image/v2/D4D12AQEoYssSDR6VuA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1708761603252?e=1736985600&v=beta&t=X_-xbLy-0umBCyr1J4Y_oDCa1POQXBHkf43we2eggs0" },
    { name: "Tailwind CSS", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
    { name: "Git & GitHub", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg" },
    { name: "Docker", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg" },
    { name: "HTML5", logo: "https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg" },
    { name: "CSS3", logo: "https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg" },
    { name: "Python", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" },
    { name: "Jenkins", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Jenkins_logo.svg" },
    { name: "C", logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png" },
    { name: "C#", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png" },
    { name: "MySQL", logo: "https://upload.wikimedia.org/wikipedia/en/d/dd/MySQL_logo.svg" },
    { name: "Java", logo: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg" },
    { name: "Selenium", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Selenium_Logo.png" },
    { name: "DSA", logo: "https://hamnus.com/wp-content/uploads/2023/07/Data-Structures-and-Algorithm.png" },
  ];

  return (
    <div id="skills" className="min-h-screen bg-white text-gray-800 px-8 py-12">
      {/* Page Header */}
      <h1 className="text-center text-4xl font-bold mb-8 mt-20 text-indigo-600">My Skills</h1>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-gray-100 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 hover:scale-105 hover:bg-white"
          >
            <img
              src={skill.logo}
              alt={`${skill.name} logo`}
              className="w-16 h-16 object-contain mb-4"
            />
            <h3 className="text-xl font-semibold">{skill.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsPage;
