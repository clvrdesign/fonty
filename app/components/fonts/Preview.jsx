import React from "react";
import Container from "../Container";

const Preview = () => {
  return (
    <div className='px-3'>
      <Container>
        <div className='flex justify-center items-center text-center bg-primary text-white h-[345px] rounded-3xl mt-4'>
          <h1 className='text-4xl font-bold'>Montserrat</h1>
        </div>
        <div className='w-full px-4 sm:px-6 lg:px-8 border'>
          <div className='md:flex gap-8'>

            <div className='bg-white md:w-2/3'>
              <div className='p-8 rounded-lg mb-6'>
                <textarea
                  className='w-full p-4 rounded border border-gray-300 mb-4 text-2xl'
                  placeholder='Type here to preview'
                ></textarea>
                <div className='flex gap-4'>
                  <button className='px-4 py-2 bg-gray-200 rounded'>
                    Size: 24px
                  </button>
                  <button className='px-4 py-2 bg-gray-200 rounded'>
                    Color: #000
                  </button>
                </div>
              </div>

              <div className='border border-gray-200 rounded-lg p-6 mb-6'>
                <h3 className='font-bold text-lg mb-4'>License Options</h3>
                <div className='space-y-4'>
                  <div className='flex justify-between items-center p-4 border border-green-200 rounded-lg bg-green-50'>
                    <div>
                      <h4 className='font-medium'>Personal Use</h4>
                      <p className='text-sm text-gray-600'>Free forever</p>
                    </div>
                    <button className='px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700'>
                      Download
                    </button>
                  </div>
                  <div className='flex justify-between items-center p-4 border border-purple-200 rounded-lg bg-purple-50'>
                    <div>
                      <h4 className='font-medium'>Commercial License</h4>
                      <p className='text-sm text-gray-600'>
                        $29.99 • One-time payment
                      </p>
                    </div>
                    <button className='px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700'>
                      Purchase
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className='md:w-1/3'>
              <div className='bg-gray-50 p-6 rounded-lg sticky top-4'>
                <h2 className='text-2xl font-bold mb-2'>Montserrat</h2>
                <p className='text-gray-600 mb-4'>By Julieta Ulanovsky</p>
                <p className='mb-6'>
                  A modern sans-serif typeface with geometric precision and
                  elegant readability.
                </p>

                <div className='space-y-4'>
                  <div>
                    <h4 className='font-medium'>Languages Supported</h4>
                    <p className='text-sm text-gray-600'>
                      Latin, Cyrillic, Vietnamese
                    </p>
                  </div>
                  <div>
                    <h4 className='font-medium'>Downloads</h4>
                    <p className='text-sm text-gray-600'>24,501</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Preview;
