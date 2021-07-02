import React from "react";
import Description from "../Components/Description";
import FadingEffect from "../Components/FadingEffect";
import Testimonials from "../Components/Testimonials";
import FooterSection from "../Sections/FooterSection";
import SignupSection from "../Sections/SignupSection";

const Main = () => {
  return (
    <div>
      <Description />
      <Testimonials/>
      <FadingEffect/>
      <SignupSection />
      <FooterSection />
    </div>
  );
};

export default Main;
