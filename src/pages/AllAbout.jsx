import React from "react";
import NavigationBar from "../components/NavigationBar";
import { togaNoBG,} from "../assets/images";
import Profile from "../components/AboutPage/Profile";

const AllAbout = () => {
  return (
    <main className="relative mx-auto overflow-x-hidden">
      <div className="absolute inset-0 -z-10 bg-cross " />
      <NavigationBar />
      <section className="lg:h-[100vh] h-[calc(100vh-64px)] w-full relative ">
        <img
          src={togaNoBG}
          alt="my-toga"
          className="-z-10 absolute bottom-0 right-1 max-h-[calc(100vh-65px)] w-auto max-w-[60%] sm:max-w-[50%] md:max-w-[40%] lg:max-w-[30%]"
        />
        {/* card */}
        <section className="lg:max-w-3/4 h-full flex items-end">
          <div className=" h-[calc(100vh-64px)] w-full lg:flex items-center justify-between p-5 gap-5 2xl:p-10 2xl:gap-10">
            <Profile/>
            <div className="h-full w-full bg-base-200 rounded-xl shadow-xl "></div>
          </div>
        </section>
      </section>
      <section className="h-screen bg-base-300">
        <div className="flex-col flex justify-center items-center h-full">
          <span className="my-header title-gradient">ABOUT PAGE</span>
          <span className="text-neutral-500 text-center">
            Oops! This page is currently under construction.
          </span>
          <span className="text-neutral-500 text-center">
            The developer has some exciting ideas in the works.
          </span>
          <span className="text-neutral-500 text-center">Stay tuned!</span>
        </div>
      </section>
    </main>
  );
};

export default AllAbout;
