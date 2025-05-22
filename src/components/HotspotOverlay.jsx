// src/components/HotspotOverlay.jsx
import React from "react";
import { Box, Typography } from "@mui/material";

export default function HotspotOverlay({ hotspots = [] }) {
  return (
    <>
      {hotspots.map((hotspot, index) => (
        <Box
          key={index}
          sx={{
            position: "absolute",
            top: hotspot.y,
            left: hotspot.x,
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            padding: "4px 8px",
            borderRadius: 1,
            transform: "translate(-50%, -50%)",
            pointerEvents: "none",
            zIndex: 5,
          }}
        >
          <Typography variant="caption">{hotspot.label}</Typography>
        </Box>
      ))}
    </>
  );
}
