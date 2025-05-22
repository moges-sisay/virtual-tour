// src/App.jsx
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ImageViewer from "./components/ImageViewer";
import ImageGallery from "./components/ImageGallery";
import FullscreenToggle from "./components/FullscreenToggle";
import HotspotOverlay from "./components/HotspotOverlay";
import { TourProvider } from "./context/TourContext";
import bahirdarImages from "./data/bahirdarImages";
import gonderImages from "./data/gonderImages";
import lalibelaImages from "./data/lalibelaImages";

const DestinationView = ({ images }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [hotspots] = useState([
    { x: "50%", y: "30%", label: "Info Spot" },
    { x: "80%", y: "60%", label: "Center View" },
  ]);

  const toggleFullscreen = () => {
    const viewer = document.getElementById("viewer-container");
    if (!document.fullscreenElement) {
      viewer?.requestFullscreen?.();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen?.();
      setIsFullscreen(false);
    }
  };

  return (
    <div>
      <FullscreenToggle onClick={toggleFullscreen} />
      <div
        id="viewer-container"
        style={{
          width: "100%",
          height: isFullscreen ? "100vh" : "500px",
          position: "relative",
          background: "#000",
        }}
      >
        <ImageViewer />
        <HotspotOverlay hotspots={hotspots} />
      </div>
      <ImageGallery images={images} />
    </div>
  );
};

function App() {
  return (
    <TourProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/bahirdar"
            element={<DestinationView images={bahirdarImages} />}
          />
          <Route
            path="/gonder"
            element={<DestinationView images={gonderImages} />}
          />
          <Route
            path="/lalibela"
            element={<DestinationView images={lalibelaImages} />}
          />
        </Routes>
      </Router>
    </TourProvider>
  );
}

export default App;
