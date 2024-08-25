import React from 'react';

const WhatsappMarketingPackege = () => {
    const packages = [
        {
            duration: '3000 BDT For 6 Months',
            features: [
                'Unlimited Message',
                'Multimedia Files',
                'Custom Sender ID',
                'Fast Number Filtration',
                'Group Contact Number Grabber',
                'Personalized messages contains contact name',
                'Delivery Reports',
                'Number Generator',
            ],
            buttonLabel: 'CALL 8801906-297862',
            buttonLink: 'tel:+8801906-297862',
        },
        {
            duration: '5000 BDT For 1 year',
            features: [
                'Unlimited Message',
                'Multimedia Files',
                'Custom Sender ID',
                'Fast Number Filtration',
                'Group Contact Number Grabber',
                'Personalized messages contains contact name',
                'Delivery Reports',
                'Number Generator',
            ],
            buttonLabel: 'CALL 8801906-297862',
            buttonLink: 'tel:+8801906-297862',
        },
        {
            duration: '10,000 BDT For lifetime',
            features: [
                'Unlimited Message',
                'Multimedia Files',
                'Custom Sender ID',
                'Fast Number Filtration',
                'Group Contact Number Grabber',
                'Personalized messages contains contact name',
                'Delivery Reports',
                'Number Generator',
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
                            <h3>WhatsApp Marketing Price</h3>
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
                                                    <div className="pt-5">
                                                        <h5 className="mb-0">{pack.duration}</h5>
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

export default WhatsappMarketingPackege;
