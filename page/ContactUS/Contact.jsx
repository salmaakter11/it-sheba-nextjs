
const Contact = () => {
    return (
        <>
            <div className="main">
                {/* <!--breadcrumb bar start--> */}
                <div className="breadcrumb-bar py-3 gray-light-bg border-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="custom-breadcrumb">
                                    <ol className="breadcrumb d-inline-block bg-transparent list-inline py-0 pl-0">
                                        <li className="list-inline-item breadcrumb-item"><a href="index.html">Home</a></li>
                                        <li className="list-inline-item breadcrumb-item active">Contact Us</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!--breadcrumb bar end--> */}

                {/* <!--contact us section start--> */}
                <section className="contact-us-section ptb-100">
                    <div className="container">
                        <div className="col-md-12 ptb-40">
                            <div className="contact-us-content">
                                <p>IT Sheba 24 Dot Com is committed to exporting quality software worldwide. Customer
                                    satisfaction, transparency and corporate responsibility are the pillars of our mission.
                                    So feel free to contact with us.</p>

                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="contact-us-form gray-light-bg rounded p-5">
                                <form action="#" method="POST" id="contactForm" className="contact-us-form mt-3"
                                >
                                    <div className="row justify-content-center">
                                        <div className="col-md-9 col-lg-8">
                                            <div className="section-heading-color text-center mb-3">
                                                <h3>Contact Us</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <input type="hidden" name="csrfToken" id="csrfToken" value="" />
                                    <div className="form-row">
                                        <div className="col-12">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="name" id="name"
                                                    placeholder="Enter name" required="required" />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group">
                                                <input type="email" className="form-control" name="email" id="email"
                                                    placeholder="Enter email" required="required" />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group">
                                                <input type="phone" className="form-control" name="phone" id="phone"
                                                    placeholder="Enter phone number" required="required" />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group">
                                                <textarea name="message" id="message" className="form-control" rows="7" cols="25"
                                                    placeholder="Message"></textarea>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="gridCheck" />
                                                <label className="form-check-label" >
                                                    I consent to IT Sheba 24 storing my submitted information so they can
                                                    respond to my inquiry
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-sm-12 mt-3">
                                            <button type="submit" className="btn primary-solid-btn" id="btnContactUs">
                                                Send Message
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!--contact us  start--> */}
                <section className="contact-us-promo ptb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="card single-promo-card single-promo-hover text-center">
                                    <div className="card-body py-5">
                                        <div className="pb-2">
                                            <span className="ti-location-pin icon-sm color-primary"></span>
                                        </div>
                                        <div>
                                            <h5 className="mb-1">Location</h5>
                                            <p className="text-muted mb-0">Mukto Bangla Shopping Complex, 5th Floor, Space
                                                No:(51-52), Mirpur-1, Dhaka 1216</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="card single-promo-card single-promo-hover text-center">
                                    <div className="card-body py-5">
                                        <div className="pb-2">
                                            <span className="ti-mobile icon-sm color-primary"></span>
                                        </div>
                                        <div>
                                            <h5 className="mb-1">Contact Number</h5>
                                            <p><a className="text-muted mb-0" href="tel:+8801906-297862"><span
                                                className="fas fa-phone mr-2 "></span>Hotline: +88 01906-297862
                                            </a></p>
                                            <p><a className="text-muted mb-0" href="tel:+8801906297861"><span
                                                className="fas fa-phone mr-2 "></span>Emergency: +88 01906297861
                                            </a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="card single-promo-card single-promo-hover text-center">
                                    <div className="card-body py-5">
                                        <div className="pb-2">
                                            <span className="ti-email icon-sm color-primary"></span>
                                        </div>
                                        <div>
                                            <h5 className="mb-0">Mail Us</h5>
                                            <p ><a className="text-muted mb-0" href="mailto:info@itsheba24.com"><span
                                                className="fas fa-mail-bulk mr-2"></span>info@itsheba24.com</a></p>
                                            <p ><a className="text-muted mb-0" href="mailto:itsheba24bd@gmail.com"><span
                                                className="fas fa-mail-bulk mr-2"></span>itsheba24bd@gmail.com</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!--contact us  end--> */}

            </div>
        </>
    )
}
export default Contact;