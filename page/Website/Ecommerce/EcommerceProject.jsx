import React from "react";


const EcommerceProject = () => {

    const projects = [
        {
            name: 'ekotamart',
            image: 'assets/img/it-sheba-img/project2.JPG',
            link: 'https://ekotamart.com/'
        },
       
    ];

    return (
        <section>
            <div className="container">
                <div className="row">
                    {projects.map((project, index) => (
                        <div key={index} className="col-lg-4 col-md-6 col-sm-12 col-12">
                            <a href={project.link}>
                                <div className="it-sheba_boxed">
                                    <img className="img_hover" src={project.image} alt="Project" />
                                    <div className="it-sheba_content">
                                        <h3>{project.name}</h3>
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EcommerceProject;
