import React from "react";
import Container from "../Container";
import Button_primary from "../Buttons/Button_primary";
import Button_success from "../Buttons/Button_success";
import { DownloadCloud, ShoppingCart } from "lucide-react";

const Preview = () => {
  return (
    <div className='px-3'>
      <Container>
        <h1 className='text-4xl font-bold my-10'>Font Preview</h1>
        <div className='w-full'>
          <div className='md:flex gap-8 mt-10'>
            <div className='md:w-2/3'>
              <div className='bg-white rounded-3xl p-4'>
                <textarea
                  className='w-full min-h-[450px] outline-none resize-none mb-4 p-4 text-3xl'
                  placeholder='Type here to preview'
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Libero facilis harum consequuntur dolorem veritatis labore.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Libero facilis harum consequuntur dolorem veritatis labore.
                </textarea>
                <div className="max-w-32 flex flex-col">
                  <label htmlFor='font-size' className="text-sm mb-2">Font size</label>
                  <select
                    id='font-size'
                    className='px-3 py-2 text-sm font-light text-gray-700 border border-gray-200 bg-gray-100 rounded-lg outline-none focus:border-gray-300 transition duration-300'
                  >
                    <option value='small'>Tinny</option>
                    <option value='medium'>Small</option>
                    <option value='large'>Medium</option>
                    <option value='large'>Large</option>
                  </select>
                </div>
              </div>
            </div>

            <div className='md:w-1/3'>
              <div className='bg-white p-6 rounded-3xl sticky top-4'>
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
                  <div className='mt-10'>
                    <h3 className='font-bold text-lg mb-4'>License Options</h3>
                    <div className='space-y-4'>
                      <div className='flex justify-between items-center p-4 border border-green-200 rounded-2xl bg-green-50'>
                        <div>
                          <h4 className='font-medium'>Personal Use</h4>
                          <p className='text-sm text-gray-600'>Free forever</p>
                        </div>
                        <Button_success><DownloadCloud strokeWidth={1.5} /> Download</Button_success>
                      </div>
                      <div className='flex justify-between items-center p-4 border border-primary/20 rounded-2xl bg-primary/10'>
                        <div>
                          <h4 className='font-medium'>Commercial License</h4>
                          <p className='text-sm text-gray-600'>
                            $29.99 • One-time payment
                          </p>
                        </div>
                        <Button_primary><ShoppingCart strokeWidth={1.5} /> Purchase</Button_primary>
                      </div>
                    </div>
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
