import React from 'react';
import './LiveStream.css'; // Make sure to import your CSS file

const LiveStream = () => {
  return (
    <section id="livestream" className="py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-blue-600">LIVE News</h2>
        <div className="aspect-ratio">
          <iframe
            src="https://www.youtube.com/embed/oJUvTVdTMyY" // Corrected embed URL
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
