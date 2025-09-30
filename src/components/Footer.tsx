import { FunctionComponent } from "react";
import { Typography, Box } from "@mui/material";
import styles from "./Footer.module.css";

export type FooterType = {
  className?: string;
};

const Footer: FunctionComponent<FooterType> = ({ className = "" }) => {
  return (
    <header className={[styles.footer, className].join(" ")}>
      <Box className={styles.container}>
        <Box className={styles.linkColumn}>
          <Typography
            className={styles.footerLinkTitle}
            variant="inherit"
            variantMapping={{ inherit: "h3" }}
            sx={{ fontWeight: "600", fontSize: "var(--fs-20)" }}
          >
            Support
          </Typography>
          <div className={styles.footerLinks}>Help Centre</div>
          <div className={styles.footerLinks}>AirCover</div>
          <div className={styles.footerLinks}>Combating discrimination</div>
          <div className={styles.footerLinks}>
            Supporting people with disabilities
          </div>
          <div className={styles.footerLinks}>Cencellation options</div>
        </Box>
        <Box className={styles.linkColumn}>
          <Typography
            className={styles.footerLinkTitle}
            variant="inherit"
            variantMapping={{ inherit: "h3" }}
            sx={{ fontWeight: "600", fontSize: "var(--fs-20)" }}
          >
            Hosting
          </Typography>
          <div className={styles.footerLinks}>Local home</div>
          <div className={styles.footerLinks}>Cover for hosts</div>
          <div className={styles.footerLinks}>Hosting resources</div>
          <div className={styles.footerLinks}>Community forum</div>
          <div className={styles.footerLinks}>Hosting responsibly</div>
        </Box>
        <Box className={styles.linkColumn}>
          <Typography
            className={styles.footerLinkTitle}
            variant="inherit"
            variantMapping={{ inherit: "h3" }}
            sx={{ fontWeight: "600", fontSize: "var(--fs-20)" }}
          >
            Localhost
          </Typography>
          <div className={styles.footerLinks}>Newsroom</div>
          <div className={styles.footerLinks}>New Features</div>
          <div className={styles.footerLinks}>Careers</div>
          <div className={styles.footerLinks}>Investres</div>
          <div className={styles.footerLinks}>Gift cards</div>
        </Box>
      </Box>
    </header>
  );
};

export default Footer;
