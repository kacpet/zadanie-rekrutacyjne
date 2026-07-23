// Navbar
import DesktopNavbar from "./navbar/DesktopNavbar";
import TabletNavbar from "./navbar/TabletNavbar";
import MobileNavbar from "./navbar/MobileNavbar";

// Home
import DesktopHome from "./home/DesktopHome";
import TabletHome from "./home/TabletHome";
import MobileHome from "./home/MobileHome";

// Offer
import DesktopOffer from "./offer/DesktopOffer";
import TabletOffer from "./offer/TabletOffer";
import MobileOffer from "./offer/MobileOffer";

// About
import DesktopAbout from "./about/DesktopAbout";
import TabletAbout from "./about/TabletAbout";
import MobileAbout from "./about/MobileAbout";

// Projects
import DesktopProjects from "./projects/DesktopProjects";
import TabletProjects from "./projects/TabletProjects";
import MobileProjects from "./projects/MobileProjects";

// Contact
import DesktopContact from "./contact/DesktopContact";
import TabletContact from "./contact/TabletContact";
import MobileContact from "./contact/MobileContact";

// Footer
import DesktopFooter from "./footer/DesktopFooter";
import TabletFooter from "./footer/TabletFooter";
import MobileFooter from "./footer/MobileFooter";

import type { ScreenType } from "../types/screenType";

export function getComponents(screenType: ScreenType) {
  return {
    Navbar:
      screenType === "desktop"
        ? DesktopNavbar
        : screenType === "tablet"
          ? TabletNavbar
          : MobileNavbar,

    Home:
      screenType === "desktop"
        ? DesktopHome
        : screenType === "tablet"
          ? TabletHome
          : MobileHome,

    Offer:
      screenType === "desktop"
        ? DesktopOffer
        : screenType === "tablet"
          ? TabletOffer
          : MobileOffer,

    About:
      screenType === "desktop"
        ? DesktopAbout
        : screenType === "tablet"
          ? TabletAbout
          : MobileAbout,

    Projects:
      screenType === "desktop"
        ? DesktopProjects
        : screenType === "tablet"
          ? TabletProjects
          : MobileProjects,

    Contact:
      screenType === "desktop"
        ? DesktopContact
        : screenType === "tablet"
          ? TabletContact
          : MobileContact,

    Footer:
      screenType === "desktop"
        ? DesktopFooter
        : screenType === "tablet"
          ? TabletFooter
          : MobileFooter,
  };
}