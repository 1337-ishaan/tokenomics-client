import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TokenomicsScenario, MarketData } from '../types/tokenomics';
import { Section, SectionTitle } from '../utils/styled';

interface Props {
  scenario: TokenomicsScenario;
}

const MarketDataComponent: React.FC<Props> = ({ scenario }) => {
  const [marketData, setMarketData] = useState<MarketData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMarketData = async () => {
        console.log(scenario,'scenario');
      try {
        const response = await axios.get<MarketData>(
          `${process.env.REACT_APP_API_URL}/market-data/${scenario.projectName}?blockchainPlatform=${scenario.blockchainPlatform}`
        );
        setMarketData(response.data);
      } catch (error) {
        console.error('Error fetching market data:', error);
        setError('Failed to fetch market data');
      }
    };

    fetchMarketData();
  }, [scenario.projectName, scenario.blockchainPlatform]);

  if (error) return <div>Error: {error}</div>;
  if (!marketData) return <div>Loading market data...</div>;

  return (
    <Section>
      <SectionTitle>Real Time Market Sentimental Analysis</SectionTitle>
      <p>Blockchain Platform: {marketData.blockchainPlatform}</p>
      <p>Market Sentiment: {marketData.marketSentiment}</p>
      <p>Ecosystem Condition: {marketData.ecosystemCondition}</p>
      <p>Avg New Token Volume ($): {marketData.avgNewTokenVolume}</p>
      <p>Avg New Token Market Cap($): {marketData.avgNewTokenMarketCap}</p>
      <p>Estimated Price Range($): {marketData.estimatedPriceRange.min} - {marketData.estimatedPriceRange.max}</p>
    </Section>
  );
};

export default MarketDataComponent;