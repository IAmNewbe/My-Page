import Events from "./containers/Events";
import Header from "./containers/Header";
import eventGradient1 from "../../Assets/Material/event-news-gradient1.png";
import eventGradient2 from "../../Assets/Material/event-news-gradient2.png";
import Form from "./components/Form";
import { useEffect, useState } from "react";

const OurEvent = () => {
  const [isFormOpen, setIsFormOpen] = useState(true);

  useEffect(() => {
    const closingForm = new Date('2023-10-05T18:51:00');

    const interval = setInterval(() => {
      console.log("closing form : ",closingForm);
      const currentDateTime = new Date();
      console.log(currentDateTime)
      if (closingForm >= currentDateTime ) {
        setIsFormOpen(false);
        console.log('Form closed');
        clearInterval(interval);
      } 
    }, 1000);

    return clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden scroll-smooth">
      <Header />
      <Events />
      
      <Form />

      <img src={eventGradient1} alt="Gradient" className="absolute md:-left-6 top-0 animate-pulse -z-10" />
      <img src={eventGradient2} alt="Gradient" className="absolute md:-right-6 top-96 animate-pulse -z-10" />
    </div>
  );
};

export default OurEvent;
