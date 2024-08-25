import React from 'react';
const TeamMember = () => {
    const teamMembers = [
        {
            name: 'Md. Monirul Islam',
            role: 'Managing Director',
            image: 'assets/img/it-sheba-team/Md.-Monirul-Islam.jpg',
            socialLinks: [
                { icon: 'ti-facebook', link: 'https://www.facebook.com/LionMonirulIslam' },
                { icon: 'ti-linkedin', link: '#' },
                { icon: 'ti-dribbble', link: '#' }
            ]
        },
        {
            name: 'MD. GHULAM MARTOZA',
            role: 'Chief Operating Officer (COO)',
            image: 'assets/img/it-sheba-team/MD.-GHULAM-MARTOZA-sohel.png.jpg',
            socialLinks: [
                { icon: 'ti-facebook', link: 'https://www.facebook.com/martoza.sohel?mibextid=ZbWKwL' },
                { icon: 'ti-linkedin', link: '#' },
                { icon: 'ti-dribbble', link: '#' }
            ]
        },
        {
            name: 'SUMIYA SARMIN',
            role: 'Project Coordinator',
            image: 'assets/img/it-sheba-team/sumaiya.jpg',
            socialLinks: [
                { icon: 'ti-facebook', link: 'https://www.facebook.com/profile.php?id=100039093974242&mibextid=ZbWKwL' },
                { icon: 'ti-linkedin', link: '#' },
                { icon: 'ti-dribbble', link: '#' }
            ]
        },
        {
            name: 'MD. BARKAT ULLAH',
            role: 'Senior Graphic Designer',
            image: 'assets/img/it-sheba-team/MD.-BARKAT-ULLAH.jpg',
            socialLinks: [
                { icon: 'ti-facebook', link: 'https://www.facebook.com/barkat.ulla.73?mibextid=ZbWKwL' },
                { icon: 'ti-linkedin', link: '#' },
                { icon: 'ti-dribbble', link: '#' }
            ]
        },
        {
            name: 'SALMA AKTER',
            role: 'Front-End Developer',
            image: 'assets/img/it-sheba-team/salma.jpg',
            socialLinks: [
                { icon: 'ti-facebook', link: 'https://www.facebook.com/Salma.com.37' },
                { icon: 'ti-linkedin', link: '#' },
                { icon: 'ti-dribbble', link: '#' }
            ]
        },
        {
            name: 'MD. SABBIR HOSSAIN',
            role: 'Senior Software Engineer',
            image: 'assets/img/it-sheba-team/MD. SABBIR HOSSAIN.jpg',
            socialLinks: [
                { icon: 'ti-facebook', link: '#' },
                { icon: 'ti-linkedin', link: '#' },
                { icon: 'ti-dribbble', link: '#' }
            ]
        },
        {
            name: 'MD. SHORIFUL ISLAM',
            role: 'Junior Software Engineer',
            image: 'assets/img/it-sheba-team/MD. SHORIFUL ISLAM.jpg',
            socialLinks: [
                { icon: 'ti-facebook', link: '#' },
                { icon: 'ti-linkedin', link: '#' },
                { icon: 'ti-dribbble', link: '#' }
            ]
        },
        {
            name: 'MD GOLAM MOULA MOJUMDER',
            role: 'Software Engineer',
            image: 'assets/img/it-sheba-team/MD GOLAM MOULA MOJUMDER.jpeg',
            socialLinks: [
                { icon: 'ti-facebook', link: '#' },
                { icon: 'ti-linkedin', link: '#' },
                { icon: 'ti-dribbble', link: '#' }
            ]
        },
       
        {
            name: 'ASIF MOSTOFA MD NISHAT',
            role: 'Business Executive',
            image: 'assets/img/it-sheba-team/ASIF MOSTOFA MD NISHAT.jpeg',
            socialLinks: [
                { icon: 'ti-facebook', link: '#' },
                { icon: 'ti-linkedin', link: '#' },
                { icon: 'ti-dribbble', link: '#' }
            ]
        },
        {
            name: 'SOURAV MOLLA',
            role: 'Marketing Executive',
            image: 'assets/img/it-sheba-team/SOURAV-MOLLA.jpeg',
            socialLinks: [
                { icon: 'ti-facebook', link: '#' },
                { icon: 'ti-linkedin', link: '#' },
                { icon: 'ti-dribbble', link: '#' }
            ]
        },
        {
            name: 'MST ASMIRA KHATUN',
            role: 'Marketing Executive',
            image: 'assets/img/it-sheba-team/MST ASMIRA KHATUN.jpg',
            socialLinks: [
                { icon: 'ti-facebook', link: '#' },
                { icon: 'ti-linkedin', link: '#' },
                { icon: 'ti-dribbble', link: '#' }
            ]
        },
        {
            name: 'MOHAMMAD JUBAYER RAHMAN KHAN',
            role: 'Marketing Executive',
            image: 'assets/img/it-sheba-team/MOHAMMAD JUBAYER RAHMAN KHAN.jpeg',
            socialLinks: [
                { icon: 'ti-facebook', link: '#' },
                { icon: 'ti-linkedin', link: '#' },
                { icon: 'ti-dribbble', link: '#' }
            ]
        },
        {
            name: 'MD. SHAGOR SHEIKH',
            role: 'Junior Executive',
            image: 'assets/img/it-sheba-team/MD. SHAGOR SHEIKH.jpg',
            socialLinks: [
                { icon: 'ti-facebook', link: 'https://www.facebook.com/profile.php?id=61553863624055' },
                { icon: 'ti-linkedin', link: '#' },
                { icon: 'ti-dribbble', link: '#' }
            ]
        },
        {
            name: 'ANAMUL ISLAM',
            role: 'Junior Executive',
            image: 'assets/img/it-sheba-team/anamul.jpeg',
            socialLinks: [
                { icon: 'ti-facebook', link: '#' },
                { icon: 'ti-linkedin', link: '#' },
                { icon: 'ti-dribbble', link: '#' }
            ]
        },
        
       
    ];

    return (
        <div className="main">
            
            <section className="our-team-section ptb-100 gray-light-bg">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 col-lg-8">
                            <div className="section-heading text-center mb-3">
                                <h2>Our Expert Team</h2>
                                <p>All of our team are very dedicated with their responsibility and services. They are very hardworking and resourceful for your service.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="our-team-section  gray-light-bg">
                <div className="container">
                    <div className="section-heading-color text-center mb-3">
                        <h3>Management</h3>
                    </div>
                    <div className="row justify-content-center">
                        {teamMembers.slice(0, 2).map((member, index) => (
                            <div key={index} className="col-xxl-4 col-md-3">
                                <div className="section_title_wrapper text-center mb-50">
                                    <div className="staff-member mt-md-4 mt-lg-4">
                                        <div className="card text-center border-0 shadow-sm">
                                            <img src={member.image} alt={member.name} className="card-img-top" />
                                            <div className="card-body">
                                                <h6 className="teacher mb-0">{member.name}</h6>
                                                <span>{member.role}</span>
                                                <ul className="list-inline pt-2 social">
                                                    {member.socialLinks.map((link, idx) => (
                                                        <li key={idx} className="list-inline-item">
                                                            <a href={link.link} target="_blank"><span className={link.icon}></span></a>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="our-team-section ptb-50 gray-light-bg">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 col-lg-8">
                            <div className="section-heading-color text-center mb-3">
                                <h3>Team Members</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {teamMembers.slice(2).map((member, index) => (
                            <div key={index} className="col-md-6 col-lg-3">
                                <div className="staff-member mt-md-4 mt-lg-4">
                                    <div className="card text-center border-0 shadow-sm">
                                        <img src={member.image} alt={member.name} className="card-img-top" />
                                        <div className="card-body">
                                            <h6 className="teacher mb-0">{member.name}</h6>
                                            <span>{member.role}</span>
                                            <ul className="list-inline pt-2 social">
                                                {member.socialLinks.map((link, idx) => (
                                                    <li key={idx} className="list-inline-item">
                                                        <a href={link.link} target="_blank"><span className={link.icon}></span></a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TeamMember;
