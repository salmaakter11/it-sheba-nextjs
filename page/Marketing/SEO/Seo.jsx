import React, { Suspense } from "react";
const SeoInfo = React.lazy(() => import("./SeoInfo"));
const SeoPackege = React.lazy(() => import("./SeoPackege"));
const WhatServices = React.lazy(() => import("./WhatServices"));
const OrderFrom = React.lazy(() => import("../../Software/AccountingSoftware/OrderFrom"));


const Seo = () => {
    return (
        <>
            <div className="main">


                <Suspense fallback={<h1 className='text-center'>Loading...</h1>}>
                    <SeoInfo />
                </Suspense>

                <Suspense fallback={<h1 className='text-center'>Loading...</h1>}>
                    <SeoPackege />
                </Suspense>

                <Suspense fallback={<h1 className='text-center'>Loading...</h1>}>
                    <WhatServices />
                </Suspense>

                <Suspense fallback={<h1 className='text-center'>Loading...</h1>}>
                    <OrderFrom />
                </Suspense>
            </div>
        </>
    );
}

export default Seo;
