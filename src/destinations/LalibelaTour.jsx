// src/destinations/LalibelaTour.jsx
import React, { useEffect } from "react";
import { Typography, Box } from "@mui/material";
import { useTourContext } from "../context/TourContext";
import ImageGallery from "../components/ImageGallery";
import ImageViewer from "../components/ImageViewer";
import HotspotOverlay from "../components/HotspotOverlay";

export default function LalibelaTour() {
  const { setDestination, images, selectedImage } = useTourContext();

  useEffect(() => {
    setDestination("lalibela");
  }, [setDestination]);

  return (
    <>
      <Typography variant="h5" sx={{ mt: 4, mb: 2 }}>
        Lalibela 3D Virtual Tour
      </Typography>

      <Box component="section" sx={{ px: 2 }}>
        <ImageGallery images={images} />
        {selectedImage && <ImageViewer />}
        <HotspotOverlay
          hotspots={[{ x: "50%", y: "50%", label: "Info Spot" }]}
        />
      </Box>
    </>
  );
}
