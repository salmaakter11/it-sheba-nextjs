"use client"
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Client = () => {
    // Client data array
    const clientData = [
        { id: 1, src: "assets/img/partners/img/client logo-10.png", alt: "client logo" },
        { id: 2, src: "assets/img/partners/img/client logo-11.png", alt: "client logo" },
        { id: 3, src: "assets/img/partners/bangladesh-government.png", alt: "client logo" },
        { id: 4, src: "assets/img/partners/monir-group.jpg", alt: "client logo" },
        { id: 5, src: "assets/img/partners/img/client logo-04.png", alt: "client logo" },
        { id: 6, src: "assets/img/partners/img/client logo-05.png", alt: "client logo" },
        { id: 7, src: "assets/img/partners/img/client logo-06.png", alt: "client logo" },
        { id: 8, src: "assets/img/partners/img/client logo-07.png", alt: "client logo" },
        { id: 9, src: "assets/img/partners/img/client logo-08.png", alt: "client logo" },
        { id: 10, src: "assets/img/partners/img/client logo-09.png", alt: "client logo" },
        { id: 11, src: "assets/img/partners/fardin.png", alt: "client logo" },
        { id: 12, src: "assets/img/partners/amanot.png", alt: "client logo" },
    ];

    // Slider settings
    const settings = {
        dots: true,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 2,
        autoplay: true,
        rtl: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 8,
                },
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 5,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 0,
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    };

    return (
        <section className="client-section pb-100 pt-2">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-9 col-lg-8">
                        <div className="section-heading text-center mb-2">
                            <h2>Brands Who Keep Trust On Us</h2>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-md-12">
                        <div className="overlay-opacity-gradient"></div>
                        <Slider {...settings} className="clients-carousel">
                            {clientData.map((client) => (
                                <div key={client.id} className="item single-client">
                                    <img src={client.src} alt={client.alt} className="img-fluid client-img" style={{ width: '80px' }} />
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Client;
