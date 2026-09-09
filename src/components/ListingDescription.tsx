import { FunctionComponent, useState } from "react";
import { Typography, Box } from "@mui/material";
import DetailsCard from "./DetailsCard";
import styles from "./ListingDescription.module.css";

export type ListingDescriptionType = {
  className?: string;
};

const ListingDescription: FunctionComponent<ListingDescriptionType> = ({
  className = "",
}) => {
  const [detailsCardItems] = useState([
    {
      image: "/image11.svg",
      title: "Dedicated workspace",
      description: "A private room equipped with WiFi",
    },
    {
      image: "/image10.svg",
      title: "Self check-in",
      description: "Check in with just your phone",
    },
    {
      image: "/image9.svg",
      title: "Free cancellation",
      description: "Cancel anytime",
    },
  ]);
  return (
    <section className={[styles.listingDescription, className].join(" ")}>
      <Typography
        className={styles.aboutThisHome}
        variant="inherit"
        variantMapping={{ inherit: "h3" }}
        sx={{ fontWeight: "600", letterSpacing: "0.02em" }}
      >
        About this home
      </Typography>
      <Box className={styles.homeSummaryParent}>
        <Box className={styles.homeSummary}>
          <div className={styles.welcomeToBrightwoodsContainer}>
            <Typography
              className={styles.welcomeToBrightwoods}
              variant="inherit"
            >
              Welcome to Brightwoods Cabin, your idyllic retreat nestled in the
              heart of Bridlepath, Ontario! Our cozy cabin, surrounded by the
              tranquility of nature's embrace, is designed to provide the
              ultimate relaxing getaway.
            </Typography>
            <Typography
              className={styles.welcomeToBrightwoods}
              variant="inherit"
            >
              <Typography
                variant="inherit"
                variantMapping={{ inherit: "b" }}
                sx={{ fontFamily: "var(--font-archivo)" }}
              >{`Living Space: `}</Typography>
              <Typography
                variant="inherit"
                variantMapping={{ inherit: "span" }}
              >
                This charming cabin boasts a spacious living area adorned with
                rustic decor and modern amenities. Enjoy the warmth of the
                wood-burning fireplace, relax on the plush sofas, and make
                yourself at home with our entertainment center featuring a
                flat-screen TV, WiFi, and more.
              </Typography>
            </Typography>
            <Typography
              className={styles.welcomeToBrightwoods}
              variant="inherit"
            >
              <Typography
                variant="inherit"
                variantMapping={{ inherit: "b" }}
                sx={{ fontFamily: "var(--font-archivo)" }}
              >
                Bedrooms:
              </Typography>
              <Typography
                variant="inherit"
                variantMapping={{ inherit: "span" }}
              >
                {" "}
                With 3 beautifully appointed bedrooms, our cabin comfortably
                accommodates up to [number of guests]. Each room is furnished
                with luxurious bedding and unique woodland-inspired touches to
                ensure a restful slumber.
              </Typography>
            </Typography>
            <Typography
              className={styles.welcomeToBrightwoods}
              variant="inherit"
            >
              <Typography
                variant="inherit"
                variantMapping={{ inherit: "b" }}
                sx={{ fontFamily: "var(--font-archivo)" }}
              >{`Kitchen & Dining:`}</Typography>
              <Typography
                variant="inherit"
                variantMapping={{ inherit: "span" }}
              >
                {" "}
                Our fully-equipped kitchen offers everything you need to prepare
                delicious home-cooked meals. The open dining area provides a
                welcoming space to enjoy meals with friends and family.
              </Typography>
            </Typography>
            <Typography
              className={styles.welcomeToBrightwoods}
              variant="inherit"
            >
              <Typography
                variant="inherit"
                variantMapping={{ inherit: "b" }}
                sx={{ fontFamily: "var(--font-archivo)" }}
              >
                Bathrooms:
              </Typography>
              <Typography
                variant="inherit"
                variantMapping={{ inherit: "span" }}
              >
                {" "}
                2 modern bathrooms stocked with fresh towels, toiletries, and
                all essential amenities add to your convenience.
              </Typography>
            </Typography>
            <Typography
              className={styles.welcomeToBrightwoods}
              variant="inherit"
            >
              <Typography
                variant="inherit"
                variantMapping={{ inherit: "b" }}
                sx={{ fontFamily: "var(--font-archivo)" }}
              >
                Outdoor Space:
              </Typography>
              <Typography
                variant="inherit"
                variantMapping={{ inherit: "span" }}
              >
                {" "}
                Step outside to a serene outdoor setting. Whether it's a morning
                coffee on the porch, a BBQ in the yard, or a soothing evening by
                the fire pit, the beauty of Bridlepath is at your doorstep.
              </Typography>
            </Typography>
            <Typography
              className={styles.welcomeToBrightwoods}
              variant="inherit"
            >
              <Typography
                variant="inherit"
                variantMapping={{ inherit: "b" }}
                sx={{ fontFamily: "var(--font-archivo)" }}
              >
                Location:
              </Typography>
              <Typography
                variant="inherit"
                variantMapping={{ inherit: "span" }}
              >
                {" "}
                Located just minutes from [local attractions, trails, dining,
                shopping], our cabin offers the perfect base to explore the best
                of the region or simply unwind in seclusion.
              </Typography>
            </Typography>
            <Typography
              className={styles.welcomeToBrightwoods}
              variant="inherit"
            >
              <Typography
                variant="inherit"
                variantMapping={{ inherit: "b" }}
                sx={{ fontFamily: "var(--font-archivo)" }}
              >
                Hosted with Love:
              </Typography>
              <Typography
                variant="inherit"
                variantMapping={{ inherit: "span" }}
              >
                {" "}
                We take pride in hosting our guests and are committed to making
                your stay unforgettable. We're just a call or message away
                should you need anything during your stay.
              </Typography>
            </Typography>
            <Typography className={styles.comeBeOur} variant="inherit">
              Come, be our guest at [Cabin Name], and experience a piece of
              woodland serenity right here in Bridlepath, Ontario. Book now and
              make yourself at home!
            </Typography>
          </div>
          <div className={styles.button}>Show more</div>
        </Box>
        <Box className={styles.detailsCards}>
          {detailsCardItems.map((item, index) => (
            <DetailsCard
              key={index}
              image={item.image}
              title={item.title}
              description={item.description}
            />
          ))}
        </Box>
      </Box>
    </section>
  );
};

export default ListingDescription;
// Analytics verification test.
// Design review analytics verification.
