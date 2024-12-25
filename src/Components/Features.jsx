import React from 'react'
 import '../App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
function Features() {
  return (
    <>

<section id="features" className="features section">
      <div className="container section-title" data-aos="fade-up">  
        <h2 className='text-center mt-5'>Features</h2>
      <p className='text-center'>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>
      <div className="container">

        <div className="row gy-4 align-items-center features-item">
          <div className="col-md-5 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="100">
            <img src="public/features-1.jpg" className="img-fluid" alt=""/>
          </div>
          <div className="col-md-7" data-aos="fade-up" data-aos-delay="100">
            <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
            <p className="fst-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
            <ul>
              <li><i className="fa-duotone fa-solid fa-check"></i><span> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></li>
              <li><i className="fa-duotone fa-solid fa-check"></i> <span>Duis aute irure dolor in reprehenderit in voluptate velit.</span></li>
              <li><i className="fa-duotone fa-solid fa-check"></i><span>Ullam est qui quos consequatur eos accusamus.</span></li>
            </ul>
          </div>
        </div>

        <div className="row gy-4 align-items-center features-item">
          <div className="col-md-5 order-1 order-md-2 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="200">
            <img src="public/features-2.jpg" className="img-fluid" alt=""/>
          </div>
          <div className="col-md-7 order-2 order-md-1" data-aos="fade-up" data-aos-delay="200">
            <h3>Corporis temporibus maiores provident</h3>
            <p className="fst-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
            <p>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum
            </p>
          </div>
        </div>

        <div className="row gy-4 align-items-center features-item">
          <div className="col-md-5 d-flex align-items-center" data-aos="zoom-out">
            <img src="public/features-3.jpg" className="img-fluid" alt=""/>
          </div>
          <div className="col-md-7" data-aos="fade-up">
            <h3>Sunt consequatur ad ut est nulla consectetur reiciendis animi voluptas</h3>
            <p>Cupiditate placeat cupiditate placeat est ipsam culpa. Delectus quia minima quod. Sunt saepe odit aut quia voluptatem hic voluptas dolor doloremque.</p>
            <ul>
              <li><i className="fa-duotone fa-solid fa-check"></i><span>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></li>
              <li><i className="fa-duotone fa-solid fa-check"></i><span> Duis aute irure dolor in reprehenderit in voluptate velit.</span></li>
              <li><i className="fa-duotone fa-solid fa-check"></i><span>Facilis ut et voluptatem aperiam. Autem soluta ad fugiat</span>.</li>
            </ul>
          </div>
        </div>

        <div className="row gy-4 align-items-center features-item">
          <div className="col-md-5 order-1 order-md-2 d-flex align-items-center" data-aos="zoom-out">
            <img src="public/features-4.jpg" className="img-fluid" alt=""/>
          </div>
          <div className="col-md-7 order-2 order-md-1" data-aos="fade-up">
            <h3>Quas et necessitatibus eaque impedit ipsum animi consequatur incidunt in</h3>
            <p className="fst-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
            <p>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum
            </p>
          </div>
        </div>

      </div>

    </section>
    </>
  )
}

export default Features