import React from 'react';

const SeoPackege = () => {
    const packages = [
        {
            title: "Basic Package",
            price: "15000 Tk",
            vatNote: "Excluding Vat & Tax",
            features: [
                "Site Audit",
                "Keyword Research",
                "On-page Optimize",
                "Onsite blog post",
                "Social Networking share",
                "Social Bookmarking",
                "Web 2.0 Profile (Share)",
                "Forum Profiles posting",
                "Blog Comments",
                "Directory Submission"
            ],
            reporting: [
                "SEARCH ENGINE RANK REPORT",
                "SEO REPORTS",
                "GOOGLE ANALYTICS REPORT",
                "ACTIVITY REPORT"
            ]
        },
        {
            title: "Business Package",
            price: "25000 Tk",
            vatNote: "Excluding Vat & Tax",
            features: [
                "Site Audit",
                "Keyword Research",
                "On-page Optimize",
                "Google Business Page",
                "Webmaster optimize",
                "Onsite blog post",
                "Social Networking share",
                "Social Bookmarking",
                "Web 2.0 Profile (Share)",
                "Forum Profiles posting",
                "Blog Comments",
                "Directory Submission",
                "Slide Share",
                "PDF Share"
            ],
            reporting: [
                "SEARCH ENGINE RANK REPORT",
                "SEO REPORTS",
                "GOOGLE ANALYTICS REPORT",
                "ACTIVITY REPORT"
            ]
        },
        {
            title: "Enterprise Package",
            price: "30000 Tk",
            vatNote: "Excluding Vat & Tax",
            features: [
                "Site Audit",
                "Keyword Research",
                "On-page Optimize",
                "Google Business Page",
                "Webmaster optimize",
                "Onsite blog post",
                "Social Networking share",
                "Social Bookmarking",
                "Web 2.0 Profile (Share)",
                "Forum Profiles posting",
                "Blog Comments",
                "Directory Submission",
                "Slide Share",
                "PDF Share",
                "Image Share",
                "Video Share",
                "Site building"
            ],
            reporting: [
                "SEARCH ENGINE RANK REPORT",
                "SEO REPORTS",
                "GOOGLE ANALYTICS REPORT",
                "ACTIVITY REPORT"
            ]
        }
    ];

    return (
        <section className="pricing-section ptb-100">
            <div className="container">
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
                                                        <p>{pkg.vatNote}</p>
                                                    </div>
                                                    <div className="card-body">
                                                        <ul className="list-unstyled mb-4 pricing-feature-list">
                                                            {pkg.features.map((feature, idx) => (
                                                                <li key={idx}>{feature}</li>
                                                            ))}
                                                        </ul>
                                                        <div>
                                                            <h5 className="heading-color-it">
                                                                Monthly Reporting
                                                            </h5>
                                                        </div>
                                                        <ul className="list-unstyled mb-4 pricing-feature-list">
                                                            {pkg.reporting.map((report, idx) => (
                                                                <li key={idx}>{report}</li>
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

export default SeoPackege;
