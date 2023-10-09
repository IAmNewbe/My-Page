const AwardSlide = ({ image, name, desc }) => {
  return (
    <div style={{ backgroundImage: image }} className="h-screen bg-center bg-cover">
      <div className="w-full h-full bg-black bg-opacity-40 backdrop-blur-[2px] ">
        <div className="m-auto py-36 relative h-full">
          <div className="absolute table top-0 h-full w-full text-white justify-center mx-auto">
            <div className="table-cell align-middle">
              <div className="mx-auto">
                <h1 className="text-2xl align-middle text-center font-bold font-secondary md:text-6xl">
                  {name}
                </h1>
                <p className="text-base md:text-lg mt-5 mx-auto text-center max-w-[230px] lg:max-w-2xl sm:max-w-md ">
                  {desc}
                </p>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default AwardSlide;
