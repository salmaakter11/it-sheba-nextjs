import React from 'react';
const OurClients = () => {
    // Array containing client logo details
    const clients = [
        {
            src: "assets/img/partners/monir-group.jpg",
            alt: "Monir Group"
        },
        {
            src: "assets/img/partners/img/client logo-01.png",
            alt: "Client Logo 1"
        },
        {
            src: "assets/img/partners/img/client logo-02.png ",
            alt: "Client Logo 1"
        },
        {
            src: "assets/img/partners/img/client logo-03.png ",
            alt: "Client Logo 1"
        },
        {
            src: "assets/img/partners/img/client logo-04.png ",
            alt: "Client Logo 1"
        },
        {
            src: "assets/img/partners/img/client logo-06.png ",
            alt: "Client Logo 1"
        },
        {
            src: "assets/img/partners/img/client logo-06.png ",
            alt: "Client Logo 1"
        },
        
        {
            src: "assets/img/partners/img/client logo-07.png ",
            alt: "Client Logo 1"
        },
        {
            src: "assets/img/partners/img/client logo-08.png " ,
            alt: "Client Logo 1"
        },
        {
            src: "assets/img/partners/img/client logo-09.png ",
            alt: "Client Logo 1"
        },
        {
            src: "assets/img/partners/img/client logo-10.png  ",
            alt: "Client Logo 1"
        },
        {
            src: "assets/img/partners/img/client logo-11.png ",
            alt: "Client Logo 1"
        },
        {
            src: "assets/img/partners/img/client logo-09.png ",
            alt: "Client Logo 1"
        },
        {
            src: "assets/img/partners/img/client logo-10.png ",
            alt: "Client Logo 1"
        },
        {
            src: "assets/img/partners/img/client logo-11.png  ",
            alt: "Client Logo 1"
        },
        {
            src: "assets/img/partners/img/client logo-12.png   ",
            alt: "Client Logo 1"
        },
        {
            src: "assets/img/partners/img/client logo-09.png ",
            alt: "Client Logo 1"
        },
        {
            src: "assets/img/partners/img/client logo-12.png   ",
            alt: "Client Logo 1"
        },
        {
            src: "assets/img/partners/img/client logo-13.png ",
            alt: "Client Logo 1"
        },
        
        {
            src: "assets/img/partners/img/client logo-14.png  ",
            alt: "Client Logo 1"
        },
        {
            src: "assets/img/partners/img/client logo-16.png  ",
            alt: "Client Logo 1"
        },
        {
            src: "assets/img/partners/img/client logo-17.png  " ,
            alt: "Client Logo 1"
        },
        {
            src: "assets/img/partners/img/client logo-18.png  ",
            alt: "Client Logo 1"
        },
        {
            src: "assets/img/partners/img/client logo-19.png  ",
            alt: "Client Logo 1"
        },
        {
            src: "assets/img/partners/monir-trade.png",
            alt: "Client Logo 1"
        },
        {
            src: "assets/img/partners/img/client logo-20.png  ",
            alt: "Client Logo 1"
        },
        {
            src: "assets/img/partners/img/client logo-21.png  ",
            alt: "Client Logo 1"
        },
        {
            src: "assets/img/partners/umrah-sheba.png",
            alt: "Client Logo 1"
        },
        {
            src: "assets/img/partners/muskan.png",
            alt: "Client Logo 1"
        },
        // Add more client objects as needed
    ];

    return (
        <div className="main">
             
            <section className="feature-tab-section ptb-100">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-9 col-lg-8">
                            <div className="section-heading-color text-center mb-5 mb-sm-5 mb-md-3 mb-lg-3">
                                <h3>Our Some Clients</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {/* Dynamically render client logos */}
                        {clients.map((client, index) => (
                            <div key={index} className="col-md-3 col-lg-2 col-sm-6">
                                <div className="feature-feature-list p-2 text-center">
                                    <div className="partner-logo">
                                        <img src={client.src} alt={client.alt} className="img-fluid" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default OurClients;
