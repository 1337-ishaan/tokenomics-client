// types/tokenomics.ts

export interface TokenDistribution {
  category: string;
  percentage: number;
}

export interface VestingSchedule {
  team: string;
  advisors: string;
}

export interface TokenUtility {
  useCase: string;
  description: string;
}

export interface RiskAssessment {
  factor: string;
  level: number;
}

export interface Projection {
  date: string;
  value: number;
}

export interface TokenomicsScenario {
  name: string;
  projectName: string;
  projectConcept: string;
  totalSupply: number;
  tokenDistribution: TokenDistribution[];
  initialTokenPrice: number;
  vestingSchedule: VestingSchedule;
  tokenUtilization: TokenUtility[];
  riskAssessment: RiskAssessment[];
  projections: {
    price: Projection[];
    marketCap: Projection[];
    circulatingSupply: Projection[];
  };
  analysis: string;
  competitiveAnalysis: CompetitiveAnalysis; // Add this line
  blockchainPlatform: string; // Add this line
}


export interface Competitor {
  name: string;
  description: string;
  // tokenomics: {
  //   totalSupply: number;
  //   initialPrice: number;
  //   distribution: Array<{ category: string; percentage: number }>;
  // };
  strengths: string[];
  weaknesses: string[];
}

export interface CompetitiveAnalysis {
  competitors: Competitor[];
  comparisonAnalysis: string;
}


export interface EnhancedTokenomicsInput {
  projectName: string;
  projectConcept: string;
  totalSupply: number;
  blockchainPlatform: string;
  projectGoals: string[];
  targetAudience: string[];
  projectStage: string;
  competitorAnalysis: string[];
  regulatoryConsiderations: string[];
  tokenDistribution?: TokenDistribution[];
  tokenUtilities?: TokenUtility[];
}

export interface MarketData {
  projectName: string;
  blockchainPlatform: string;
  marketSentiment: 'bullish' | 'bearish' | 'neutral';
  ecosystemCondition: string;
  avgNewTokenVolume: number;
  avgNewTokenMarketCap: number;
  estimatedPriceRange: {
    min: number;
    max: number;
  };
  timestamp: string;
}

export interface CompetitorData {
  name: string;
  marketCap: number;
  price: number;
  volume: number;
}

