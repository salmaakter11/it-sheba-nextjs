import React from 'react';
import Link from 'next/link';

const Services = () => {
    // Array of service objects
    const services = [
        {
            title: "Domain Registration",
            description: "Domain registration in Bangladesh ensures the same website name on the internet, with a wide selection of domain extensions available at reasonable prices. With over 25,000 new domains registered daily, it's crucial to register early to avoid a thief.",
            imageSrc: "assets/img/partners/doman.png",
            link: "Domain"
        },
        {
            title: "Hosting Services",
            description: "We provide affordable, safe web hosting services in Bangladesh, Our server is located in German. We offer corporate, dedicated, and shared servers, and offer dedicated and shared support. Start your search for the best hosting company in Bangladesh.",
            imageSrc: "assets/img/partners/hosting.png",
            link: "Hosting"
        },
        {
            title: "Digital Marketing",
            description: "Digital marketing is essential for modern businesses. Many agencies in Bangladesh claim to be top providers, but their claims are unsupported. Our agency, with over 2000 client testimonials, focuses on helping clients create business plans, analyze data, and generate ..",
            imageSrc: "assets/img/partners/digital-Marketing.png",
            link: "DigitalMarketing"
        },
        {
            title: "Web Development",
            description: "We have provided web design and development services, creating over 7,000 websites for clients.  Our dedication sets us apart from competitors, and we assign testing and quality assurance teams to review every element, section, and part of the website.",
            imageSrc: "assets/img/partners/web.png",
            link: "WebDevelopment"
        },
        {
            title: "Software Development",
            description: "Whether you need a web application, mobile app, or enterprise-level solution, we have the expertise to turn your vision into reality. From initial concept to final deployment, we'll work tirelessly to deliver a product that aligns with your business goals.",
            imageSrc: "assets/img/partners/Software-Development-PNG.png",
            link: "AccountingSoftware"
        },
        {
            title: "Social Media Management",
            description: " Social media management in Bangladesh has become popular due to significant changes in marketing strategies. Companies are striving to make social media platforms like Facebook, Instagram, and YouTube top for advertising. However ..",
            imageSrc: "assets/img/partners/social-media.png",
            link: "DigitalMarketing"
        },
      
         
    ];

    return (
        <section className="our-services ptb-100 gray-light-bg">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-9 col-lg-8">
                        <div className="section-heading text-center mb-5 mb-sm-5 mb-md-3 mb-lg-3">
                            <h2>Our Services</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {services.map((service, index) => (
                        <div key={index} className="col-md-6 col-lg-4">
                            <div className="service-it" href={service.link}>
                                <div className="single-service-plane text-center rounded white-bg shadow-sm p-5 mt-md-4 mt-lg-4">
                                    <div className="service-border">
                                        <img src={service.imageSrc} alt={service.title} className="img-fluid service-img mb-4" width="70" />
                                    </div>
                                    <div className="service-plane-content">
                                        <h3 className="h5">{service.title}</h3>
                                        <p className="service-text">{service.description}</p>
                                        <a href={service.link} className="view-details-link"> more info<span className="ti-angle-right"></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Services;
