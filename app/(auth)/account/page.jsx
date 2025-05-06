import Container from "@/app/components/Container";
import { Heart, UserRound, CloudUpload, Bolt } from "lucide-react";

const page = () => {
  return (
    <section class='relative py-4 px-2'>
      <Container>
        <div class='flex flex-col md:flex-row gap-4'>
          <aside class='sm:sticky sm:top-16 fixed left-0 bottom-0 w-full md:w-64 flex-shrink-0 z-20'>
            <div class='bg-white sm:rounded-2xl rounded-none md:shadow-lg md:shadow-gray-100 sm:px-5 md:py-8 sm:py-4 py-0'>
              <h2 class='md:block hidden text-xl font-bold text-gray-700 mb-8'>
                My Account
              </h2>
              <nav class='sm:space-y-3 md:block flex justify-between items-center text-gray-700 text-sm sm:py-0 py-2'>
                <a
                  href='/user'
                  class='flex gap-2 items-center sm:flex-row flex-col px-4 py-2 rounded-lg text-primary duration-300 sm:hover:bg-gray-100'
                >
                  <UserRound />
                  <small class='sm:text-sm text-xs'>Profile</small>
                </a>
                <a
                  href='/user/favorites'
                  class='flex gap-2 items-center sm:flex-row flex-col px-4 py-2 rounded-lg text-gray-600 duration-300 sm:hover:bg-gray-100'
                >
                  <Heart />
                  <small class='sm:text-sm text-xs'>Favorites</small>
                </a>
                <a
                  href='/user/uploads'
                  class='flex gap-2 items-center sm:flex-row flex-col px-4 py-2 rounded-lg text-gray-600 duration-300 sm:hover:bg-gray-100'
                >
                  <CloudUpload />
                  <small class='sm:text-sm text-xs'>Uploads</small>
                </a>
                <a
                  href='/user/settings'
                  class='flex gap-2 items-center sm:flex-row flex-col px-4 py-2 rounded-lg text-gray-600 duration-300 sm:hover:bg-gray-100'
                >
                  <Bolt />
                  <small class='sm:text-sm text-xs'>Settings</small>
                </a>
              </nav>
            </div>
          </aside>

          <div class='flex-1'>
            <div class='bg-white rounded-2xl shadow-lg shadow-gray-100 overflow-hidden'>
              <div class='bg-white sm:px-6 px-3 py-4 border-b border-gray-100'>
                <h2 class='text-xl font-bold text-gray-700'>My Profile</h2>
                <small class='text-gray-500'>
                  Manage your account information
                </small>
              </div>

              <div class='lg:px-32 px-3 sm:py-6 py-3'>
                <form>
                  <div class='mb-8'>
                    <div class='w-full flex justify-center gap-3 my-10'>
                      <div class='flex flex-col justify-center items-center gap-3'>
                        <div class='relative w-36 h-36 rounded-full overflow-hidden group'>
                          <label
                            for='profile'
                            class='absolute top-0 left-0 w-full h-full flex justify-center opacity-0 group-hover:opacity-100 duration-300 items-center bg-primary/75 text-white text-center text-sm py-2 cursor-pointer z-20'
                          >
                            <i class='bi bi-image text-xl'></i>
                          </label>
                          <input
                            type='file'
                            name='profile'
                            id='profile'
                            class='hidden opacity-0'
                          />
                          <img
                            id='profilePreview'
                            class='w-full h-full object-cover z-10'
                            src='../assets/images/static/user_profile.png'
                            alt=''
                          />
                        </div>
                        <div class='my-4 text-center'>
                          <h1 class='text-gray-700 text-3xl font-semibold'>
                            Rosita Rositae
                          </h1>
                          <p class='text-sm text-gray-500 text-center'>
                            <i class='fi fi-rr-envelope inline-block translate-y-0.5'></i>
                            rositae@gmail.com
                          </p>
                        </div>
                      </div>
                    </div>

                    <div class='mb-8'>
                      <h3 class='text-lg font-semibold text-gray-700 mb-4'>
                        Personal Information
                      </h3>
                      <div class='grid grid-cols-1 md:grid-cols-2 sm:gap-6 gap-4'>
                        <div>
                          <label
                            for='username'
                            class='block text-sm text-gray-500 mb-1'
                          >
                            Username
                          </label>
                          <input
                            type='text'
                            id='username'
                            value='rosita'
                            class='w-full text-sm text-gray-700 bg-gray-100 border border-gray-200 outline-none rounded-lg px-3 py-2 duration-300 focus:border-gray-300'
                          />
                        </div>
                        <div>
                          <label
                            for='email'
                            class='block text-sm text-gray-500 mb-1'
                          >
                            Email
                          </label>
                          <input
                            type='email'
                            id='email'
                            value='rositae@gmail.com'
                            class='w-full text-sm text-gray-700 bg-gray-100 border border-gray-200 outline-none rounded-lg px-3 py-2 duration-300 focus:border-gray-300'
                          />
                        </div>
                      </div>
                      <div class='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        <div>
                          <label
                            for='firstName'
                            class='block text-sm text-gray-500 mb-1'
                          >
                            First name
                          </label>
                          <input
                            type='text'
                            id='firstName'
                            value='Rosita'
                            class='w-full text-sm text-gray-700 bg-gray-100 border border-gray-200 outline-none rounded-lg px-3 py-2 duration-300 focus:border-gray-300'
                          />
                        </div>
                        <div>
                          <label
                            for='lastName'
                            class='block text-sm text-gray-500 mb-1'
                          >
                            Last name
                          </label>
                          <input
                            type='text'
                            id='lastName'
                            value='Rositae'
                            class='w-full text-sm text-gray-700 bg-gray-100 border border-gray-200 outline-none rounded-lg px-3 py-2 duration-300 focus:border-gray-300'
                          />
                        </div>
                        <div>
                          <label
                            for='country'
                            class='block text-sm text-gray-500 mb-1'
                          >
                            Country
                          </label>
                          <select
                            id='country'
                            class='w-full text-sm text-gray-700 bg-gray-100 border border-gray-200 outline-none rounded-lg px-3 py-2 duration-300 focus:border-gray-300'
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
                          <label class='block text-sm text-gray-500 mb-1'>
                            Date of Birth
                          </label>
                          <div class='grid grid-cols-3 gap-3'>
                            <select class='w-full text-sm text-gray-700 bg-gray-100 border border-gray-200 outline-none rounded-lg px-3 py-2 duration-300 focus:border-gray-300'>
                              <option>Month</option>
                              <option>January</option>
                              <option>February</option>
                            </select>
                            <select class='w-full text-sm text-gray-700 bg-gray-100 border border-gray-200 outline-none rounded-lg px-3 py-2 duration-300 focus:border-gray-300'>
                              <option>Day</option>
                            </select>
                            <select class='w-full text-sm text-gray-700 bg-gray-100 border border-gray-200 outline-none rounded-lg px-3 py-2 duration-300 focus:border-gray-300'>
                              <option>Year</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div class='mt-4 flex justify-end'>
                        <button
                          type='button'
                          class='sm:w-fit w-full bg-primary text-white py-2.5 px-6 rounded-lg hover:bg-primary/90 transition duration-200 text-sm'
                        >
                          Save
                        </button>
                      </div>
                    </div>

                    <div>
                      <h3 class='text-lg font-semibold text-gray-700 mb-4'>
                        Password
                      </h3>
                      <div class='space-y-4'>
                        <div>
                          <label
                            for='currentPassword'
                            class='block text-sm text-gray-500 mb-1'
                          >
                            Current Password
                          </label>
                          <input
                            type='password'
                            id='currentPassword'
                            class='w-full text-sm text-gray-700 bg-gray-100 border border-gray-200 outline-none rounded-lg px-3 py-2 duration-300 focus:border-gray-300'
                          />
                        </div>
                        <div>
                          <label
                            for='newPassword'
                            class='block text-sm text-gray-500 mb-1'
                          >
                            New Password
                          </label>
                          <input
                            type='password'
                            id='newPassword'
                            class='w-full text-sm text-gray-700 bg-gray-100 border border-gray-200 outline-none rounded-lg px-3 py-2 duration-300 focus:border-gray-300'
                          />
                        </div>
                        <div>
                          <label
                            for='confirmPassword'
                            class='block text-sm text-gray-500 mb-1'
                          >
                            Confirm New Password
                          </label>
                          <input
                            type='password'
                            id='confirmPassword'
                            class='w-full text-sm text-gray-700 bg-gray-100 border border-gray-200 outline-none rounded-lg px-3 py-2 duration-300 focus:border-gray-300'
                          />
                        </div>
                      </div>
                      <div class='mt-4 flex justify-end'>
                        <button
                          type='button'
                          class='sm:w-fit w-full bg-primary text-white py-2.5 px-6 rounded-lg hover:bg-primary/90 transition duration-200 text-sm'
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
