import React, { Suspense } from "react";
const LocationBasedPackege = React.lazy(() => import('./LocationBasedPackege'));
const LocationBasedSms = () => {
    return (
        <>
            <div className="main">
                <section className="feature-tab-section ptb-50">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-9 col-lg-8">
                                <div className="section-heading-color text-center mb-5 mb-sm-5 mb-md-3 mb-lg-3">
                                    <h3>
                                        IT SHEBA is at the forefront of location-based SMS marketing in
                                        Bangladesh.
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-12 order-lg-last ptb-50 ">
                                <p>
                                    In the ever-changing world of digital marketing, companies are
                                    always looking for new and creative methods to engage with their
                                    target market. Location-Based Text Marketing is one tactic that has
                                    become quite popular. This effective tool enables companies to
                                    provide users with personalised and contextually relevant
                                    experiences by sending them targeted messages based on their
                                    location. Location-Based SMS marketing has become a game-changer in
                                    Bangladesh, where the mobile industry is booming and connectivity is
                                    widely available. Being one of the industry pioneers, IT SHEBA is
                                    the company that companies want to contact when they want to fully
                                    utilise Location-Based SMS.SMS Based on Location
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="feature-tab-section ptb-40">
                    <div className="container">
                        <div className="row">
                            <div className=" col-lg-8 col-md-6 col-sm-12">
                                <h5 className="heading-color-it">
                                    Recognising Bangladesh's Mobile Usage Landscape:
                                </h5>
                                <p>
                                    During the past ten years, mobile phone usage has increased in
                                    Bangladesh in a way never seen before. Because so many people use
                                    their mobile devices for active communication, SMS marketing offers
                                    a huge potential audience. Bangladesh has one of the highest rates
                                    of mobile phone penetration in South Asia, according to recent
                                    statistics, which makes the country a great place for location-based
                                    SMS campaigns.
                                </p>
                                <h5 className="heading-color-it">
                                    The Advantages of Location Based SMS Marketing:
                                </h5>
                                <h6>1.Precision Targeting:</h6>
                                <ul style={{ margin: 10 }}>
                                    <li>
                                        {" "}
                                        Businesses can effectively target their audience based on
                                        geographic parameters with Location-Based SMS. The appropriate
                                        people receive marketing messages at the appropriate time and
                                        location thanks to this accuracy.
                                    </li>
                                </ul>
                            </div>
                            <div className="col-xl-4 col-md-6 col-sm-12">
                                <ul style={{ margin: 10 }}>
                                    <img
                                        src="assets/img/it-sheba-img/location.webp"
                                        alt=""
                                        className="img-fluid"
                                    />
                                </ul>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-12 col-md-12 col-sm-12">
                                <h6>2.Increased Engagement:</h6>
                                <ul style={{ margin: 10 }}>
                                    <li>
                                        {" "}
                                        Businesses can more successfully grab users' attention by
                                        delivering messages that are relevant to their location. A higher
                                        chance of conversion and more engagement result from this
                                        increased relevance.
                                    </li>
                                </ul>
                                <h6>3.Personalization:</h6>
                                <ul style={{ margin: 10 }}>
                                    <li>
                                        A personalised approach is made possible by location-based SMS
                                        since messages can be customised to local events, promotions, or
                                        particular geographic circumstances. Users find this personal
                                        touch appealing, and it improves their overall shopping
                                        experience.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>



                <Suspense fallback={<h1 className='text-center'>Loading...</h1>}>
                    <LocationBasedPackege />
                </Suspense>

            </div>


        </>
    );
};

export default LocationBasedSms;