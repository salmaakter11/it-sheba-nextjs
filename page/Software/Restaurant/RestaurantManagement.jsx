import React from "react";
import OrderFrom from "../AccountingSoftware/OrderFrom";
import RestaurantsoftPackege from "./RestaurantsoftPackege";
const RestaurantManagement = () => {
    return (
        <>
            <div className="main">

                <section className="feature-tab-section ptb-50">
                    <div className="container">
                        <div className="row ">
                            <div className="col-md-9 col-lg-12">
                                <div className="section-heading mb-2">
                                    <h4>
                                        Bangladesh's Top Restaurant Management System | Restaurant
                                        Inventory Software
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="pt-5">
                            <div className="row justify-content-center">
                                <div>
                                    <img
                                        src="assets/img/it-sheba-img/Restaurant Management Software.png"
                                        alt="img"
                                        className="img-fluid"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <RestaurantsoftPackege />

                <section className="feature-tab-section ptb-40">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12 col-lg-9 col-12  ">
                                <h5>Restaurant Management System POS Software </h5>
                                <p>
                                    Restaurant point-of-sale(POS) or restaurant management system
                                    software is a vital component for managing the order. Features of
                                    KHANA Software are below:
                                </p>
                                <ul style={{ margin: 10 }}>
                                    <li>Take Order from customer</li>
                                    <li>Manage online order</li>
                                    <li>Check food list</li>
                                    <li>Token printing system</li>
                                    <li>Manage on-going order</li>
                                    <li>Find today’s orders</li>
                                    <li>Print invoice for complete orders</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="feature-tab-section ptb-40">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12 col-lg-9 col-12  ">
                                <h5>Restaurant Order System</h5>
                                <p>
                                    The most crucial component of any restaurant management software is
                                    an order management system. Because of this, KHANA has a useful
                                    order management feature that aids in customer order management. It
                                    also assists in carrying out all order-related tasks automatically.
                                    To manage orders, there are four distinct lists.
                                </p>
                                <ul style={{ margin: 10 }}>
                                    <li>Order list</li>
                                    <li>Pending order list</li>
                                    <li> Complete order</li>
                                    <li> Cancel order</li>
                                </ul>
                            </div>
                            <div className="col-xl-12 col-lg-9 col-12  ">
                                <h5>Restaurant Production System</h5>
                                <p>
                                    To oversee every one of your offerings Production is a dynamic
                                    product management system included in our restaurant management
                                    system. You can effectively manage your production system by using
                                    this software. You can also keep track of new productions and your
                                    production lists.
                                </p>
                            </div>
                            <div className="col-xl-12 col-lg-9 col-12  ">
                                <h5>Dashboard</h5>
                                <p>
                                    The dashboard is a very important part of any software. To bring all
                                    the necessary information about your business to your fingertip, we
                                    make an outstanding dashboard. You will get the list of.
                                </p>
                                <ul style={{ margin: 10 }}>
                                    <li>Latest Order.</li>
                                    <li>New Reservation.</li>
                                    <li> Latest Online Order.</li>
                                    <li> Monthly business overview</li>
                                    <li>Monthly sales graph</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <OrderFrom />

            </div>

        </>
    )
}
export default RestaurantManagement;