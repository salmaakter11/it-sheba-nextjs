import React from "react";

const HRSoftwarePackage = () => {
    // Array containing HR software packages
    const packages = [
        {
            title: 'Standard Package',
            description: 'Call +88 01906297861 for price',
            price: null,
            features: [
                'For 1-100 Employees',
                'Total User- 1',
                'Free Support',
                'Free Update',
                'Monthly Server Cost- 4500 Taka',
                'Free Training(3-4 Hour)- Online(Google meet or Zoom)'
            ]
        },
        {
            title: 'Premium Package',
            description: 'Call +88 01906297861 for price',
            price: null,
            features: [
                'For 1-100 Employees',
                'Total User- 2',
                'Free Support',
                'Free Update',
                'Monthly Server Cost- 7000 Taka',
                'Free Training(3-4 Hour)- Online(Google meet or Zoom)'
            ]
        },
        {
            title: 'Custom Package',
            description: 'Call +88 01906297861 for price',
            price: null,
            features: [
                'For organizations with unique requirements or specific needs that are not covered by our standard packages, we offer custom pricing and tailored solutions. Our team will work closely with you to understand your needs and create a package that meets your exact specifications.'
            ]
        }
    ];

    return (
        <section className="pricing-section ptb-50">
            <div className="container">
                <div className="row">
                    {packages.map((pkg, index) => (
                        <div key={index} className="col-lg-4 col-md-4 col-12">
                            <div className="card popular-price text-center single-pricing-pack">
                                <div className="pricing-table-header">
                                    <div className="title uppercase strong">{pkg.description}</div>
                                </div>
                                <div className="pt-5">
                                    <h5 className="mb-0">{pkg.title}</h5>
                                </div>
                                <div className="card-body">
                                    <ul className="list-unstyled mb-4 pricing-feature-list">
                                        {pkg.features.map((feature, idx) => (
                                            <li key={idx}>{feature}</li>
                                        ))}
                                    </ul>
                                    <a
                                        href="https://wa.me/message/GQW6J5FIQHUZI1"
                                        className="btn outline-btn mb-3" target="_blank"  rel="noopener noreferrer" >  Order now
                                    </a>
                                    <div className="card-header pb-4 border-0 pricing-header">
                                        <div className="action-btns">
                                            <a
                                                href="tel:+8801906-297862"  className="btn solid-white-btn mr-3"> Call for Details
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HRSoftwarePackage;
