import React from 'react';

const WorkPortfolio = () => {
    const portfolioItems = [
        {
            item: 1,
            image: "assets/img/background-it-sheba/capital.jpg",
            alt: "gallery image",
            link: "https://www.capitalnews24.net/ " 
        }
        
    ];

    return (
        <section className="our-services ptb-100">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-9 col-lg-8">
                        <div className="section-heading text-center mb-5 mb-sm-5 mb-md-3 mb-lg-3">
                            <h3>Work Portfolio</h3>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {portfolioItems.map(item => (
                        <div className="col-md-4 col-lg-4" key={item.item}>
                            <a href={item.link} target="_blank" rel="noopener noreferrer">
                                <img src={item.image} className="img-fluid rounded" alt={item.alt} />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WorkPortfolio;
