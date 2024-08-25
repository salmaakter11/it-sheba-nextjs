import React from "react";
import OrderFrom from "../AccountingSoftware/OrderFrom";
const PrescriptionManagement = () => {
    return (
        <>
            <div className="main">

                <section className="feature-tab-section ptb-50">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-12 col-lg-12">
                                <div className="section-heading-color  mb-2">
                                    <h3>Bangladesh's Greatest Prescription Management Software</h3>
                                </div>
                            </div>
                        </div>
                        <div className="pt-5">
                            <p>
                                IT SHEBA offers user-friendly prescription management software.
                                Prescription printing is growing in popularity these days. Software
                                for prescriptions makes it easier for patients to understand their
                                medications. Prescription writing software comes in a variety of forms
                                on the market. You must first decide which one is appropriate for your
                                position. You will require one kind of software if you are an MBBS or
                                GP, and another kind if you are a dentist.For the past eight years, IT
                                SHEBA has offered prescription software in Bangladesh.
                            </p>
                            <div className="row justify-content-center ">
                                <div>
                                    <img
                                        src="assets/img/it-sheba-img/desk-pfizer-banner.png"
                                        alt=""
                                        className="img-fluid"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="feature-tab-section ptb-40">
                    <div className="container">
                        <div className="row">
                            <div className=" col-lg-8  col-sm-12 ">
                                <h5 className="heading-color-it">Prescription Software Features:</h5>
                                <ul style={{ margin: 10 }}>
                                    <li>
                                        Dashboard Doctor: The doctor can view a patient's brief status and
                                        report on the dashboard.
                                    </li>
                                    <li>
                                        {" "}
                                        New Patient Entry: For new patients' serial entries, this option
                                        is utilised. View All Patients: The physician has access to all
                                        patient data, including medical history and previous
                                        prescriptions.
                                    </li>
                                    <li>
                                        Information about the Doctor: The doctor can configure their
                                        information here so that it prints automatically in Pad.
                                    </li>
                                    <li>
                                        Doctor's Chamber: This is where physicians can set up all of the
                                        chamber addresses that will appear in the prescription's footer.
                                    </li>
                                    <li>
                                        {" "}
                                        Patient Disease Setting: Physicians can create a prescription
                                        within this option by using it for pre-disease setting with
                                        pre-prescription.
                                    </li>
                                </ul>
                            </div>
                            <div className=" col-lg-4   col-sm-12">
                                <img
                                    src="assets/img/it-sheba-img/services.webp"
                                    alt=""
                                    className="img-fluid"
                                />
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
export default PrescriptionManagement;