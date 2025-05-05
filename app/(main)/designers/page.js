import React from "react";
import Designers from "../../components/designers/Designers";
import AdBanner from "../../components/AdBanner";
import Newsletter from "../../components/Newsletter";

const page = () => {
  return (
    <>
      <section>
        <div className='relative h-[60vh] bg-primary'>
          <div className='flex flex-col justify-center items-center h-full px-3'>
            <h1 className='sm:max-w-[650px] max-w-[375px] sm:text-5xl text-3xl text-white font-bold text-center'>
            Tools
            for Font Creators
            </h1>
            <p className='sm:max-w-[550px] max-w-[375px] text-center text-lg text-white my-6'>
            Elevate your type designs with professional tools, AI assistance,
            and a thriving marketplace. 
            </p>
          </div>
        </div>
      </section>
      <Designers />
      <AdBanner />
      <Newsletter />
    </>
  );
};

export default page;
