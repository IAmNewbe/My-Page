import Header from "./containers/Header";
import TeamLeft from "./containers/TeamLeft";
import TeamRight from "./containers/TeamRight";
import abinara from "../../Assets/Team/Logo_Tim/LogoAbinara_burungmerah.jpg"
import banyu from "../../Assets/Team/Logo_Tim/Banyubramanta.jpg";
import baru from "../../Assets/Team/Logo_Tim/Barunastra.jpg";
import bayu from "../../Assets/Team/Logo_Tim/Bayucaraka.jpg";
import ichiro from "../../Assets/Team/Logo_Tim/Ichiro.jpg";
import rival from "../../Assets/Team/Logo_Tim/Rival.jpg";
import robocon from "../../Assets/Team/Logo_Tim/ROBOCON.jpg";
import virose from "../../Assets/Team/Logo_Tim/Vi-Rose.jpg";
import iris from "../../Assets/Team/Logo_Tim/IRIS.jpg";

const Team = ({
  ListTeams = [
    {
      name: "ABINARA 1",
      desc: "Abinara-1 is a team that conducts research and competition for legged autonomous robots with missions to rescue victims and extinguish fires. the team consists of students of Sepuluh Nopember Institute of Technology. one of the competitions that is followed is KRSRI. KRSRI (Kontes Robot SAR Indonesia) is a substitute for the Indonesian fire fighting robot contest (KRPAI) which emphasizes more on disaster rescue missions that occur especially in Indonesia.",
      icon: abinara,
    },
    {
      name: "BANYUBRAMANTA",
      desc: "Banyubramanta, an underwater and amphibious robotics team from Institut Teknologi Sepuluh Nopember that focused on underwater robot such as ROV (Remotely Operated Vehicle), AUV (Autonomous Underwater Vehicle) and amphibious robots.",
      icon: banyu,
    },
    {
      name: "BARUNASTRA",
      desc: "Specialize in designing and producing ASV (Autonomous Surface Vehicle), FERC (Fuel Engine Remote Control) and RC (Remote Control) noats. Established by ITS Robootics, Metic Club from Marine Engineering, and Hydromodelling Club from Naval Architectur.",
      icon: baru,
    },
    {
      name: "BAYUCARAKA",
      desc: "Bayucaraka ITS has been established since 2014, this team focuses on developing Unmanned Aerial Vehicle (UAV) or unmanned aircraft which are divided into three technical divisions with different missions and one non-technical division.",
      icon: bayu,
    },
    {
      name: "ICHIRO",
      desc: "ICHIRO Team is a Humanoid Robosoccer Robot Team from the Sepuluh Nopember Institute of Technology (ITS). ICHIRO team's main focus is to develop a humanoid soccer robot. ICHIRO team has participated in the national robot contests since 2010.",
      icon: ichiro,
    },
    {
      name: "IRIS",
      desc: "ITS Robot with Intelligence System or known as IRIS is a Robotics team Institut Teknologi Sepuluh Nopember (ITS) which focuses on autonomous soccer game robots. Since being developed in 2017, IRIS ITS has competed in soccer robotics especially middle size league, since 2017 and managed to make many achievements. ",
      icon: iris,
    },
    {
      name: "ITS ROBOCON",
      desc: "The ITS Robocon team is a group of students who participate in the Robocon competition organized by the Asia-Pacific Broadcasting Union (ABU). Robocon stands for 'Robot Contest,' and it is an annual international robotics competition that challenges teams to complete a set of specific tasks within a given time frame.",
      icon: robocon,
    },
    {
      name: "RIVAL",
      desc: "RIVAL ITS Robotics Team is one of the robotics team at ITS that aims to take part in the annual event of Indonesian Robot Contest, especially in the thematic category known as the Indonesian Thematic Robot Contest or commonly abbreviated as KRTMI. Founded in 2020, RIVAL itself becomes the youngest robotics team in ITS. We focus on research and development especially in robots to meet urgent national needs. Therefore we hope that every year we can create advanced robots to meet these needs.",
      icon: rival,
    },
    {
      name: "VI-ROSE",
      desc: "Vi-Rose ITS Robotics team is a team that mainly focusing at Humanoid Robot Dancing. One of the competition is Humanoid Robot Dancing Competition or KRSTI (Kontes Robot Seni Tari Indonesia) is one of competition in KRI (Kontes Robot Indonesia). This competition shows humanoid robot dancing a tradional Indonesian dance. The humanoid robot dance accompanied by the tradional music.",
      icon: virose,
    },
  ]
}) => {

  return (
    <>
      <Header />
      <div className="md:mt-32 md:mx-10">
        {ListTeams.map((team, index) => {
          // eslint-disable-next-line no-lone-blocks
          {if (index%2 === 0) {
            // {console.log(team.icon)}
            return (<TeamLeft key={index} name={team.name} desc={team.desc} icon={team.icon}/>)
          } else {
            return (<TeamRight key={index} name={team.name} desc={team.desc} icon={team.icon}/>)
          }
        }
        })}
      </div>
    </>
  );
};

export default Team;
