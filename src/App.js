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
import SapNews from './components/SapNews';
import LiveStream from './components/LiveStream';
import Chatbot from './components/Chatbot';
import CodeEditor from './components/CodeEditor'; // Importing the new component

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
      <SapNews />
      <LiveStream />
      <Chatbot />
      <CodeEditor />
      <Blog />
      <Contact />
    </div>
  );
}

export default App;
