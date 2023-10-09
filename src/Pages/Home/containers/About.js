const About = () => {
  return (
    <>
      <section id="about" className="md:mt-24 mb-16 md:mb-32 text-white w-full">
        <div className="container md:w-10/12">
          <h4 className="font-bold px-4 uppercase text-primary-0 md:text-lg mb-5 font-secondary">
            About Us
          </h4>
          <div className="flex flex-wrap">
            <div className="w-full px-4 mb-2 md:mb-10 lg:w-1/2 ">
              <p className="text-base font-bold font-secondary text-secondary-0 max-w-xl md:text-4xl ">
                Transforming Visions into Reality: Uniting Minds and Machines
              </p>
            </div>
            <div className="w-full px-4 lg:w-1/2 ">
              <p className="font-medium text-base text-secondary-0 mb-6 lg:text-lg">
                ITS Robotics is determined to become a forum for students to be able to actively
                participate in developing and advancing the field of robotics, and to become one of
                the organization that is able to make a major contribution on and off campus.
              </p>
              <div className="flex items-center"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
