import Container from "@/app/components/Container";
import Aside from "@/app/components/account/Aside";
import { CirclePlus } from "lucide-react";

const page = () => {
  return (
    <section className='relative py-4 px-2'>
      <Container>
        <div className='flex flex-col md:flex-row gap-4'>
          <Aside />

          <div className='flex-1'>
            <div className='bg-white rounded-2xl shadow-lg shadow-gray-100 overflow-hidden'>
              <div className='bg-white sm:px-6 px-3 py-4 border-b border-gray-100'>
                <h2 className='text-xl font-bold text-gray-700'>
                  Upload New Font
                </h2>
                <small className='text-gray-500'>
                  Upload your font files to add them to the library
                </small>
              </div>

              <div className='md:p-6 p-3'>
                <div className='border border-amber-400 bg-amber-50 rounded-2xl p-4 mb-0'>
                  <div className='flex items-start'>
                    <div className='flex-shrink-0 text-amber-500'>
                      <i className='fi fi-rr-triangle-warning inline-block translate-y-0.5'></i>
                    </div>
                    <div className='ml-3'>
                      <h3 className='font-medium text-amber-800 mb-2'>
                        Important
                      </h3>
                      <div className='text-[12px] text-amber-700 space-y-2'>
                        <p>By submitting your font, you certify that:</p>
                        <ul className='list-disc pl-5 space-y-1'>
                          <li>You are the original author of the font</li>
                          <li>You hold all necessary publishing rights</li>
                          <li>
                            You grant FreeFont permission to distribute it
                          </li>
                        </ul>
                        <p className='italic mt-2'>
                          Note: FreeFont cannot control how users employ
                          downloaded fonts and declines responsibility for
                          misuse. This reminder summarizes key points from our
                          full{" "}
                          <a
                            href='/agreement/'
                            className='text-amber-700 underline hover:text-amber-800'
                          >
                            Submission Agreement
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <form
                  action=''
                  method='POST'
                  enctype='multipart/form-data'
                  className='flex gap-4 py-6'
                >
                  <div className='w-full flex lg:flex-row flex-col lg:gap-6 gap-3'>
                    <div className='lg:w-2/6 w-full'>
                      <div className='w-full border border-dashed border-gray-300 hover:border-primary rounded-2xl p-8 text-center mb-6 bg-gray-50 transition-colors duration-200'>
                        <div className='flex flex-col items-center justify-center'>
                          <label for='fontFile' className='cursor-pointer'>
                            <div className='text-4xl text-gray-400 mb-4'>
                              <i className='bi bi-cloud-arrow-up'></i>
                            </div>
                            <p className='text-[12px] text-gray-400 mb-2'>
                              (TTF, OTF, WOFF, WOFF2, ZIP)
                            </p>
                            <p className='text-sm text-gray-600 mb-2'>
                              Drag and drop your font files here or
                            </p>
                            <p className='text-sm text-primary mb-4 underline'>
                              Browse files
                            </p>
                            <input
                              id='fontFile'
                              name='fontFile'
                              type='file'
                              accept='.ttf, .otf, .woff, .woff2, .zip'
                              multiple
                              className='hidden'
                              required
                              aria-label='Upload font file'
                            />
                          </label>
                        </div>
                      </div>

                      <div id='filePreview' className='hidden mb-6'>
                        <h3 className='text-md font-medium text-gray-700 mb-3'>
                          Selected Files
                        </h3>
                        <ul id='fileList' className='space-y-2'></ul>
                      </div>
                    </div>

                    <div className='lg:w-4/6 w-full'>
                      <div className='grid grid-cols-1 md:grid-cols-2 gap-3 mb-3'>
                        <div>
                          <label
                            for='fontDescription'
                            className='text-xs text-gray-500 mb-1'
                          >
                            Theme
                          </label>
                          <select
                            id='fontWeight'
                            name='fontWeight'
                            className='w-full text-sm text-gray-700 bg-gray-100 border border-gray-200 rounded-lg px-3 py-2 focus:ring-gray-200'
                            required
                          >
                            <option selected disabled></option>
                            <option value='Fancy'>Fancy</option>
                            <option value='Script'>Script</option>
                            <option value='Techno'>Techno</option>
                            <option value='Gothic'>Gothic</option>
                            <option value='Basic'>Basic</option>
                            <option value='Bitmap'>Bitmap</option>
                            <option value='Holiday'>Holiday</option>
                            <option value='Foreign Look'>Foreign Look</option>
                            <option value='Dingbats'>Dingbats</option>
                            <option value='Symbol'>Symbol</option>
                            <option value='Retro'>Retro</option>
                            <option value='Typewriter'>Typewriter</option>
                          </select>
                        </div>
                        <div>
                          <label
                            for='fontDescription'
                            className='text-xs text-gray-500 mb-1'
                          >
                            Style
                          </label>
                          <select
                            id='fontStyle'
                            name='fontStyle'
                            className='w-full text-sm text-gray-700 bg-gray-100 border border-gray-200 rounded-lg px-3 py-2 focus:ring-gray-200'
                            required
                          >
                            <option selected disabled></option>
                            <option value='Calligraphy'>Calligraphy</option>
                            <option value='School'>School</option>
                            <option value='Handwritten'>Handwritten</option>
                            <option value='Brush'>Brush</option>
                            <option value='Trash'>Trash</option>
                            <option value='Graffiti'>Graffiti</option>
                            <option value='Old School'>Old School</option>
                            <option value='Various'>Various</option>
                          </select>
                        </div>
                        <div className='md:col-span-2'>
                          <label
                            for='fontDescription'
                            className='text-xs text-gray-500 mb-1'
                          >
                            License
                          </label>
                          <select
                            id='fontStyle'
                            name='fontStyle'
                            className='w-full text-sm text-gray-700 bg-gray-100 border border-gray-200 rounded-lg px-3 py-2 focus:ring-gray-200'
                            required
                          >
                            <option selected disabled></option>
                            <option value='free'>100% Free</option>
                            <option value='personal'>
                              Free for Personal Use
                            </option>
                            <option value='commercial'>
                              Free for Commercial Use
                            </option>
                            <option value='donationware'>Donationware</option>
                            <option value='shareware'>Shareware</option>
                            <option value='demo'>Demo</option>
                            <option value='public_domain'>Public Domain</option>
                            <option value='ofl'>Open Font License (OFL)</option>
                            <option value='custom'>Custom License</option>
                          </select>
                        </div>

                        <div className='md:col-span-2'>
                          <label
                            for='fontDescription'
                            className='text-xs text-gray-500 mb-1'
                          >
                            Note of the author
                          </label>
                          <textarea
                            id='fontDescription'
                            name='fontDescription'
                            rows='3'
                            className='w-full min-h-40 text-sm font-light text-gray-700 bg-gray-100 outline-none border border-gray-200 rounded-lg px-3 py-2 focus:ring-gray-200'
                            placeholder='Write a short description about your font...'
                            required
                          ></textarea>
                        </div>
                      </div>

                      <div className='mb-3'>
                        <div className='flex items-start'>
                          <div className='flex items-center h-5 mt-1'>
                            <input
                              id='agreement-checkbox'
                              type='checkbox'
                              className='accent-primary border-gray-300 rounded focus:ring-blue-500'
                              required
                            />
                          </div>
                          <div className='ml-2'>
                            <label
                              for='agreement-checkbox'
                              className='text-xs text-gray-500 mt-1'
                            >
                              By checking this box, you electronically sign this
                              <a className='text-primary' href='/agreement'>
                                {' '} agreement
                              </a>
                            </label>
                          </div>
                        </div>
                      </div>

                      <div className='flex justify-end space-x-3'>
                        <button
                          type='submit'
                          className='sm:w-fit w-full bg-primary text-white text-sm py-2 px-6 rounded-lg transition duration-200 hover:bg-primary/90 flex justify-center items-center'
                        >
                          <i className='fi fi-rr-cloud-upload-alt inline-block translate-y-0.5 mr-1'></i>
                          Upload
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default page;
