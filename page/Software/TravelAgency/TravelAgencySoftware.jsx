import React, { Suspense } from "react";
const TravelAgencyInfo = React.lazy(() => import("./TravelAgencyInfo"));
const TravelSoftPackege = React.lazy(() => import("./TravelSoftPackege"));
const SystemModule = React.lazy(() => import("./SystemModule"));
const OrderFrom = React.lazy(() => import("../AccountingSoftware/OrderFrom"));



const TravelAgencySoftware = () => {
    return (
        <>
            <div className="main">

                <Suspense fallback={<h1 className='text-center'>Loading...</h1>}>
                    <TravelAgencyInfo />
                </Suspense>

                <Suspense fallback={<h1 className='text-center'>Loading...</h1>}>
                    <TravelSoftPackege />
                </Suspense>

                <Suspense fallback={<h1 className='text-center'>Loading...</h1>}>
                    <SystemModule />
                </Suspense>
                
                <Suspense fallback={<h1 className='text-center'>Loading...</h1>}>
                    <OrderFrom />
                </Suspense>
            </div>
        </>
    );
}

export default TravelAgencySoftware;
