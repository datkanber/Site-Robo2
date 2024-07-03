import React, { useEffect, useState, useCallback } from 'react';
import './ExchangeRates.css';

const ExchangeRates = () => {
  const [rates, setRates] = useState({});
  const [prevRates, setPrevRates] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchRates = useCallback(async () => {
    try {
      const [exchangeResponse, cryptoResponse] = await Promise.all([
        fetch('https://api.exchangerate-api.com/v4/latest/USD'),
        fetch('https://api.allorigins.win/get?url=' + encodeURIComponent('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd'))
      ]);

      const exchangeData = await exchangeResponse.json();
      const cryptoData = await cryptoResponse.json();
      const cryptoRates = JSON.parse(cryptoData.contents);

      setPrevRates(rates);
      setRates({
        ...exchangeData.rates,
        BTC: cryptoRates.bitcoin.usd,
        ETH: cryptoRates.ethereum.usd,
        SGD: exchangeData.rates.SGD,
      });

      setLoading(false);
    } catch (error) {
      console.error('Error fetching exchange rates:', error);
      setLoading(false);
    }
  }, [rates]);

  useEffect(() => {
    fetchRates();
  }, [fetchRates]);

  const getRateChange = (current, previous) => {
    if (previous === undefined) return 'same';
    return current > previous ? 'up' : current < previous ? 'down' : 'same';
  };

  if (loading) {
    return <div className="text-center py-4">Loading exchange rates...</div>;
  }

  const popularRates = [
    { name: 'USD to EUR', rate: rates.EUR, prevRate: prevRates.EUR },
    { name: 'USD to TRY', rate: rates.TRY, prevRate: prevRates.TRY },
    { name: 'USD to GBP', rate: rates.GBP, prevRate: prevRates.GBP },
    { name: 'USD to JPY', rate: rates.JPY, prevRate: prevRates.JPY },
    { name: 'USD to CHF', rate: rates.CHF, prevRate: prevRates.CHF },
    { name: 'USD to CAD', rate: rates.CAD, prevRate: prevRates.CAD },
    { name: 'USD to AUD', rate: rates.AUD, prevRate: prevRates.AUD },
    { name: 'USD to BTC', rate: rates.BTC, prevRate: prevRates.BTC },
    { name: 'USD to ETH', rate: rates.ETH, prevRate: prevRates.ETH },
    { name: 'USD to SGD', rate: rates.SGD, prevRate: prevRates.SGD },
    { name: 'USD to CNY', rate: rates.CNY, prevRate: prevRates.CNY },
    { name: 'USD to INR', rate: rates.INR, prevRate: prevRates.INR },
  ];

  const renderArrow = (change) => {
    if (change === 'up') {
      return <span className="text-green-500">▲</span>;
    } else if (change === 'down') {
      return <span className="text-red-500">▼</span>;
    } else {
      return <span className="text-gray-500">●</span>;
    }
  };

  return (
    <section id="exchange-rates" className="py-20" style={{ backgroundImage: 'linear-gradient(120deg, #0084f0a1, #d9e2ec, #548cc4)' }}>
      <div className="container mx-auto text-center pb-10">
        <h2 className="my-rates">Daily Exchange Rates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {popularRates.map((item) => (
            <div key={item.name} className="bg-gray-100 p-6 rounded shadow-md flex flex-col justify-between items-center">
              <span className="text-xl font-bold text-black">{item.name}</span>
              <span className="text-lg text-black">
                {item.rate ? item.rate.toFixed(2) : 'N/A'} {renderArrow(getRateChange(item.rate, item.prevRate))}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExchangeRates;
