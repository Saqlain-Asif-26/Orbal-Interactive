import React from 'react'
import HeroSection from './Components/HeroSection'
import SupportSection from './Components/SupportSection'
import DeliverSection from './Components/DeliverSection'
import DifferenceSection from './Components/DifferenceSection'
import PurposeSection from './Components/PurposeSection'
import Footer from './Components/Footer'

function App() {
  return (
    <div className='bg-[#131321] text-white h-full cursor-default'>
      <HeroSection />
      <SupportSection />
      <DeliverSection />
      <DifferenceSection />
      <PurposeSection />
      <Footer />
    </div>
  )
}

export default App