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
    <section
      className={[styles.listingHero, className].filter(Boolean).join(" ")}
      aria-label="Brightwoods Cabin listing"
    >
      <div className={styles.layout}>
        <section
          className={styles.reservationCard}
          aria-label="Reservation details"
        >
          <Box className={styles.priceLine}>
            <Typography
              className={styles.price}
              component="h1"
              variant="inherit"
              sx={{ fontWeight: 700, letterSpacing: "0.01em" }}
            >
              $658
            </Typography>
            <span className={styles.night}>/night</span>
          </Box>
          <Box className={styles.bestTime}>
            <Trend />
            <span>Best time to Book</span>
          </Box>
          <Button
            className={styles.bookButton}
            disableElevation
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontFamily: "var(--font-roboto)",
              fontSize: 15,
              fontWeight: 600,
              letterSpacing: 0,
              backgroundColor: "var(--Accent)",
              borderRadius: "6px",
              "&:hover": { backgroundColor: "#00b391" },
            }}
          >
            Book this home
          </Button>
          <Box className={styles.hostBlock}>
            <div className={styles.hostLabel}>Hosted by:</div>
            <div className={styles.hostProfile}>
              <img
                className={styles.hostAvatar}
                loading="lazy"
                alt=""
                src="/host-avatar@2x.png"
              />
              <div className={styles.hostDetails}>
                <div className={styles.hostName}>Michelle Ward</div>
                <div className={styles.joined}>Joined in May 2021</div>
              </div>
              <div className={styles.superhostBadge}>
                <img
                  className={styles.checkmark}
                  alt=""
                  src="/checkmark-icon.svg"
                />
                <span>Superhost</span>
              </div>
            </div>
          </Box>
        </section>

        <Box
          component="section"
          className={styles.photoMosaic}
          aria-label="Cabin photos"
        >
          <img
            className={`${styles.mosaicPhoto} ${styles.mainPhoto}`}
            loading="lazy"
            alt=""
            src="/main-image@2x.png"
          />
          <img
            className={`${styles.mosaicPhoto} ${styles.photoSecond}`}
            loading="lazy"
            alt=""
            src="/thumbnails@2x.png"
          />
          <img
            className={`${styles.mosaicPhoto} ${styles.photoThird}`}
            alt=""
            src="/thumbnails4@2x.png"
          />
          <img
            className={`${styles.mosaicPhoto} ${styles.photoFourth}`}
            alt=""
            src="/thumbnails3@2x.png"
          />
          <img
            className={`${styles.mosaicPhoto} ${styles.photoFifth}`}
            alt=""
            src="/thumbnails2@2x.png"
          />
          <img
            className={`${styles.mosaicPhoto} ${styles.photoSixth}`}
            alt=""
            src="/thumbnails1@2x.png"
          />
        </Box>

        <aside className={styles.listingFacts} aria-label="Listing facts">
          <Box className={styles.titleRow}>
            <div>
              <Typography
                className={styles.title}
                component="h2"
                variant="inherit"
                sx={{ fontWeight: 600, letterSpacing: "0.01em" }}
              >
                Brightwoods Cabin
              </Typography>
              <div className={styles.address}>
                Bridlepath, Ontario, Canada
              </div>
            </div>
            <img
              className={styles.heart}
              loading="lazy"
              alt=""
              src="/hearticon1.svg"
            />
          </Box>
          <Box className={styles.ratingRow}>
            <div className={styles.rating} aria-label="Rated 5.0">
              <span>5.0</span>
              <img
                className={styles.star}
                loading="lazy"
                alt=""
                src="/rating-star.svg"
              />
            </div>
            <div className={styles.reviews}>200 Reviews</div>
          </Box>
          <p className={styles.description}>
            Welcome to our cozy cabin retreat nestled in the heart of
            Bridlepath, Ontario! Surrounded by lush landscapes and tranquil
            trails, this charming getaway offers the perfect blend of rustic
            elegance and modern comfort.
          </p>
        </aside>
      </div>
    </section>
  );
};

export default ListingHero;
