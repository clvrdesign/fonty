import React from 'react'

const Button_primary = ({children}) => {
  return (
    <button type='button' className='bg-primary w-fit flex items-center gap-1 py-3 px-6 rounded-lg text-sm duration-300 hover:bg-gray-700 text-white font-semibold'>
        {children}
    </button>
  )
}

export default Button_primary