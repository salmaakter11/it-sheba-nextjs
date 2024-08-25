import React from 'react';

const DomainPackage = () => {
    const DomainPackagedata = [
        {
            item: 1,
            title: 'Shared Hosting',
            price: '900৳ /Yearly',
            type: 'Excluding Vat',
            features: [
                'Free .com Domain',
                'Only 5 Websites',
                '10gb SSD Storage',
                'Free & Easy Site Migration',
                'Free Automatic Backups',
                'Money-Back Guarantee',
                '30 Days Backup Guarantee.',
                '24/7 LiveChat Support'
            ]
        },
        {
            item: 2,
            title: 'Dedicated Hosting',
            price: '15500৳ /Month',
            type: 'Excluding Vat',
            features: [
                'Only 50 Websites',
                '300gb SSD Storage',
                'Free & Easy Site Migration',
                'Free Automatic Backups',
                'Money-Back Guarantee',
                '30 Days Backup Guarantee.',
                '24/7 LiveChat Support'
            ]
        },
        {
            item: 3,
            title: 'VPS Hosting',
            price: '4500 Taka/ Month',
            type: 'Excluding Vat',
            features: [
                'Only 5 Websites',
                '200gb SSD Storage',
                'Free & Easy Site Migration',
                'Free Automatic Backups',
                'Money-Back Guarantee',
                '30 Days Backup Guarantee.',
                '24/7 LiveChat Support'
            ]
        },
  
    ];

    return (
        <>
            <section className="pricing-section ptb-50">
                <div className="container">
                    <div className="section-heading-color text-center mb-5 mb-sm-5 mb-md-3 mb-lg-3">
                        <h3>Domain package price</h3>
                    </div>
                    <div className="row">
                        {DomainPackagedata.map(packageData => (
                            <div key={packageData.item} className="col-lg-4 col-md-4 col-12">
                                <div className="card popular-price text-center single-pricing-pack">
                                    <div className="pricing-table-header">
                                        <div className="title uppercase strong">{packageData.title}</div>
                                    </div>
                                    <div className="pt-5">
                                        <h5 className="mb-0">{packageData.price}</h5>
                                        <p>{packageData.type}</p>
                                    </div>
                                    <div className="card-body">
                                        <ul className="list-unstyled mb-4 pricing-feature-list">
                                            {packageData.features.map((feature, index) => (
                                                <li key={index}>{feature}</li>
                                            ))}
                                        </ul>
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

export default DomainPackage;
