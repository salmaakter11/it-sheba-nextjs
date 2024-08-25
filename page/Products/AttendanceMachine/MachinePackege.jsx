import React from 'react';

const MachinePackege = () => {
    const machinePackages = [
        {
            name: 'ZKTeco F18',
            price: 'Call: 8801906-297862 for price',
            image: 'assets/img/it-sheba-img/ZKTeco-F18-4-500x500.jpg',
            features: ['Install: 2000 Taka', 'Card & Finger'],
        },
 
    ];

    return (
        <section className="pricing-section ptb-100">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-9 col-lg-8">
                        <div className="section-heading-color text-center mb-5 mb-sm-5 mb-md-3 mb-lg-3">
                            <h3>DIGITAL MARKETING AGENCY STARTUP PACKAGE</h3>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {machinePackages.map((machine, index) => (
                        <div key={index} className="col-lg-4 col-md-6 col-sm-12">
                            <div className="card popular-price text-center single-pricing-pack">
                                <div className="pricing-table-header">
                                    <div className="title uppercase strong">{machine.price}</div>
                                </div>
                                <div className="pt-5">
                                    <h5 className="mb-0">{machine.name}</h5>
                                    <p>Excluding Vat</p>
                                </div>
                                <div>
                                    <img src={machine.image} alt="" className="img-fluid" />
                                </div>
                                <div className="card-body">
                                    <ul className="list-unstyled mb-4 pricing-feature-list">
                                        {machine.features.map((feature, idx) => (
                                            <li key={idx}>{feature}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MachinePackege;
