import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ReactGA from 'react-ga4';
import Navbar from './components/Navbar';
import Banner from './components/Banner'; // Banner bileşenini ekliyoruz
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Contact from './components/Contact';
import ExchangeRates from './components/ExchangeRates';
import Weather from './components/Weather';
import Arnews from './components/Arnews';
import KaggleData from './components/KaggleData';
import GithubTrending from './components/GithubTrending';
import SapNews from './components/SapNews';
import LiveStream from './components/LiveStream';
import Chatbot from './components/Chatbot';
import CodeEditor from './components/CodeEditor';

ReactGA.initialize('G-F91CDSNQ2P');

const App = () => {

  useEffect(() => {
    ReactGA.send('pageview', window.location.pathname + window.location.search);
  }, []);

  return (
    <Router>
      <div>
        <Navbar />
        <Banner />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/features" element={<Features />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/exchange-rates" element={<ExchangeRates />} />
          <Route path="/Arnews" element={<Arnews />} />
          <Route path="/kaggledata" element={<KaggleData />} />
          <Route path="/github-trending" element={<GithubTrending />} />
          <Route path="/sapnews" element={<SapNews />} />
          <Route path="/livestream" element={<LiveStream />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/coding" element={<CodeEditor />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
