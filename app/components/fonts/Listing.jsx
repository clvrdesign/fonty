import React from 'react'
import Container from '../Container'
import FontCard from './FontCard'
import Button_primary from '../Buttons/Button_primary'
import Filters from './Filters'

const Listing = () => {
  return (
    <div className='px-3'>
        <Container>
            <Filters/>
            <h1 className='text-4xl font-bold my-10 text-center'>
                Fonts listing
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

export default Listing