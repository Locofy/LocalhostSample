import { FunctionComponent, useState } from "react";
import { Typography, Box, Button } from "@mui/material";
import Amenities from "./Amenities";
import styles from "./LocationAmenities.module.css";

export type LocationAmenitiesType = {
  className?: string;
};

const LocationAmenities: FunctionComponent<LocationAmenitiesType> = ({
  className = "",
}) => {
  const [amenitiesItems] = useState([
    {
      amenities01Icon: "/amenities01icon.svg",
      label: "Lakeside",
    },
    {
      amenities01Icon: "/amenities02icon.svg",
      label: "Kitchen",
    },
    {
      amenities01Icon: "/amenities03icon.svg",
      label: "Security cameras on property",
    },
    {
      amenities01Icon: "/amenities04icon.svg",
      label: "Wifi",
    },
    {
      amenities01Icon: "/amenities05icon.svg",
      label: "Free parking",
    },
    {
      amenities01Icon: "/amenities06icon.svg",
      label: "Outdoor shower",
    },
    {
      amenities01Icon: "/amenities07icon.svg",
      label: "Hot water",
    },
    {
      amenities01Icon: "/amenities08icon.svg",
      label: "Shampoo",
    },
    {
      amenities01Icon: "/amenities09icon.svg",
      label: "Fire Extinguisher",
    },
    {
      amenities01Icon: "/amenities10icon.svg",
      label: "Freezer",
    },
    {
      amenities01Icon: "/amenities11icon.svg",
      label: "Coffee Maker",
    },
    {
      amenities01Icon: "/amenities12icon.svg",
      label: "Glass stove",
    },
  ]);
  return (
    <section className={[styles.locationAmenities, className].join(" ")}>
      <Box className={styles.leftSection}>
        <Typography
          className={styles.amenities}
          variant="inherit"
          variantMapping={{ inherit: "h3" }}
          sx={{ fontWeight: "600", letterSpacing: "0.02em" }}
        >
          Amenities
        </Typography>
        <Box className={styles.amenitiesGrid}>
          <Box className={styles.wrappedLayer}>
            {amenitiesItems.map((item, index) => (
              <Amenities
                key={index}
                amenities01Icon={item.amenities01Icon}
                label={item.label}
              />
            ))}
          </Box>
          <Button
            className={styles.searchFlightsButton}
            disableElevation
            variant="outlined"
            sx={{
              textTransform: "none",
              color: "#171e1d",
              fontSize: "16",
              borderColor: "#171e1d",
              borderRadius: "6px",
              "&:hover": { borderColor: "#171e1d" },
            }}
          >
            Show all amenities
          </Button>
        </Box>
      </Box>
      <Box className={styles.mapSection}>
        <Box className={styles.mapDetails}>
          <Box className={styles.mapContainer}>
            <Box className={styles.mapInfo}>
              <Typography
                className={styles.whereYoullBe}
                variant="inherit"
                variantMapping={{ inherit: "h3" }}
                sx={{ fontWeight: "600", letterSpacing: "0.02em" }}
              >
                Where you’ll be
              </Typography>
              <Box className={styles.addressIconParent}>
                <img
                  className={styles.addressIcon}
                  alt=""
                  src="/address-icon.svg"
                />
                <div className={styles.theBridlePath}>The Bridle Path</div>
              </Box>
            </Box>
            <Box className={styles.weatherInfo}>
              <img className={styles.suncloudIcon} alt="" src="/suncloud.svg" />
              <Box className={styles.locationAmenitiesWeatherInfo}>
                <div className={styles.temperature}>20°C</div>
                <div className={styles.weatherDetail}>Broken clouds</div>
              </Box>
            </Box>
          </Box>
          <img className={styles.mapAreaIcon} alt="" src="/map-area@2x.png" />
          <Box className={styles.mapOverlays}>
            <Box className={styles.zoomControls}>
              <img
                className={styles.zoomControlsChild}
                alt=""
                src="/group-31.svg"
              />
              <img className={styles.plusIcon} alt="" src="/plus-icon.svg" />
            </Box>
            <img
              className={styles.mapOverlaysChild}
              alt=""
              src="/group-4.svg"
            />
          </Box>
        </Box>
      </Box>
    </section>
  );
};

export default LocationAmenities;
