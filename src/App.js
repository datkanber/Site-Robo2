import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Contact from './components/Contact';
import ExchangeRates from './components/ExchangeRates';
import Weather from './components/Weather';
import AInews from './components/AInews';
import KaggleData from './components/KaggleData';
import GithubTrending from './components/GithubTrending';
import SapNews from './components/SapNews'; // Ensure this import is correct

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Projects />
      <Weather />
      <ExchangeRates />
      <AInews />
      <KaggleData />
      <GithubTrending />
      <SapNews /> {/* Ensure this component is correctly used */}
      <Blog />
      <Contact />
    </div>
  );
}

export default App;
