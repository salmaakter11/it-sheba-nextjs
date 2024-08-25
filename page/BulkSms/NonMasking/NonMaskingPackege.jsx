import React from 'react';

const NonMaskingPackege = () => {
    const packages = [
        {
            name: "Basic Package",
            smsCount: "5,000 SMS",
            cost: "SMS Cost + Gov. Cost: 0.06",
            features: [
                "Sender ID: Company Name",
                "Super Fast Delivery Speed",
                "Free SMS api",
                "Free Support",
                "Validity: 12 Month ( Renewable )",
                "Support Bangla SMS",
                "OTP Related SMS API: YES"
            ],
            btnColor: "outline-btn",
            btnText: "Order now",
            btnLink: "tel:+8801906-297862"
        },
        {
            name: "Business Package",
            smsCount: "50,000 SMS",
            cost: "SMS Cost + Gov. Cost: 0.06",
            features: [
                "Sender ID: Company Name",
                "Super Fast Delivery Speed",
                "Free SMS api",
                "Free Support",
                "Validity: 12 Month ( Renewable )",
                "Support Bangla SMS",
                "OTP Related SMS API: YES"
            ],
            btnColor: "primary-solid-btn2",
            btnText: "Order now",
            btnLink: "tel:+8801906-297862"
        },
        {
            name: "Enterprise Package",
            smsCount: "30,000 SMS",
            cost: "SMS Cost + Gov. Cost: 0.06",
            features: [
                "Sender ID: Company Name",
                "Super Fast Delivery Speed",
                "Free SMS api",
                "Free Support",
                "Validity: 12 Month ( Renewable )",
                "Support Bangla SMS",
                "OTP Related SMS API: YES"
            ],
            btnColor: "outline-btn",
            btnText: "Order now",
            btnLink: "tel:+8801906-297862"
        }
    ];

    return (
        <>
            {/*pricing with switch section start*/}
            <section className="pricing-section ptb-100 ">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-9 col-lg-8">
                            <div className="section-heading-color text-center mb-5 mb-sm-5 mb-md-3 mb-lg-3">
                                <h3>
                                Non Masking SMS Price in Bangladesh
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="feature-content-wrap">
                                <div className=" feature-tab-content">
                                    <div className="tab-pane active" id="tab6-2">
                                        <div className="row align-items-center justify-content-between">
                                            {packages.map((pkg, index) => (
                                                <div key={index} className="col-lg-4 col-md-4 col-12">
                                                    <div className="card popular-price text-center single-pricing-pack">
                                                        <div className="pricing-table-header">
                                                            <div className="title uppercase strong">
                                                                {pkg.name}
                                                            </div>
                                                        </div>
                                                        <div className="pt-5">
                                                            <h5 className="mb-0">{pkg.smsCount}</h5>
                                                            <p>{pkg.cost}</p>
                                                        </div>
                                                        <div className="card-header pb-4 border-0 pricing-header">
                                                            <div className="action-btns  ">
                                                                <a
                                                                    href="https://wa.me/message/GQW6J5FIQHUZI1"
                                                                    className="btn solid-white-btn mr-3"
                                                                >
                                                                    Price Details
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="card-body">
                                                            <ul className="list-unstyled mb-4 pricing-feature-list">
                                                                {pkg.features.map((feature, idx) => (
                                                                    <li key={idx}>{feature}</li>
                                                                ))}
                                                            </ul>
                                                            <a
                                                                href={pkg.btnLink}
                                                                className={`btn ${pkg.btnColor} mb-3`}
                                                                target="_blank"
                                                            >
                                                                {pkg.btnText}
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

export default NonMaskingPackege;
