
import Layout from "./layouts/Layout";
import Script from "next/script";

export const metadata = {
  title: "It Sheba",
  description: "Generated by create next app",
  icons: "assets/img/favicon.JPG"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" type="text/css" href="assets/css/fontawesome-all.min.css" />
        <link rel="stylesheet" type="text/css" href="assets/css/bootstrap.min.css" />
        <link rel="stylesheet" type="text/css" href="assets/css/style.css" />
      </head>
      <body >
        <Layout>
          {children}
        </Layout>

        <Script src="assets/js/vendors/jquery-3.5.1.min.js" ></Script>
        <Script src="assets/js/vendors/bootstrap.bundle.min.js" strategy="lazyOnload"></Script>
        <Script src="assets/js/vendors/bootstrap-slider.min.js" strategy="lazyOnload"></Script>
        <Script src="assets/js/vendors/jquery.countdown.min.js" strategy="lazyOnload"></Script>
        <Script src="assets/js/vendors/validator.min.js" strategy="lazyOnload"></Script>
        <Script src="assets/js/vendors/jquery.waypoints.min.js" strategy="lazyOnload"></Script>
        <Script src="assets/js/vendors/jquery.rcounterup.js" strategy="lazyOnload"></Script>
        <Script src="assets/js/vendors/magnific-popup.min.js" strategy="lazyOnload"></Script>
        <Script src="assets/js/vendors/hs.megamenu.js" strategy="lazyOnload"></Script>
        <Script src="assets/js/custom.js" strategy="lazyOnload"></Script>
 
      </body>
    </html>
  );
}
