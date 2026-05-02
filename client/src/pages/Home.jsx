import React from "react";
import Slider from "../components/Slider/Slider.jsx";
import Facility from "../components/Static/Facility/Facility.jsx";
import ShortIntro from "../components/Static/ShortIntro/ShortIntro.jsx";
import WhyChoose from "../components/Static/WhyChoose/WhyChoose.jsx";

const Home = () => {
  return (
    <>
      <Slider />
      <Facility />
      <ShortIntro />
      <WhyChoose />
    </>
  );
};

export default Home;
