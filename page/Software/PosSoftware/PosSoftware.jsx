import React from "react";
import OrderFrom from "../AccountingSoftware/OrderFrom";
const PosSoftware = () => {
    return (
        <>
            <div className="main">
              
                <section className="feature-tab-section ptb-50">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-12 col-lg-12">
                                <div className="section-heading-color  mb-2">
                                    <h3>Best POS Software in Bangladesh | POS Software Price in BD</h3>
                                </div>
                            </div>
                        </div>
                        <div className="pt-5">
                            <p>
                                In Bangladesh, IT SHEBA offers pos software and pos machines. Point of
                                sale is known as POS. A computer, POS printers, barcode scanners, and
                                POS software are required for a POS system. Our website will provide
                                you with the price of a pos machine in Bangladesh. Our system is
                                utilised in restaurants as well. The best pos software in Bangladesh
                                is what we sell. Give us a call to
                                <a className="tag" href="tel:+8801906-297862">
                                    +8801906-297862
                                </a>{" "}
                                find out the cost of pos software in Bangladesh. Our point-of-sale
                                system serves as shop management software, restaurant pos software,
                                and shop management system.
                            </p>
                            <div className="row justify-content-center ">
                                <div>
                                    <img
                                        src="assets/img/it-sheba-img/monitor cash.png"
                                        alt=""
                                        className="img-fluid"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* hospital Management start*/}
                <section className="feature-tab-section ptb-40">
                    <div className="container">
                        <div className="row">
                            <div className=" col-lg-8  col-sm-12 ">
                                <h5 className="heading-color-it">Software Features:</h5>
                                <ul style={{ margin: 10 }}>
                                    <li>
                                        Customers: You can add unlimited customers’ names and details like
                                        address, mobile number, email address, etc.
                                    </li>
                                    <li>
                                        Items: You can add unlimited products or items here with stock
                                        information, supplier name, inventory info, barcode number, etc.
                                    </li>
                                    <li>
                                        Sales: This option helps your salesperson to sell your product
                                        from stock &amp; receive the payment by cash or card
                                    </li>
                                    <li>
                                        Employees: You can add unlimited stuff with an individual access
                                        level. An employee can use this software according to their access
                                        level.
                                    </li>
                                    <li>
                                        Store Configuration: You can set or edit your shop information,
                                        address, phone number here.
                                    </li>
                                    <li>
                                        Barcode integrated purchase and sales system is available here.
                                    </li>
                                    <li>
                                        Suppliers: You can save your supplier information here with their
                                        contact details.
                                    </li>
                                    <li>
                                        Receiving: If the client backs your product, this option will help
                                        you receive the product that will hit your inventory.
                                    </li>
                                </ul>
                            </div>
                            <div className=" col-lg-4   col-sm-12">
                                <img
                                    src="assets/img/it-sheba-img/cash-2.png"
                                    alt=""
                                    className="img-fluid"
                                />
                            </div>
                        </div>
                    </div>
                </section>
                {/* hospital Management end*/}
                <section className="feature-tab-section ptb-40">
                    <div className="container">
                        <div className="row">
                            <div className=" col-lg-12  col-sm-12 ">
                                <h5 className="heading-color-it">FACILITY:</h5>
                                <ul style={{ margin: 10 }}>
                                    <li>Unlimited User</li>
                                    <li>Access from anywhere</li>
                                    <li>Unlimited PC access</li>
                                    <li>Unlimited Employee Access</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <OrderFrom />
                {/*pricing with switch section end*/}
            </div>

        </>
    )
}
export default PosSoftware;