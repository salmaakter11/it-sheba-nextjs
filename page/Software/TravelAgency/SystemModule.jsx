import React from "react";
const SystemModule = () => {
    return (
        <>
            <section className="feature-tab-section ptb-40">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-9 col-lg-8">
                            <div className="section-heading text-center mb-5 mb-sm-5 mb-md-3 mb-lg-3">
                                <h3>Travel Agency Management System Module</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-7 col-lg-9 col-12  order-xl-first">
                            <h5>
                                Our Travel Agency Management System's Invoice and Billing Management{" "}
                            </h5>
                            <ul style={{ margin: 10 }}>
                                <li>Create invoices for clients</li>
                                <li>All invoice list</li>
                                <li>Fare calculation system</li>
                                <li>Reissue ticket’s invoice</li>
                                <li>Print option for all invoice</li>
                                <li>Discount option during sales</li>
                                <li>Note/comment write option in invoice</li>
                            </ul>
                        </div>
                        <div className="col-xl-5 col-lg-3 col-12  order-lg-last align-self-center">
                            <div className="image-box fadein text-xl-right text-center">
                                <img
                                    src="assets/img/partners/about.png"
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
export default SystemModule;