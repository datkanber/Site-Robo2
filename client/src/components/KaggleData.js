import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './KaggleData.css';

const KaggleData = () => {
  const [competitions, setCompetitions] = useState([]);
  const [datasets, setDatasets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchKaggleData = async () => {
    setLoading(true);
    setError(null);
    try {
      const competitionsResponse = await axios.get('http://localhost:5001/api/kaggle/competitions');
      const datasetsResponse = await axios.get('http://localhost:5001/api/kaggle/datasets');

      setCompetitions(competitionsResponse.data);
      setDatasets(datasetsResponse.data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
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
      setLoading(false);
    } else {
      fetchKaggleData();
      localStorage.setItem('lastFetchTime', currentTime);
    }
  }, []);

  useEffect(() => {
    if (!loading && !error) {
      localStorage.setItem('competitions', JSON.stringify(competitions));
      localStorage.setItem('datasets', JSON.stringify(datasets));
    }
  }, [competitions, datasets, loading, error]);

  if (loading) {
    return <div className="text-center py-4 text-blue-800 font-bold text-xl">Loading Kaggle data...</div>;
  }

  if (error) {
    return <div className="text-center py-4 text-red-500 font-bold text-xl">{error}</div>;
  }

  return (
    <section id="kaggledata" className="py-20 bg-gradient-to-r from-blue-200 via-blue-200 to-blue-400">
      <div className="container mx-auto text-center pb-10">
        <h2 className="my-kaggle">Kaggle</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <h3 className="text-2xl font-bold mb-4 text-white">Competitions</h3>
            {competitions.slice(0, 3).map((comp, index) => (
              <div key={index} className="card bg-white p-4 rounded shadow-md mb-10 border border-gray-300">
                <div className="card-content">
                  <h4 className="text-xl font-bold text-gray-800">{comp.title}</h4>
                  <p className="text-md text-gray-600">{comp.description}</p>
                </div>
                <a href={`https://www.kaggle.com/c/${comp.ref}`} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline mt-auto">
                  View Competition
                </a>
              </div>
            ))}
          </div>
          <div className="flex flex-col">
            <h3 className="text-2xl font-bold mb-4 text-white">Datasets</h3>
            {datasets.slice(0, 3).map((dataset, index) => (
              <div key={index} className="card bg-white p-4 rounded shadow-md mb-10 border border-gray-300">
                <div className="card-content">
                  <h4 className="text-xl font-bold text-gray-800">{dataset.title}</h4>
                  <p className="text-md text-gray-600">{dataset.subtitle}</p>
                </div>
                <a href={`https://www.kaggle.com/${dataset.ref}`} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline mt-auto">
                  View Dataset
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default KaggleData;
