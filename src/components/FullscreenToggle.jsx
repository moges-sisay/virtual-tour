// src/components/FullscreenToggle.jsx
import React from "react";
import { IconButton, Tooltip } from "@mui/material";
import FullscreenIcon from "@mui/icons-material/Fullscreen";

export default function FullscreenToggle({ onClick }) {
  return (
    <Tooltip title="Toggle Fullscreen">
      <IconButton
        onClick={onClick}
        color="primary"
        sx={{ position: "absolute", top: 16, right: 16, zIndex: 10 }}
      >
        <FullscreenIcon />
      </IconButton>
    </Tooltip>
  );
}
