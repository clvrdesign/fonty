import React from 'react'

const Button = ({children}) => {
  return (
    <button type='button' className='bg-primary w-fit flex items-center gap-1 py-2 px-6 rounded-full text-sm duration-300 hover:bg-primary text-white hover:font-semibold'>
        {children}
    </button>
  )
}

export default Button