import React from "react";
import team1Gradient from "../../../Assets/Material/team1-gradient.png";
import team1Circle from "../../../Assets/Material/team1-circle.png";
import team1Triangle from "../../../Assets/Material/team1-triangle.png";
// import icon from "../../../Assets/Team/Logo_Tim/LogoAbinara_burungmerah.jpg"

const TeamLeft = ({index, name, desc, icon}) => {
  return (
    <div className="my-20 md:pt-36 lg:mt-20 relative flex flex-col items-center justify-start w-full h-auto">
      <div className="flex flex-col md:flex-row justify-start items-center md:w-9/12">
        <div className="w-3/4 lg:w-1/2 mb-5 flex justify-start">
          <div className="relative w-44 h-44 md:h-[350px] 2xl:w-[410px] 2xl:h-[410px] ml-2 md:w-[350px] rounded-3xl bg-contain bg-no-repeat bg-white bg-center" style={{backgroundImage: `url(${icon})`}}>
            <div className="w-44 h-44 md:h-[350px] md:w-[350px] 2xl:w-[410px] 2xl:h-[410px] opacity-10 absolute -top-8 -left-8 md:-top-14 md:-left-14 2xl:-top-20 2xl:-left-20 border-2 border-black  -z-10 rounded-3xl bg-contain bg-no-repeat bg-white bg-center" style={{backgroundImage: `url(${icon})`}}></div>
          </div>
        </div>
        {/* <img
          src={team1Image}
          alt="Team"
          width={650}
          className="-ml-24 lg:-ml-12 w-3/4 lg:w-1/2"
        /> */}
        <div className="flex flex-col w-2/3 md:w-[48%] gap-y-2 md:gap-y-10">
          <div className="font-secondary text-white md:text-3xl lg:text-5xl">
            {name}
          </div>
          <div className="font-primary text-white font-extralight text-xs md:text-sm lg:text-base text-justify">
            {desc}
          </div>
        </div>
      </div>

      <img
        src={team1Gradient}
        alt="Gradient"
        className="absolute md:-left-32 -top-52 md:-top-[900px] animate-pulse -z-10"
      />
      <img
        src={team1Circle}
        alt="Detail"
        className="hidden lg:block absolute left-8 top-72 animate-ping"
        width={51}
      />
      <img
        src={team1Triangle}
        alt="Detail"
        className="hidden lg:block absolute top-96 right-8 animate-spin-slow"
        width={105}
      />
    </div>
  );
};

export default TeamLeft;
