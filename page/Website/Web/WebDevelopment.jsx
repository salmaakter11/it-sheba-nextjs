import React, { Suspense } from 'react';
const WebBanner= React.lazy(() => import('./WebBanner'));
const Webinfo = React.lazy(() => import('./Webinfo'));
const WebsitePackage = React.lazy(() => import('./WebsitePackage'));
const HowToSelect = React.lazy(() => import('./HowToSelect'));
const WebSupport = React.lazy(() => import('./WebSupport'));
const WebProject = React.lazy(() => import('./WebProject'));
const WebDevelopment = () => {
    return (
        <>

            <div className="main">
               

                <Suspense fallback={<h1 className='text-center'>Loading...</h1>}>
                    <WebBanner />
                </Suspense>

                <Suspense fallback={<h1 className='text-center'>Loading...</h1>}>
                    <Webinfo />
                </Suspense>

                <Suspense fallback={<h1 className='text-center'>Loading...</h1>}>
                    <WebsitePackage />
                </Suspense>


                <Suspense fallback={<h1 className='text-center'>Loading...</h1>}>
                    <HowToSelect />
                </Suspense>

                <Suspense fallback={<h1 className='text-center'>Loading...</h1>}>
                    <WebSupport />
                </Suspense>

                <Suspense fallback={<h1 className='text-center'>Loading...</h1>}>
                    <WebProject />
                </Suspense>


               

               

            </div>
        </>
    )
}
export default WebDevelopment;