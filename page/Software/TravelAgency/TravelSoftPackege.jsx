import React from "react";

const TravelSoftPackege = () => {
    // Array containing travel software packages
    const packages = [
        {
            title: 'Startup Package',
            price: '20000 (one time) Taka',
            type: 'Excluding Vat',
            features: [
                'Prices Per Month 1,000 Taka',
                'Total User 1-10',
                'Ticket Booking',
                'Visa',
                'Hotel Booking',
                'Manpower',
                'Customer Booking & Accounts Management',
                'Vendor Booking & Accounts Management',
                'Agent Booking & Accounts Management',
                'Accounts Management',
                'Expense Management',
                'Report-5'
            ]
        },
        {
            title: 'Premium Package',
            price: '80,000 (onek Month) Taka',
            type: 'Excluding Vat',
            features: [
                'Prices Per Month 1,000 Taka',
                'Total User 1-10',
                'Ticket Booking',
                'Visa',
                'Hotel Booking',
                'Manpower',
                'Customer Booking & Accounts Management',
                'Vendor Booking & Accounts Management',
                'Agent Booking & Accounts Management',
                'Accounts Management',
                'Expense Management',
                'Invoice/ Email Management',
                'SMS Gateway',
                'Inventory Management',
                'Report-12'
            ]
        },
        {
            title: 'Enterprise Package',
            price: '90000 (one time) Taka',
            type: 'Excluding Vat',
            features: [
                'Prices Per Month 1,000 Taka',
                'Total User 1-10',
                'Ticket Booking',
                'Visa',
                'Hotel Booking',
                'Manpower',
                'Customer Booking & Accounts Management',
                'Vendor Booking & Accounts Management',
                'Agent Booking & Accounts Management',
                'Accounts Management',
                'Expense Management',
                'Invoice/ Email Management',
                'SMS Gateway',
                'Payroll Management',
                'Inventory Management',
                'Report - unlimited'
            ]
        }
    ];

    return (
        <section className="pricing-section ptb-50">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-9 col-lg-8">
                        <div className="section-heading-color text-center mb-5 mb-sm-5 mb-md-3 mb-lg-3">
                            <h3>Travel Software package </h3>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {packages.map((pkg, index) => (
                        <div key={index} className="col-lg-4 col-md-4 col-12">
                            <div className="card popular-price text-center single-pricing-pack">
                                <div className="pricing-table-header">
                                    <div className="title uppercase strong">{pkg.title}</div>
                                </div>
                                <div className="pt-5">
                                    <h5 className="mb-0">{pkg.price}</h5>
                                    <p>{pkg.type}</p>
                                </div>
                                <div className="card-body">
                                    <ul className="list-unstyled mb-4 pricing-feature-list">
                                        {pkg.features.map((feature, idx) => (
                                            <li key={idx}>{feature}</li>
                                        ))}
                                    </ul>
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
    );
};

export default TravelSoftPackege;
