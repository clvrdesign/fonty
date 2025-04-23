import React from "react";
import Container from "./Container";

const Hero = () => {
  return (
    <section className='py-4'>
      <div className='relative h-[60vh] bg-primary'>
        <div className='flex flex-col justify-center items-center h-full px-3'>
          <h1 className='sm:max-w-[750px] max-w-[375px] sm:text-5xl text-3xl text-white font-bold text-center'>
            The Only Platform for Fully Commercial-Use Fonts
          </h1>
          <p className='sm:max-w-full max-w-[375px] text-center text-lg text-white mt-6'>
            Upload, discover, and license fonts with confidence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
