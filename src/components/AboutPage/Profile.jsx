import React from "react";
import { me, togaBanner } from "../../assets/images";
import { LinkIcon } from "@heroicons/react/16/solid";
import { myTags } from "../../constants";

const Profile = () => {
  return (
    <div className="lg:max-w-xs w-full bg-base-200 rounded-4xl p-6 shadow-xl border dark:border-neutral-500 border-gray-400 ">
      <div className="h-24 w-full relative mt-6 mb-4">
        <img
          src={togaBanner}
          alt="banner"
          className="rounded-4xl absolute top-0 left-1 w-full h-full object-cover z-0"
        />
        <img
          src={me}
          alt="profile"
          className="rounded-4xl z-10 h-full relative border-4 border-base-200"
        />
      </div>
      <h2 className=" font-montserrat font-bold text-xl">Daniel L. Estocado</h2>
      <div className="flex font-montserrat items-center ">
        <h2 className="text-base-content text-sm">@UnworthyPleb ·</h2>
        <div className="text-xs text-neutral-500  font-roboto-mono">
          <div className="py-1 px-2 rounded-full flex items-center justify-center gap-2">
            <span>Active</span>
            <div className="inline-grid *:[grid-area:1/1]">
              <div className="status text-forest-primary bg-forest-primary w-2 h-2 animate-ping"></div>
              <div className="status text-forest-primary bg-forest-primary w-2 h-2"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="my-6 opacity-60 hover:opacity-100 group transition-opacity duration-200 ">
        <a
          href="https://danielestocado.netlify.app/"
          target="_blank"
          className="rounded-xl border p-2 px-4 text-xs md:text-sm font-bold font-montserrat text-base-content inline-flex items-center gap-1 group-hover:bg-base-100 transition-colors  duration-200"
        >
          <LinkIcon height={20} width={20} />
          <span>danielestocado.netlify.app</span>
        </a>
      </div>

      <section className="flex flex-wrap gap-2 mt-4 select-none opacity-80 mb-4">
        {myTags.map((tag, index) => (
          <div
            key={index}
            className="border  font-bold font-montserrat border-neutral-500 text-xs px-3 py-1 rounded-full text-neutral-500 shadow-sm"
          >
            # {tag}
          </div>
        ))}
      </section>
    </div>
  );
};

export default Profile;
