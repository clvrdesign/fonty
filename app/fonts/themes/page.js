import React from 'react'
import AdBanner from '../../components/AdBanner'
import Newsletter from '../../components/Newsletter'
import Themes from '@/app/components/themes/Themes'

const page = () => {
  return (
    <>
      <Themes/>
      <AdBanner/>
      <Newsletter/>
    </>
  )
}

export default page