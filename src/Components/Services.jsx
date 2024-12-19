// import React from 'react'
// // import '../App.css';
// function Services() {
//   return (
//     <>
//      <section className="services pt-5 pb-5">
//     <div className="section-header text-center position-relative pt-0">
//     <h2 className="about" style={{fontSize: "35px;"}}>OUR SERVICES</h2>
//     </div>

//     <div className="container text-center">
//       <div className="row gy-5">

//         <div className="col-12 col-xl-4 col-md-6">
//           <div className="card">
//             <img src="src/assets/storage-service.jpg" className="card-img-top img-fluid"/> 
//             <div className="card-body">
//               <h5 className="card-title about">STORAGE</h5>
//               <p className="card-text text-dark">Cumque eos in qui numquam. Aut aspernatur perferendis sed atque quia
//                 voluptas
//                 quisquam repellendus temporibus itaqueofficiis odit</p>
//             </div>
//           </div>
//         </div>

//         <div className="col-12 col-xl-4 col-md-6">
//           <div className="card">
//             <img src="src/assets/logistics-service.jpg" className="card-img-top img-fluid"/>
//             <div className="card-body">
//               <h5 className="card-title about">LOGISTICS</h5>
//               <p className="card-text text-dark">Asperiores provident dolor accusamus pariatur dolore nam id audantium
//                 ut et iure
//                 incidunt molestiae dolor ipsam ducimus occaecati nisi</p>
//             </div>
//           </div>
//         </div>

//         <div className="col-12 col-xl-4 col-md-6">
//           <div className="card">
//             <img src="src/assets/cargo-service.jpg" className="card-img-top img-fluid"/>
//             <div className="card-body">
//               <h5 className="card-title about">CARGO</h5>
//               <p className="card-text text-dark">Dicta quam similique quia architecto eos nisi aut ratione aut ipsum
//                 reiciendis
//                 sit doloremque oluptatem aut et molestiae ut et nihil</p>
//             </div>
//           </div>
//         </div>

//         <div className="col-12 col-xl-4 col-md-6">
//           <div className="card">
//             <img src="src/assets/trucking-service.jpg" className="card-img-top img-fluid"/>
//             <div className="card-body">
//               <h5 className="card-title about">TRUCKING</h5>
//               <p className="card-text text-dark">Dicta quam similique quia architecto eos nisi aut ratione aut ipsum
//                 reiciendis
//                 sit doloremque oluptatem aut et molestiae ut et nihil</p>
//             </div>
//           </div>
//         </div>

//         <div className="col-12 col-xl-4 col-md-6">
//           <div className="card">
//             <img src="src/assets/packaging-service.jpg" className="card-img-top img-fluid"/>
//             <div className="card-body">
//               <h5 className="card-title about">PACKAGING</h5>
//               <p className="card-text text-dark">Illo consequuntur quisquam delectus praesentium modi dignissimos facere
//                 vel cum
//                 onsequuntur maiores beatae consequatur magni voluptates</p>
//             </div>
//           </div>
//         </div>

//         <div className="col-12 col-xl-4 col-md-6">
//           <div className="card">
//             <img src="src/assets/warehousing-service.jpg" className="card-img-top img-fluid"/>
//             <div className="card-body">
//               <h5 className="card-title about">WAREHOUSEING</h5>
//               <p className="card-text text-dark">Quas assumenda non occaecati molestiae. In aut earum sed natus eatae in
//                 vero. Ab
//                 modi quisquam aut nostrum unde et qui est non quo nulla</p>
//             </div>
//           </div>
//         </div>

//       </div>
//     </div>
//   </section>
// </>
//   )
// }

// export default Services

import React from 'react';

function Services({ servicesData }) {
  return (
    <section className="services pt-5 pb-5">
      <div className="section-header text-center position-relative pt-0">
        <h2 className="about" style={{ fontSize: "35px" }}>OUR SERVICES</h2>
      </div>

      <div className="container text-center">
        <div className="row gy-5">
          {servicesData.map((service, index) => (
            <div key={index} className="col-12 col-xl-4 col-md-6">
              <div className="card">
                <img src={service.image} alt={service.title} className="card-img-top img-fluid" />
                <div className="card-body">
                  <h5 className="card-title about">{service.title}</h5>
                  <p className="card-text text-dark">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
