import React from 'react'
import '../App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
function FeatureSection() {
    return (
        <>
            <div style={{ backgroundColor: "white" }}>
                <div className="container px-4 py-5" id="hanging-icons">
                    <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">

                        <div className="col col-md-6 d-flex align-items-start">
                            <div
                                className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                                <i className="fa-solid fa-cart-flatbed" style={{ color: "#001F8D", backgroundColor: "white", fontSize: "48px" }}></i>
                            </div>
                            <div>
                                <h3 className="fs-4 text-body-emphasis">Lorem Ipsum</h3>
                                <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate
                                    non provident</p>
                                <div>
                                    <span className="text-body-emphasis fw-bold">Learn More</span>
                                    <i className="fa-solid fa-arrow-right-long"></i>
                                </div>
                            </div>
                        </div>

                        <div className="col col-md-6 d-flex align-items-start">
                            <div
                                className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                                <i className="fa-solid fa-truck" style={{ color: "#001F8D", backgroundColor: "white", fontSize: "48px" }}></i>
                            </div>
                            <div>
                                <h3 className="fs-4 text-body-emphasis">Dolor Sitema</h3>
                                <p>Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad
                                    limino ata</p>
                                <div>
                                    <span className="text-body-emphasis fw-bold">Learn More</span>
                                    <i className="fa-solid fa-arrow-right-long"></i>
                                </div>
                            </div>
                        </div>

                        <div className="col col-md-6 d-flex align-items-start">
                            <div
                                className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                                <i className="fa-solid fa-truck-ramp-box" style={{ color: "#001F8D", backgroundColor: "white", fontSize: "48px" }}></i>

                            </div>
                            <div>
                                <h3 className="fs-4 text-body-emphasis">Sed ut perspiciatis</h3>
                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
                                </p>
                                <div>
                                    <span className="text-body-emphasis fw-bold">Learn More</span>
                                    <i className="fa-solid fa-arrow-right-long"></i>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default FeatureSection