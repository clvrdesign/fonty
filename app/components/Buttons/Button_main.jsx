import React from 'react'

const Button = ({children}) => {
  return (
    <button type='button' className='bg-white w-fit flex items-center gap-1 py-3 px-8 rounded-full text-sm duration-300 hover:bg-gray-700 hover:text-white text-primary font-semibold'>
        {children}
    </button>
  )
}

export default Button