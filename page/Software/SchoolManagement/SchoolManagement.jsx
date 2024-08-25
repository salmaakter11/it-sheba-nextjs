import React, { Suspense } from "react";

const SchoolSoftInfo = React.lazy(() => import("./SchoolSoftInfo"));
const SchoolManagementPackege = React.lazy(() => import("./SchoolManagementPackege"));
const OrderFrom = React.lazy(() => import("../AccountingSoftware/OrderFrom"));




const SchoolManagement = () => {
    return (
        <>
            <div className="main">
                <Suspense fallback={<h1 className='text-center'>Loading...</h1>}>
                    <SchoolSoftInfo />
                </Suspense>

                <Suspense fallback={<h1 className='text-center'>Loading...</h1>}>
                    <SchoolManagementPackege />
                </Suspense>

                <Suspense fallback={<h1 className='text-center'>Loading...</h1>}>
                    <OrderFrom />
                </Suspense>
            </div>
        </>
    );
}

export default SchoolManagement;
