import React from 'react';

const ClientRequirements = () => {
    // Define an array of objects containing feature data
    const features = [
        {
            id: 1,
            image: "assets/img/partners/Client Requirements.jpeg",
            title: "Client Requirements",
            description: "Before taking action, we have lengthy discussions with our clients. We are aware that having a clear project concept is essential before beginning."
        },
        {
            id: 2,
            image: "assets/img/partners/Keep Commitment.jpeg",
            title: "Keep Committed",
            description: "IT Sheba Limited is always dedicated to giving clients the best possible experience by having a feature-rich website for their company."
        },
        {
            id: 3,
            image: "assets/img/partners/sufficient Security.png",
            title: "Sufficient Security",
            description: "Our web development team consistently uses the best coding practices to protect your information, and secure hosts are also employed."
        },
        {
            id: 4,
            image: "assets/img/partners/Assign Professional Team.png",
            title: "Assign Professional Team",
            description: "We assign experienced teams to develop, test, deliver projects using client`s preferred web development technology, providing updates and specialized teams based on web technology."
        },
        {
            id: 5,
            image: "assets/img/partners/Divide Into Sprint.png",
            title: "Divide Into Sprint",
            description: "The project manager divided the project into manageable sprints, with each week being a separate sprint. After completing assigned tasks, the development team moves on to the next sprint."
        },
        {
            id: 6,
            image: "assets/img/partners/Competitive Pricing.webp",
            title: "Competitive Expenses",
            description: "Our clients face high fees for web development projects, but we prioritize acquiring new business over paying for new banknotes, aiming to create a win-win situation for both parties."
        }
    ];

    return (
        <section className="feature-tab-section ptb-100">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-9 col-lg-8">
                        <div className="section-heading text-center mb-5 mb-sm-5 mb-md-3 mb-lg-3">
                            <h3>Which Approach Do We Take When <br /> Working on the Web Development Project?</h3>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {features.map(feature => (
                        <div className="col-md-4 col-lg-4" key={feature.id}>
                            <div className="feature-feature-list p-3 text-center">
                                <img className="feature-feature-list-img" src={feature.image} alt={feature.title} width="70"/>
                                <h6>{feature.title}</h6>
                                <p>{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ClientRequirements;
