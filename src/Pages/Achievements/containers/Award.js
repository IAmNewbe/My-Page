import AwardList from "./AwardList"
import AwardListRight from "./AwardListRight"
import abinara from "../../../Assets/Achievements/abinara.jpg"
import kri from "../../../Assets/Achievements/KRI.png";
import ichiro from "../../../Assets/Achievements/ichiro-1.webp";
import iris from "../../../Assets/Achievements/iris-1.webp";
import robocon from "../../../Assets/Achievements/robocon.png";
import rival from "../../../Assets/Achievements/rival.png";
import virose from "../../../Assets/Achievements/virose.png";
import banyu from "../../../Assets/Achievements/Banyu.png";
import bayu from "../../../Assets/Achievements/IMG-20230403-WA0024.jpg"
import baru from "../../../Assets/Achievements/baru.webp";

const Award = ({
  ListAwards = [
    {
      team: "ABINARA 1",
      desc: "The annual contest that ABINARA - 1 team participates in every year is KRSRI, which is the regional and national competition specialized for legged Search and Rescue robots. Throughout the years, ABINARA - 1 has received several awards, and the latest one is the Third Place National KRSRI 2022. In the past Abinara-1 received 3rd Place in KRPAI Regional 2019, 2nd Place KRPAI National 2018, Best Design KRPAI 2018, 3rd Place and best Design in KRPAI 2017",
      icon: abinara,
      iconBadge: kri,
    },
    {
      team: "BANYUBRAMANTA",
      desc: "BANYUBRAMANTA team has numerous competition that the team participated in. At the national level, BANYUBRAMANTA has achieved the first place and other titles several times in competitions such as National Unmanned Speedboat Contest (KKCTBN), Telkom University’s Technogine ROV Division, Wonderful Indonesia Robot Challenge (WRC), and the newly held KRI Underwater Robot Division. ",
      icon: banyu,
      iconBadge: kri,
    },
    {
      team: "BARUNASTRA",
      desc: "BARUNASTRA has many awards both at big international events and national events. BARUNASTRA's most recent awards include the First Place Autonomy Challenge at the International Roboboat Competition in 2022 and 2023, as well as several others in the design documentation, video and website categories. At the National Unmanned Speedboat Contest (KKCTBN), BARUNASTRA win an award in several categories every year. ",
      icon: baru,
      iconBadge: kri,
    },
    {
      team: "BAYUCARAKA",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      icon: bayu,
      iconBadge: kri,
    },
    {
      team: "ICHIRO",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      icon: ichiro,
      iconBadge: kri,
    },
    {
      team: "IRIS",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      icon: iris,
      iconBadge: kri,
    },
    {
      team: "ITS ROBOCON",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      icon: robocon,
      iconBadge: kri,
    },
    {
      team: "RIVAL",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      icon: rival,
      iconBadge: kri,
    },
    {
      team: "VI-ROSE",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      icon: virose,
      iconBadge: kri,
    },
  ]
}) => {
  return (
    <>
      <div>
        {ListAwards.map((name, index) => {
          // eslint-disable-next-line no-lone-blocks
          {if (index%2 === 0) {
            return <AwardListRight key={index} team={name.team} desc={name.desc} icon={name.icon} iconBadge={name.iconBadge}/>
          }else {
            return <AwardList key={index} team={name.team} desc={name.desc} icon={name.icon} iconBadge={name.iconBadge}/>
          }
        }
        })}
      </div>
    </>
  )
}

export default Award;

