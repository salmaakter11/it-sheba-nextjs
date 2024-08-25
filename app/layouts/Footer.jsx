"use client"
import React, { useEffect } from 'react';

const Footer = () => {

    useEffect(() => {
        // Scroll to top button functionality
        const scrollToTopButton = document.querySelector('.scroll-to-target');

        const handleScroll = () => {
            if (window.scrollY > window.innerHeight) {
                scrollToTopButton.classList.add('open');
            } else {
                scrollToTopButton.classList.remove('open');
            }
        };

        const handleScrollToTop = () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };

        window.addEventListener('scroll', handleScroll);
        scrollToTopButton.addEventListener('click', handleScrollToTop);

        // Cleanup event listeners on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
            scrollToTopButton.removeEventListener('click', handleScrollToTop);
        };
    }, []);

    return (
        <>
            {/* <!--footer section start--> */}
            <footer className="footer-section">
                {/* <!--footer top start--> */}
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3 col-sm-6">
                                <div className="row footer-top-wrap">
                                    <div className="col-12">
                                        <div className="footer-nav-wrap text-white">
                                            <h4 className="text-white">About Company</h4>
                                            <a href="Company-profile.html"> <p className='text-white'>We develop innovative and creative products and services
                                                that provide total
                                                information technology solutions.</p></a>
                                            <h4 className="text-white">Membership </h4>
                                            <a className="navbar-brand" href="https://basis.org.bd/company-profile/23-01-015" target="_blank" ><img src="assets/img/partners/basis.png" width="80" alt="logo"
                                                className="img-fluid" /></a>
                                            <a className="navbar-brand" href="https://e-cab.net/company-profile/2146/it-sheba-24" target="_blank" ><img src="assets/img/partners/ecab.png" width="80" alt="logo"
                                                className="img-fluid" /></a>
                                            <ul className="list-inline social">
                                                <li className="list-inline-item"><a href="https://www.facebook.com/ITShebaLimited/"
                                                    target="_blank"><span className="ti-facebook"></span></a></li>
                                                <li className="list-inline-item"><a
                                                    href="https://www.linkedin.com/company/it-sheba-limited"
                                                    target="_blank"><span className="ti-linkedin"></span></a></li>
                                                <li className="list-inline-item"><a href="https://www.instagram.com/itsheba.24/"
                                                    target="_blank"><span className="ti-instagram"></span></a></li>
                                                <li className="list-inline-item"><a
                                                    href="https://twitter.com/i/flow/login?redirect_after_login=%2FItsheba24dotcom"
                                                    target="_blank"><span className="ti-twitter"></span></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="footer-nav-wrap text-white">
                                    <h4 className="text-white">COMPANY</h4>
                                    <ul className="nav flex-column">
                                        <li className="nav-item">
                                            <a className="nav-link" href="CompanyProfile">Company-profile</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="Messegefounder">Founder Messege</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="PaymentSystem">Payment System</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="OurClients">Our Clients</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="footer-nav-wrap text-white">
                                    <h4 className="text-white">Services</h4>
                                    <ul className="nav flex-column">
                                        <li className="nav-item">
                                            <a className="nav-link" href="WebDevelopment">Web Development</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="AccountingSoftware">Software Development</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="EmailMarketing">Email Marketing</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="Domain">Domain / Hosting</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="WhatsappMarketing">WhatsApp Marketing</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="footer-nav-wrap text-white">
                                    <h4 className="text-white">Address</h4>
                                    <ul className="nav flex-column">
                                        <li className="nav-item">
                                            <a className="nav-link" href="https://maps.app.goo.gl/UVND17n8Qo6ThsiF7"><span className="fas fa-location mr-2"></span> Mukto Bangla
                                                Shopping Complex, 5th Floor, Space No:(51-52), Mirpur-1, Dhaka 1216</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="tel:+8801906-297862"><span
                                                className="fas fa-phone mr-2"></span> Hotline: +8801906-297862</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="tel:+8801906297861"> <span
                                                className="fas fa-phone mr-2"></span> Emergency: +88 01906297861</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="mailto:info@itsheba24.com"> <span
                                                className="fas fa-mail-bulk mr-2"></span> info@itsheba24.com </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="mailto:itsheba24bd@gmail.com"> <span
                                                className="fas fa-mail-bulk mr-2"></span> itsheba24bd@gmail.com</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!--footer top end--> */}

                {/* <!--footer copyright start--> */}
                <div className="footer-bottom gray-light-bg py-3">
                    <div className="container">
                        <div className="row align-items-center justify-content-between">
                            <div className="col-md-5 col-lg-5">
                                <p className="copyright-text pb-0 mb-0">Copyrights © 2024. All rights reserved by <a
                                    href="http://itsheba.com.bd/" target="_blank">IT Sheba Limited</a>
                                </p>
                            </div>
                            <div className="col-md-7 col-lg-6">
                                <div className="payment-method text-right">
                                    <ul className="list-inline">
                                        <li className="list-inline-item">
                                            <a href="https://shop.bkash.com/it-sheba-24-dot-com01906297861/paymentlink/default-payment"
                                                target="_blank"> <img src="assets/img/it-sheba-payment/bkash.png" alt="visa"
                                                    width="50" /></a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="" target="_blank"> <img src="assets/img/it-sheba-payment/roket.jpeg"
                                                alt="amex" width="50" /></a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="" target="_blank"><img src="assets/img/it-sheba-payment/nogod.jpg"
                                                alt="mastercard" width="50" /></a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="" target="_blank"><img src="assets/img/it-sheba-payment/payment-amex.svg"
                                                alt="amex" width="50" /></a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="" target="_blank"> <img
                                                src="assets/img/it-sheba-payment/payment-mastercard.svg" alt="mastercard"
                                                width="50" /></a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="" target="_blank"> <img src="assets/img/it-sheba-payment/payment-visa.svg"
                                                alt="visa" width="50" /></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!--footer copyright end--> */}
            </footer>
            {/* <!--footer section end--> */}
            {/* <!--bottom to top button start--> */}
            <button className="scroll-top scroll-to-target" data-target="body">
                <span className="ti-arrow-up"></span>
            </button>
            {/* <!--bottom to top button end--> */}
        </>
    );
}

export default Footer;
