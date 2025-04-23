import React from 'react'

const Container = ({children}) => {
  return (
    <div className='w-full max-w-[1400px] m-auto'>
        {children}
    </div>
  )
}

export default Container