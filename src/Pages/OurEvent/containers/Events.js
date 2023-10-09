import React from "react";
import EventCard from "../components/EventCard";
import event1Bg from "../../../Assets/Material/event1-bg.png";
import event2Bg from "../../../Assets/Material/event2-bg.png";
import event3Bg from "../../../Assets/Material/event3-bg.png";
import event4Bg from "../../../Assets/Material/event4-bg.png";

const Events = () => {
  return (
    <div className="mt-10 mb-16 md:my-20 flex flex-col gap-y-4 md:gap-y-16 w-full h-auto">
      <EventCard
        first="Open Until Oktober 5 2023"
        second="Welcome Party"
        third="Training and Workshop 2023"
        description="Welcome party and basic training for members of the 2022 and 2023. The training consists of basic mechanics, electronics and programming that required as a prerequisite for registering the robotics team"
        image={event2Bg}
        linkDetails="View more"
        link="#FormRSVP"
        active={true}
      />
      <EventCard
        first="7 October 2023"
        second="Open House"
        third="Robotics Team Showcase"
        description="Get to know more about every Robotics Team and their legacy. Held in ITS Robotics Center on 7 October. Devided into two sessions, First session 08.00 and second session 10.30 - 12.30 "
        image={event3Bg}
        linkDetails="View more"
        link="#FormRSVP"
        active={true}
      />
      <EventCard
        first="Open until August 31, 2023"
        second="Open Recruitment"
        third="ITS ROBOTICS MEMBER 2023"
        description="Open to active ITS students of the 2022 and 2023 batches. Serves as the initial requirement to register for the ITS robotics team"
        image={event1Bg}
        linkDetails="Closed"
        link="./events"
        active={false}
      />
      <EventCard
        first="Lorem Ipsum"
        second="A New Event"
        third="Lorem Ipsum Dolor Sit Amet"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."
        image={event4Bg}
        // linkDetails=""
        link="./events"
        active={false}
      />
    </div>
  );
};

export default Events;
