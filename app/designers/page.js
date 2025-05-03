import React from 'react'
import Hero from '../components/Hero'
import Designers from '../components/designers/Designers'
import AdBanner from '../components/AdBanner'
import Newsletter from '../components/Newsletter'

const page = () => {
  return (
    <>
      <Hero/>
      <Designers/>
      <AdBanner/>
      <Newsletter/>
    </>
  )
}

export default page