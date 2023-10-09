import React from "react";
// import team1Image from "../../../Assets/Team/Logo Tim/LogoAbinara_burungmerah.jpg";
import team2Cross from "../../../Assets/Material/team2-cross.png";

const TeamRight = ({ index, name, desc, icon}) => {
  console.log(icon);
  return (
    <div className="my-20 md:pt-36 lg:mt-20 relative flex flex-col items-center justify-start w-full h-auto md:h-screen">
      <div className="flex flex-col md:flex-row justify-center items-center md:w-9/12">
        <div className="w-3/4 lg:w-1/2 mb-5 md:order-last flex justify-end ">
          <div className="relative w-44 h-44 md:h-[350px] mr-2 2xl:w-[410px] 2xl:h-[410px] md:mr-0 md:w-[350px] rounded-3xl bg-contain bg-no-repeat bg-white bg-center " style={{backgroundImage: `url(${icon})`}}>
            <div className="w-44 h-44 md:h-[350px] md:w-[350px] 2xl:w-[410px] 2xl:h-[410px] opacity-10 absolute -top-8 -right-8 md:-top-14 md:-right-14 2xl:-top-20 2xl:-right-20 border-2 -z-10 rounded-3xl bg-contain bg-no-repeat bg-white bg-center" style={{backgroundImage: `url(${icon})`}}></div>
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
        src={team2Cross}
        alt="Detail"
        className="hidden lg:block absolute left-6 w-28 bottom-1/2 animate-spin-slow"
        width={76}
      />
    </div>
  );
};

export default TeamRight;
