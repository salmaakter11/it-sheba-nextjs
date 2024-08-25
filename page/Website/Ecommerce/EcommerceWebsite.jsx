import React, { Suspense } from 'react';
const EcommerceBanner = React.lazy(() => import('./EcommerceBanner'));
const Ecommerceinfo = React.lazy(() => import('./Ecommerceinfo'));
const EcommerceFeatures = React.lazy(() => import('./EcommerceFeatures'));
const EcommerceWebsiteDesign = React.lazy(() => import('./EcommerceWebsiteDesign'));
const EcommerceSupport = React.lazy(() => import('./EcommerceSupport'));
const EcommerceWebsitePackege = React.lazy(() => import('./EcommerceWebsitePackege'));
const EcommerceProject = React.lazy(() => import('./EcommerceProject'));
const EcommerceWebsite = () => {
    return (
        <>
            <div className="main">
 
                <Suspense fallback={<h1 className='text-center'>Loading...</h1>}>
                    <EcommerceBanner />
                </Suspense>

                <Suspense fallback={<h1 className='text-center'>Loading...</h1>}>
                    <Ecommerceinfo />
                </Suspense>
                <Suspense fallback={<h1 className='text-center'>Loading...</h1>}>
                    <EcommerceFeatures />
                </Suspense>

                <Suspense fallback={<h1 className='text-center'>Loading...</h1>}>
                    <EcommerceWebsiteDesign />
                </Suspense>

                <Suspense fallback={<h1 className='text-center'>Loading...</h1>}>
                    <EcommerceSupport />
                </Suspense>
                <Suspense fallback={<h1 className='text-center'>Loading...</h1>}>
                    <EcommerceWebsitePackege />
                </Suspense>

                <Suspense fallback={<h1 className='text-center'>Loading...</h1>}>
                    <EcommerceProject />
                </Suspense>
            </div>

        </>
    )
}
export default EcommerceWebsite;