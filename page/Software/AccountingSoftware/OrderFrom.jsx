import React from "react";

const OrderFrom = () => {

    return (
        <>
            <section>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-9 col-lg-8">
                            <div className="section-heading-color text-center mb-5 mb-sm-5 mb-md-3 mb-lg-3">
                                <h3>Submit Your Order</h3>
                            </div>
                        </div>
                    </div>
                    <div className="Domain ptb-50 from-border ">
                        <form action="submit.php" method="POST">
                            <div className="row">
                                <div className="col-xl-6">
                                    <div className="form-group">
                                        <label htmlFor="name">Name</label>
                                        <input type="text"  className="form-control" id="name" name="name"  required="" />
                                    </div>
                                </div>
                                <div className="col-xl-6">
                                    <div className="form-group">
                                        <label htmlFor="phone">Phone Number</label>
                                        <input  type="tel"  className="form-control"  id="phone"    name="phone"  required=""  />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xl-6">
                                    <div className="form-group">
                                        <label htmlFor="whatsapp">WhatsApp Number</label>
                                        <input  type="tel"    className="form-control"   id="whatsapp"    name="whatsapp"  />
                                    </div>
                                </div>
                                <div className="col-xl-6">
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input   type="email"  className="form-control"  id="email"   name="email"  required=""  />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea className="form-control"  id="message"  name="message"  rows={3} required="" defaultValue={""}  />
                            </div>
                            <button type="submit" className="btn btn-primary">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
};

export default OrderFrom;
