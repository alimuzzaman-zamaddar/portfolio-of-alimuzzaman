import React from "react";
import { Link } from "react-router-dom";
import imgLogo from "../assets/img/portfolio (2).jpg"

const Header = () => {
  return (
    <div className="navbar border-b-2">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1]  p-2 shadow bg-base-100 rounded-box w-52"
          >
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/skills'>Skills</Link>
            <Link to='/projects'>Projects</Link>
            <Link to="/contact">Contact</Link>
            <Link to="https://drive.google.com/file/d/1n2YXLdFvcv9Xisxsrz2q7Zy5_PgcVEMN/view?usp=drive_link" className="mr-5">Resume</Link>
            <Link>Blogs</Link>
          </ul>
        </div>
        <div className="flex">
        <img className="w-12 h-12 rounded-full" src={imgLogo} alt="" />
        <a className="btn btn-ghost font-serif text-2xl ml-5">ALIMUZZAMAN</a>
        </div>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg font-semibold">
          <Link to='/' className="mr-5">Home</Link>
          <Link to='/about' className="mr-5">About</Link>
          <Link to='/skills' className="mr-5">Skills</Link>
          <Link to='/projects' className="mr-5">Projects</Link>
          <Link to="/contact" className="mr-5">Contact</Link>
          <Link to="https://drive.google.com/file/d/1n2YXLdFvcv9Xisxsrz2q7Zy5_PgcVEMN/view?usp=drive_link" className="mr-5">Resume</Link>
          <Link className="mr-5">Blogs</Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
