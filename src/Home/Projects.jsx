import React from "react";
// import zSport from "../assets/img/zamaddar-sports-club.web.app_ (2).png";
// import toyStore from "../assets/img/the-toy-store-9536d.web.app_.png";
// import woknroll from "../assets/img/the-wok-n-roll-recipe.web.app_.png";
import "./Projects/Projects.css";

const Projects = () => {
  return (
    <>
      <div className="">
        <h1 className="text-center font-extrabold text-7xl py-12">
          My Recent Projects
        </h1>
        <div className=" grid grid-cols-1 md:grid-cols-2 md:gap-12">
          <div className="h-[500px] project1"></div>
          <div className="flex items-center">
            <div>
              <h1 className="text-3xl font-bold mb-5 ">
                Project Name: Z Sports Academy ltd.
              </h1>
              <h2 className="text-2xl font-bold mb-1">Project Description:</h2>
              <ul className="space-y-1 mb-5">
                <li>its about a sports training institution. </li>
                <li>
                  the website a home page Navbar has home,instructor
                  page,classes,and a dashboard.
                </li>
                <li>
                  dashboard is divided by three category student,instructor,
                  Admin.
                </li>
                <li>
                  student can select class payment ,see payment history etc.
                </li>
                <li>admin can make user admin instructor and delete a user.</li>
              </ul>
              <div className="flex">
                <a href="https://zamaddar-sports-club.web.app/">
                  <button className="px-8  bg-[#877a52] hover:bg-[#d3aa2f] duration-700 p-2 md:py-3 text-white mt-5 rounded-md">
                    Live Link
                  </button>
                </a>
                <a href="https://github.com/alimuzzaman-zamaddar/z-sports-academy">
                  <button className="px-8  ml-6 bg-[#877a52] hover:bg-[#d3aa2f] duration-700 p-2 md:py-3 text-white mt-5 rounded-md">
                    Code Link
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="h-[500px] project2"></div>
          <div className="flex items-center">
            <div>
              <h1 className="text-3xl font-bold ">Project Name: Toy store</h1>
              <h2 className="text-2xl font-bold mb-1">Project Description:</h2>
              <ul>
                <li>
                  the website is about transformer toy store here you can find
                  verious amount of toys to surprise your children.{" "}
                </li>
                <li>
                  it will show you to buy any kind of transformers toy here you
                  can find the most actrecive products.the website a home page
                  Navbar has home,instructor page,classes,and a dashboard.
                </li>
                <li>
                  the website make you search the toy name to find faster save
                  time.
                </li>
                <li>
                  if you click on the view details button the it will rederact
                  you to the toy details .it will provide you every single
                  answer that you want.
                </li>
                <li>
                  it will give you a good animation vive to explore more it has
                  every section with animation.
                </li>
              </ul>

              <div className="flex">
                <a href="https://the-toy-store-9536d.web.app/">
                  <button className="px-8  bg-[#877a52] hover:bg-[#d3aa2f] duration-700 p-2 md:py-3 text-white mt-5 rounded-md">
                    Live Link
                  </button>
                </a>
                <a href="https://github.com/alimuzzaman-zamaddar/the-transformers-store-client">
                  <button className="px-8  bg-[#877a52] hover:bg-[#d3aa2f] duration-700 p-2 md:py-3 text-white ml-6 mt-5 rounded-md">
                    Code Link
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className=" h-[500px] project3 mb-16"></div>
          <div className="flex items-center">
            <div>
              <h1 className="text-3xl font-bold ">
                Project Name: The Wok N Roll Recipe
              </h1>
              <h2 className="text-2xl font-bold mb-1">Project Description:</h2>
              <ul>
                <li>its about a sports training institution. </li>
                <li>
                  the website a home page Navbar has home,instructor
                  page,classes,and a dashboard.
                </li>
                <li>
                  dashboard is divided by three category student,instructor,
                  Admin.
                </li>
                <li>
                  student can select class payment ,see payment history etc.
                </li>
                <li>admin can make user admin instructor and delete a user.</li>
              </ul>
              <div className="flex">
                <a href="https://the-wok-n-roll-recipe.web.app/">
                  <button className="px-8  bg-[#877a52] hover:bg-[#d3aa2f] duration-700 p-2 md:py-3 text-white mt-5 rounded-md">
                    Live Link
                  </button>
                </a>
                <a href="https://github.com/alimuzzaman-zamaddar/the-wok-n-roll-client">
                  <button className="px-8  bg-[#877a52] hover:bg-[#d3aa2f] duration-700 p-2 md:py-3 text-white mt-5 ml-6 rounded-md">
                    Code Link
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className=" h-[500px] project4 mb-16"></div>
          <div className="flex items-center">
            <div>
              <h1 className="text-3xl font-bold ">
                Project Name: The Royal Zamaluxe
              </h1>
              <h2 className="text-2xl font-bold mb-1">Project Description:</h2>
              <ul>
                <li>It’s a hotel website built using next js the site describing the luxury of the hotel and its beauty and facilities.</li>
                <li>
                  it will give you a good animation vive to explore more it has
                  every section with animation.
                </li>
              </ul>
              <div className="flex">
                <a href="https://the-zamaluxe-x4j2.vercel.app/">
                  <button className="px-8  bg-[#877a52] hover:bg-[#d3aa2f] duration-700 p-2 md:py-3 text-white mt-5 rounded-md">
                    Live Link
                  </button>
                </a>
                <a href="https://github.com/alimuzzaman-zamaddar/the-zamaluxe">
                  <button className="px-8  bg-[#877a52] hover:bg-[#d3aa2f] duration-700 p-2 md:py-3 text-white mt-5 ml-6 rounded-md">
                    Code Link
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
