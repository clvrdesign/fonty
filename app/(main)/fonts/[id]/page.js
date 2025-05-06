import React from "react";
import AdBanner from "../../../components/AdBanner";
import Newsletter from "../../../components/Newsletter";
import Preview from "@/app/components/fonts/Preview";
const page = () => {
  return (
    <>
      <Preview/>
      <AdBanner />
      <Newsletter />
    </>
  );
};

export default page;
