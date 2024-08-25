import React, { Suspense } from "react";

const EmailMarketinginfo = React.lazy(() => import("./EmailMarketinginfo"));
const EmailMarketingPackege = React.lazy(() => import("./EmailMarketingPackege"));
const EmailMarketingDatabase = React.lazy(() => import("./EmailMarketingDatabase"));
const OrderFrom = React.lazy(() => import("../../Software/AccountingSoftware/OrderFrom"));

const EmailMarketing = () => {
    return (
        <>
            <div className="main">

                <Suspense fallback={<h1 className='text-center'>Loading...</h1>}>
                    <EmailMarketinginfo />
                </Suspense>

                <Suspense fallback={<h1 className='text-center'>Loading...</h1>}>
                    <EmailMarketingPackege />
                </Suspense>

                <Suspense fallback={<h1 className='text-center'>Loading...</h1>}>
                    <EmailMarketingDatabase />
                </Suspense>
                
                <Suspense fallback={<h1 className='text-center'>Loading...</h1>}>
                    <OrderFrom />
                </Suspense>
            </div>
        </>
    );
}

export default EmailMarketing;
