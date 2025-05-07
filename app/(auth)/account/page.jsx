import Container from "@/app/components/Container";
import Aside from "@/app/components/account/Aside";
import Image from "next/image";
import userProfile from "@/public/user-a-solid.svg"

const page = () => {
  return (
    <section className='relative py-4 px-2'>
      <Container>
        <div className='flex flex-col md:flex-row gap-4'>
         <Aside/>

          <div className='flex-1'>
            <div className='bg-white rounded-2xl shadow-lg shadow-gray-100 overflow-hidden'>
              <div className='bg-white sm:px-6 px-3 py-4 border-b border-gray-100'>
                <h2 className='text-xl font-bold text-gray-700'>My Profile</h2>
                <small className='text-gray-500'>
                  Manage your account information
                </small>
              </div>

              <div className='lg:px-32 px-3 sm:py-6 py-3'>
                <form>
                  <div className='mb-8'>
                    <div className='w-full flex justify-center gap-3 my-10'>
                      <div className='flex flex-col justify-center items-center gap-3'>
                        <div className='relative w-36 h-36 rounded-full overflow-hidden group'>
                          <label
                            htmlFor='profile'
                            className='absolute top-0 left-0 w-full h-full flex justify-center opacity-0 group-hover:opacity-100 duration-300 items-center bg-primary/75 text-white text-center text-sm py-2 cursor-pointer z-20'
                          >
                            <i className='bi bi-image text-xl'></i>
                          </label>
                          <input
                            type='file'
                            name='profile'
                            id='profile'
                            className='hidden opacity-0'
                          />
                          <Image
                            id='profilePreview'
                            className='w-full h-full object-cover z-10'
                            width={144}
                            height={144}
                            src={userProfile}
                            alt='user image'
                          />
                        </div>
                        <div className='my-4 text-center'>
                          <h1 className='text-gray-700 text-3xl font-semibold'>
                            Rosita Rositae
                          </h1>
                          <p className='text-sm text-gray-500 text-center'>
                            <i className='fi fi-rr-envelope inline-block translate-y-0.5'></i>
                            rositae@gmail.com
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className='mb-8'>
                      <h3 className='text-lg font-semibold text-gray-700 mb-4'>
                        Personal Information
                      </h3>
                      <div className='grid grid-cols-1 md:grid-cols-2 sm:gap-6 gap-4 mb-6'>
                        <div>
                          <label
                            htmlFor='username'
                            className='block text-sm text-gray-500 mb-1'
                          >
                            Username
                          </label>
                          <input
                            type='text'
                            id='username'
                            value='rosita'
                            className='w-full text-sm text-gray-700 bg-gray-100 border border-gray-200 outline-none rounded-lg px-3 py-2 duration-300 focus:border-gray-300'
                          />
                        </div>
                        <div>
                          <label
                            htmlFor='email'
                            className='block text-sm text-gray-500 mb-1'
                          >
                            Email
                          </label>
                          <input
                            type='email'
                            id='email'
                            value='rositae@gmail.com'
                            className='w-full text-sm text-gray-700 bg-gray-100 border border-gray-200 outline-none rounded-lg px-3 py-2 duration-300 focus:border-gray-300'
                          />
                        </div>
                      </div>
                      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        <div>
                          <label
                            htmlFor='firstName'
                            className='block text-sm text-gray-500 mb-1'
                          >
                            First name
                          </label>
                          <input
                            type='text'
                            id='firstName'
                            value='Rosita'
                            className='w-full text-sm text-gray-700 bg-gray-100 border border-gray-200 outline-none rounded-lg px-3 py-2 duration-300 focus:border-gray-300'
                          />
                        </div>
                        <div>
                          <label
                            htmlFor='lastName'
                            className='block text-sm text-gray-500 mb-1'
                          >
                            Last name
                          </label>
                          <input
                            type='text'
                            id='lastName'
                            value='Rositae'
                            className='w-full text-sm text-gray-700 bg-gray-100 border border-gray-200 outline-none rounded-lg px-3 py-2 duration-300 focus:border-gray-300'
                          />
                        </div>
                        <div>
                          <label
                            htmlFor='country'
                            className='block text-sm text-gray-500 mb-1'
                          >
                            Country
                          </label>
                          <select
                            id='country'
                            className='w-full text-sm text-gray-700 bg-gray-100 border border-gray-200 outline-none rounded-lg px-3 py-2 duration-300 focus:border-gray-300'
                          >
                            <option value='Burundi' selected>
                              Burundi
                            </option>
                            <option value='United States'>United States</option>
                            <option value='Canada'>Canada</option>
                            <option value='France'>France</option>
                            <option value='Other'>Other</option>
                          </select>
                        </div>
                        <div>
                          <label className='block text-sm text-gray-500 mb-1'>
                            Date of Birth
                          </label>
                          <div className='grid grid-cols-3 gap-3'>
                            <select className='w-full text-sm text-gray-700 bg-gray-100 border border-gray-200 outline-none rounded-lg px-3 py-2 duration-300 focus:border-gray-300'>
                              <option>Month</option>
                              <option>January</option>
                              <option>February</option>
                            </select>
                            <select className='w-full text-sm text-gray-700 bg-gray-100 border border-gray-200 outline-none rounded-lg px-3 py-2 duration-300 focus:border-gray-300'>
                              <option>Day</option>
                            </select>
                            <select className='w-full text-sm text-gray-700 bg-gray-100 border border-gray-200 outline-none rounded-lg px-3 py-2 duration-300 focus:border-gray-300'>
                              <option>Year</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className='mt-4 flex justify-end'>
                        <button
                          type='button'
                          className='sm:w-fit w-full bg-primary text-white py-2.5 px-6 rounded-lg hover:bg-primary/90 transition duration-200 text-sm'
                        >
                          Save
                        </button>
                      </div>
                    </div>

                    <div>
                      <h3 className='text-lg font-semibold text-gray-700 mb-4'>
                        Password
                      </h3>
                      <div className='space-y-4'>
                        <div>
                          <label
                            htmlFor='currentPassword'
                            className='block text-sm text-gray-500 mb-1'
                          >
                            Current Password
                          </label>
                          <input
                            type='password'
                            id='currentPassword'
                            className='w-full text-sm text-gray-700 bg-gray-100 border border-gray-200 outline-none rounded-lg px-3 py-2 duration-300 focus:border-gray-300'
                          />
                        </div>
                        <div>
                          <label
                            htmlFor='newPassword'
                            className='block text-sm text-gray-500 mb-1'
                          >
                            New Password
                          </label>
                          <input
                            type='password'
                            id='newPassword'
                            className='w-full text-sm text-gray-700 bg-gray-100 border border-gray-200 outline-none rounded-lg px-3 py-2 duration-300 focus:border-gray-300'
                          />
                        </div>
                        <div>
                          <label
                            htmlFor='confirmPassword'
                            className='block text-sm text-gray-500 mb-1'
                          >
                            Confirm New Password
                          </label>
                          <input
                            type='password'
                            id='confirmPassword'
                            className='w-full text-sm text-gray-700 bg-gray-100 border border-gray-200 outline-none rounded-lg px-3 py-2 duration-300 focus:border-gray-300'
                          />
                        </div>
                      </div>
                      <div className='mt-4 flex justify-end'>
                        <button
                          type='button'
                          className='sm:w-fit w-full bg-primary text-white py-2.5 px-6 rounded-lg hover:bg-primary/90 transition duration-200 text-sm'
                        >
                          Change Password
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
