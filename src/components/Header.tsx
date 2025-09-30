import { FunctionComponent } from "react";
import { Box } from "@mui/material";
import styles from "./Header.module.css";

export type HeaderType = {
  className?: string;
};

const Header: FunctionComponent<HeaderType> = ({ className = "" }) => {
  return (
    <header className={[styles.header, className].join(" ")}>
      <Box className={styles.headerContent}>
        <img
          className={styles.logoIcon}
          loading="lazy"
          alt=""
          src="/logo2.svg"
        />
        <nav className={styles.navLinks}>
          <div className={styles.home}>Home</div>
          <div className={styles.home}>Stays</div>
          <div className={styles.home}>Become a host</div>
        </nav>
      </Box>
    </header>
  );
};

export default Header;
