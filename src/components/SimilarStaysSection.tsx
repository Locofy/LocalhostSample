import { FunctionComponent, useState } from "react";
import { Typography, Box } from "@mui/material";
import StayCard from "./StayCard";
import styles from "./SimilarStaysSection.module.css";

export type SimilarStaysSectionType = {
  className?: string;
};

const SimilarStaysSection: FunctionComponent<SimilarStaysSectionType> = ({
  className = "",
}) => {
  const [stayCardItems] = useState([
    {
      imageContainerBackgroundImage: "",
      stayName: "Missisuaga Aistream",
      stayPlace: "Missisauga, Ontario, Canada",
      price: "$502",
    },
    {
      imageContainerBackgroundImage: "url('/Image-Container1@3x.png')",
      stayName: "Urban Loft",
      stayPlace: "Missisauga, Ontario, Canada",
      price: "$499",
    },
    {
      imageContainerBackgroundImage: "url('/Image-Container2@3x.png')",
      stayName: "Forestville Cottages",
      stayPlace: "Simcoe, Ontario Canada",
      price: "$600",
    },
  ]);
  return (
    <section className={[styles.similarStaysSection, className].join(" ")}>
      <Box className={styles.similarStaysHeader}>
        <Typography
          className={styles.similarStays}
          variant="inherit"
          variantMapping={{ inherit: "h3" }}
          sx={{ fontWeight: "600", letterSpacing: "0.02em" }}
        >
          Similar stays
        </Typography>
        <div className={styles.button}>View all</div>
      </Box>
      <Box className={styles.staysGrid}>
        {stayCardItems.map((item, index) => (
          <StayCard
            key={index}
            imageContainerBackgroundImage={item.imageContainerBackgroundImage}
            stayName={item.stayName}
            stayPlace={item.stayPlace}
            price={item.price}
          />
        ))}
      </Box>
    </section>
  );
};

export default SimilarStaysSection;
