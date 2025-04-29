import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import axios from 'axios';
import 'leaflet/dist/leaflet.css';

// Fix default marker icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

// Custom marker icon
const customIcon = new L.Icon({
  iconUrl: 'https://img.icons8.com/fluency/48/000000/marker.png',
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

function MapComponent() {
  const [spots, setSpots] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/spots')
      .then(response => setSpots(response.data))
      .catch(error => console.error('Error fetching spots:', error));
  }, []);

  return (
    <MapContainer center={[28.7041, 77.1025]} zoom={13} style={{ height: '100%', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {spots.map(spot => (
        <Marker key={spot.id} position={[spot.latitude, spot.longitude]} icon={customIcon}>
          <Popup>
            <b>{spot.name}</b><br />{spot.description}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default MapComponent;