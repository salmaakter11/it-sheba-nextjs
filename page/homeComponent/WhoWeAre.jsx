const clients = [
    { item: 1, icon: "assets/img/partners/experience-icon.png.webp", value: "4+", label: "YEARS OF EXPERIENCES" },
    { item: 2, icon: "assets/img/partners/it-customer.png", value: "20000+", label: "NUMBER OF CUSTOMERS" },
    { item: 3, icon: "assets/img/partners/it-employee-logo.png", value: "80+", label: "NUMBER OF EMPLOYEES" },
    { item: 4, icon: "assets/img/partners/IT-present-in-four-different-countries.png", value: "8+", label: "DIFFERENT COUNTRIES" },
    { item: 5, icon: "assets/img/partners/IT-project.png", value: "7000+", label: "COMPLETED PROJECTS" },
    { item: 6, icon: "assets/img/partners/web.png", value: "1200+", label: "WEBSITES CREATED" }
];

const ClientStats = () => {
    return (

        <>
            {/* Who We Are section start */}
            <section className="feature-tab-section ptb-40">
                <div className="container">
                <div className="row">
                        <div className="col-xl-5 col-lg-3 col-12 order-xl-first align-self-center">
                            <div className="image-box fadein text-xl-right text-center">
                                <img src="assets/img/partners/about.png" alt="wp-hosting" className="img-fluid" />
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-9 col-12 order-lg-last ">
                            <h2>Who We Are</h2>
                            <p>We are Bangladesh leading and most well-known web design and development firm in Dhaka. We
                                started our careers in the technology industry in 2020. There weren't many businesses in
                                this industry when we first started out. While web design and development were the first
                                services we offered, over time we expanded our service offering to include software
                                development, digital marketing, email marketing, SEO, bulk SMS marketing, telemarketing, and
                                WhatsApp marketing. When we first began, we had just three employees. Today, our team
                                consists of seventy professionals, each with specialized knowledge in a particular field.
                            </p>
                            <p>We extended our services to the global market after growing to be a respected software
                                provider in Bangladesh.</p>
                        </div>
                    </div>
                    <div className="row">
                        {clients.map(client => (
                            <div key={client.item} className="col-md-3 col-lg-2  col-sm-6">
                                <div className="feature-feature-list p-3 text-center">
                                    <img className="feature-feature-list-img" src={client.icon} alt="" width="70" />
                                    <h5 className="mb-2 p-1">{client.value}</h5>
                                    <h6>{client.label}</h6>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* Who We Are section end */}
        </>

    );
};

export default ClientStats;