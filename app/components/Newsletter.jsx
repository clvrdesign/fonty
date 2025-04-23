import React from "react";
import Container from "./Container";
import { Bell } from "lucide-react";

const Newsletter = () => {
  return (
    <section className='mt-10 px-3'>
      <Container>
        <div className='bg-primary h-[315px] flex flex-col justify-center rounded-3xl items-center gap-3 px-4'>
          <h1 className='text-4xl font-bold text-white'>Newsletter</h1>
          <p className='sm:max-w-[450px] max-w-[375px] text-center text-white'>
            Subscribe to our Newsletter so you get a notification whenever a new
            font is updated
          </p>
          <form
            action=''
            className='relative max-w-[315px] w-full flex items-center'
          >
            <input
              type='email'
              name=''
              id=''
              placeholder='Email'
              className='w-full h-10 outline-none pl-4 pr-10 text-gray-700 text-sm font-light rounded-full'
            />
            <button className='absolute right-3 text-gray-700 hover:text-primary'>
              <Bell strokeWidth={1.5} />
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
};

export default Newsletter;
