import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaCode,
  FaNode,
  FaBorderAll,
  FaGithub,
  FaCaretUp,
  FaBootstrap,
  FaChrome,
  FaHighlighter,
} from "react-icons/fa";
import Fade from "react-reveal/Fade";
const Skills = () => {
  return (
    <Fade top>
      <div className="">
        <h1 className="text-7xl font-extrabold font-serif text-center">
          My Skills
        </h1>
        <div className="grid grid-cols-1 gap-20 text-center md:grid-cols-6 py-24 md:gap-10">
          <Fade left>
            <div className="flex justify-center items-center shadow-2xl border-2 h-64">
              <div className="">
                <span className="text-8xl mb-6">
                  <FaHtml5></FaHtml5>
                </span>
                <h1 className="text-2xl">HTML</h1>
              </div>
            </div>
          </Fade>
          <Fade right>
            <div className="flex justify-center items-center border-2 shadow-2xl h-64">
              <div className="">
                <span className="text-8xl mb-6">
                  <FaCss3Alt></FaCss3Alt>
                </span>
                <h1 className="text-2xl">CSS</h1>
              </div>
            </div>
          </Fade>
          <Fade left>
            <div className="flex justify-center items-center border-2 shadow-2xl h-64">
              <div className="">
                <span className="text-8xl mb-6">
                  <FaJsSquare></FaJsSquare>
                </span>
                <h1 className="text-2xl">JavaScript</h1>
              </div>
            </div>
          </Fade>
          <Fade right>
            <div className="flex justify-center items-center border-2 shadow-2xl h-64">
              <div className="">
                <span className="text-8xl mb-6">
                  <FaReact></FaReact>
                </span>
                <h1 className="text-2xl">React Js</h1>
              </div>
            </div>
          </Fade>
          <Fade left>
            <div className="flex justify-center items-center border-2 shadow-2xl h-64">
              <div className="">
                <span className="text-8xl mb-6">
                  <FaNode></FaNode>
                </span>
                <h1 className="text-2xl">Node Js</h1>
              </div>
            </div>
          </Fade>
          <Fade right>
            <div className="flex justify-center items-center border-2 shadow-2xl h-64">
              <div className="">
                <span className="text-8xl mb-6">
                  <FaNodeJs></FaNodeJs>
                </span>
                <h1 className="text-2xl">Express Js</h1>
              </div>
            </div>
          </Fade>
          <Fade top>
            <div className="flex justify-center items-center border-2 shadow-2xl h-64">
              <div className="">
                <span className="text-8xl mb-6">
                  <FaDatabase></FaDatabase>
                </span>
                <h1 className="text-2xl">Mongodb</h1>
              </div>
            </div>
          </Fade>
          <Fade bottom>
            <div className="flex justify-center items-center border-2 shadow-2xl h-64">
              <div className="">
                <span className="text-8xl mb-6">
                 <FaCode></FaCode>
                </span>
                <h1 className="text-2xl">VS Code</h1>
              </div>
            </div>
          </Fade>
          <Fade top>
            <div className="flex justify-center items-center border-2 shadow-2xl h-64">
              <div>
                <span className="text-8xl mb-6">
                 <FaBorderAll></FaBorderAll>
                </span>
                <h1 className="text-2xl">Netlify</h1>
              </div>
            </div>
          </Fade>
          <Fade left>
            <div className="flex justify-center items-center border-2 shadow-2xl h-64">
              <div>
                <span className="text-8xl mb-6">
                 <FaGithub></FaGithub>
                </span>
                <h1 className="text-2xl">GitHub</h1>
              </div>
            </div>
          </Fade>
          <Fade right>
            <div className="flex justify-center items-center border-2 shadow-2xl h-64">
              <div>
                <span className="text-8xl mb-6">
                 <FaCaretUp></FaCaretUp>
                </span>
                <h1 className="text-2xl">Vercel</h1>
              </div>
            </div>
          </Fade>
          <Fade bottom>
            <div className="flex justify-center items-center border-2 shadow-2xl h-64">
              <div>
                <span className="text-8xl mb-6">
                 <FaBootstrap></FaBootstrap>
                </span>
                <h1 className="text-2xl">Bootstrap</h1>
              </div>
            </div>
          </Fade>
          <Fade left>
            <div className="flex justify-center items-center border-2 shadow-2xl h-64">
              <div>
                <span className="text-8xl mb-6">
                 <FaHighlighter></FaHighlighter>
                </span>
                <h1 className="text-2xl">TailWind</h1>
              </div>
            </div>
          </Fade>
          <Fade right>
            <div className="flex justify-center items-center border-2 shadow-2xl h-64">
              <div>
                <span className="text-8xl mb-6">
                 <FaChrome></FaChrome>
                </span>
                <h1 className="text-2xl">DevTool</h1>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </Fade>
  );
};

export default Skills;
