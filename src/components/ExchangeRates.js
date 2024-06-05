import React, { useEffect, useState, useCallback } from 'react';

const ExchangeRates = () => {
  const [rates, setRates] = useState({});
  const [prevRates, setPrevRates] = useState({});
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const fetchRates = useCallback(async () => {
    setRefreshing(true);
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
        SGD: exchangeData.rates.SGD, // Singapore Dollar as an alternative
      });

      setLoading(false);
      setRefreshing(false);
    } catch (error) {
      console.error('Error fetching exchange rates:', error);
      setLoading(false);
      setRefreshing(false);
    }
  }, [rates]);

  useEffect(() => {
    fetchRates();
    const interval = setInterval(fetchRates, 60000); // Poll every 60 seconds
    return () => clearInterval(interval); // Clear interval on component unmount
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
    { name: 'USD to BTC', rate: rates.BTC, prevRate: prevRates.BTC }, // Bitcoin
    { name: 'USD to ETH', rate: rates.ETH, prevRate: prevRates.ETH }, // Ethereum
    { name: 'USD to SGD', rate: rates.SGD, prevRate: prevRates.SGD }, // Singapore Dollar as an alternative
    { name: 'USD to CNY', rate: rates.CNY, prevRate: prevRates.CNY }, // Chinese Yuan
    { name: 'USD to INR', rate: rates.INR, prevRate: prevRates.INR }, // Indian Rupee
  ];

  const renderArrow = (change) => {
    if (change === 'up') {
      return <span className="text-green-500">▲</span>;
    } else if (change === 'down') {
      return <span className="text-red-500">▼</span>;
    } else {
      return <span className="text-gray-500">●</span>; // No change
    }
  };

  return (
    <section id="exchange-rates" className="py-20 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-blue-600">Daily Exchange Rates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {popularRates.map((item) => (
            <div key={item.name} className="bg-gray-100 p-4 rounded shadow-md flex flex-col justify-between items-center">
              <span className="text-xl font-bold">{item.name}</span>
              <span className="text-lg">
                {item.rate ? item.rate.toFixed(2) : 'N/A'} {renderArrow(getRateChange(item.rate, item.prevRate))}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <button
            onClick={fetchRates}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            {refreshing ? 'Refreshing...' : 'Refresh Rates'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ExchangeRates;
