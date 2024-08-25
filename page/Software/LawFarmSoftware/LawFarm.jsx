import React, { Suspense } from "react";

const Lawsoftinfo = React.lazy(() => import("./Lawsoftinfo"));
const LawSoftDemo = React.lazy(() => import("./LawSoftDemo"));
const OrderFrom = React.lazy(() => import("../AccountingSoftware/OrderFrom"));



const LawFarm = () => {
    return (
        <>
            <div className="main">

                <Suspense fallback={<h1 className='text-center'>Loading...</h1>}>
                    <Lawsoftinfo />
                </Suspense>

                <Suspense fallback={<h1 className='text-center'>Loading...</h1>}>
                    <LawSoftDemo />
                </Suspense>

                <Suspense fallback={<h1 className='text-center'>Loading...</h1>}>
                    <OrderFrom />
                </Suspense>
            </div>
        </>
    );
}

export default LawFarm;
