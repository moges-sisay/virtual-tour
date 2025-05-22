// VirtualTourRouter.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DestinationSelector from "./components/DestinationSelector";
import LalibelaTour from "./destinations/LalibelaTour";
import GonderTour from "./destinations/GonderTour";
import BahirDarTour from "./destinations/BahirDarTour";
import { TourProvider } from "./context/TourContext";

const VirtualTourRouter = () => (
  <TourProvider>
    <Router>
      <Routes>
        <Route path="/virtual-tour" element={<DestinationSelector />} />
        <Route path="/virtual-tour/lalibela" element={<LalibelaTour />} />
        <Route path="/virtual-tour/gonder" element={<GonderTour />} />
        <Route path="/virtual-tour/bahirDar" element={<BahirDarTour />} />
      </Routes>
    </Router>
  </TourProvider>
);

export default VirtualTourRouter;
