/* import React from "react";

import { MapContainer, TileLayer, useMap } from 'react-leaflet'

const Map = function() {
    
    const renderMap = async function(){
        const coords = [50.0611786, 19.9373964];
        const zoom = 15;
        const map = L.map('map').setView(coords, zoom);
        const response = fetch(L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        })).addTo(map);
        await response;
    };

    return(
        <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[51.505, -0.09]}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
</MapContainer>
    )
}

export default Map; */