import React from 'react'
import Container from '../Container'
import FontCard from './FontCard'
import Button_primary from '../Buttons/Button_primary'

const Trending = () => {
  return (
    <div className='mt-10 px-3'>
        <Container>
            <h1 className='text-3xl font-bold mb-4'>
                Trending Fonts
            </h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3'>
                <FontCard/>
                <FontCard/>
                <FontCard/>
                <FontCard/>
                <FontCard/>
                <FontCard/>
                <FontCard/>
                <FontCard/>
            </div>
            <div className='mt-10 flex justify-center'>
                <Button_primary>
                    Load More
                </Button_primary>
            </div>
        </Container>
    </div>
  )
}

export default Trending