import { FunctionComponent } from "react";
import { Box } from "@mui/material";
import Header from "../components/Header";
import ListingHero from "../components/ListingHero";
import ListingDescription from "../components/ListingDescription";
import LocationAmenities from "../components/LocationAmenities";
import SimilarStaysSection from "../components/SimilarStaysSection";
import Footer from "../components/Footer";
import Band from "../components/Band";
import styles from "./PropertyDetails.module.css";

const PropertyDetails: FunctionComponent = () => {
  return (
    <Box className={styles.propertyDetails}>
      <Header />
      <main className={styles.main}>
        <ListingHero />
        <section className={styles.listingDetailsSection}>
          <ListingDescription />
          <LocationAmenities />
        </section>
        <SimilarStaysSection />
      </main>
      <Footer />
      <Band />
    </Box>
  );
};

export default PropertyDetails;
