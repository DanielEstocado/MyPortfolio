import React from "react";

const MyInfoItem = ({ label, value }) => (
  <div className="md:flex md:justify-between w-full items-center  border px-4 py-1 rounded-lg border-neutral-500 bg-base-100">
    <div className="font-bold font-montserrat">{label}:</div>
    <div className="text-neutral-500 text-end my-2 md:my-auto">{value}</div>
  </div>
);

const MyLanguageItem = ({ language, written, spoken }) => (
  <div className="flex items-center  border py-2 px-4 rounded-lg border-neutral-500 bg-base-100">
    <div className="font-bold">{language}:</div>
    <div className="w-full">
      <div className="w-full flex items-center">
        <progress
          className="progress progress-primary w-full mx-4"
          value={written}
          max="100"
        ></progress>
        <div className="font-bold min-w-15 text-end text-neutral-500">Written</div>
      </div>
      <div className="w-full flex items-center">
        <progress
          className="progress progress-primary w-full mx-4"
          value={spoken}
          max="100"
        ></progress>
        <div className="font-bold min-w-15 text-end text-neutral-500">Spoken</div>
      </div>
    </div>
  </div>
);

const MyInformation = () => {
  return (
    <div className="mt-6 lg:mt-0 overflow-y-auto  w-full lg:max-w-4xl self-start bg-base-200 rounded-4xl p-6 shadow-xl border dark:border-neutral-500 border-gray-400 ">
      <h2 className=" font-montserrat font-bold text-lg mb-2 uppercase">
        Personal Information
      </h2>
      <div className=" w-full md:px-6 text-sm space-y-2 ">
        <MyInfoItem label="Name" value="Daniel Lagapa Estocado" />
        <MyInfoItem label="Birthdate" value="April 20, 2003" />
        <MyInfoItem label="Gender" value="Male" />
        <MyInfoItem label="Pronouns" value="He/Him" />
        <MyInfoItem label="Nationality" value="Filipino" />
        <MyInfoItem label="Location" value="Cavite, Philippines" />
      </div>
      {/* <h2 className=" font-montserrat font-bold text- mt-4 mb-2 uppercase">
        Work Options
      </h2>
      <div className=" w-full md:px-6 text-sm space-y-2">
        <MyInfoItem label="Willing to work night shifts?" value="Yes" />
        <MyInfoItem label="Willing to relocate?" value="Yes" />
        <MyInfoItem label="Looking for OJT positions?" value="Yes" />
        <MyInfoItem label="Willing to work overseas?" value="Yes" />
      </div> */}
      <h2 className=" font-montserrat font-bold text- mt-4 mb-2 uppercase">
        Language
      </h2>
      <div className=" w-full md:px-6 text-sm space-y-4">
        <MyLanguageItem language="English" written={90} spoken={80} />
        <MyLanguageItem language="Tagalog" written={87} spoken={95} />
      </div>
    </div>
  );
};

export default MyInformation;
