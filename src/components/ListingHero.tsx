import { FunctionComponent } from "react";
import { Box, Typography, Button } from "@mui/material";
import Trend from "./Trend";
import styles from "./ListingHero.module.css";

export type ListingHeroType = {
  className?: string;
};

const ListingHero: FunctionComponent<ListingHeroType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.listingHero, className].join(" ")}>
      <section className={styles.imageGallery}>
        <img
          className={styles.mainImageIcon}
          loading="lazy"
          alt=""
          src="/main-image@2x.png"
        />
        <Box className={styles.thumbnailContainer}>
          <img
            className={styles.thumbnailsIcon}
            loading="lazy"
            alt=""
            src="/thumbnails@2x.png"
          />
          <img
            className={styles.thumbnailsIcon}
            alt=""
            src="/thumbnails4@2x.png"
          />
          <img
            className={styles.thumbnailsIcon}
            alt=""
            src="/thumbnails3@2x.png"
          />
          <img
            className={styles.thumbnailsIcon}
            alt=""
            src="/thumbnails2@2x.png"
          />
          <img
            className={styles.thumbnailsIcon4}
            alt=""
            src="/thumbnails1@2x.png"
          />
        </Box>
      </section>
      <section className={styles.propertyInformation}>
        <Box className={styles.topSection}>
          <Box className={styles.headingContainer}>
            <Box className={styles.container}>
              <Box className={styles.textContent}>
                <Typography
                  className={styles.propertyName}
                  variant="inherit"
                  variantMapping={{ inherit: "h2" }}
                  sx={{ fontWeight: "600", letterSpacing: "0.02em" }}
                >
                  Brightwoods Cabin
                </Typography>
                <div className={styles.propertyAddress}>
                  Bridlepath, Ontario, Canada
                </div>
              </Box>
              <img
                className={styles.heartIcon}
                loading="lazy"
                alt=""
                src="/hearticon1.svg"
              />
            </Box>
            <Box className={styles.ratingAndReviewContainer}>
              <Box className={styles.ratingContainer}>
                <div className={styles.rating}>5.0</div>
                <img
                  className={styles.ratingStarIcon}
                  loading="lazy"
                  alt=""
                  src="/rating-star.svg"
                />
              </Box>
              <Box className={styles.reviewContainer}>
                <div className={styles.reviews}>200 Reviews</div>
              </Box>
            </Box>
          </Box>
          <div
            className={styles.description}
          >{`Welcome to our cozy cabin retreat nestled in the heart of Bridlepath, Ontario! Surrounded by lush landscapes and tranquil trails, this charming getaway offers the perfect blend of rustic elegance and modern comfort. `}</div>
        </Box>
        <Box className={styles.bottomSection}>
          <Box className={styles.priceInformation}>
            <Box className={styles.priceContainer}>
              <Typography
                className={styles.price}
                variant="inherit"
                variantMapping={{ inherit: "h1" }}
                sx={{ fontWeight: "700", letterSpacing: "0.02em" }}
              >
                $658
              </Typography>
              <div className={styles.night}>/night</div>
            </Box>
            <Box className={styles.icontrendParent}>
              <Trend />
              <div className={styles.bestTimeTo}>Best time to Book</div>
            </Box>
          </Box>
          <Button
            className={styles.searchFlightsButton}
            disableElevation
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "16",
              background: "#00c29f",
              borderRadius: "6px",
              "&:hover": { background: "#00c29f" },
            }}
          >
            Book this home
          </Button>
        </Box>
        <Box className={styles.hostInfo}>
          <div className={styles.bestTimeTo}>Hosted by:</div>
          <Box className={styles.hostProfile}>
            <img
              className={styles.hostAvatarIcon}
              loading="lazy"
              alt=""
              src="/host-avatar@2x.png"
            />
            <Box className={styles.hostDetails}>
              <div className={styles.michelleWard}>Michelle Ward</div>
              <div className={styles.joinedInMay}>Joined in May 2021</div>
            </Box>
            <Box className={styles.superhostBadge}>
              <img
                className={styles.checkmarkIcon}
                alt=""
                src="/checkmark-icon.svg"
              />
              <div className={styles.superhost}>Superhost</div>
            </Box>
          </Box>
        </Box>
      </section>
    </section>
  );
};

export default ListingHero;
