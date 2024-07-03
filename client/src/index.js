import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ReactGA from 'react-ga4';

// Google Analytics'i başlatma
ReactGA.initialize('G-F91CDSNQ2P');
ReactGA.send('pageview', window.location.pathname + window.location.search);

// Konsol mesajlarını ekleme
if (typeof console !== 'undefined') {
  console.log("%cStop!", "color: red; font-size: 50px;");
  console.log("%cThis is a browser feature intended for developers. If someone told you to copy-paste something here to enable a feature or 'hack' someone's account, it is a scam and will give them access to your account.", "font-size: 20px;");
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals(console.log);
