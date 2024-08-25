import React, { Suspense } from 'react';
const DomainBD = React.lazy(() => import('./DomainBD'));
const DomainPackage = React.lazy(() => import('./DomainPackage'));

const Domain = () => {
    return (
        <>
            <div className="main">

                <Suspense fallback={<h1 className='text-center'>Loading...</h1>}>
                    <DomainBD />
                </Suspense>

                <Suspense fallback={<h1 className='text-center'>Loading...</h1>}>
                    <DomainPackage />
                </Suspense>

            </div>

        </>
    )
}

export default Domain;
