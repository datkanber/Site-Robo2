import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Banner.css';

const Banner = () => {
  const [competitions, setCompetitions] = useState([]);
  const [datasets, setDatasets] = useState([]);

  const fetchKaggleData = async () => {
    try {
      const competitionsResponse = await axios.get('http://localhost:5001/api/kaggle/competitions');
      const datasetsResponse = await axios.get('http://localhost:5001/api/kaggle/datasets');
      setCompetitions(competitionsResponse.data);
      setDatasets(datasetsResponse.data);
    } catch (error) {
      console.error('Error fetching Kaggle data:', error);
    }
  };

  useEffect(() => {
    const storedCompetitions = localStorage.getItem('competitions');
    const storedDatasets = localStorage.getItem('datasets');
    const lastFetchTime = localStorage.getItem('lastFetchTime');
    const currentTime = new Date().getTime();
    const oneDay = 24 * 60 * 60 * 1000;

    if (storedCompetitions && storedDatasets && lastFetchTime && (currentTime - lastFetchTime < oneDay)) {
      setCompetitions(JSON.parse(storedCompetitions));
      setDatasets(JSON.parse(storedDatasets));
    } else {
      fetchKaggleData();
      localStorage.setItem('lastFetchTime', currentTime);
    }
  }, []);

  useEffect(() => {
    if (competitions.length && datasets.length) {
      localStorage.setItem('competitions', JSON.stringify(competitions));
      localStorage.setItem('datasets', JSON.stringify(datasets));
    }
  }, [competitions, datasets]);

  return (
    <div className="banner">
      <div className="scrolling-text">
        {competitions.length === 0 && datasets.length === 0 ? (
          <span>Loading Kaggle data...</span>
        ) : (
          <>
            {competitions.map((comp, index) => (
              <span key={index}>{comp.title}</span>
            ))}
            {datasets.map((dataset, index) => (
              <span key={index}>{dataset.title}</span>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Banner;