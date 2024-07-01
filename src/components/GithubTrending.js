import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GithubTrending = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrendingRepos = async () => {
      try {
        const response = await axios.get('https://api.github.com/search/repositories', {
          params: {
            q: 'stars:>1',
            sort: 'stars',
            order: 'desc',
            per_page: 6,
          },
        });
        setRepos(response.data.items);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching trending repositories:', error);
        setLoading(false);
      }
    };

    fetchTrendingRepos();
  }, []);

  if (loading) {
    return <div className="text-center py-4">Loading trending repositories...</div>;
  }

  return (
    <section id="github-trending" className="py-20 bg-gradient-to-r from-blue-600 via-blue-50 to-blue-800">
      <div className="container pb-12 mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 text-blue-500">Trending GitHub Repositories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.map((repo) => (
            <div key={repo.id} className="bg-white p-6 rounded shadow-md flex flex-col">
              <h3 className="text-2xl font-bold mb-4 text-blue-700">{repo.name}</h3>
              <p className="text-gray-700 mb-4">{repo.description}</p>
              <div className="text-gray-500 mb-4">
                <span className="mr-4">★ {repo.stargazers_count}</span>
                <span>• Forks: {repo.forks_count}</span>
              </div>
              <div className="mt-auto">
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded inline-block"
                >
                  View Repository
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GithubTrending;
