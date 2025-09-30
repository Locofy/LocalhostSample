import { FunctionComponent } from "react";
import { Box } from "@mui/material";
import styles from "./Band.module.css";

export type BandType = {
  className?: string;
};

const Band: FunctionComponent<BandType> = ({ className = "" }) => {
  return (
    <footer className={[styles.band, className].join(" ")}>
      <Box className={styles.container}>
        <div className={styles.localhostIncAll}>
          © 2023 Localhost, Inc. All Rights Reserved
        </div>
        <Box className={styles.bandLinks}>
          <div className={styles.privacyPolicy}>Privacy Policy</div>
          <div className={styles.privacyPolicy}>{`Terms & Conditions`}</div>
          <div className={styles.privacyPolicy}>Contact us</div>
        </Box>
      </Box>
    </footer>
  );
};

export default Band;
