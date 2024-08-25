import React from 'react'
import HomeSlider from './HomeSlider'
import WhoWeAre from './WhoWeAre'
import Services from './Services'
import ClientRequirements from './ClientRequirements'
import FAQSection from './FAQSection'
import WorkPortfolio from './WorkPortfolio'
import Client from './Client'
const Home = () => {
  return (
    <>
      <HomeSlider/>
      <Client/>
       <WhoWeAre/>
       <Services/>
       <ClientRequirements/>
       <FAQSection/>
       <WorkPortfolio/>
    </>
  )
}

export default Home
