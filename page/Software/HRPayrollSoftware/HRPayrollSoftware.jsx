import React, { Suspense } from 'react';
const HRSoftwareBanner= React.lazy(() => import('./HRSoftwareBanner'));

const WhatIsAccounting= React.lazy(() => import('./WhatIsAccounting'));

const HRSoftwarePackage= React.lazy(() => import('./HRSoftwarePackage'));

const OrderFrom = React.lazy(() => import('../AccountingSoftware/OrderFrom'));
const HRPayrollSoftware = () => {
    return (
        <>
            <div className="main">
         
                <Suspense fallback={<h1 className='text-center'>Loading...</h1>}>
                <HRSoftwareBanner />
                </Suspense>

                
                <Suspense fallback={<h1 className='text-center'>Loading...</h1>}>
                <WhatIsAccounting />
                </Suspense>

                
                <Suspense fallback={<h1 className='text-center'>Loading...</h1>}>
                <HRSoftwarePackage />
                </Suspense>

               

                <Suspense fallback={<h1 className='text-center'>Loading...</h1>}>
                <OrderFrom />
                </Suspense>

            </div>

        </>
    )
}
export default HRPayrollSoftware;