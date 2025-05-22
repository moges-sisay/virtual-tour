// src/components/Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";

function Home() {
  return (
    <Box textAlign="center" mt={5}>
      <Typography variant="h4" gutterBottom>
        Select a Destination
      </Typography>
      <Box mt={2}>
        <Link to="/lalibela">
          <Button variant="contained" color="primary" sx={{ m: 1 }}>
            Lalibela
          </Button>
        </Link>
        <Link to="/gonder">
          <Button variant="contained" color="primary" sx={{ m: 1 }}>
            Gonder
          </Button>
        </Link>
        <Link to="/bahirdar">
          <Button variant="contained" color="primary" sx={{ m: 1 }}>
            Bahir Dar
          </Button>
        </Link>
      </Box>
    </Box>
  );
}

export default Home;
