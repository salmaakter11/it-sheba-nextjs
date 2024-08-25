import React, { Suspense } from 'react';
const AccountingBanner = React.lazy(() => import('./AccountingBanner'));
const AccountingInfo = React.lazy(() => import('./AccountingInfo'));
const AccountingSupport = React.lazy(() => import('./AccountingSupport'));
const BestAccounting = React.lazy(() => import('./BestAccounting'));
const AccountingSoftwarePackage = React.lazy(() => import('./AccountingSoftwarePackage'));
const OrderFrom = React.lazy(() => import('./OrderFrom'));

const AccountingSoftware = () => {
    return (
        <>
            <div className="main">


                <Suspense fallback={<h1 className='text-center'>Loading...</h1>}>
                    <AccountingBanner />
                </Suspense>

                <Suspense fallback={<h1 className='text-center'>Loading...</h1>}>
                    <AccountingInfo />
                </Suspense>

                <Suspense fallback={<h1 className='text-center'>Loading...</h1>}>
                    <AccountingSupport />
                </Suspense>


                <Suspense fallback={<h1 className='text-center'>Loading...</h1>}>
                    <BestAccounting />
                </Suspense>

                <Suspense fallback={<h1 className='text-center'>Loading...</h1>}>
                    <AccountingSoftwarePackage />
                </Suspense>

                <Suspense fallback={<h1 className='text-center'>Loading...</h1>}>
                    <OrderFrom />
                </Suspense>

            </div>

        </>
    )
}
export default AccountingSoftware;