import React from 'react';
// import '../App.css';
function About() {
  return (
    <> 
      <div className="container-fluid px-4">
        <div className="row align-items-center g-5 d-flex">
          <div className="col-lg-6 flex-column-reverse">
            <h1 className="display-5 fw-bold lh-1 mb-3" style={{ color: "#001F8D" }}>
              About Us
            </h1>
            <p className="text-dark">
              Dolor iure expedita id fuga asperiores qui sunt consequatur minima. Quidem voluptas deleniti. Sit quia molestiae quia quas qui magnam
              itaque veritatis dolores. Corrupti totam ut eius incidunt reiciendis veritatis asperiores placeat.
            </p>
            <ul className="no-padding">
              <li data-aos="fade-up" data-aos-delay="100" className="aos-init aos-animate" style={{ listStyle: "none" }}>
                <img src="/diagram-3-fill.svg" className="fill" alt="Diagram Icon" />
                <div>
                  <h5 className="about">Ullamco laboris nisi ut aliquip consequat</h5>
                  <p className="text-dark">
                    Magni facilis facilis repellendus cum excepturi quaerat praesentium libre trade
                  </p>
                </div>
              </li>
              <li data-aos="fade-up" data-aos-delay="200" className="aos-init aos-animate" style={{ listStyle: "none" }}>
                <img src="/fullscreen.png" className="fill" alt="Fullscreen Icon" />
                <div>
                  <h5 className="about">Magnam soluta odio exercitationem reprehenderi</h5>
                  <p className="text-dark">
                    Quo totam dolorum at pariatur aut distinctio dolorum laudantium illo direna pasata redi
                  </p>
                </div>
              </li>
              <li data-aos="fade-up" data-aos-delay="300" className="aos-init aos-animate" style={{ listStyle: "none" }}>
                <img src="/broadcast.png" className="fill" alt="Broadcast Icon" />
                <div>
                  <h5 className="about">Voluptatem et qui exercitationem</h5>
                  <p className="text-dark">
                    Et velit et eos maiores est tempora et quos dolorem autem tempora incidunt maxime veniam
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="col-12 col-sm-12 col-lg-6 position-relative align-self-start order-lg-last order-first">
            <img
              src="/mans.jpg"
              className="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width="700"
              height="500"
              loading="lazy"
            />
            <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" className="glightbox play-btn"></a>
          </div>
        </div>
      </div>

  </> 

  );
}

export default About;
