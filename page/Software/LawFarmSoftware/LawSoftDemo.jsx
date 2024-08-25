import React from 'react';

const LawSoftDemo = () => {
    // Array containing demo details
    const demoItems = [
        {
            src: "assets/img/background-it-sheba/law2.webp",
            alt: "Law Software Demo 1",
            link: "#" // Update with the actual link if needed
        },
        {
            src: "assets/img/background-it-sheba/law2.webp",
            alt: "Law Software Demo 2",
            link: "#" // Update with the actual link if needed
        },
        {
            src: "assets/img/background-it-sheba/law2.webp",
            alt: "Law Software Demo 3",
            link: "#" // Update with the actual link if needed
        },
        // Add more demo items as needed
    ];

    return (
        <>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="guide_heading_area">
                                <h3>Law Firm Management Software Demo:</h3>
                            </div>
                        </div>
                        {/* Dynamically render demo items */}
                        {demoItems.map((item, index) => (
                            <div key={index} className="col-lg-4 col-md-6 col-sm-12 col-12">
                                <a href={item.link}>
                                    <div className="it-sheba_boxed">
                                        <img
                                            className="img_hover img-fluid"
                                            src={item.src}
                                            alt={item.alt}
                                        />
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default LawSoftDemo;
