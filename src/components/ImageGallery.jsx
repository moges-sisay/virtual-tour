// src/components/ImageGallery.jsx
import React from "react";
import { Grid, Card, CardMedia } from "@mui/material";
import { useTourContext } from "../context/TourContext";

const ImageGallery = ({ images }) => {
  const { setSelectedImage } = useTourContext();

  return (
    <Grid container spacing={2} justifyContent="center" padding={2}>
      {images.map((src, index) => (
        <Grid item key={index}>
          <Card
            sx={{ width: 140, cursor: "pointer" }}
            onClick={() => setSelectedImage(src)}
          >
            <CardMedia
              component="img"
              height="100"
              image={src}
              alt={`Tour image ${index + 1}`}
            />
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ImageGallery;
