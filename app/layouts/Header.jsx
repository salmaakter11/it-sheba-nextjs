"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState({});
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const toggleSubmenu = (index) => {
    setSubmenuOpen({
      ...submenuOpen,
      [index]: !submenuOpen[index],
    });
  };

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header id="header" className="header-main">
        {/* Topbar start */}
        <div id="header-top-bar" className="gray-light-bg">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-md-6 col-lg-4 col-sm-12">
                <div className="topbar-text d-md-block d-lg-block">
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <Link href="tel:+8801906-297862"><span className="fas fa-phone mr-2" />+8801906-297862</Link>
                    </li>
                    <li className="list-inline-item">
                      <Link href="mailto:info@itsheba24.com"><span className="fas fa-mail-bulk mr-2" />info@itsheba24.com</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-sm-12">
                <div className="topbar-text d-md-block d-lg-block">
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <Link href="https://maps.app.goo.gl/UVND17n8Qo6ThsiF7">
                        <span className="fas fa-location mr-2" />
                        Mukto Bangla Shopping Complex, 5th Floor, Space No:(51-52), Mirpur-1
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 col-lg-2 col-sm-12">
                <div className="topbar-text">
                  <ul className="list-inline social">
                    <li className="list-inline-item topbar-social">
                      <Link href="https://www.facebook.com/ITShebaLimited/" target="_blank"><span className="ti-facebook" /></Link>
                    </li>
                    <li className="list-inline-item topbar-social">
                      <Link href="https://www.linkedin.com/company/it-sheba-limited" target="_blank"><span className="ti-linkedin" /></Link>
                    </li>
                    <li className="list-inline-item topbar-social">
                      <Link href="https://www.instagram.com/itsheba.24/" target="_blank"><span className="ti-instagram" /></Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Topbar end */}

        {/* Main header menu start */}
        <div
          id="logoAndNav"
          className={`main-header-menu-wrap white-bg border-bottom ${isSticky ? 'affix' : ''}`}
        >
          <div className="container">
            <nav className="js-mega-menu navbar navbar-expand-md header-nav">
              {/* Logo and navigation toggle button */}
              <Link className="navbar-brand" href="/">
                <img src="assets/img/it-logo.png" alt="logo" className="img-fluid" />
              </Link>

              <button type="button" className="navbar-toggler btn" aria-expanded={menuOpen} aria-controls="navBar" onClick={toggleMenu}  >
                <span id="hamburgerTrigger">
                  <span className="fas fa-bars" />
                </span>
              </button>

              {/* Main menu */}
              <div id="navBar" className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`}>
                <ul className="navbar-nav ml-auto main-navbar-nav">
                  <li className="nav-item active custom-nav-item">
                    <Link href="/" className="nav-link custom-nav-link" onClick={closeMenu}>HOME</Link>
                  </li>
                  {/*About Pages start */}
                  <li className={`nav-item hs-has-sub-menu custom-nav-item ${submenuOpen[1] ? 'show' : ''}`}>
                    <Link href="#" className="nav-link custom-nav-link main-link-toggle" onClick={() => toggleSubmenu(1)}>ABOUT US</Link>
                    {/* Pages - Submenu */}
                    <ul id="pagesSubMenu" className={`hs-sub-menu main-sub-menu ${submenuOpen[1] ? 'show' : ''}`}>
                      <li className="nav-item submenu-item">
                        <Link href="/Messege-founder" className="nav-link sub-menu-nav-link" onClick={closeMenu}>Founder Messege</Link>
                      </li>
                      <li className="nav-item submenu-item">
                        <Link href="/Company-profile" className="nav-link sub-menu-nav-link" onClick={closeMenu}>Company Profile</Link>
                      </li>
                      <li className="nav-item submenu-item">
                        <Link href="/Team-members" className="nav-link sub-menu-nav-link" onClick={closeMenu}>Team Members</Link>
                      </li>
                      <li className="nav-item submenu-item">
                        <Link href="/Payment-system" className="nav-link sub-menu-nav-link" onClick={closeMenu}>Payment System</Link>
                      </li>
                      <li className="nav-item submenu-item">
                        <Link href="/join-the-team" className="nav-link sub-menu-nav-link" onClick={closeMenu}>Join The Team</Link>
                      </li>
                      <li className="nav-item submenu-item">
                        <Link href="/our-clients" className="nav-link sub-menu-nav-link" onClick={closeMenu}>Our Clients</Link>
                      </li>
                      <li className="nav-item submenu-item">
                        <Link href="/our-skill" className="nav-link sub-menu-nav-link" onClick={closeMenu}>Our Skill</Link>
                      </li>
                      <li className="nav-item submenu-item">
                        <Link href="https://shop.bkash.com/it-sheba-24-dot-com01906297861/paymentlink/default-payment" target="_blank" className="nav-link sub-menu-nav-link">Pay Now</Link>
                      </li>
                    </ul>
                    {/* End Pages - Submenu */}
                  </li>

                  {/*WEBSITE Pages start */}
                  <li className={`nav-item hs-has-sub-menu custom-nav-item ${submenuOpen[2] ? 'show' : ''}`}>
                    <Link href="#" className="nav-link custom-nav-link main-link-toggle" onClick={() => toggleSubmenu(2)}>WEBSITE</Link>
                    {/* Pages - Submenu */}
                    <ul id="pagesSubMenu" className={`hs-sub-menu main-sub-menu ${submenuOpen[2] ? 'show' : ''}`}>
                      <li className="nav-item submenu-item">
                        <Link href="/domain" className="nav-link sub-menu-nav-link" onClick={closeMenu}>Domain</Link>
                      </li>
                      <li className="nav-item submenu-item">
                        <Link href="/hosting" className="nav-link sub-menu-nav-link" onClick={closeMenu}>Hosting</Link>
                      </li>
                      <li className="nav-item submenu-item">
                        <Link href="/Web-development" className="nav-link sub-menu-nav-link" onClick={closeMenu}>Web Development</Link>
                      </li>
                      <li className="nav-item submenu-item">
                        <Link href="/ecommerce" className="nav-link sub-menu-nav-link" onClick={closeMenu}>Ecommerce Website</Link>
                      </li>
                    </ul>
                    {/* End Pages - Submenu */}
                  </li>

                  {/* SOFTWARE */}
                  <li className={`nav-item hs-has-sub-menu custom-nav-item ${submenuOpen[3] ? 'show' : ''}`}>
                    <Link href="#" className="nav-link custom-nav-link main-link-toggle" onClick={() => toggleSubmenu(3)}>SOFTWARE</Link>
                    <ul id="softwareSubMenu" className={`hs-sub-menu main-sub-menu ${submenuOpen[3] ? 'show' : ''}`}>
                      <li className="nav-item submenu-item">
                        <Link href="/accounting-software" className="nav-link sub-menu-nav-link" onClick={closeMenu}>Accounting Software</Link>
                      </li>
                      <li className="nav-item submenu-item">
                        <Link href="/inventory-software" className="nav-link sub-menu-nav-link" onClick={closeMenu}>Inventory Software</Link>
                      </li>
                      <li className="nav-item submenu-item">
                        <Link href="/hr-payroll-software" className="nav-link sub-menu-nav-link" onClick={closeMenu}>HR & Payroll Software</Link>
                      </li>
                      <li className="nav-item submenu-item">
                        <Link href="/travel-agency-software" className="nav-link sub-menu-nav-link" onClick={closeMenu}>Travel Agency Software</Link>
                      </li>
                      <li className="nav-item submenu-item">
                        <Link href="/pos-software" className="nav-link sub-menu-nav-link" onClick={closeMenu}>POS Software</Link>
                      </li>
                      <li className="nav-item submenu-item">
                        <Link href="/school-management" className="nav-link sub-menu-nav-link" onClick={closeMenu}>School Management</Link>
                      </li>
                      <li className="nav-item submenu-item">
                        <Link href="/restaurant-management" className="nav-link sub-menu-nav-link" onClick={closeMenu}>Restaurant Management</Link>
                      </li>
                      <li className="nav-item submenu-item">
                        <Link href="/prescription-management" className="nav-link sub-menu-nav-link" onClick={closeMenu}>Prescription Management</Link>
                      </li>
                      <li className="nav-item submenu-item">
                        <Link href="/hospital-erp" className="nav-link sub-menu-nav-link" onClick={closeMenu}>Hospital ERP</Link>
                      </li>
                      <li className="nav-item submenu-item">
                        <Link href="/law-firm-software" className="nav-link sub-menu-nav-link" onClick={closeMenu}>Law Firm Software</Link>
                      </li>
                      <li className="nav-item submenu-item">
                        <Link href="/pharmacy-management" className="nav-link sub-menu-nav-link" onClick={closeMenu}>Pharmacy Management</Link>
                      </li>
                    </ul>
                  </li>

                  {/* BULK SMS */}
                  <li className={`nav-item hs-has-sub-menu custom-nav-item ${submenuOpen[4] ? 'show' : ''}`}>
                    <Link href="#" className="nav-link custom-nav-link main-link-toggle" onClick={() => toggleSubmenu(4)}>BULK SMS</Link>
                    <ul id="smsSubMenu" className={`hs-sub-menu main-sub-menu ${submenuOpen[4] ? 'show' : ''}`}>
                      <li className="nav-item submenu-item">
                        <Link href="/masking-sms" className="nav-link sub-menu-nav-link" onClick={closeMenu}>Masking SMS</Link>
                      </li>
                      <li className="nav-item submenu-item">
                        <Link href="/non-masking-sms" className="nav-link sub-menu-nav-link" onClick={closeMenu}>Non Masking SMS</Link>
                      </li>
                      <li className="nav-item submenu-item">
                        <Link href="/sms-marketing" className="nav-link sub-menu-nav-link" onClick={closeMenu}>SMS Marketing</Link>
                      </li>
                      <li className="nav-item submenu-item">
                        <Link href="/location-based-sms" className="nav-link sub-menu-nav-link" onClick={closeMenu}>Location Based SMS</Link>
                      </li>
                      <li className="nav-item submenu-item">
                        <Link href="/election-sms" className="nav-link sub-menu-nav-link" onClick={closeMenu}>Election SMS</Link>
                      </li>
                    </ul>
                  </li>

                  {/* MARKETING */}
                  <li className={`nav-item hs-has-sub-menu custom-nav-item ${submenuOpen[5] ? 'show' : ''}`}>
                    <Link href="#" className="nav-link custom-nav-link main-link-toggle" onClick={() => toggleSubmenu(5)}>MARKETING</Link>
                    <ul id="marketingSubMenu" className={`hs-sub-menu main-sub-menu ${submenuOpen[5] ? 'show' : ''}`}>
                      <li className="nav-item submenu-item">
                        <Link href="/seo" className="nav-link sub-menu-nav-link" onClick={closeMenu}>SEO</Link>
                      </li>
                      <li className="nav-item submenu-item">
                        <Link href="/tele-marketing" className="nav-link sub-menu-nav-link" onClick={closeMenu}>Tele Marketing</Link>
                      </li>
                      <li className="nav-item submenu-item">
                        <Link href="/email-marketing" className="nav-link sub-menu-nav-link" onClick={closeMenu}>Email Marketing</Link>
                      </li>
                      <li className="nav-item submenu-item">
                        <Link href="/whatsapp-marketing" className="nav-link sub-menu-nav-link" onClick={closeMenu}>WhatsApp Marketing</Link>
                      </li>
                      <li className="nav-item submenu-item">
                        <Link href="/digital-marketing" className="nav-link sub-menu-nav-link" onClick={closeMenu}>Digital Marketing</Link>
                      </li>
                    </ul>
                  </li>

                  {/* PRODUCTS */}
                  <li className={`nav-item hs-has-sub-menu custom-nav-item ${submenuOpen[6] ? 'show' : ''}`}>
                    <Link href="#" className="nav-link custom-nav-link main-link-toggle" onClick={() => toggleSubmenu(6)}>PRODUCTS</Link>
                    <ul id="productsSubMenu" className={`hs-sub-menu main-sub-menu ${submenuOpen[6] ? 'show' : ''}`}>
                      <li className="nav-item submenu-item">
                        <Link href="/cctv" className="nav-link sub-menu-nav-link" onClick={closeMenu}>CCTV</Link>
                      </li>
                      <li className="nav-item submenu-item">
                        <Link href="/wifi-camera" className="nav-link sub-menu-nav-link" onClick={closeMenu}>Wifi Camera</Link>
                      </li>
                      <li className="nav-item submenu-item">
                        <Link href="/attendance-machine" className="nav-link sub-menu-nav-link" onClick={closeMenu}>Attendance Machine</Link>
                      </li>
                      <li className="nav-item submenu-item">
                        <Link href="/pabx" className="nav-link sub-menu-nav-link" onClick={closeMenu}>PABX</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item custom-nav-item">
                    <Link href="/contact-us" className="nav-link custom-nav-link" onClick={closeMenu}>CONTACT US</Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div >
        {/* Main header menu end */}
      </header >
    </>
  );
};

export default Header;

// "use client";
// import { useState, useEffect, useRef } from 'react';
// import Link from 'next/link';

// const Header = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [submenuOpen, setSubmenuOpen] = useState({});
//   const [isSticky, setIsSticky] = useState(false);

//   const headerRef = useRef(null);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   const closeMenu = () => {
//     setMenuOpen(false);
//   };

//   const toggleSubmenu = (index) => {
//     setSubmenuOpen((prev) => ({
//       ...prev,
//       [index]: !prev[index],
//     }));
//   };

//   const closeAllSubmenus = () => {
//     setSubmenuOpen({});
//   };

//   const handleScroll = () => {
//     if (window.scrollY > 100) {
//       setIsSticky(true);
//     } else {
//       setIsSticky(false);
//     }
//   };

//   const handleClickOutside = (event) => {
//     if (headerRef.current && !headerRef.current.contains(event.target)) {
//       closeAllSubmenus();
//     }
//   };

//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll);
//     document.addEventListener('click', handleClickOutside);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//       document.removeEventListener('click', handleClickOutside);
//     };
//   }, []);

//   return (
//     <header ref={headerRef} id="header" className={`header-main ${isSticky ? 'affix' : ''}`}>
//       {/* Topbar */}
//       <div id="header-top-bar" className="gray-light-bg">
//         <div className="container">
//           <div className="row justify-content-between">
//             {/* Add your top bar content here */}
//           </div>
//         </div>
//       </div>

//       {/* Main Header */}
//       <div id="logoAndNav" className={`main-header-menu-wrap white-bg border-bottom`}>
//         <div className="container">
//           <nav className="navbar navbar-expand-md header-nav">
//             <Link className="navbar-brand" href="/">
//               <img src="assets/img/it-logo.png" alt="logo" className="img-fluid" />
//             </Link>

//             <button
//               type="button"
//               className="navbar-toggler btn"
//               aria-expanded={menuOpen}
//               aria-controls="navBar"
//               onClick={toggleMenu}
//             > <span id="hamburgerTrigger"> <span className="fas fa-bars" /></span>
//             </button>

//             <div id="navBar" className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`}>
//               <ul className="navbar-nav ml-auto main-navbar-nav">
//                 <li className="nav-item active custom-nav-item">
//                   <Link href="/" className="nav-link custom-nav-link" onClick={closeMenu}>
//                     HOME
//                   </Link>
//                 </li>

//                 <li
//                   className={`nav-item hs-has-sub-menu custom-nav-item ${  submenuOpen[1] ? 'show' : ''  }`} >
//                   <Link  href="#" className="nav-link custom-nav-link main-link-toggle"  onClick={() => toggleSubmenu(1)}  >
//                     ABOUT US
//                   </Link>
//                   <ul className={`hs-sub-menu main-sub-menu ${submenuOpen[1] ? 'show' : ''}`}>
//                     <li className="nav-item submenu-item">
//                       <Link href="/Messege-founder" className="nav-link sub-menu-nav-link" onClick={closeMenu}>
//                         Founder Messege
//                       </Link>
//                     </li>
//                     {/* Add more submenu items here */}
//                   </ul>
//                 </li>

//                 {/* Repeat similar structure for other main menu items with submenus */}

//                 <li className="nav-item custom-nav-item">
//                   <Link href="/contact-us" className="nav-link custom-nav-link" onClick={closeMenu}>
//                     CONTACT US
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//           </nav>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;


