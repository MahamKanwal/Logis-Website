import React from 'react'
import Navbar from './Components/Navbar'
import HeroSection from './Components/HeroSection '
import FeatureSection from './Components/FeatureSection'
import About from './About'
import Services from './Services'
import CallToAction from './CallToAction'
// import Features from './Features'
function App() {
  
  return (
   <>
   <Navbar/>
   <HeroSection/>
   <FeatureSection/>
  <About/>
  <Services/>
<CallToAction/>
{/* <Features/> */}
   </>  
  )
}

export default App


