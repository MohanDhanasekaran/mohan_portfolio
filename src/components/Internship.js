import React from "react";
import { PiCertificateBold } from "react-icons/pi";
import { BiLinkExternal } from "react-icons/bi";
import INTERNSHIP from "../utils/Intern";
const Interships = () => {
  return (
    <div className="bg-neutral-50 px-3">
      <div id="certification" className=" max-w-6xl md:px-10  py-20 m-auto">
        <h1 className="text-2xl text-center lg:text-start font-bold text-blue-600 my-5">
          EXPERIENCE
        </h1>
        <div className="space-y-10">
          {INTERNSHIP.map((intership) => (
            <div
              key={intership.title}
              className="flex flex-col lg:flex-row gap-10 items-center px-5 rounded-md shadow-[0_0_60px_2px_lightgray] py-6"
            >
              <div className="lg:max-w-sm max-w-lg">
                <img
                  className="rounded-md  shadow-xl"
                  alt="certificate"
                  src={intership.image}
                />
              </div>
              <div className="max-w-lg">
                <h1 className="flex justify-center items-center gap-3 text-xl font-semibold">
                  {intership.title}
                  <PiCertificateBold className="text-2xl animate-pulse text-cyan-700" />
                </h1>
                <p className="text-gray-500  text-center lg:text-start font-medium my-5">
                  {intership.description}
                </p>
                <a
                  href={intership.url}
                  rel="external noreferrer"
                  target="_blank"
                  className="flex justify-center hover:text-fuchsia-700 font-semibold gap-3 items-center text-xl"
                >
                  Experience
                  <BiLinkExternal className="animate-bounce text-fuchsia-800 text-2xl" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Interships;
