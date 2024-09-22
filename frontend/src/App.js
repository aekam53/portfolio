import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [portfolio, setPortfolio] = useState(null);

  useEffect(() => {
    // Fetch portfolio data from the backend
    axios.get('http://localhost:5000/api/portfolio')
      .then(response => setPortfolio(response.data))
      .catch(error => console.error(error));
  }, []);

  if (!portfolio) return <div>Loading...</div>;

  return (
    <div className="App">
      <header className="App-header">
        <h1>{portfolio.name}</h1>
        <h2>{portfolio.profession}</h2>
        <h3>Projects</h3>
        <ul>
          {portfolio.projects.map((project, index) => (
            <li key={index}>
              <h4>{project.title}</h4>
              <p>{project.description}</p>
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
