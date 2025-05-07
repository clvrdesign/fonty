import React from 'react'
import { Heart, UserRound, CloudUpload, Bolt } from "lucide-react";

const Aside = () => {
  return (
     <aside className='sm:sticky sm:top-16 fixed left-0 bottom-0 w-full md:w-64 flex-shrink-0 z-20'>
                <div className='bg-white sm:rounded-2xl rounded-none md:shadow-lg md:shadow-gray-100 sm:px-5 md:py-8 sm:py-4 py-0'>
                  <h2 className='md:block hidden text-xl font-bold text-gray-700 mb-8'>
                    My Account
                  </h2>
                  <nav className='sm:space-y-3 md:block flex justify-between items-center text-gray-700 text-sm sm:py-0 py-2'>
                    <a
                      href='/account'
                      className='flex gap-2 items-center sm:flex-row flex-col px-4 py-2 rounded-lg text-primary duration-300 sm:hover:bg-gray-100'
                    >
                      <UserRound />
                      <small className='sm:text-sm text-xs'>Profile</small>
                    </a>
                    <a
                      href='/account/favorites'
                      className='flex gap-2 items-center sm:flex-row flex-col px-4 py-2 rounded-lg text-gray-600 duration-300 sm:hover:bg-gray-100'
                    >
                      <Heart />
                      <small className='sm:text-sm text-xs'>Favorites</small>
                    </a>
                    <a
                      href='/account/uploads'
                      className='flex gap-2 items-center sm:flex-row flex-col px-4 py-2 rounded-lg text-gray-600 duration-300 sm:hover:bg-gray-100'
                    >
                      <CloudUpload />
                      <small className='sm:text-sm text-xs'>Uploads</small>
                    </a>
                    <a
                      href='/account/settings'
                      className='flex gap-2 items-center sm:flex-row flex-col px-4 py-2 rounded-lg text-gray-600 duration-300 sm:hover:bg-gray-100'
                    >
                      <Bolt />
                      <small className='sm:text-sm text-xs'>Settings</small>
                    </a>
                  </nav>
                </div>
              </aside>
  )
}

export default Aside