import React from 'react'
import '../App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
function Pricing() {
  return (
  <>
  
   <section id="pricing" className="pricing section">
<div className="container section-title mt-5" data-aos="fade-up">
  <h2 className='text-center'>Pricing</h2>
  <p className='text-center'>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
</div>

<div className="container">

  <div className="row gy-4">

    <div className="col-lg-4" data-aos="zoom-in" data-aos-delay="100">
      <div className="pricing-item">
        <h3>Free Plan</h3>
        <h4><sup>$</sup>0<span style ={{color:"color-mix(in srgb, black, transparent 60%)"}}> / month</span></h4>
        <ul>
          <li><i className="fa-duotone fa-solid fa-check"></i> <span>Quam adipiscing vitae proin</span></li>
          <li><i className="fa-duotone fa-solid fa-check"></i><span>Nec feugiat nisl pretium</span></li>
<li><i className="fa-duotone fa-solid fa-check"></i> <span>Nulla at volutpat diam uteera</span></li>
          <li className="na"><i class="fa-duotone fa-solid fa-x"></i> <span>Pharetra massa massa ultricies</span></li>
          <li className="na"><i class="fa-duotone fa-solid fa-x"></i><span>Massa ultricies mi quis hendrerit</span></li>
        </ul>
        <p className="buy-btn">Buy Now</p>
      </div>
    </div>

    <div className="col-lg-4" data-aos="zoom-in" data-aos-delay="200">
      <div className="pricing-item featured">
        <h3>Business Plan</h3>
        <h4><sup>$</sup>29<span style ={{color:"color-mix(in srgb, black, transparent 60%)"}}> / month</span></h4>
        <ul>
          <li><i className="fa-duotone fa-solid fa-check"></i> <span>Quam adipiscing vitae proin</span></li>
          <li><i className="fa-duotone fa-solid fa-check"></i> <span>Nec feugiat nisl pretium</span></li>
          <li><i className="fa-duotone fa-solid fa-check"></i> <span>Nulla at volutpat diam uteera</span></li>
          <li><i className="fa-duotone fa-solid fa-check"></i> <span>Pharetra massa massa ultricies</span></li>
          <li><i className="fa-duotone fa-solid fa-check"></i><span>Massa ultricies mi quis hendrerit</span></li>
        </ul>
        <p className="buy-btn">Buy Now</p>
      </div>
    </div>

    <div className="col-lg-4" data-aos="zoom-in" data-aos-delay="300">
      <div className="pricing-item">
        <h3>Developer Plan</h3>
        <h4><sup>$</sup>49<span style ={{color:"color-mix(in srgb, black, transparent 60%)"}}> / month</span></h4>
        <ul>
          <li><i className="fa-duotone fa-solid fa-check"></i> <span>Quam adipiscing vitae proin</span></li>
          <li><i className="fa-duotone fa-solid fa-check"></i> <span>Nec feugiat nisl pretium</span></li>
          <li><i className="fa-duotone fa-solid fa-check"></i><span>Nulla at volutpat diam uteera</span></li>
          <li><i className="fa-duotone fa-solid fa-check"></i><span>Pharetra massa massa ultricies</span></li>
          <li><i className="fa-duotone fa-solid fa-check"></i> <span>Massa ultricies mi quis hendrerit</span></li>
        </ul>
        <p className="buy-btn">Buy Now</p>
      </div>
    </div>

  </div>

</div>

</section>
  
  
  
  
  </>
  )
}

export default Pricing