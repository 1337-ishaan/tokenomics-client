import React from 'react';
import { TokenomicsScenario } from '../types/tokenomics';
import {
  ResponsiveContainer, PieChart, Pie, Cell,
  LineChart, Line, BarChart, Bar,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend
} from 'recharts';
import {
  DashboardContainer, Title, Section, SectionTitle, List, ListItem
} from '../utils/styled';
import RealTimeMarketSimulation from './RealTimeMarketSimulation';
import CompetitiveAnalysis from './CompetitiveAnalysis';

interface Props {
  scenario: TokenomicsScenario;
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

const ComprehensiveTokenomicsDashboard: React.FC<Props> = ({ scenario }) => {
  return (
    <DashboardContainer id="tokenomics-dashboard">
      <Title>{scenario.projectName}</Title>
      <p>{scenario.analysis}</p>

      <Section>
        <SectionTitle>Token Distribution</SectionTitle>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={scenario.tokenDistribution}
              dataKey="percentage"
              nameKey="category"
              cx="50%"
              cy="50%"
              outerRadius={80}
              label
            >
              {scenario.tokenDistribution.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </Section>
      
      {
scenario && <>
        <RealTimeMarketSimulation scenario={scenario} />
      <CompetitiveAnalysis scenario={scenario} />
</>
      }

      <Section>
        <SectionTitle>Price Projection</SectionTitle>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={scenario.projections.price}>
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="price" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </Section>

      <Section>
        <SectionTitle>Market Cap Projection</SectionTitle>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={scenario.projections.marketCap}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip  />
            <Legend />
            <Bar dataKey="marketCap" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </Section>

      <Section>
        <SectionTitle>Circulating Supply Projection</SectionTitle>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={scenario.projections.circulatingSupply}>
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="amount" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </Section>

      <Section>
        <SectionTitle>Vesting Schedule</SectionTitle>
        <p>Team: {scenario.vestingSchedule.team}</p>
        <p>Advisors: {scenario.vestingSchedule.advisors}</p>
      </Section>

      <Section>
        <SectionTitle>Token Utilization</SectionTitle>
        <List>
          {scenario.tokenUtilization.map((util, index) => (
            <ListItem key={index}>{util.useCase}: {util.description}</ListItem>
          ))}
        </List>
      </Section>

      <Section>
        <SectionTitle>Risk Assessment</SectionTitle>
        <List>
          {scenario.riskAssessment.map((risk, index) => (
            <ListItem key={index}>{risk.factor}: Level {risk.level}</ListItem>
          ))}
        </List>
      </Section>
    </DashboardContainer>
  );
};

export default ComprehensiveTokenomicsDashboard;