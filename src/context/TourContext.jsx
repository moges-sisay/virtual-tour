// src/context/TourContext.jsx
import React, { createContext, useContext, useState } from "react";
import lalibelaImages from "../data/lalibelaImages";
import gonderImages from "../data/gonderImages";
import bahirdarImages from "../data/bahirdarImages";

const TourContext = createContext();

const imageMap = {
  lalibela: lalibelaImages,
  gonder: gonderImages,
  bahirdar: bahirdarImages,
};

export function TourProvider({ children }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [destination, setDestination] = useState("lalibela"); // default

  const images = imageMap[destination] || [];

  return (
    <TourContext.Provider
      value={{
        selectedImage,
        setSelectedImage,
        destination,
        setDestination,
        images,
      }}
    >
      {children}
    </TourContext.Provider>
  );
}

export function useTourContext() {
  return useContext(TourContext);
}
