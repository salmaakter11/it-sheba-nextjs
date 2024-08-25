import React, { Suspense } from 'react';
const HostingBd = React.lazy(() => import('./HostingBd'));
const HostingFeatures = React.lazy(() => import('./HostingFeatures'));
const HostingpriceFrom = React.lazy(() => import('./HostingpriceFrom'));
const HostingComponent = () => {
  return (
    <>
      <div className="main">

        <Suspense fallback={<h1 className='text-center'>Loading...</h1>}>
          <HostingBd />
        </Suspense>

        <Suspense fallback={<h1 className='text-center'>Loading...</h1>}>
          <HostingFeatures />
        </Suspense>

        <Suspense fallback={<h1 className='text-center'>Loading...</h1>}>
          <HostingpriceFrom />
        </Suspense>

      </div>

    </>
  )
}
export default HostingComponent;