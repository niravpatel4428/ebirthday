import React from "react";
import LandingLayout from "../Layouts/LandingLayout ";
import Banner from "../templates/Home/Banner";
import Steps from "../templates/Home/Steps";
import Pricing from "../templates/Home/Pricing";
import Celebrate from "../templates/Home/Celebrate";
import Testimonial from "../templates/Home/Testimonial";
import Faq from "../templates/Home/Faq";

const page = () => {
  return (
    <LandingLayout>
      <Banner />
      <Steps />
      <Pricing />
      <Celebrate />
      <Testimonial />
      <Faq />
    </LandingLayout>
  );
};

export default page;
