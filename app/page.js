import Image from 'next/image';
import styles from './page.module.css';
import HomeBanner from '@/component/HomePage/HeroBanner';
import HomeCTA from '@/component/HomePage/HomeCTA';
import OurAction from '@/component/HomePage/OurAction';
import OurImpact from '@/component/HomePage/OurImpact';
import Stories from '@/component/HomePage/Stories';
import JoinUs from '@/component/HomePage/JoinUs';
import Header from '@/component/Header';
import Footer from '@/component/Footer';

export default function Home() {
  return (
    <>
       <Header/>
      <HomeBanner/>
      <HomeCTA/>
      <OurAction/>
      <OurImpact/>
      <Stories/>
      <JoinUs/>
      <Footer/>

    </>
  )
}
