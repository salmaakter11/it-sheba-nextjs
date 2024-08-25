
import React from 'react';

const FAQSection = () => {
    return (
        <>
         <section className="feature-tab-section ptb-100 ">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-9 col-lg-8">
                        <div className="section-heading text-center mb-5 mb-sm-5 mb-md-3 mb-lg-3">
                            <h3>Frequently Asked Question</h3>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-7 col-lg-9 col-12  order-xl-first ">
                        {/* <!--faq section start--> */}

                        <div id="faq" className="ptb-100 ">
                            <div id="accordion-one" className="accordion accordion-faq">
                                <div className="card mb-0">
                                    <a className="card-header collapsed" data-toggle="collapse" href="#collapseOne">
                                        <h6 className="mb-0 d-inline-block">Which types of web development services do you
                                            offer?
                                        </h6>

                                    </a>
                                    <div id="collapseOne" className="collapse" data-parent="#accordion-one">
                                        <div className="card-body">
                                            <p>We offer all the required websites for client businesses, especially for:
                                            </p>
                                            <ul className="list-unstyled tech-feature-list">
                                                <li className="py-1"><span
                                                        className="ti-arrow-right mr-2 color-primary"></span>E-commerce
                                                    website</li>
                                                <li className="py-1"><span
                                                        className="ti-arrow-right mr-2 color-primary"></span>Company website
                                                </li>
                                                <li className="py-1"><span
                                                        className="ti-arrow-right mr-2 color-primary"></span>Corporate
                                                    website</li>
                                                <li className="py-1"><span
                                                        className="ti-arrow-right mr-2 color-primary"></span>Portfolio
                                                    website</li>
                                                <li className="py-1"><span
                                                        className="ti-arrow-right mr-2 color-primary"></span>News website
                                                </li>
                                                <li className="py-1"><span
                                                        className="ti-arrow-right mr-2 color-primary"></span>Real estate
                                                    website</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="card mb-0">
                                    <a className="card-header collapsed" data-toggle="collapse" href="#collapseTwo">
                                        <h6 className="mb-0 d-inline-block">What is the cost to develop a website with you?
                                        </h6>
                                    </a>
                                    <div id="collapseTwo" className="collapse" data-parent="#accordion-one">
                                        <div className="card-body">
                                            <p>The kind of website you want to create will determine the price. Our
                                                costs will change according to what you need. However, our entry-level
                                                package costs 15,000 BDT for a simple website.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="card mb-0">
                                    <a className="card-header collapsed" data-toggle="collapse" href="#collapseFour">
                                        <h6 className="mb-0 d-inline-block">What is the estimated turnaround time for a
                                            website?
                                        </h6>
                                    </a>
                                    <div id="collapseFour" className="collapse" data-parent="#accordion-one">
                                        <div className="card-body">
                                            <p>It is entirely dependent upon your particular needs. We can complete a
                                                mid-level website in about a week. We have in-depth conversations with
                                                our clients to understand their urgency, and we assign teams to tasks
                                                based on their requests.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!--faq section end--> */}
                    <div className="col-xl-5 col-lg-3 col-12 order-lg-last align-self-center">
                        <div className="image-box fadein text-xl-right text-center">
                            <img src="assets/img/partners/Frequently Asked Question.png" alt="wp-hosting"
                                className="img-fluid" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
        </>
    );
};

export default FAQSection;
 
