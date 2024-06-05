import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DOMPurify from 'dompurify';

const SapNews = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchSapNews = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get('https://api.rss2json.com/v1/api.json?rss_url=https://news.google.com/rss/search?q=SAP&hl=en-US&gl=US&ceid=US:en');
      console.log('API Response:', response.data);
      setArticles(response.data.items);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching SAP news:', error);
      setError('Failed to load SAP news');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSapNews();
  }, []);

  if (loading) {
    return <div className="text-center py-4">Loading SAP news...</div>;
  }

  if (error) {
    return <div className="text-center py-4 text-red-500">{error}</div>;
  }

  return (
    <section id="sapnews" className="py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-blue-600">Latest SAP News</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {articles.slice(0, 4).map((article, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md mb-6 border border-gray-200">
              <h4 className="text-xl font-bold text-black mb-2">{article.title}</h4>
              <p className="text-md text-black mb-4" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(article.description) }}></p>
              <a href={article.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Read More</a>
            </div>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <button
            onClick={fetchSapNews}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Refresh News
          </button>
        </div>
      </div>
    </section>
  );
};

export default SapNews;
