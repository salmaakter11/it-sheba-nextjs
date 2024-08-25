import React, { Suspense } from 'react';

const CompanyProfileAbout = React.lazy(() => import('./CompanyProfileAbout'));

const  CompanyProfileMembership = React.lazy(() => import('./CompanyProfileMembership'));

const CompanyProfileServices = React.lazy(() => import('./CompanyProfileServices'));

const MessegeFounder = () => {
    return (
        <>
            <div className="main">
                
                <Suspense fallback={<h1 className='text-center'>Loading...</h1>}>
                <CompanyProfileAbout />
                </Suspense>


                <Suspense fallback={<h1 className='text-center'>Loading...</h1>}>
                    <CompanyProfileMembership />
                </Suspense>

                <Suspense fallback={<h1 className='text-center'>Loading...</h1>}>
                    <CompanyProfileServices />
                </Suspense>
            </div>
        </>

    );
};

export default MessegeFounder;