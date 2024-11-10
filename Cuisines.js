// frontend/src/components/Cuisine.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Cuisine() {
  const [cuisines, setCuisines] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/cuisines')
      .then((response) => setCuisines(response.data))
      .catch((error) => console.error('Error fetching data', error));
  }, []);

  return (
    <div>
      <h2>Cuisine Recommendations</h2>
      <ul>
        {cuisines.map((cuisine, index) => (
          <li key={index}><strong>{cuisine.name}</strong>: {cuisine.description}</li>
        ))}
      </ul>
    </div>
  );
}

export default Cuisine;
