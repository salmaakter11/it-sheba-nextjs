import React from 'react';

const EcommerceWebsitePackege = () => {
    const ecommercePackages = [
        {
            title: 'BASIC',
            price: '15k',
            type: 'STANDARD',
            details: [
                'Layout Design',
                '1 Design Revisions',
                'Responsive/mobile friendly',
                'SEO friendly',
                'Support hours included 10 hrs',
                'No. of Products Up to 25',
                'Order Management',
                'Website Management Features',
                'Checkout, Payment & Shipping',
                'Analytics',
                'Paypal, Google Checkout, Credit, Debit Card',
                'Customer Service Chat Bot',
                'Shipping Methods Integration',
                'Charges Taxes',
                'Sitemaps (HTML and XML)',
                'Product Browsing',
                'Catalog Management',
                'Inventory Management',
                'Product Search',
                'Product Reviews',
                'W3C Validation',
                'Social Integration',
                'Training(optional)(additional hours $25/hour)',
                'CMS-Wordpress Blog',
                'Custom Contact Us',
                'Newsletter Subscription Form'
            ]
        },
        {
            title: 'STANDARD',
            price: '20k',
            type: 'STANDARD',
            details: [
                'Layout Design',
                '2 Design Revisions',
                'Responsive/mobile friendly',
                'SEO friendly',
                'Support hours included 20 hrs',
                'No. of Products Up to 25',
                'Order Management',
                'Website Management Features',
                'Checkout, Payment & Shipping',
                'Analytics',
                'Paypal, Google Checkout, Credit, Debit Card',
                'Customer Service Chat Bot',
                'Shipping Methods Integration',
                'Charges Taxes',
                'Sitemaps (HTML and XML)',
                'Product Browsing',
                'Catalog Management',
                'Inventory Management',
                'Product Search',
                'Product Reviews',
                'W3C Validation',
                'Social Integration',
                'Training(optional)(additional hours $25/hour)',
                'CMS-Wordpress Blog',
                'Custom Contact Us',
                'Newsletter Subscription Form'
            ]
        },
        {
            title: 'PREMIUM',
            price: '25k',
            type: 'STANDARD',
            details: [
                'Layout Design',
                'Custom Design',
                '5 Design Revisions',
                'Responsive/mobile friendly',
                'SEO friendly',
                'Support hours included 40 hrs',
                'No. of Products Up to 100',
                'Advance Order Management',
                'B2B Support',
                'Website Management Features',
                'Checkout, Payment & Shipping',
                'Analytics',
                'Paypal, Google Checkout, Credit, Debit Card',
                'Customer Service Chat Bot',
                'Shipping Methods Integration',
                'Charges Taxes',
                'Sitemaps (HTML and XML)',
                'Product Browsing',
                'Catalog Management',
                'Inventory Management',
                'Advance Product Search',
                'Discount Coupons',
                'Orders information Import/Export',
                'Product Reviews',
                'W3C Validation',
                'Social Integration',
                'Training(optional)(additional hours $25/hour)',
                'Customized Inner Pages',
                'CMS - Magento With All Integrated Functionality',
                'Custom Payment Gateway',
                'Custom Contact Us',
                '3rd Party Extensions Integration',
                'Newsletter Subscription Form',
                'Promo Popup Design'
            ]
        }
    ];

    return (
        <section className="pricing-section ptb-100">
            <div className="container">
                <div className="section-heading-color text-center mb-5 mb-sm-5 mb-md-3 mb-lg-3">
                    <h3>Ecommerce Website development package price</h3>
                </div>
                <div className="row">
                    {ecommercePackages.map((packageData, index) => (
                        <div key={index} className="col-lg-4 col-md-4 col-12">
                            <div className="card popular-price text-center single-pricing-pack">
                                <div className="pricing-table-header">
                                    <div className="title uppercase strong">laravel website </div>
                                </div>
                                <div className="pt-2">
                                <h5 className="mb-0">{packageData.title}</h5>
                                    <h5 className="mb-0">{packageData.price}</h5>
                                    <p>{packageData.type}</p>
                                </div>
                                <div className="card-body">
                                    <ul className="list-unstyled mb-2 pricing-feature-list" style={{ margin: 10 }}>
                                        {packageData.details.map((detail, index) => (
                                            <li key={index}>{detail}</li>
                                        ))}
                                    </ul>
                                    <a
                                        href="tel:+8801906-297862"
                                        className="btn outline-btn mb-3"
                                        target="_blank"
                                    >
                                        Order now
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

export default EcommerceWebsitePackege;
