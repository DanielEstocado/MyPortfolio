import React from "react";
import { me } from "../assets/images";

const InfoItem = ({ icon, title, label }) => (
  <div className="flex gap-5 items-center flex-1 dark:text-nord-text text-forest-text border-0 border-primary rounded-full p-1 dark:bg-nord-300">
    <div className="flex items-center justify-center border p-1 h-10 w-10 rounded-full dark:border-nord-primary border-forest-primary">
      <i className={`${icon} dark:text-nord-primary text-forest-primary`} />
    </div>
    <div className="flex flex-col">
      <h3 className="uppercase text-xs text-base-300">{title}</h3>
      <h3 className="text-md font-semibold text-base-100">{label}</h3>
    </div>
  </div>
);

const MyInfoCard = () => {
  return (
    <div className=" w-1/2 h-full rounded-4xl shadow-xl dark:lg:bg-nord-200 lg:bg-forest-200 backdrop-blur-xs font-montserrat dark:text-nord-text text-forest-text">
      <div className="flex justify-between pt-7 px-10 pb-5 dark:bg-nord-300 bg-forest-300 rounded-t-3xl">
        <div className="self-end px-5">
          <h1 className="text-3xl font-bold uppercase">Daniel Estocado</h1>
          <h3 className="text-sm">Undergraduate</h3>
        </div>
        <img
          src={me}
          alt=""
          className="h-30 w-30 rounded-full border-4 dark:border-nord-primary border-forest-primary"
        />
      </div>

      <div className="flex flex-col gap-5 dark:bg-nord-200 bg-forest-200 pt-10 pb-5 px-10">
        <div className="flex gap-3">
          <InfoItem
            icon="fa-regular fa-flag"
            title="Nationality"
            label="Filipino"
          />
          <InfoItem
            icon="fa-solid fa-location-dot"
            title="Location"
            label="Cavite, PH"
          />
        </div>
        <div className="flex gap-3">
          <InfoItem icon="fa-solid fa-mars" title="Gender" label="Male" />
          <InfoItem
            icon="fa-solid fa-language"
            title="Language"
            label="English|Tagalog"
          />
        </div>

        <InfoItem icon="fa-solid fa-phone" title="Phone" label="09156444230" />
        <InfoItem
          icon="fa-regular fa-envelope"
          title="Email"
          label="estocado.daniel143@gmail.com"
        />
      </div>
    </div>
  );
};

export default MyInfoCard;
