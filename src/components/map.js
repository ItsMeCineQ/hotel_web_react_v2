import 'leaflet/dist/leaflet.css'
import '../css/map.css'
import { useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { hotels } from './hotels.js'
import { Icon } from 'leaflet';
import { MAP_URL, MAIN_LOC, MAP_ZOOM } from '../config.js'

export default function Map() {
  const hotelObjects = Object.values(hotels);

  const iconMarker = new Icon({
    iconUrl: require('../img/icon_marker.png'),
    iconSize: [40, 40]
  });

  const calcAveragePrice = function(hotel){
    const prices = Object.values(hotel.price);
    const averagePrices = Math.floor(prices.reduce((acc, price) => acc + price, 0) / prices.length);
    return averagePrices;
  };

  useEffect(() => {
    const mapContainer = document.querySelector('.map--container');
    mapContainer.classList.add('map--container-visible');
  }, []);

  return(
    <MapContainer className="map--container" center={MAIN_LOC} zoom={MAP_ZOOM} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url={MAP_URL}
      />
      {hotelObjects.map((hotel, index) => (
        <Marker icon={iconMarker} className="map--marker" key={index} position={hotel.address.localization}>
          <Popup>
           <div className="hotel--head">
                    <img src={hotel.image} alt={hotel.name} />
                    <span>{hotel.name}</span>
                </div>
                <div className="hotel--details">
                    <div className="hotel--address">
                        <span>{hotel.address.city}, {hotel.address.street} {hotel.address.number}</span>
                    </div>
                    <div className="hotel--price">
                        <span>Average Price:  {calcAveragePrice(hotel)} zł</span>
                    </div>
                    <div className="hotel--review">
                    {hotel.reviews && hotel.reviews.length > 0 ?
                      `${hotel.reviews.reduce((acc, review) => acc += review, 0) / hotel.reviews.length}/5⭐` :
                      "No reviews"
                    }
                    </div>
                </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  )
};