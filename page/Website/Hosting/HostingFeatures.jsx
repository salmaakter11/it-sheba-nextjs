import React from 'react';

const HostingFeatures = () => {
    const hostingfeatcher_data = [
        {
            id: 1,
            heading: "Bangladesh's Website Hosting Dynamics",
            paragraphs: [
                "Bangladesh is experiencing a digital revolution, which has increased demand for reliable hosting services. The necessity of having a trustworthy online presence has never been greater for both established businesses and emerging startups.",
                "Many businesses struggle with issues like excessive costs, unstable server performance, and poor customer support even with the increasing demand. These obstacles give hosting companies a chance to cater to the particular requirements of the Bangladeshi market."
            ]
        },
        {
            id: 2,
            heading: "IT SHEBA: Inventor of Affordable Hosting Solutions",
            paragraphs: [
                "IT SHEBA is a prominent hosting provider in Bangladesh that is distinguished by its dedication to providing premium services at reasonable costs. IT SHEBA was founded with the goal of empowering businesses online, and it has since come to be associated with affordability and dependability. The top-ranked and finest company in Bangladesh for website hosting is IT SHEBA.",
                "The hosting packages offered by IT SHEBA are designed to meet the various demands of companies, with a selection of choices ranging from shared hosting to dedicated servers. The article will go into these plans' specifics, highlighting how cost-effective they are without sacrificing performance.",
                "IT SHEBA prides itself on providing robust infrastructure and cutting-edge technology to ensure optimal website performance and minimal downtime. The article will highlight the importance of these features in the context of IT SHEBA hosting services."
            ]
        },
        {
            id: 3,
            heading: "A Unique Set of Features for IT SHEBA",
            paragraphs: [
                "One of the main features of IT SHEBA hosting services is outstanding customer support. This article aims to demonstrate IT SHEBA's dedication to customer satisfaction by examining the range of support channels that are available, such as live chat, ticketing systems, and phone support.",
                "Online businesses have the utmost concern for security. The security measures put in place by IT SHEBA, which guarantee the integrity and safety of hosted websites, will be covered in this article. These features include robust firewalls, frequent backups, and SSL certificates.",
                "Businesses need more hosting as they expand. Hosting solutions from IT SHEBA are made to scale easily to meet the changing needs of applications and websites. The adaptability of the IT SHEBA hosting infrastructure will be emphasized in the article."
            ]
        },
        {
            id: 4,
            heading: "IT SHEBA's Effect on Bangladesh's Website Hosting",
            paragraphs: [
                "The observable influence on clients' internet endeavors will be demonstrated through real-world case studies of companies that have prospered with IT SHEBA hosting services.",
                "We'll look at IT SHEBA's initiatives to build a friendly online community and help the Bangladeshi digital ecosystem flourish. This covers campaigns, collaborations, and learning materials meant to strengthen regional companies.",
                "IT SHEBA stands at the forefront of revolutionizing website hosting in Bangladesh. By combining affordability, reliability, and a customer-centric approach, IT SHEBA has become the go-to hosting provider for businesses seeking a competitive edge in the digital landscape. As Bangladesh continues its journey towards a digital future, IT SHEBA remains a steadfast partner, empowering businesses to thrive online at an unprecedented low cost."
            ]
        }
    ];

    return (
        <section className="feature-tab-section">
            <div className="container">
                {hostingfeatcher_data.map(item => (
                    <div key={item.id} className="Domain ptb-50">
                        <h4 className="heading-color">{item.heading}</h4>
                        {item.paragraphs.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>
                ))}
                <div className="row justify-content-center">
                    <div>
                        <img
                            src="assets/img/partners/Web-Hosting.png"
                            alt=""
                            className="img-fluid"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HostingFeatures;
