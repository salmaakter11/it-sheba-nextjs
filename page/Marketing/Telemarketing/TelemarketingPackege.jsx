import React from 'react';

const TelemarketingPackege = () => {
    const packages = [
        {
            title: "Demo Start- 3 Days",
            price: "4000 Taka",
            description: "180 Call daily for lead generation",
            features: [
                "Dedicated call center agent",
                "Minimum Hire: 3 Days",
                "Daily Positive Lead Report",
                "Daily call list screenshot"
            ]
        },
        {
            title: "Half Day - 1 month",
            price: "17000 Taka",
            description: "180 Call daily for lead generation",
            features: [
                "Dedicated call center agent",
                "Minimum Hire: 3 Days",
                "Daily Positive Lead Report",
                "Daily call list screenshot"
            ]
        },
        {
            title: "Full Day - 1 month",
            price: "20000 Taka",
            description: "180 Call daily for lead generation",
            features: [
                "Shared call center agent",
                "Minimum Hire: 3 Days",
                "Daily Positive Lead Report",
                "Daily call list screenshot"
            ]
        }
    ];

    return (
        <>
            <section className="pricing-section ptb-100">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-9 col-lg-8">
                            <div className="section-heading-color text-center mb-5 mb-sm-5 mb-md-3 mb-lg-3">
                                <h3>Telemarketing Price in Bangladesh</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="feature-content-wrap">
                                <div className="feature-tab-content">
                                    <div className="tab-pane active" id="tab6-2">
                                        <div className="row align-items-center justify-content-between">
                                            {packages.map((pkg, index) => (
                                                <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
                                                    <div className="card popular-price text-center single-pricing-pack">
                                                        <div className="pricing-table-header">
                                                            <div className="title uppercase strong">
                                                                {pkg.title}
                                                            </div>
                                                        </div>
                                                        <div className="pt-5">
                                                            <h5 className="mb-0">{pkg.price}</h5>
                                                            <p>{pkg.description}</p>
                                                        </div>
                                                        <div className="card-body">
                                                            <ul className="list-unstyled mb-4 pricing-feature-list">
                                                                {pkg.features.map((feature, idx) => (
                                                                    <li key={idx}>{feature}</li>
                                                                ))}
                                                            </ul>
                                                            <a
                                                                href="tel:+8801906-297862"
                                                                className="btn primary-solid-btn2 mb-3"
                                                                target="_blank"
                                                            >
                                                                CALL 8801906-297862
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default TelemarketingPackege;
