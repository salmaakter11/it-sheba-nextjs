import React from 'react';

const WebsitePackage = () => {
    const webpackegedataData = [
        {
            id: 1,
            title: 'Laravel Website',
            type: 'BAISE WEBSITE',
            price: '12500K',
            features: [
                '10000 MB Hosting Free',
                '.com/.net/.org Domain Free',
                'Custom Admin Panel & Easy to Use',
                'Custom Design & True Responsive',
                'SEO Facility, Google Indexing',
                'Photo & Video Gallery Unlimited Upload',
                'Feedback form, Google map',
                'Social media integration',
                '5 Flash Banner picture',
                '5 Customize page',
                '5 Normal Page',
                'Free 10 Business Mail'
            ]
        },
        {
            id: 2,
            title: 'Laravel Website',
            type: 'STANDARD',
            price: '12k',
            features: [
                '15000 MB Hosting Free',
                '.com/.net/.org Domain Free',
                'Custom Admin Panel & Easy to Use',
                'Custom Design & True Responsive',
                'SEO Facility, Google Indexing',
                'Photo & Video Gallery Unlimited Upload',
                'Feedback form, Google map',
                'Social media integration',
                'Website Analytics integration',
                '7 Flash Banner picture',
                '15 Customize page',
                '12 Normal Page',
                'Free 20 Business Mail'
            ]
        },
        {
            id: 3,
            title: 'Laravel Website',
            type: 'PREMIUM',
            price: '20k',
            features: [
                '15000 MB Hosting Free',
                '.com/.net/.org Domain Free',
                'Custom Admin Panel & Easy to Use',
                'Custom Design & True Responsive',
                'SEO Facility, Google Indexing',
                'Photo & Video Gallery Unlimited Upload',
                'Feedback form, Google map',
                'Social media integration',
                'Website Analytics integration',
                'Livechat Integration',
                'Product Category Sub-category',
                'Unlimited Flash Banner picture',
                '20 Customize page',
                '15 Normal Page',
                'Free 30 Business Mail'
            ]
        },
        // Add more webpackegedata data objects as needed
    ];

    return (
        <>
            <section className="pricing-section ptb-100">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-9 col-lg-8">
                            <div className="section-heading-color text-center mb-5 mb-sm-5 mb-md-3 mb-lg-3">
                                <h3>Website Design Package</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {webpackegedataData.map(packageData => (
                            <div key={packageData.id} className="col-lg-4 col-md-4 col-12">
                                <div className="card popular-price text-center single-pricing-pack">
                                    <div className="pricing-table-header">
                                        <div className="title uppercase strong">{packageData.title}</div>
                                    </div>
                                    <div className="pt-5">
                                        <h5 className="mb-0">{packageData.type}</h5>
                                        <h6>{packageData.price}</h6>
                                        <p>PACKAGE INCLUDE</p>
                                    </div>
                                    <div className="card-header pb-4 border-0 pricing-header">
                                        <div className="action-btns">
                                            <a href="https://wa.me/message/GQW6J5FIQHUZI1" className="btn solid-white-btn mr-3">Price Details</a>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <ul className="list-unstyled mb-4 pricing-feature-list">
                                            {packageData.features.map((feature, index) => (
                                                <li key={index}><span>{feature}</span></li>
                                            ))}
                                        </ul>
                                        <a href="tel:+8801906-297862" className="btn outline-btn mb-3" target="_blank">Order now</a>
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

export default WebsitePackage;
