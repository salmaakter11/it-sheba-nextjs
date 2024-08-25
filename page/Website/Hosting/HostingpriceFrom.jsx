import React from "react";
const HostingpriceFrom =() =>{
    return(
        <>
        <section className='prices-details'>
          <div className='container'>
          <div className="Domain ptb-50">
              <div className="row justify-content-center">
                <div className="col-md-9 col-lg-8">
                  <div className="section-heading-color text-center mb-5 mb-sm-5 mb-md-3 mb-lg-3">
                    <h3>Check Hosting Price  Details</h3>
                  </div>
                </div>
              </div>
              <h4 className="heading-color-it">
                IT SHEBA's Effect on Bangladesh's Website Hosting
              </h4>
              <ul style={{ margin: 10 }}>
                <li>
                  In addition, we have 4 years of professional experience developing
                  websites and our own office (a building we purchased).
                </li>
                <li>
                  Over 700 websites have been hosted by our company in the last4
                  years, and our staff is skilled at handling even the most
                  complicated hosting proble
                </li>
                <li>
                  For any kind of assistance, our helpline number
                  <a href="tel:+8801906297862"> +88 01906297862 ,</a> is always open.
                </li>
                <li>
                  Own office 4years, <a href="tel:01906297871">01906 297 871</a>
                </li>
              </ul>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-9 col-lg-8">
                <div className="section-heading-color text-center mb-5 mb-sm-5 mb-md-3 mb-lg-3">
                  <h3>Send your order/query</h3>
                </div>
              </div>
            </div>
            <div className="Domain ptb-50 from-border ">
              <form action="submit.php" method="POST">
                <div className="row">
                  <div className="col-xl-6">
                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input   type="text"  className="form-control"  id="name"  name="name" required=""
                      />
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number</label>
                      <input   type="tel"   className="form-control"   id="phone"  name="phone" required=""
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xl-6">
                    <div className="form-group">
                      <label htmlFor="whatsapp">WhatsApp Number</label>
                      <input type="tel"  className="form-control" id="whatsapp" name="whatsapp"
                      />
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input  type="email"  className="form-control"  id="email" name="email"  required=""
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea className="form-control"  id="message"  name="message"  rows={3}  required=""  defaultValue={""}
                  />
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
}
export default HostingpriceFrom;