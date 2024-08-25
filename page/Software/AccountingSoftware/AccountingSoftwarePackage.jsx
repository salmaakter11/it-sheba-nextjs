import React from "react";

const AccountingSoftwarePackage = () => {
    // Array containing accounting software packages
    const packages = [
        {
            type: 'BASIC',
            call: '+88 01906297861 for price',
            features: [
                'Basic Accounting Software',
                'Monthly Server Cost 2000 Taka',
                'Total User- 1',
                'Track income & expenses',
                'Send custom invoices & quotes',
                'VAT & TAX',
                'Insights & reports',
                'Capture & organize receipts',
                'Progress invoicing',
                'Free Support',
                'Free Update',
                'Free Training(1-2 Hour)- Online(Google meet or Zoom)'
            ]
        },
        {
            type: 'Advanced',
            call: '+88 01906297861 for price',
            features: [
                'Advanced Accounting Software',
                'Monthly Server Cost 4500 Taka',
                'Multiple User',
                'Track income & expenses',
                'Capture & organize receipts',
                'Send custom invoices & quotes',
                'VAT & TAX',
                'Progress invoicing',
                'Manage bills & payments',
                'Track employee time',
                'Multi-currency',
                'Free Support',
                'Free Update',
                'Free Training(1-2 Hour)- Online(Google meet or Zoom)'
            ]
        },
        {
            type: 'Customizable',
            call: '+88 01906297861 for price',
            features: [
                'Robust ERP features',
                'Customizable pricing plans',
                'Payment management system',
                'Free Support',
                'Free Update',
                'Free Training(1-2 Hour)- Online(Google meet or Zoom)'
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
                                <h3>Accounting Software package price</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {packages.map((pkg, index) => (
                            <div key={index} className="col-lg-4 col-md-4 col-12">
                                <div className="card popular-price text-center single-pricing-pack">
                                    <div className="pricing-table-header">
                                        <div className="title uppercase strong">{pkg.call}</div>
                                    </div>
                                    <div className="pt-5">
                                        <h5 className="mb-0">{pkg.type}</h5>
                                    </div>
                                    <div className="card-body">
                                        <ul className="list-unstyled mb-4 pricing-feature-list">
                                            {pkg.features.map((feature, idx) => (
                                                <li key={idx}>{feature}</li>
                                            ))}
                                        </ul>
                                        <a
                                            href="https://wa.me/message/GQW6J5FIQHUZI1"
                                            className="btn outline-btn mb-3"
                                            target="_blank"
                                        >
                                            Order now
                                        </a>
                                        <div className="card-header pb-4 border-0 pricing-header">
                                            <div className="action-btns">
                                                <a
                                                    href="tel:+8801906-297862"
                                                    className="btn solid-white-btn mr-3"
                                                >
                                                    Call for Details
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
        </>
    );
};

export default AccountingSoftwarePackage;
