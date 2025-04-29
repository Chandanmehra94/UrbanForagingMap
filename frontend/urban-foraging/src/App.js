import React from 'react';
import MapComponent from './MapComponent';
import SpotForm from './SpotForm';
import './index.css';

function App() {
  return (
    <div>
      <h1>Urban Foraging Map</h1>
      <div className="container">
        <div className="form-section">
          <SpotForm />
        </div>
        <div className="map-section">
          <MapComponent />
        </div>
      </div>
    </div>
  );
}

export default App;