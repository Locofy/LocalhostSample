import { FunctionComponent } from "react";
import { Box } from "@mui/material";
import styles from "./Trend.module.css";

export type TrendType = {
  className?: string;
};

const Trend: FunctionComponent<TrendType> = ({ className = "" }) => {
  return (
    <Box className={[styles.icontrend, className].join(" ")}>
      <Box className={styles.iconParent}>
        <img className={styles.icon} loading="lazy" alt="" src="/icon2.svg" />
        <Box className={styles.trendBackground} />
      </Box>
    </Box>
  );
};

export default Trend;
