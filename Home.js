// frontend/src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Welcome to the Travel App</h1>
      <Link to="/cuisine">Explore Cuisines</Link>
    </div>
  );
}

export default Home;
