import React from 'react'
import '../App.css';
function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-md navbar fixed-top ">
    <div className="container">
      <a className="navbar-brand text-white animate__animated animate__lightSpeedInRight" href="#">Logis</a>
<button
  className="navbar-toggler white"
  type="button"
  data-bs-toggle="collapse"
  data-bs-target="#navbarCollapse"
  aria-controls="navbarCollapse"
  aria-expanded="false"
  aria-label="Toggle navigation"
>
  <span className="navbar-toggler-icon white"></span>
</button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav ms-auto mb-2 mb-md-0">
          <li className="nav-item">
            <a className="nav-link active text-white text-center" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active text-white text-center" href="#">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active text-white text-center" href="#">Services</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active text-white text-center" href="#">Pricing</a>
          </li>

          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle text-white text-center" href="#" role="button" data-bs-toggle="dropdown"
              aria-expanded="false">
              Drop Down
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item text-center" href="#">Drop Down 1</a></li>

              {/* Deep dropdown start */}

              <li className="nav-item dropdown ">
                <a className="nav-link active dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                  aria-expanded="false">
                  Deep Drop Down
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Deep Drop Down 1</a></li>
                  <li><a className="dropdown-item" href="#">Deep Drop Down 2</a></li>
                  <li><a className="dropdown-item" href="#">Deep Drop Down 3</a></li>
                  <li><a className="dropdown-item" href="#">Deep Drop Down 4</a></li>
                  <li><a className="dropdown-item" href="#">Deep Drop Down 5</a></li>
                </ul>
              </li>

               {/* Deep dropdown end  */}

              <li><a className="dropdown-item " href="#">Drop Down 2</a></li>
              <li><a className="dropdown-item " href="#">Drop Down 3</a></li>
              <li><a className="dropdown-item " href="#">Drop Down 4</a></li>
            </ul>
          </li>

          <li className="nav-item">
            <a className="nav-link active text-white text-center" href="#">Contact</a>
          </li>

          <li className="nav-item">
            <a className="nav-link active text-white text-center" href="#">
              <button type="button" className="btn btn-primary">Get a Quote</button>
            </a>
          </li>
        </ul>

      </div>
    </div>
  </nav>
  </>
  )
}

export default Navbar