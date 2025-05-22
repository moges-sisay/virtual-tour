// GonderTour.jsx
import React, { useEffect } from "react";
import { Box } from "@mui/material";
import { useContext } from "react";
import TourContext from "../context/TourContext";
import ImageGallery from "../components/ImageGallery";
import ImageViewer from "../components/ImageViewer";

const GonderTour = () => {
  const { setSelectedDestination, setSelectedImage } = useContext(TourContext);
  const images = [
    "/images/gonder-1.jpg",
    "/images/gonder-2.jpg",
    "/images/gonder-3.jpg",
    "/images/gonder-4.jpg",
    "/images/gonder-5.jpg",
    "/images/gonder-6.jpg",
  ];

  useEffect(() => {
    setSelectedDestination("Gondar");
    setSelectedImage(images[0]);
  }, []);

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <ImageGallery images={images} />
      <ImageViewer />
    </Box>
  );
};

export default GonderTour;
