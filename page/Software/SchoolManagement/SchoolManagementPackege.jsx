import React from 'react';

const SchoolManagementPackege = () => {
    const packages = [
        {
            title: "BASIC Package",
            details: [
                "Student Quantity 500",
                "Server & Installation Cost - 10,000 TK",
                "Monthly Subscription- 6 TK/Student",
                "Free Support",
                "Free Update",
                "Free Training(3-4 Hour)- Online(Google meet or Zoom)"
            ]
        },
        {
            title: "Business Package",
            details: [
                "Student Quantity 1000",
                "Server & Installation Cost - 15,000 TK",
                "Monthly Subscription- 5 TK/Student",
                "Free Support",
                "Free Update",
                "Free Training(3-4 Hour)- Online(Google meet or Zoom)"
            ]
        },
        {
            title: "Enterprise Package",
            details: [
                "Student Quantity 2000",
                "Server & Installation Cost - 20,000 TK",
                "Monthly Subscription- 5 TK/Student",
                "Free Support",
                "Free Update",
                "Free Training(3-4 Hour)- Online(Google meet or Zoom)"
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
                                                        <div className="card-header pb-4 border-0 pricing-header">
                                                            <div className="action-btns">
                                                                <a href="tel:+8801906-297862" className="btn solid-white-btn mr-3">
                                                                    Call for Details
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="card-body">
                                                        <ul className="list-unstyled mb-4 pricing-feature-list">
                                                            {pkg.details.map((detail, idx) => (
                                                                <li key={idx}>{detail}</li>
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

export default SchoolManagementPackege;
