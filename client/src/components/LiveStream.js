import React from 'react';
import './LiveStream.css'; 

const LiveStream = () => {
  return (
    <section id="livestream" className="py-20 bg-gradient-to-r from-blue-800 via-blue-200 to-blue-900">
      <div className="container mx-auto text-center my-news">
        <h2 className="my-news">LIVE News</h2>
        <div className="aspect-ratio">
          <iframe
            src="https://www.youtube.com/embed/oJUvTVdTMyY" 
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full rounded-lg shadow-md"
            title="Live Stream"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default LiveStream;
