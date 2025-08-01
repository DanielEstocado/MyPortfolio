import React, { useState } from "react";
import { navigationLinks } from "../constants";
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion, useScroll, useMotionValueEvent } from "motion/react";

const NavigationBar = () => {

   const { scrollY } = useScroll();
   const [hidden, setHidden] = useState(false)

   useMotionValueEvent(scrollY, "change", (latest) => {
      const previous = scrollY.getPrevious();
      if (latest > previous && latest > 150) {
         setHidden(true);
      } else{
         setHidden(false)
      }
   })


  return (
    <motion.nav
      variants={{ visible: {y: 0}, hidden: {y: "-100%"} }}
      animate={hidden? "hidden": "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="sticky top-0 w-full  z-10  lg:fixed lg:top-0  lg:left-1/2 lg:-translate-x-1/2 lg:max-w-6xl  lg:rounded-b-full shadow-xl lg:bg-rgba-white backdrop-blur-sm "
    >
      <div className="navbar bg-base-100 lg:bg-transparent px-10">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden mr-3 border-0 "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navigationLinks.map((link) => (
                <li className="" key={link.label}>
                  <div className="flex items-center gap-2 group">
                    {link.icon}
                    <Link to={link.href} className="">
                      {link.label}
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <Link
            to={"/"}
            className="btn btn-ghost text-xl border-0 font-bastliga font-light"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            DanielEstocado
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-md ">
            {navigationLinks.map((link) => (
              <li className="" key={link.label}>
                <Link
                  to={link.href}
                  className="flex items-center gap-2 group"
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                >
                  {link.icon}
                  <span>{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end ">
          <label className="swap swap-rotate">
            <input
              type="checkbox"
              className="theme-controller "
              defaultChecked={
                document.documentElement.getAttribute("data-theme") !== "forest"
              }
              onChange={(e) => {
                document.documentElement.setAttribute(
                  "data-theme",
                  e.target.checked ? "nord" : "forest"
                );
              }}
            />

            {/* sun icon */}
            <svg
              className="swap-off h-7 w-7 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            {/* moon icon */}
            <svg
              className="swap-on h-7 w-7 fill-current "
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
        </div>
      </div>
    </motion.nav>
  );
};

export default NavigationBar;
