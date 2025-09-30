import { FunctionComponent, useMemo, type CSSProperties } from "react";
import { Box } from "@mui/material";
import styles from "./StayCard.module.css";

export type StayCardType = {
  className?: string;
  stayName?: string;
  stayPlace?: string;
  price?: string;

  /** Style props */
  imageContainerBackgroundImage?: CSSProperties["backgroundImage"];
};

const StayCard: FunctionComponent<StayCardType> = ({
  className = "",
  imageContainerBackgroundImage,
  stayName,
  stayPlace,
  price,
}) => {
  const imageContainerStyle: CSSProperties = useMemo(() => {
    return {
      backgroundImage: imageContainerBackgroundImage,
    };
  }, [imageContainerBackgroundImage]);

  return (
    <Box className={[styles.staycard, className].join(" ")}>
      <Box className={styles.imageContainer} style={imageContainerStyle}>
        <Box className={styles.superhostTag}>
          <img
            className={styles.superhostIcon}
            alt=""
            src="/superhost-icon1.svg"
          />
          <div className={styles.superhost}>Superhost</div>
        </Box>
        <img className={styles.heartIcon} alt="" src="/hearticon.svg" />
      </Box>
      <Box className={styles.container}>
        <Box className={styles.content}>
          <Box className={styles.textContent}>
            <div className={styles.stayName}>{stayName}</div>
            <div className={styles.stayPlace}>{stayPlace}</div>
          </Box>
          <Box className={styles.ratingContainer}>
            <div className={styles.rating}>4.8</div>
            <img
              className={styles.reviewCountIcon}
              alt=""
              src="/star-icon2.svg"
            />
          </Box>
        </Box>
        <Box className={styles.priceContainer}>
          <div className={styles.rating}>{price}</div>
          <div className={styles.night}>/night</div>
        </Box>
      </Box>
    </Box>
  );
};

export default StayCard;
