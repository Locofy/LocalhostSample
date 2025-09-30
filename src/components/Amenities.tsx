import { FunctionComponent } from "react";
import { Box } from "@mui/material";
import styles from "./Amenities.module.css";

export type AmenitiesType = {
  className?: string;
  amenities01Icon?: string;
  label?: string;
};

const Amenities: FunctionComponent<AmenitiesType> = ({
  className = "",
  amenities01Icon,
  label,
}) => {
  return (
    <Box className={[styles.item, className].join(" ")}>
      <img
        className={styles.amenities01Icon}
        loading="lazy"
        alt=""
        src={amenities01Icon}
      />
      <div className={styles.label}>{label}</div>
    </Box>
  );
};

export default Amenities;
