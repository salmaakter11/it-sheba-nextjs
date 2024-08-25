import React from 'react';

const DigitalMarketingPackege = () => {
    const packages = [
        {
            title: 'BASIC Packages',
            price: '3500TK/ Monthly',
            features: [
                '5 FACEBOOK POSTS',
                'WITH STATIC GRAPHICS',
                '2(10$) AD RUN',
                '(EXCLUDING MEDIA BUYING)',
                'PAGE OPTIMIZATION',
                'MONITORING',
                'REPORTING',
            ],
        },
        {
            title: 'STANDARD Packages',
            price: '6000TK/Monthly',
            features: [
                '10 FACEBOOK POSTS WITH STATIC GRAPHICS',
                '5(15$) AD RUN',
                '2(10$) AD RUN',
                '(EXCLUDING MEDIA BUYING)',
                'PAGE OPTIMIZATION',
                'MONITORING',
                'REPORTING',
            ],
        },
        {
            title: 'PREMIUM Package',
            price: '10000TK/Monthly',
            features: [
                '15 FACEBOOK POSTS',
                'WITH STATIC GRAPHICS',
                '8(20$) AD RUN',
                '(EXCLUDING MEDIA BUYING)',
                'PAGE OPTIMIZATION',
                'MONITORING',
                'REPORTING',
            ],
        },
    ];

    return (
        <section className="pricing-section ptb-100">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-9 col-lg-8">
                        <div className="section-heading-color text-center mb-5 mb-sm-5 mb-md-3 mb-lg-3">
                            <h3>DIGITAL MARKETING AGENCY STARTUP PACKAGE</h3>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {packages.map((pack, index) => (
                        <div key={index} className="col-lg-4 col-md-6 col-sm-12">
                            <div className="card popular-price text-center single-pricing-pack">
                                <div className="pricing-table-header">
                                    <div className="title uppercase strong">{pack.title}</div>
                                </div>
                                <div className="pt-5">
                                    <h5 className="mb-0">{pack.price}</h5>
                                    <p>Excluding Vat</p>
                                </div>
                                <div className="card-body">
                                    <ul className="list-unstyled mb-4 pricing-feature-list">
                                        {pack.features.map((feature, idx) => (
                                            <li key={idx}>{feature}</li>
                                        ))}
                                    </ul>
                                    <a
                                        href="tel:+8801906-297862"
                                        className="btn primary-solid-btn2 mb-3"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        CALL 8801906-297862
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DigitalMarketingPackege;
