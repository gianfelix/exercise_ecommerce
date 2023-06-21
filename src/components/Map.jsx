import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Box, Heading } from "@chakra-ui/react";

function Map() {
  const position = [51.505, -0.09]; // default position

  return (
    <Box>
      <Heading as="h2" size="md" mb="4">
        Map
      </Heading>
      <MapContainer
        center={position}
        zoom={13}
        style={{ height: "300px", width: "400px" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>Hello from React Leaflet</Popup>
        </Marker>
      </MapContainer>
    </Box>
  );
}

export default Map;
