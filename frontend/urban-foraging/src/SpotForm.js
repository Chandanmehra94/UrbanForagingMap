import React, { useState } from 'react';
import axios from 'axios';

function SpotForm() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const spot = {
      name,
      description,
      latitude: parseFloat(latitude),
      longitude: parseFloat(longitude),
    };
    console.log('Sending spot:', spot); // Debug log
    axios.post('http://localhost:8080/api/spots', spot)
      .then(response => {
        console.log('Spot added:', response.data); // Debug log
        alert('Spot added successfully!');
        setName('');
        setDescription('');
        setLatitude('');
        setLongitude('');
      })
      .catch(error => {
        console.error('Error adding spot:', error);
        alert(`Failed to add spot: ${error.message}`);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Plant Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Latitude</label>
        <input
          type="number"
          step="any"
          value={latitude}
          onChange={(e) => setLatitude(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Longitude</label>
        <input
          type="number"
          step="any"
          value={longitude}
          onChange={(e) => setLongitude(e.target.value)}
          required
        />
      </div>
      <button type="submit">Add Spot</button>
    </form>
  );
}

export default SpotForm;