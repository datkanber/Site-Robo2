import React, { useEffect, useState } from 'react';

const AInews = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const rssUrl = 'https://news.google.com/rss/search?q=artificial+intelligence&hl=en-US&gl=US&ceid=US:en';

  useEffect(() => {
    const fetchRSS = async () => {
      try {
        const response = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(rssUrl)}`);
        if (!response.ok) {
          throw new Error('RSS feed could not be fetched');
        }
        const data = await response.json();
        const parser = new DOMParser();
        const rssDoc = parser.parseFromString(data.contents, "application/xml");
        const items = rssDoc.querySelectorAll("item");
        const articles = Array.from(items).slice(0, 3).map(item => {
          const description = item.querySelector("description").textContent;
          const imageUrlMatch = description.match(/<img.*?src="(.*?)"/);
          const imageUrl = imageUrlMatch ? imageUrlMatch[1] : null;
          return {
            title: item.querySelector("title").textContent,
            description: description.replace(/<img.*?>/, ""), // Remove the image tag from description
            link: item.querySelector("link").textContent,
            pubDate: item.querySelector("pubDate").textContent,
            imageUrl: imageUrl,
          };
        });
        setArticles(articles);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchRSS();
  }, [rssUrl]);

  const refreshNews = () => {
    setLoading(true);
    setError(null);
    setArticles([]);
    const fetchRSS = async () => {
      try {
        const response = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(rssUrl)}`);
        if (!response.ok) {
          throw new Error('RSS feed could not be fetched');
        }
        const data = await response.json();
        const parser = new DOMParser();
        const rssDoc = parser.parseFromString(data.contents, "application/xml");
        const items = rssDoc.querySelectorAll("item");
        const articles = Array.from(items).slice(0, 3).map(item => {
          const description = item.querySelector("description").textContent;
          const imageUrlMatch = description.match(/<img.*?src="(.*?)"/);
          const imageUrl = imageUrlMatch ? imageUrlMatch[1] : null;
          return {
            title: item.querySelector("title").textContent,
            description: description.replace(/<img.*?>/, ""), // Remove the image tag from description
            link: item.querySelector("link").textContent,
            pubDate: item.querySelector("pubDate").textContent,
            imageUrl: imageUrl,
          };
        });
        setArticles(articles);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchRSS();
  };

  if (loading) {
    return <div className="text-center py-4">Loading news data...</div>;
  }

  if (error) {
    return <div className="text-center py-4 text-red-500">{error}</div>;
  }

  return (
    <section id="ainews" className="py-20" style={{ backgroundImage: 'linear-gradient(120deg, #0084f0a1, #d9e2ec, #548cc4)' }}>
      <div className="container mx-auto text-center pb-10">
      <h2 className="text-4xl font-bold mb-6 text-blue-600">Latest AI News</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {articles.map((article, index) => (
            <div key={index} className="bg-white p-20 rounded shadow-md">
              {article.imageUrl && (
                <img src={article.imageUrl} alt={article.title} className="mb-4 w-full h-48 object-cover rounded" />
              )}
              <h3 className="text-xl font-bold mb-2">{article.title}</h3>
              <p className="text-md mb-4" dangerouslySetInnerHTML={{ __html: article.description }}></p>
              <a href={article.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Read more</a>
              <p className="text-sm text-gray-500 mt-2">{new Date(article.pubDate).toLocaleDateString()}</p>
            </div>
          ))}
        </div>
        <button onClick={refreshNews} className="mt-6 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded">Refresh News</button>
      </div>
    </section>
  );
};

export default AInews;
