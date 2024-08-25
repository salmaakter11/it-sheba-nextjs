import React from 'react';

const EmailMarketingPackege = () => {
    const packages = [
        {
            price: '5,000 BDT /Month',
            emailsPerMonth: '50,000',
            features: [
                'Super Fast Delivery Speed',
                'Delivery Report: YES',
                'Email Database: Corporate',
            ],
            buttonLabel: 'CALL 8801906-297862',
            buttonLink: 'tel:+8801906-297862',
        },
        {
            price: '10,000 BDT /Month',
            emailsPerMonth: '1,00,000',
            features: [
                'Super Fast Delivery Speed',
                'Delivery Report: YES',
                'Email Database: Corporate',
            ],
            buttonLabel: 'CALL 8801906-297862',
            buttonLink: 'tel:+8801906-297862',
        },
        {
            price: '20,000 BDT /Month',
            emailsPerMonth: '2,00,000',
            features: [
                'Super Fast Delivery Speed',
                'Delivery Report: YES',
                'Email Database: Corporate',
            ],
            buttonLabel: 'CALL 8801906-297862',
            buttonLink: 'tel:+8801906-297862',
        },
    ];

    return (
        <section className="pricing-section ptb-100">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-9 col-lg-8">
                        <div className="section-heading-color text-center mb-5 mb-sm-5 mb-md-3 mb-lg-3">
                            <h3>Email Marketing Price in Bangladesh</h3>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="feature-content-wrap">
                            <div className="feature-tab-content">
                                <div className="tab-pane active" id="tab6-2">
                                    <div className="row align-items-center justify-content-between">
                                        {packages.map((pack, index) => (
                                            <div key={index} className="col-lg-4 col-md-6 col-sm-12">
                                                <div className="card popular-price text-center single-pricing-pack">
                                                    <div className="pricing-table-header">
                                                        <div className="title uppercase strong">
                                                            {pack.price}
                                                        </div>
                                                    </div>
                                                    <div className="pt-5">
                                                        <h5 className="mb-0">EMAILS PER MONTH - {pack.emailsPerMonth}</h5>
                                                        <p>Excluding Vat</p>
                                                    </div>
                                                    <div className="card-body">
                                                        <ul className="list-unstyled mb-4 pricing-feature-list">
                                                            {pack.features.map((feature, idx) => (
                                                                <li key={idx}>{feature}</li>
                                                            ))}
                                                        </ul>
                                                        <a
                                                            href={pack.buttonLink}
                                                            className="btn primary-solid-btn2 mb-3"
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                        >
                                                            {pack.buttonLabel}
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
    );
};

export default EmailMarketingPackege;
 
