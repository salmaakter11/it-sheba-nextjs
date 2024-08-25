import React from "react";
import OrderFrom from "../AccountingSoftware/OrderFrom";
const HospitalERP = () => {
    return (
        <>
            <div className="main">

                <section className="feature-tab-section ptb-50">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-12 col-lg-12">
                                <div className="section-heading-color  mb-2">
                                    <h3>
                                        Bangladeshi Hospital Management System Software | HMS Software
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="pt-5">
                            <p>
                                Bangladesh's healthcare sector has seen tremendous expansion and
                                modernization in recent years. The use of hospital management system
                                software is one of the most important components of this change. This
                                software has improved patient care, streamlined numerous procedures,
                                and increased overall efficiency to the point where it has completely
                                changed how hospitals and other healthcare facilities run. We will
                                delve deeply into the world of hospital management system software in
                                Bangladesh in this post, examining its features, advantages, and major
                                competitors.
                            </p>
                            <h3 className="heading-color-it">
                                Hospital Management System Software Requirements
                            </h3>
                            <p>
                                Bangladesh's population growth has led to a rise in the country's need
                                for healthcare services. While addressing their operational and
                                administrative challenges, hospitals and clinics are always working to
                                improve the quality of care they give their patients. Hospital
                                management system software provides a comprehensive solution that
                                optimises multiple facets of healthcare administration by addressing
                                these challenges.
                            </p>
                            <div className="row justify-content-center ">
                                <div>
                                    <img
                                        src="assets/img/it-sheba-img/cardiovascular-heart.jpg"
                                        alt=""
                                        className="img-fluid"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* hospital Management start*/}
                <section className="feature-tab-section ptb-40">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-12  order-xl-first">
                                <h5 className="heading-color-it">Software Features:</h5>
                                <ul style={{ margin: 10 }}>
                                    <li>Centralize patient management</li>
                                    <li>Beginning &amp; loss of life Module</li>
                                    <li>Notifications Module</li>
                                    <li>Print Receipt in every module</li>
                                    <li>Charges, payment &amp; bill in OPD</li>
                                    <li>Recheck up in OPD for Clinics</li>
                                    <li>Prescription in IPD</li>
                                    <li>Buy medicine in Pharmacy</li>
                                    <li>Medicine selection in OPD and IPD prescription</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                {/* hospital Management end*/}
                
               <OrderFrom/>
            </div>


        </>
    )
}
export default HospitalERP