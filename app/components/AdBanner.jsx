import React from "react";
import Container from "./Container";

const AdBanner = () => {
  return (
    <section className='pt-10 px-3'>
      <Container>
        <div className='relative bg-white rounded-3xl px-4 py-8 min-h-60 flex flex-col justify-center items-center overflow-hidden'>
          <h2 className='text-xl font-bold text-gray-700 mb-2'>Ad Banner</h2>
          <p className='text-gray-700 text-center'>
            This is an ad banner. You can place your ad content here.
          </p>
          <label className='absolute top-6 -right-10 bg-primary text-white w-[150px] rotate-[45deg] text-sm py-1 text-center'>
            Sponsored
          </label>
        </div>
      </Container>
    </section>
  );
};

export default AdBanner;
