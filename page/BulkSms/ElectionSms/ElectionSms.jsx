import React, { Suspense } from "react";
const ElectionSmsPackege = React.lazy(() => import('./ElectionSmsPackege'));
const ElectionSms = () => {
  return (
    <>
      <div className="main">

        <section className="feature-tab-section ptb-50">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-9 col-lg-8">
                <div className="section-heading-color text-center mb-5 mb-sm-5 mb-md-3 mb-lg-3">
                  <h3>
                    IT SHEBA is at the forefront of location-based SMS marketing in
                    Bangladesh.
                  </h3>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-12 order-lg-last ptb-50 ">
                <p>
                  In the era of digitalization, technology significantly influences
                  how societies operate, particularly in terms of democratic
                  procedures. Election SMS (Short Message Service) has become a potent
                  tool for voter engagement and political campaigns in Bangladesh.
                  Among the different companies in the market, IT SHEBA has made a
                  name for itself as the go-to provider for Election SMS marketing by
                  offering cutting-edge solutions that completely change the electoral
                  communication landscape.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="feature-tab-section ptb-40">
          <div className="container">
            <div className="row">
              <div className=" col-lg-8 col-md-6 col-sm-12">
                <h5 className="heading-color-it">
                  The Evolution of Election SMS in Bangladesh
                </h5>
                <h6 className="heading-color">Historical Context</h6>
                <p>
                  It is essential to examine the historical background of Bangladesh's
                  electoral processes in order to comprehend the significance of
                  Election SMS. Bangladesh has seen a progressive transition over time
                  from conventional campaign tactics to more technologically
                  sophisticated ones. Election SMS has changed the game by enabling
                  candidates and political parties to communicate with voters
                  instantly and more personally.
                </p>
                <h6 className="heading-color">Rise of Mobile Phone Penetration</h6>
                <p>
                  One of the driving factors behind the success of Election SMS in
                  Bangladesh is the widespread penetration of mobile phones. With a
                  significant portion of the population owning mobile devices,
                  Election SMS provides a direct channel for communication, reaching
                  voters across urban and rural landscapes.
                </p>
              </div>
              <div className="col-xl-4 col-md-6 col-sm-12">
                <ul style={{ margin: 10 }}>
                  <img
                    src="assets/img/it-sheba-img/sms-panel.png"
                    alt=""
                    className="img-fluid"
                  />
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-12 col-md-6 col-sm-12">
                <h5 className="heading-color-it">
                  The Impact of Election SMS on Voter Engagement
                </h5>
                <h6 className="heading-color">Real-Time Communication</h6>
                <p>
                  Election SMS offers a real-time communication platform, enabling
                  political candidates to disseminate information, updates, and
                  campaign messages instantly. This direct and immediate connection
                  fosters a sense of engagement and involvement among voters,
                  contributing to a more informed electorate.
                </p>
              </div>
            </div>
          </div>
        </section>



        <Suspense fallback={<h1 className='text-center'>Loading...</h1>}>
           <ElectionSmsPackege />
        </Suspense>

      </div>
    </>
  );
};

export default ElectionSms;