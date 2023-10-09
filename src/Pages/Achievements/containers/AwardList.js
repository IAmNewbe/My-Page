import AwardCard from "../components/AwardCard"

const AwardList = ({ team, desc, icon, iconBadge }) => {
  return (
    <div className="relative">
      <div className="md:mx-auto flex flex-wrap justify-center mb-40 h-full 2xl:max-w-6xl lg:w-[1080px]">
        <AwardCard icon={icon} iconBadge={iconBadge}/>
        <div className=" text-white justify-center items-center mx-16 lg:mx-auto md:w-1/2 ">
          <h1 className="text-base font-bold font-secondary md:text-3xl">{team}</h1>
          <p className="text-base text-justify max-w-full sm:max-w-lg md:max-w-full mt-5">{desc}</p>
          <button className="mt-4 p-2 bg-white rounded-xl text-main-0 
          font-semibold hover:bg-main-0 hover:ring-white ring-2 hover:text-white">Load more</button>
        </div>
      </div>
    </div>
  )
}

export default AwardList;