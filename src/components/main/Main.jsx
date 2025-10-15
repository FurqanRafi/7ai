import React from "react";
import Hero from "../hero/Hero";
import Productivity from "../productivity/Productivity";
import Instructors from "../instructors/Instructors";
import Course from "../course/Course";
import Skill from "../skill/Skill";
import Promote from "../promote/Promote";
import Seniors from "../seniors/Seniors";
import Testimonials from "../testimonial/Testimonials";
import What from "../what/What";
import FAQS from "../faqs/FAQS";
import Question from "../questionier/Question";
import Pricing from "../pricing/Pricing";
import Certification from "../certification/Certification";
import Curiculim from "../curricullum/Curiculim";

const Main = () => {
  return (
    <div>
      <Hero />
      <Productivity />
      <Instructors />
      <Course />
      <Skill />
      <Promote />
      <Seniors />
      <Testimonials />

      <What />
      <Curiculim />
      <Certification />
      <Pricing />
      <FAQS />
      <Question />
    </div>
  );
};

export default Main;
