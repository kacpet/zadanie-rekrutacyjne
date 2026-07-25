import { lazy } from "react";

import type { ScreenType } from "../types/screenType";

// Mobile
const MobileNavbar = lazy(() => import("./navbar/MobileNavbar"));
const MobileHome = lazy(() => import("./home/MobileHome"));
const MobileOffer = lazy(() => import("./offer/MobileOffer"));
const MobileAbout = lazy(() => import("./about/MobileAbout"));
const MobileProjects = lazy(() => import("./projects/MobileProjects"));
const MobileContact = lazy(() => import("./contact/MobileContact"));

// Tablet
const TabletNavbar = lazy(() => import("./navbar/TabletNavbar"));
const TabletHome = lazy(() => import("./home/TabletHome"));
const TabletOffer = lazy(() => import("./offer/TabletOffer"));
const TabletAbout = lazy(() => import("./about/TabletAbout"));
const TabletProjects = lazy(() => import("./projects/TabletProjects"));
const TabletContact = lazy(() => import("./contact/TabletContact"));

// Desktop
const DesktopNavbar = lazy(() => import("./navbar/DesktopNavbar"));
const DesktopHome = lazy(() => import("./home/DesktopHome"));
const DesktopOffer = lazy(() => import("./offer/DesktopOffer"));
const DesktopAbout = lazy(() => import("./about/DesktopAbout"));
const DesktopProjects = lazy(() => import("./projects/DesktopProjects"));
const DesktopContact = lazy(() => import("./contact/DesktopContact"));

export function getComponents(screenType: ScreenType) {
  if (screenType === "mobile") {
    return {
      Navbar: MobileNavbar,
      Home: MobileHome,
      Offer: MobileOffer,
      About: MobileAbout,
      Projects: MobileProjects,
      Contact: MobileContact,
    };
  }

  if (screenType === "tablet") {
    return {
      Navbar: TabletNavbar,
      Home: TabletHome,
      Offer: TabletOffer,
      About: TabletAbout,
      Projects: TabletProjects,
      Contact: TabletContact,
    };
  }

  return {
    Navbar: DesktopNavbar,
    Home: DesktopHome,
    Offer: DesktopOffer,
    About: DesktopAbout,
    Projects: DesktopProjects,
    Contact: DesktopContact,
  };
}
