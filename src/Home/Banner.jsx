import React from "react";
import coverImg from "../assets/img/portfolio (2).jpg";
import Download from "./Download";
import "./Banner/Banner.css";
import { Typewriter } from "react-simple-typewriter";
const Banner = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 banner-div">
      <div className="flex justify-center items-center animate-pulse ">
        <img
          className="rounded-full h-96 w-96 border-[20px] border-white shadow-lg "
          src={coverImg}
          alt=""
        />
      </div>
      <div className=" flex items-center p-14">
        <div className="">
          <h1 className="text-5xl font-serif font-bold mb-5">
            Hello I'm Aliuzzaman
          </h1>
          <h3 className="text-xl font-bold mb-5 ">
            I'm a 
            <span style={{ color: "#d3aa2f", fontWeight: "bold" }}>
              <Typewriter
                words={[" Front End Developer", " MERN stack developer", " Junior web Developer", " React developer"]}
                loop={20}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
           
          </h3>

          <p>
            As a MERN Stack Developer with six months of experience, I have
            successfully developed and deployed multiple projects using MongoDB,
            Express.js, React, and Node.js. I am proficient in front-end
            technologies such as HTML, CSS, and JavaScript.I have a proven track
            record of collaborating effectively with cross-functional teams,
            both in-person and remotely. My ability to quickly grasp complex
            requirements and deliver high-quality code within tight deadlines
            has been instrumental in my previous projects. I thrive in
            fast-paced environments and I am always eager to learn and adapt to
            new technologies and frameworks.
          </p>
          <Download></Download>
        </div>
      </div>
    </div>
  );
};

export default Banner;
