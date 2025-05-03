import React from 'react'

const Button_primary = ({children}) => {
  return (
    <button type='button' className='bg-green-600 w-fit flex items-center gap-1 py-2 px-4 rounded-lg text-sm duration-300 hover:bg-green-700 text-white font-semibold'>
        {children}
    </button>
  )
}

export default Button_primary