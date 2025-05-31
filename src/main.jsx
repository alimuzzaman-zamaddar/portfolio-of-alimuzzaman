import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home/Home.jsx";
import About from "./Home/About.jsx";
import Skills from "./Home/Skills.jsx";
import Projects from "./Home/Projects.jsx";
import Main from "./Home/Main.jsx";
import Contact from "./Home/Contact";
import FluidCanvas from "./components/FluidCanvas.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/skills",
        element: <Skills></Skills>,
      },
      {
        path: "/projects",
        element: <Projects></Projects>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="bg-gradient-to-r from-[#020f32] via-[#07032f] to-[#041337] text-[#d3aa2f]">
    <div className="w-[90%] mx-auto">
      <React.StrictMode>
         <FluidCanvas/>
        <RouterProvider router={router} />
      </React.StrictMode>
    </div>
  </div>
);
