import React, { Suspense } from "react";
const InventoryInfo = React.lazy(() => import("./InventoryInfo"));
const SoftwareSignificance = React.lazy(() => import("./SoftwareSignificance"));
const SalesParty = React.lazy(() => import("./SalesParty"));
const SoftwareDemo = React.lazy(() => import("./SoftwareDemo"));
const OrderFrom = React.lazy(() => import("../AccountingSoftware/OrderFrom"));


const InventorySoftware = () => {
    return (
        <>
            <div className="main">

                <Suspense fallback={<h1 className='text-center'>Loading...</h1>}>
                    <InventoryInfo />
                </Suspense>

                <Suspense fallback={<h1 className='text-center'>Loading...</h1>}>
                    <SoftwareSignificance />
                </Suspense>

                <Suspense fallback={<h1 className='text-center'>Loading...</h1>}>
                    <SalesParty />
                </Suspense>

                <Suspense fallback={<h1 className='text-center'>Loading...</h1>}>
                    <SoftwareDemo />
                </Suspense>
                
                <Suspense fallback={<h1 className='text-center'>Loading...</h1>}>
                    <OrderFrom />
                </Suspense>
            </div>
        </>
    );
}

export default InventorySoftware;