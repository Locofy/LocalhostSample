import { FunctionComponent, useCallback } from "react";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./ListingItem.module.css";

export type ListingItemType = {
  className?: string;
  listing01Image?: string;
  showSuperhostTag?: boolean;
  listingTitle?: string;
  listingSubtitle?: string;
  rating?: string;
  price?: string;

  /** Action props */
  onListingItemClick?: () => void;
};

const ListingItem: FunctionComponent<ListingItemType> = ({
  className = "",
  onListingItemClick,
  listing01Image,
  showSuperhostTag,
  listingTitle,
  listingSubtitle,
  rating,
  price,
}) => {
  const navigate = useNavigate();

  const onListingItemClick1 = useCallback(() => {
    navigate("/property-details");
  }, [navigate]);

  return (
    <section
      className={[styles.listingItem, className].join(" ")}
      onClick={onListingItemClick}
    >
      <img className={styles.listing01ImageIcon} alt="" src={listing01Image} />
      {!!showSuperhostTag && (
        <Box className={styles.superhostTag}>
          <img
            className={styles.superhostIcon}
            alt=""
            src="/superhost-icon1.svg"
          />
          <div className={styles.superhost}>Superhost</div>
        </Box>
      )}
      <img className={styles.heartIcon} alt="" src="/heart-icon1@2x.png" />
      <Box className={styles.itemDetails}>
        <Box className={styles.listingInfo}>
          <Box className={styles.listingCont}>
            <div className={styles.listingTitle}>{listingTitle}</div>
            <div className={styles.listingSubtitle}>{listingSubtitle}</div>
          </Box>
          <Box className={styles.ratingCont}>
            <div className={styles.rating}>{rating}</div>
            <img
              className={styles.starIcon}
              loading="lazy"
              alt=""
              src="/star-icon2.svg"
            />
          </Box>
        </Box>
        <Box className={styles.bottomContainer}>
          <Box className={styles.pricePerNight}>
            <div className={styles.rating}>{price}</div>
            <div className={styles.night}>/night</div>
          </Box>
        </Box>
      </Box>
    </section>
  );
};

export default ListingItem;
