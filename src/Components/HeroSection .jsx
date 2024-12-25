import React from 'react';
import '../App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
function HeroSection() {
  return (
    <>
      <div style={{ backgroundColor: "#023B6D" }}>
        <div className="container-fluid col-xxl-10 px-4 py-5">
          <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="col-12 col-sm-12 col-lg-6">
              <img
                src="./src/assets/men.svg"
                className="d-block mx-lg-auto img-fluid"
                alt="Bootstrap Themes"
                width="700"
                height="500"
                loading="lazy"
              />
            </div>
            <div className="col-lg-6">
              <h1 className="display-5 fw-bold lh-1 mb-3 text-white">
                Your Lightning Fast Delivery Partner
              </h1>
              <p className="lead text-white">
                Facere distinctio molestiae nisi fugit tenetur repellat non
                praesentium nesciunt optio quis sit odio nemo quisquam. eius quos
                reiciendis eum vel eum voluptatem eum maiores eaque id optio ullam
                occaecati odio est possimus vel reprehenderit
              </p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start d-lg-none">
                <div className="input-group mb-3 bg-light" style={{ padding: "8px", borderRadius: "10px" }}>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="ZIP Code or CitY"
                    aria-label="ZIP Code or CitY"
                    aria-describedby="button-addon2"
                  />
                  <button
                    className="btn btn-primary fw-bold"
                    type="button"
                    id="button-addon2"
                    style={{ padding: "8px", borderRadius: "10px" }}
                  >
                    Search
                  </button>
                </div>
              </div>

              <div className="d-grid gap-2 d-lg-flex justify-content-lg-start d-none d-lg-block" style={{ width: "550px" }}>
                <div className="input-group mb-3 bg-light" style={{ padding: "8px", borderRadius: "10px" }}>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="ZIP Code or CitY"
                    aria-label="ZIP Code or CitY"
                    aria-describedby="button-addon2"
                  />
                  <button
                    className="btn btn-primary fw-bold"
                    type="button"
                    id="button-addon2"
                    style={{ padding: "8px", borderRadius: "10px" }}
                  >
                    Search
                  </button>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-3 col-6 d-flex num">
                  <div className="text-center w-100 h-100">
                    <p className="text-white">232</p>
                    <i className="fa-solid fa-minus" style={{ color: "blue" }}></i>
                    <p className="text-white word">Clients</p>
                  </div>
                </div>
                <div className="col-lg-3 col-6 d-flex num">
                  <div className="text-center w-100 h-100">
                    <p className="text-white num">521</p>
                    <i className="fa-solid fa-minus" style={{ color: "blue" }}></i>
                    <p className="text-white word">Projects</p>
                  </div>
                </div>
                <div className="col-lg-3 col-6 d-flex num">
                  <div className="text-center w-100 h-100">
                    <p className="text-white num">1453</p>
                    <i className="fa-solid fa-minus" style={{ color: "blue" }}></i>
                    <p className="text-white word">Support</p>
                  </div>
                </div>
                <div className="col-lg-3 col-6 d-flex num">
                  <div className="text-center w-100 h-100">
                    <p className="text-white num">32</p>
                    <i className="fa-solid fa-minus" style={{ color: "blue" }}></i>
                    <p className="text-white word">Workers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
