import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
    fetchKaggleData();
  }, []);

  if (loading) {
    return <div className="text-center py-4 text-blue-800 font-bold text-xl">Loading Kaggle data...</div>;
  }

  if (error) {
    return <div className="text-center py-4 text-red-500 font-bold text-xl">{error}</div>;
  }

  return (
    <section id="kaggledata" className="py-20 bg-gray-100">
      <div className="container mx-auto text-center">
      <h2 className="text-4xl font-bold mb-6 text-blue-600">Kaggle</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Competitions</h3>
            {competitions.slice(0, 3).map((comp, index) => (
              <div key={index} className="bg-white p-4 rounded shadow-md mb-4 border border-gray-300">
                <h4 className="text-xl font-bold text-gray-800">{comp.title}</h4>
                <p className="text-md text-gray-600">{comp.description}</p>
                <a href={`https://www.kaggle.com/c/${comp.ref}`} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">View Competition</a>
              </div>
            ))}
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Datasets</h3>
            {datasets.slice(0, 3).map((dataset, index) => (
              <div key={index} className="bg-white p-4 rounded shadow-md mb-4 border border-gray-300">
                <h4 className="text-xl font-bold text-gray-800">{dataset.title}</h4>
                <p className="text-md text-gray-600">{dataset.subtitle}</p>
                <a href={`https://www.kaggle.com/${dataset.ref}`} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">View Dataset</a>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8">
          <button
            onClick={fetchKaggleData}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Refresh Data
          </button>
        </div>
      </div>
    </section>
  );
};

export default KaggleData;
