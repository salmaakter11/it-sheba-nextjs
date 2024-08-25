import React from 'react';

const WebBanner = () => {
    const bannerData = [
        {
            item: 1,
            imageUrl: 'assets/img/background-it-sheba/web-bannar.jpg',
            title: "Employ Bangladesh's Top Web Design and Development Firm in Dhaka"
        }
        // Add more banner objects as needed
    ];

    return (
        <>
            {bannerData.map(banner => (
                <section key={banner.item} className="hero-section-height ptb-100" style={{ background: `url("${banner.imageUrl}") no-repeat center center / cover` }}>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-9 col-lg-8">
                                <div className="offer-content-wrap text-center my-lg-0 my-md-5 my-sm-5 my-5">
                                    <h1 className="text-white hero-content-left">
                                        {banner.title}
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            ))}
        </>
    );
};

export default WebBanner;

