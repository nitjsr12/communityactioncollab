import Header from '@/component/Header'
import React from 'react'
import Banner from './Shilpcac/Banner'
import Aboutshilp from './Shilpcac/Aboutshilp'
import Shilpdetails from './Shilpcac/Shilpdetails'
import Footer from '@/component/Footer'

export const metadata = {
  title: 'Empowering community organisations to progress in their pursuit for the last mile',
  description: ' We help community organisations to network, learn and access opportunities through a framework of resources that could help them understand where they are at and advance their goals that could improve the quality of their work for the last mile.',
}

function page() {
  return (
    <>
      <Header/>
      <Banner/>
      <Shilpdetails/>
      <Footer/>
      
      
    </>
  )
}

export default page
