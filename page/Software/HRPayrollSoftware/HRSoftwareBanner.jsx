import React from "react";
const HRSoftwareBanner =() =>{
    return(
        <>
         <section
                    className="hero-section-height pt-165 pb-100 gradient-overlay"
                    style={{
                        background: 'url("assets/img/hero-11.jpg")no-repeat center center / cover'
                    }}
                >
                    <div className="container">
                        <div className="row align-items-center justify-content-between">
                            <div className="col-lg-6 col-12">
                                <div className="hero-content-wrap text-white">
                                    <h3 className="text-white">
                                        Best HR Software in Bangladesh | Top Payroll Software in
                                        Bangladesh
                                    </h3>
                                    <p className="lead">
                                        Since we have spent the last 4 years developing HR payroll
                                        software in Bangladesh.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-12">
                                <div className="">
                                    <img
                                        src="assets/img/it-sheba-img/hr-banner-img.png"
                                        alt="wp-hosting"
                                        className="img-fluid"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        </>
    )
}
export default HRSoftwareBanner;