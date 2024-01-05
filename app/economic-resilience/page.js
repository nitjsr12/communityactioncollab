import React from 'react';
import Header from '@/component/Header'
import Banner from './EconomicResilience/Banner';
import Economic from './EconomicResilience/Economic';
import Footer from '@/component/Footer';
import FrameworkAccordion from './EconomicResilience/FrameworkAccordion';
import PartnersAnchoring from './EconomicResilience/PartnersAnchoring';



export const metadata = {
    title: 'Empowering communities through economic resilience',
    description: 'The Economic Resilience Impact Canvas builds the resilience of vulnerable populations by enabling them to withstand any humanitarian crisis',
  }

function Economic_Resilience() {
  return (

        <>
        <Header/>
        <Banner/>
        <Economic/>
        <FrameworkAccordion/>
        <PartnersAnchoring/>
        <Footer/>
    
        </>
  )
}

export default  Economic_Resilience
