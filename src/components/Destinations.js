import React from 'react';
import './Destinations.css';
import baliImage from '../images/bali.jpg';
import caribbeanImage from '../images/caribbean.jpg';
import mediImage from '../images/medi.jpg'

const destinations = [
  { name: 'Bahamas', image: baliImage, description: 'A tropical paradise.' },
  { name: 'Alaska', image: caribbeanImage, description: 'A breathtaking view of the north.' },
  { name: 'Mediterranean', image: mediImage, description: 'Explore the beauty of the Mediterranean.' },
];

const Destinations = () => {
  return (
    <div className="destinations-container">
      <h2>Recommended Destinations</h2>
      <div className="destinations-list">
        {destinations.map((destination, index) => (
          <div key={index} className="destination-card">
            <img src={destination.image} alt={destination.name} />
            <h3>{destination.name}</h3>
            <p>{destination.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destinations;
