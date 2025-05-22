// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { TourProvider } from "./context/TourContext";
import BahirDarTour from "./destinations/BahirDarTour";
import GonderTour from "./destinations/GonderTour";
import LalibelaTour from "./destinations/LalibelaTour";
import { AppBar, Toolbar, Button } from "@mui/material";
import { Link } from "react-router-dom";

function App() {
  return (
    <TourProvider>
      <Router>
        {/* Top navigation bar with buttons for each tour */}
        <AppBar position="static">
          <Toolbar>
            <Button color="inherit" component={Link} to="/bahirdar">
              Bahir Dar
            </Button>
            <Button color="inherit" component={Link} to="/gonder">
              Gondar
            </Button>
            <Button color="inherit" component={Link} to="/lalibela">
              Lalibela
            </Button>
          </Toolbar>
        </AppBar>

        {/* Route definitions for each tour page */}
        <Routes>
          <Route path="/bahirdar" element={<BahirDarTour />} />
          <Route path="/gonder" element={<GonderTour />} />
          <Route path="/lalibela" element={<LalibelaTour />} />
        </Routes>
      </Router>
    </TourProvider>
  );
}

export default App;
