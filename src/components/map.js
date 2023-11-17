import 'leaflet/dist/leaflet.css'
import '../css/leaflet.css'
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'

export default function Map() {
  return(
    <MapContainer className="map--container" center={[50.0611786, 19.9373964]} zoom={15} scrollWheelZoom={false}>
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
};