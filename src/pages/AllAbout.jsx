import React from "react";
import NavigationBar from "../components/NavigationBar";
// import { togaNoBG,} from "../assets/images";
import Profile from "../components/AboutPage/Profile";
import MyInformation from "../components/AboutPage/MyInformation";

const AllAbout = () => {
  return (
    <main className="relative mx-auto overflow-x-hidden">
      <div className="absolute inset-0 -z-10 bg-cross " />
      <NavigationBar />
      <section className="lg:h-[100vh] h-[calc(100vh-64px)] w-full">
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
