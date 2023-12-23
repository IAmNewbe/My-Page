import abinara from "../../src/Assets/Portofolio/Abinara.png";
import crustea from "../../src/Assets/Portofolio/Crustea.png";
import robotics from "../../src/Assets/Portofolio/ITS_Robotics.png";
import megumi from "../../src/Assets/Portofolio/Abinara.png";
import evolution from "../../src/Assets/Portofolio/Evol.png";
import tigaFasa from "../../src/Assets/Portofolio/3fasa.png";
import abmas from "../../src/Assets/Portofolio/abmas.jpeg"; 

const Portofolio = ({
    ListProjects = [
        {
            name: 'Evolution ITS',
            icon: evolution,
            desc: 'Build Full-Stack Web for Electrical and Robotics National Competition that allows CRUD, auth and email verfication with laravel.',
            link: 'https://its-evolution.com'
        },
        {
            name: 'Implementation of an IoT Integrated Solar Power Based Water Pump',
            icon: abmas,
            desc: 'Creating an IoT Integrated Solar Power based Water Pump tool to Improve Irrigation facilities for rice farmers in Kedunggempol village, Mojosari District, Regency Mojokerto',
            link: 'https://www.its.ac.id/news/2023/12/10/abmas-its-gagas-pompa-air-berbasis-plts-dan-iot-untuk-irigasi/',
        },
        {
            name: '3 Phase Electricity Monitoring',
            icon: tigaFasa,
            desc:'Create Smart Energy Meter that read all 3 phase electricity elements and shows into dashboard',
            link: 'https://github.com/IAmNewbe/3-phase-electricity-monitoring.git'
        },
        {
            name: 'Abinara 1 ITS Website',
            icon: abinara,
            desc: 'Create a Landing page for Abinara-1 ITS Robotics Team using only HTML CSS and JavaScript.',
            link: 'https://abinara-1-its.github.io',
        },
        {
            name: 'Water Quality and Power Monitoring, IOT Integrated',
            icon: crustea,
            desc: 'Design and develop internet-connected devices that collect, process, and transmit data. Build user interfaces in for the needs of users.',
            link: 'https://crustea.id'
        },
        {
            name: 'ITS Robotics Company Profile Website',
            icon: robotics,
            desc: 'Lead and manage a team of web developers to create and maintain company websites',
            link: 'https://itsrobotics.vercel.app'
        },
        {
            name: 'Firefighter and SAR Legged Robot',
            icon: megumi,
            desc: 'Conducts research and competition for legged autonomous robots with missions to rescue victims and extinguish fires.',
            link: 'https://abinara-1-its.github.io'
        },
    ]
}) => {
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
                {ListProjects.map((project, index) => {
                    return (
                    <div className="mb-12 p-4 md:w-1/2" key={index}>
                        <div className="rounded-md shadow-md overflow-hidden">
                            <img src={project.icon} alt="" className="project-img"/>
                        </div>
                        <h3 className="font-semibold text-xl text-primary-0 mt-5 mb-3"><a href={project.link} target="_blank" rel="noreferrer">{project.name}</a></h3>
                        <p className="font-medium text-base text-secondary-0">{project.desc}</p>
                    </div>
                    )
                })};
            </div>
        </div>
        <div id="skill"></div>
      </section >
    </>
  )
}

export default Portofolio;