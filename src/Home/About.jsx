import React from "react";
import {
  FaBootstrap,
  FaDatabase,
  FaHtml5,
  FaJsSquare,
  FaNodeJs,
  FaReact,
  FaCss3,
  FaLeaf,
  FaChrome,
} from "react-icons/fa";
import './About.css'

const About = () => {
  return (
    <div className="py-12 mb-10 about-section">
      <h1 className="text-center text-6xl font-extrabold mb-10">About Me</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 h-[500px]">
        <div className="icons-section text-[150px] grid grid-cols-2 md:grid-cols-3 gap-6">
          <div className="text-purple-700">
            <span>
              <FaBootstrap></FaBootstrap>
            </span>
          </div>
          <div className="text-sky-400">
            <span>
              <FaReact></FaReact>
            </span>
          </div>
          <div className="text-green-500">
            <span>
              <FaNodeJs></FaNodeJs>
            </span>
          </div>
          <div className="text-yellow-500">
            <span>
              <FaJsSquare></FaJsSquare>
            </span>
          </div>
          <div className="">
            <span>
              <FaDatabase></FaDatabase>
            </span>
          </div>
          <div className="text-green-700">
            <span>
              <FaLeaf></FaLeaf>
            </span>
          </div>
          <div className="text-orange-500">
            <span>
              <FaHtml5></FaHtml5>
            </span>
          </div>
          <div className="text-blue-600">
            <span>
              <FaCss3></FaCss3>
            </span>
          </div>
          <div className="text-red-600">
            <span>
              <FaChrome></FaChrome>
            </span>
          </div>
        </div>
        <div className="text-section  flex items-center">
          <div>
            <h1 className="text-6xl font-extrabold font-serif mb-7 about-info-title">I'm a Front-end Developer with over 1 year of experience.</h1>
            <p>
              Highly skilled MERN stack developer with a strong passion for
              creating engaging and interactive web application. Seeking a
              challenging role where I can leverage my expertise in front-end
              development and contribute to the success of development team .As
              a MERN stack developer, I possess expertise in developing
              full-stack web applications using MongoDB, Express.js, React.js,
              and Node.js.
            </p>
            <div className="flex mt-6">
              <button className="px-8  bg-[#877a52] hover:bg-[#d3aa2f] duration-700 p-2 md:py-3 text-white mt-5 rounded-md">
                Contact Me
              </button>
              <button className="px-8 ml-6 bg-[#877a52] hover:bg-[#d3aa2f] duration-700 p-2 md:py-3 text-white mt-5 rounded-md">My Resume</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
