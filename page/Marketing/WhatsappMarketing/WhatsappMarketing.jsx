import React, { Suspense } from "react";

const WhatsappMarketinginfo = React.lazy(() => import("./WhatsappMarketinginfo"));
const WhatsappMarketingPackege = React.lazy(() => import("./WhatsappMarketingPackege"));


const WhatsappMarketing = () => {
  return (
    <>
      <div className="main">

        <Suspense fallback={<h1 className='text-center'>Loading...</h1>}>
          <WhatsappMarketinginfo />
        </Suspense>


        <Suspense fallback={<h1 className='text-center'>Loading...</h1>}>
          <WhatsappMarketingPackege />
        </Suspense>
        
      </div>
    </>
  );
}

export default WhatsappMarketing;
