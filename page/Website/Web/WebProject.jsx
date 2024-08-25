import React from "react";
import Client from "../../homeComponent/Client";

const WebProject = () => {
    // Array of web projects
    const projects = [
        {
            name: 'Monir Group',
            image: 'assets/img/it-sheba-img/project.JPG',
            link: 'https://www.monirgroup.net/'
        },
    ];

    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <Client/>
                    </div>
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


export default WebProject;


// import React, { useState, useEffect } from "react";
// import Client from "../../homeComponent/Client";

// const WebProject = () => {
//     const [projects, setProjects] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         fetch('http://api.quotable.io/random')  
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok');
//                 }
//                 return response.json();
//             })
//             .then(data => {
//                 setProjects(data);
//                 setLoading(false);
//             })
//             .catch(error => {
//                 setError(error);
//                 setLoading(false);
//             });
//     }, []);

//     if (loading) {
//         return <div>Loading...</div>;
//     }

//     if (error) {
//         return <div>Error: {error.message}</div>;
//     }

//     return (
//         <section>
//             <div className="container">
//                 <div className="row">
//                     <div className="col-lg-12">
//                         <Client />
//                     </div>
//                     {projects.map((project, index) => (
//                         <div key={index} className="col-lg-4 col-md-6 col-sm-12 col-12">
//                             <a href={project.link} target="_blank" rel="noopener noreferrer">
//                                 <div className="it-sheba_boxed">
//                                     <img className="img_hover" src={project.image} alt={project.name} />
//                                     <div className="it-sheba_content">
//                                         <h3>{project.name}</h3>
//                                     </div>
//                                 </div>
//                             </a>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default WebProject;
