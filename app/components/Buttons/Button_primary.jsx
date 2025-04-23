import React from 'react'

const Button_primary = ({children}) => {
  return (
    <button type='button' className='bg-primary w-fit flex items-center gap-1 py-2 px-4 rounded-lg text-sm duration-300 hover:bg-primary text-white hover:font-semibold'>
        {children}
    </button>
  )
}

export default Button_primary