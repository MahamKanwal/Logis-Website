import React from 'react'
import Navbar from './Components/Navbar'
import HeroSection from './Components/HeroSection '
import FeatureSection from './Components/FeatureSection'
import About from './Components/About'
import Services from './Components/Services'
import CallToAction from './Components/CallToAction'
import Features from './Components/Features'
import Greet from './Components/Greet'
function App() {
  

// Services section work
const servicesData = [
  {
    image: "src/assets/storage-service.jpg",
    title: "STORAGE",
    description: "Cumque eos in qui numquam. Aut aspernatur perferendis sed atque quia voluptas quisquam repellendus temporibus itaque officiis odit"
  },
  {
    image: "src/assets/logistics-service.jpg",
    title: "LOGISTICS",
    description: "Asperiores provident dolor accusamus pariatur dolore nam id audantium ut et iure incidunt molestiae dolor ipsam ducimus occaecati nisi"
  },
  {
    image: "src/assets/cargo-service.jpg",
    title: "CARGO",
    description: "Dicta quam similique quia architecto eos nisi aut ratione aut ipsum reiciendis sit doloremque oluptatem aut et molestiae ut et nihil"
  },
  {
    image: "src/assets/trucking-service.jpg",
    title: "TRUCKING",
    description: "Dicta quam similique quia architecto eos nisi aut ratione aut ipsum reiciendis sit doloremque oluptatem aut et molestiae ut et nihil"
  },
  {
    image: "src/assets/packaging-service.jpg",
    title: "PACKAGING",
    description: "Illo consequuntur quisquam delectus praesentium modi dignissimos facere vel cum onsequuntur maiores beatae consequatur magni voluptates"
  },
  {
    image: "src/assets/warehousing-service.jpg",
    title: "WAREHOUSING",
    description: "Quas assumenda non occaecati molestiae. In aut earum sed natus eatae in vero. Ab modi quisquam aut nostrum unde et qui est non quo nulla"
  }
];
// Services section work

// Feature section work
const featureData = [
  {
      icon: "fa-solid fa-cart-flatbed",
      iconColor: "#001F8D",
      iconBgColor: "white",
      iconSize: "48px",
      title: "Lorem Ipsum",
      description: "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
      linkText: "Learn More",
  },
  {
      icon: "fa-solid fa-truck",
      iconColor: "#001F8D",
      iconBgColor: "white",
      iconSize: "48px",
      title: "Dolor Sitema",
      description: "Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata.",
      linkText: "Learn More",
  },
  {
      icon: "fa-solid fa-truck-ramp-box",
      iconColor: "#001F8D",
      iconBgColor: "white",
      iconSize: "48px",
      title: "Sed ut perspiciatis",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      linkText: "Learn More",
  },
];
// Feature section work


  return (
   <>
   <Navbar/>
    <HeroSection/>

    {/* FeatureSection */}
    <>
            <FeatureSection features={featureData} />
        </>
   {/* FeatureSection */}

  <About/>
  
  {/* services */}
  <div className="App">
      <Services servicesData={servicesData} />
    </div>
  {/* services */}

<CallToAction/> 
<Features/> 

{/* Props
<Greet name="Maham" course="Web And App"/>
<Greet name="Kanwal" course="Graphic Designing"/>
<Greet name="Manahil" course="Artificial Intelligence"/>
<Greet name="Nazia" course="English Language"/>
Props */}
<Greet/>

   </>  
  )
}

export default App


