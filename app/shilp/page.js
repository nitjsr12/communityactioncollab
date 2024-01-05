
import Header from '@/component/Header'
import React from 'react';
import Banner from './shilp/Banner';
import Footer from '@/component/Footer'
import Aboutshilp from './shilp/Aboutshilp';
import CardWithImage from './shilp/Shilpdetails';

export const metadata = {
  title: 'Empowering community organisations to progress in their pursuit for the last mile',
  description: 'We help community organisations to network, learn and access opportunities through a framework of resources that could help them understand where they are at and advance their goals that could improve the quality of their work for the last mile.',
}

function shilp (){
  return (
    <>
   <Header/>
   <Banner/>
   <Aboutshilp/>
   <CardWithImage/>
   <Footer/>

   </>
  )
}

export default shilp