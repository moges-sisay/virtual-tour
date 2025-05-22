// components/DestinationSelector.jsx
import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardActionArea,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const destinations = [
  { name: "Lalibela", route: "/virtual-tour/lalibela" },
  { name: "Gonder", route: "/virtual-tour/gonder" },
  { name: "Bahirdar", route: "/virtual-tour/bahirdar" },
];

const DestinationSelector = () => {
  const navigate = useNavigate();

  return (
    <Grid container spacing={3} justifyContent="center" padding={4}>
      {destinations.map((dest) => (
        <Grid item key={dest.name}>
          <Card sx={{ width: 250 }}>
            <CardActionArea onClick={() => navigate(dest.route)}>
              <CardContent>
                <Typography variant="h5" align="center">
                  {dest.name}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default DestinationSelector;
