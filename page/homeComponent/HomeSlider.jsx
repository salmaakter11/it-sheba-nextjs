"use client"
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const HomeSlider = () => {
    // Array containing client data for each slide
    const slideData = [
        {
            item: 1,
            background: "/assets/img/background-it-sheba/it-sheba-bannar1.png",
            title: "Website & Software Development",
            subTitle: "We Will Design And Develop Website & Software",
            description: "We Will Design And Develop Website & Software",
            imageUrl: "/assets/img/background-it-sheba/web.png",
            btnText: "Our Projects",
            btnLink: "/Webdevelopment"
        },
        {
            item: 2,
            background: "/assets/img/background-it-sheba/hosting-bannar.jpg",
            title: "Domain & Hosting Support",
            subTitle: "Domain & Hosting Service",
            description: "20x Fast NVMe SSD | Bullet proof security | 100% Uptime | Free 30 Days Backup | Free SiteLock | Free SSL",
            imageUrl: "/assets/img/background-it-sheba/hosting.png",
            btnText: "Learn More",
            btnLink: "https://hostingsheba24.com/"
        },
        {
            item: 3,
            background: "/assets/img/background-it-sheba/graphics-banner-design.jpg",
            title: "Digital Marketing & Graphics Design",
            subTitle: "We Give Digital and Graphics Support",
            description: "We got an excellent team of graphics designer & digital marketing team. They are very creative and dedicated to support our client.",
            imageUrl: "/assets/img/background-it-sheba/graphics.png",
            btnText: "Contact",
            btnLink: "/contact"
        }
    ];

    // Slick carousel settings
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500,
        pauseOnHover: true,
    };

    return (
        <section className="hero-slider-section pb-4">
            <Slider {...settings} className="hero-slider-one custom-dot dot-right-center">
                {slideData.map(item => (
                    <div key={item.item} className="item" >
                        <div className="gradient-overly-right hero-equal-height ptb-100" style={{ backgroundImage: `url(${item.background})` }}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-6 col-lg-6">
                                        <div className="hero-content-wrap text-white position-relative z-index">
                                            <h1 className="slider-area-text">{item.title}</h1>
                                            <h2 className="text-white">{item.subTitle}</h2>
                                            <p className="lead">{item.description}</p>
                                            <div className="action-btns mt-4">
                                                <a href={item.btnLink} className="btn solid-white-btn mr-3">{item.btnText}</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-6">
                                        <div className="hero-content-wrap text-white position-relative z-index">
                                            <img src={item.imageUrl} alt={item.title} title={item.title} className='img-fluid' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </section>
        
    );
}

export default HomeSlider;
