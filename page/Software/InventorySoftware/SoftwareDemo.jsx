import React from "react";

const SoftwareDemo = () => {
    // Array containing demo items
    const demoItems = [
        {
            href: "",
            src: "assets/img/background-it-sheba/capital.jpg",
            alt: "Capital"
        },
        {
            href: "",
            src: "assets/img/it-sheba-img/inventory.webp",
            alt: "Inventory 1"
        },
        {
            href: "",
            src: "assets/img/it-sheba-img/inventory.webp",
            alt: "Inventory 2"
        }
    ];

    return (
        <>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="guide_heading_area">
                                <h3>Inventory Management Software Demo</h3>
                            </div>
                        </div>
                        {demoItems.map((item, index) => (
                            <div key={index} className="col-lg-4 col-md-6 col-sm-12 col-12">
                                <a href={item.href}>
                                    <div className="it-sheba_boxed">
                                        <img
                                            className="img_hover"
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

export default SoftwareDemo;
