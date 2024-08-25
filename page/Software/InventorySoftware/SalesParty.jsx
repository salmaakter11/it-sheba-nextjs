import React from "react";
const SalesParty = () => {
    return (
        <>

            <section className="pricing-section ptb-50 ">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-12  order-xl-first"></div>
                        <div className="col-xl-12 col-lg-12 col-12  order-xl-first">
                            <h4 className="heading-color"> Dashboard: </h4>
                            <p>
                                Provides an overview of key metrics and data related to inventory,
                                sales, and financials.
                            </p>
                        </div>
                        <div className="col-xl-12 col-lg-12 col-12  order-xl-first">
                            <h4 className="heading-color-it">2 Sales:</h4>
                            <ul style={{ margin: 10 }}>
                                <li>
                                    <strong>Sales Requests:</strong>Allows users to create sales
                                    requests for products.
                                </li>
                                <li>
                                    <strong>Manage Sales:</strong>View and manage completed sales
                                    transactions.
                                </li>
                                <li>
                                    <strong>New Sale Requisition:</strong>Create and manage new sales
                                    requisitions.
                                </li>
                                <li>
                                    <strong>Undelivered Sales: </strong>Track pending or undelivered
                                    sales orders.
                                </li>
                                <li>
                                    <strong>Rejected Sales:</strong>Records and manages sales that
                                    were rejected by customers.
                                </li>
                            </ul>
                        </div>
                        <div className="col-xl-12 col-lg-12 col-12  order-xl-first">
                            <h4 className="heading-color-it">3. Party:</h4>
                            <ul style={{ margin: 10 }}>
                                <li>
                                    <strong>Manage Customer:</strong> Create, edit, and manage
                                    customer profiles.
                                </li>
                                <li>
                                    <strong>Customer Ledger:</strong> Maintain records of customer
                                    transactions and balances.
                                </li>
                                <li>
                                    <strong>Credit Customer:</strong>Identify and manage credit
                                    customers.
                                </li>
                                <li>
                                    <strong>Paid Customer: </strong>Keep track of customers who have
                                    paid their dues.
                                </li>
                                <li>
                                    <strong>Customer Advance:</strong>Monitor advance payments made by
                                    customers.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default SalesParty;