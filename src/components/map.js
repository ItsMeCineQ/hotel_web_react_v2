import 'leaflet/dist/leaflet.css'
import '../css/map.css'
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import { hotels } from './hotels.js'
import { Icon } from 'leaflet';
import icon_marker from '../img/icon_marker.png'

export default function Map() {
  const hotelObjects = Object.values(hotels);

  const iconMarker = new Icon({
    iconUrl: require('../img/icon_marker.png'),
    iconSize: [40, 40]
  });

  return(
    <MapContainer className="map--container" center={[50.0611786, 19.9373964]} zoom={15} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {hotelObjects.map((hotel, index) => (
        <Marker icon={iconMarker} className="map--marker" key={index} position={hotel.address.localization}>
          <Popup>
           <div className="hotel--head">
                    <img src={hotel.image} />
                    <span>{hotel.name}</span>
                </div>
                <div className="hotel--details">
                    <div className="hotel--address">
                        <span>{hotel.address.city}, {hotel.address.street} {hotel.address.number}</span>
                    </div>
                    <div className="hotel--price">
                        <span>Average Price:  zł</span>
                    </div>
                    <div className="hotel--review">
                        {hotel.review}/5⭐
                    </div>
                </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  )
};