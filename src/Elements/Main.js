import React from "react";
import Description from "../Components/Description";
import { Testimonials } from "../Components/Testimonials";
import FooterSection from "../Sections/FooterSection";
import SignupSection from "../Containers/SignupSection";

const Main = () => {
  return (
    <div>
      <Description />
      <Testimonials />
      <SignupSection />
      <FooterSection />
    </div>
  );
};

export default Main;
