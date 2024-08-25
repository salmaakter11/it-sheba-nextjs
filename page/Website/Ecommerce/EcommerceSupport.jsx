import React from "react";

const EcommerceSupport = () => {
    const supportData = [
        {
            id: 1,
            icon: "assets/img/partners/team.webp",
            title: "Support Team",
            description: "After creating your website, we have over 20 support engineers on staff who are always available to assist you. Our exceptional support has helped us establish ourselves as Bangladesh's top web development company."
        },
        {
            id: 2,
            icon: "assets/img/partners/office.png",
            title: "Own office",
            description: "In addition, we have eight years of professional experience developing websites and our own office (a building we purchased). For any kind of assistance, our helpline number, +88 01906297861, is always open."
        },
        {
            id: 3,
            icon: "assets/img/partners/suport.jpeg",
            title: "Technology experts",
            description: "From seasoned developers to imaginative designers, our team comprises a wide spectrum of technology specialists. We have the know-how to make any technical obstacle become a success story."
        }
    ];

    return (
        <section className="pricing-section ptb-100">
            <div className="container">
                <div className="row">
                    {supportData.map(item => (
                        <div key={item.id} className="col-md-4 col-lg-4">
                            <a href="#">
                                <div className="single-promo-2 custom-shadow single-promo-hover rounded-custom text-center white-bg p-5 h-100">
                                    <div className="service-border">
                                        <img src={item.icon} alt={item.title} className="img-fluid service-img mb-4" width="70" />
                                    </div>
                                    <h5>{item.title}</h5>
                                    <p>{item.description}</p>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EcommerceSupport;
