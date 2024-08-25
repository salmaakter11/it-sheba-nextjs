import React from 'react';

const RestaurantsoftPackege = () => {
    const packages = [
        {
            title: "Starter Package",
            description: "One time Licence fee",
            features: [
                "Sell Management",
                "Purchase & Reorder",
                "Inventory Management",
                "Pricing Management",
                "Report",
                "Business Intelligence & Analytics",
                "Admin And Security Management",
                "Statutory",
                "Financial Accounting"
            ]
        },
        {
            title: "Advanced Package",
            description: "One time Licence fee",
            features: [
                "Sell Management",
                "Purchase & Reorder",
                "Inventory Management",
                "Pricing Management",
                "Report",
                "Business Intelligence & Analytics",
                "Admin And Security Management",
                "Statutory",
                "Financial Accounting",
                "Delivery / Parcel Management",
                "Business Operations Management",
                "CRM, Loyalty And Promotions",
                "Multi Location / Division Management",
                "Recipe Management"
            ]
        },
        {
            title: "Professional Package",
            description: "One time Licence fee",
            features: [
                "Sell Management",
                "Purchase & Reorder",
                "Inventory Management",
                "Pricing Management",
                "Report",
                "Business Intelligence & Analytics",
                "Admin And Security Management",
                "Statutory",
                "Financial Accounting",
                "Delivery / Parcel Management",
                "Business Operations Management",
                "CRM, Loyalty And Promotions",
                "Multi Location / Division Management",
                "Recipe Management"
            ]
        }
    ];

    return (
        <section className="pricing-section ptb-50">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="feature-content-wrap">
                            <div className="feature-tab-content">
                                <div className="tab-pane active" id="tab6-2">
                                    <div className="row align-items-center justify-content-between">
                                        {packages.map((pkg, index) => (
                                            <div className="col-lg-4 col-md-4 col-12" key={index}>
                                                <div className="card popular-price text-center single-pricing-pack">
                                                    <div className="pricing-table-header">
                                                        <div className="title uppercase strong">
                                                            {pkg.title}
                                                        </div>
                                                    </div>
                                                    <div className="pt-5">
                                                        <h5 className="mb-0">{pkg.description}</h5>
                                                        <div className="card-header pb-4 border-0 pricing-header">
                                                            <div className="action-btns">
                                                                <a href="tel:+8801906-297862" className="btn solid-white-btn mr-3">
                                                                    REQUEST FOR QUOTE
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="card-body">
                                                        <ul className="list-unstyled mb-4 pricing-feature-list">
                                                            {pkg.features.map((feature, idx) => (
                                                                <li key={idx}>{feature}</li>
                                                            ))}
                                                        </ul>
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

export default RestaurantsoftPackege;
