import { FunctionComponent } from "react";
import { Box } from "@mui/material";
import styles from "./DetailsCard.module.css";

export type DetailsCardType = {
  className?: string;
  image?: string;
  title?: string;
  description?: string;
};

const DetailsCard: FunctionComponent<DetailsCardType> = ({
  className = "",
  image,
  title,
  description,
}) => {
  return (
    <Box className={[styles.detailscard, className].join(" ")}>
      <img className={styles.imageIcon} loading="lazy" alt="" src={image} />
      <Box className={styles.titleParent}>
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>{description}</div>
      </Box>
    </Box>
  );
};

export default DetailsCard;
