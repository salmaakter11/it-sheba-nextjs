import React from 'react';

const EmailMarketingDatabase = () => {
    return (
        <>
           <section className="feature-tab-section ">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-9 col-lg-8">
                                <div className="section-heading-color text-center mb-5 mb-sm-5 mb-md-3 mb-lg-3">
                                    <h3>Email Marketing Database</h3>
                                </div>
                            </div>
                        </div>
                        {/* Covered Area */}
                        <div className="row">
                            <div className=" col-lg-8 col-md-6 col-sm-12  ">
                                <div>
                                    <h5 className="heading-color">Corporate Database: 5,50,000</h5>
                                    <h6>Covered Area: </h6>
                                    <ul style={{ margin: 10 }}>
                                        <li>
                                            Corporate employer, CTO, CEO, Managing director, Club
                                            members(Like Dhaka club, Gulshan club, Uttara Club, Lions Club
                                            etc), Different organization member(Like BGMEA, BASIS, FBCCI
                                            etc), Different company owner and directors etc.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <img
                                    src="assets/img/it-sheba-img/mail.jpg"
                                    alt=""
                                    className="img-fluid"
                                />
                            </div>
                        </div>
                        {/* Regular Area */}
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <img
                                    src="assets/img/it-sheba-img/mail-2.png"
                                    alt=""
                                    className="img-fluid"
                                />
                            </div>
                            <div className=" col-lg-6 col-md-6 col-sm-12  ">
                                <div>
                                    <h5>Regular Area: </h5>
                                    <ul style={{ margin: 10 }}>
                                        <li>Student and Corporate employee. Total 18,00,000+ email</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        </>
    );
};

export default EmailMarketingDatabase;