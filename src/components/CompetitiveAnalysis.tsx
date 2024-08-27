import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { TokenomicsScenario, CompetitiveAnalysis as CompAnalysis } from '../types/tokenomics';
import { Section, SectionTitle } from '../utils/styled';

interface Props {
  scenario: TokenomicsScenario & { competitiveAnalysis: CompAnalysis };
}

const CompetitiveAnalysis: React.FC<Props> = ({ scenario }) => {
  const { competitiveAnalysis } = scenario;

  if (!competitiveAnalysis) return <div>No competitive analysis data available.</div>;

  // const chartData = [
  //   {
  //     name: scenario.name,
  //     totalSupply: scenario.tokenDistribution.reduce((sum, item) => sum + item.percentage, 0),
  //     initialPrice: scenario.initialTokenPrice,
  //   },
  //   ...competitiveAnalysis.competitors.map(competitor => ({
  //     name: competitor.name,
  //     totalSupply: competitor.tokenomics.totalSupply,
  //     initialPrice: competitor.tokenomics.initialPrice,
  //   }))
  // ];

  return (
    <Section>
      <SectionTitle>Competitive Analysis</SectionTitle>
      {/* <ResponsiveContainer width="100%" height={300}> */}
        {/* <BarChart data={chartData}>
          <XAxis dataKey="name" />
          <YAxis yAxisId="left" />
          <YAxis yAxisId="right" orientation="right" />
          <Tooltip />
          <Legend />
          <Bar yAxisId="left" dataKey="totalSupply" fill="#8884d8" name="Total Supply" />
          <Bar yAxisId="right" dataKey="initialPrice" fill="#82ca9d" name="Initial Price" />
        </BarChart> */}
      {/* </ResponsiveContainer> */}
      <div>
        <h3>Comparison Analysis</h3>
        <p>{competitiveAnalysis.comparisonAnalysis}</p>
      </div>
      {competitiveAnalysis.competitors.map((competitor, index) => (
        <div key={index}>
          <h4>{competitor.name}</h4>
          <p>{competitor.description}</p>
          <h5>Strengths</h5>
          <ul>
            {competitor.strengths.map((strength, i) => <li key={i}>{strength}</li>)}
          </ul>
          <h5>Weaknesses</h5>
          <ul>
            {competitor.weaknesses.map((weakness, i) => <li key={i}>{weakness}</li>)}
          </ul>
        </div>
      ))}
    </Section>
  );
};

export default CompetitiveAnalysis;