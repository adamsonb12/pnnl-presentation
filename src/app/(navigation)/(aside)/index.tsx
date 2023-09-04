import styles from "./styles.module.css";
import { SelectNavigation } from "./select-navigation";
import { AsideNavigationLinks } from "./aside-navigation-links";

const MobileNavigation = () => {
  return (
    <div className={styles.mobileNavigation}>
      <SelectNavigation />
    </div>
  );
};

const DesktopNavigation = () => {
  return (
    <nav className={styles.desktopNavigation}>
      <AsideNavigationLinks />
    </nav>
  );
};

export const AsideNavigation = () => {
  return (
    <>
      <MobileNavigation />
      <DesktopNavigation />
    </>
  );
};

export const PATHS = {
  root: "/",
  situationProductVision: "/situation-product-vision",
  situationMoonlighting: "/situation-moonlighting",
  joining: "/joining",
  betaOverview: "/beta-overview",
  ourProcess: "/our-process",
  roadBlocks: "/road-blocks",
  betaLaunch: "/beta-launch",
  hardening: "/hardening",
  launchingBroadly: "/launching-broadly",
  thankYou: "/thank-you",
};
