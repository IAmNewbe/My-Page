const Portofolio = () => {
  return (
    <>
      <div id="portofolio"></div>
      <section className="pt-14 pb-16 bg-slate-300">
        <div className="container">
            <div className="w-full px-4">
                <div className="max-w-xl mx-auto text-center mb-16">
                    <h4 className="font-semibold text-lg text-tersier-0 mb-2 uppercase md:text-2xl" >Portofolio</h4>
                    <h2 className="font-bold text-3xl text-primary-0 mb-4">Latest Projects</h2>
                    <p className="font-medium text-md text-secondary-0">
                        Here are my latest projects, each thoughtfully developed to provide practical solutions and make a positive difference in their respective fields.</p>
                </div>
            </div>

            <div className="w-full px-4 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto">
                <div className="mb-12 p-4 md:w-1/2">
                    <div className="rounded-md shadow-md overflow-hidden">
                        <img src={require("../../src/Assets/Portofolio/Abinara.png")} alt=""
                        className="project-img"/>
                    </div>
                    <h3 className="font-semibold text-xl text-primary-0 mt-5 mb-3"><a href="https://abinara-1-its.github.io" target="_blank" rel="noreferrer">Abinara 1 ITS Website</a></h3>
                    <p className="font-medium text-base text-secondary-0">Create a Landing page for Abinara-1 ITS Robotics Team using only HTML CSS and JavaScript.</p>
                </div>
                <div className="mb-12 p-4 md:w-1/2">
                    <div className="rounded-md shadow-md overflow-hidden">
                        <img src={require("../../src/Assets/Portofolio/Crustea.png")} alt=""
                        className="project-img"/>
                    </div>
                    <h3 className="font-semibold text-xl text-primary-0 mt-5 mb-3">Water Quality and Power Monitoring, IOT Integrated</h3>
                    <p className="font-medium text-base text-secondary-0">Design and develop internet-connected devices that collect, process, and transmit data. Build user interfaces in for the needs of users.</p>
                </div>
                <div className="mb-12 p-4 md:w-1/2">
                    <div className="rounded-md shadow-md overflow-hidden">
                        <img src={require("../../src/Assets/Portofolio/ITS_Robotics.png")} alt=""
                        className="object-top project-img"/>
                    </div>
                    <h3 className="font-semibold text-xl text-primary-0 mt-5 mb-3"><a href="https://itsrobotics.vercel.app" target="_blank" rel="noreferrer">ITS Robotics Company Profile Website</a></h3>
                    <p className="font-medium text-base text-secondary-0">Lead and manage a team of web developers to create and maintain company websites</p>
                </div>
                <div className="mb-12 p-4 md:w-1/2">
                    <div className="rounded-md shadow-md overflow-hidden">
                        <img src={require("../../src/Assets/Portofolio/Abinara.png")} alt=""
                        className="project-img" />
                    </div>
                    <h3 className="font-semibold text-xl text-primary-0 mt-5 mb-3">Firefighter and SAR Legged Robot</h3>
                    <p className="font-medium text-base text-secondary-0">Conducts research and competition for legged autonomous robots with missions to rescue victims and extinguish fires.</p>
                </div>
            </div>
        </div>
        <div id="skill"></div>
      </section >
    </>
  )
}

export default Portofolio;