
import React from 'react';

const Webinfo = () => {
    const webinfoData = [
        {
            id: 1,
            imageUrl: 'assets/img/it-sheba-img/web-development.png',
            title: 'The Best Bangladeshi Web Development Company',
            description: 'The greatest web development company in Bangladesh is IT SHEBA LIMITED. Despite being a web development company based in Dhaka, we offer web design services all over the world. Bangladesh, the USA, Australia, Canada, and the UAE are our main markets for website development services. For the past sixteen years, we have offered web design services in Bangladesh. We have created over 9,000 websites for our clients in the previous sixteen years.'
        },
    ];

    return (
        <>
            {webinfoData.map(info => (
                <section key={info.id} className="feature-tab-section ptb-50">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-12 col-12 order-xl-first align-self-center">
                                <div className="image-box fadein text-xl-right text-center">
                                    <img src={info.imageUrl} alt={info.title} className="img-fluid" />
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-12 col-12 order-lg-last ptb-50">
                                <h2>{info.title}</h2>
                                <p>{info.description}</p>
                            </div>
                        </div>
                    </div>
                </section>
            ))}
        </>
    );
};

export default Webinfo;

