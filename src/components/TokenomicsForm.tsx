export interface TokenDistribution {
    category: string;
    percentage: number;
  }
  
  export interface VestingSchedule {
    [key: string]: string;
  }
  
  export interface TokenUtility {
    useCase: string;
    description: string;
  }
  
  export interface TokenomicsData {
    projectName: string;
    totalSupply: number;
    tokenDistribution: TokenDistribution[];
    initialTokenPrice: number;
    targetMarketCap: number;
    blockchainPlatform: string;
    tokenUtilities: TokenUtility[];
  }
  
  export interface TokenomicsScenario extends TokenomicsData {
    name: string;
    vestingSchedule: VestingSchedule;
    projectedMarketCap: number;
    circulatingSupplyProjection: Array<{ date: string; amount: number }>;
    priceProjection: Array<{ date: string; price: number }>;
    marketCapProjection: Array<{ date: string; marketCap: number }>;
    analysis: string;
  }
  
  export interface EnhancedTokenomicsInput extends Partial<TokenomicsData> {
    projectGoals: string[];
    targetAudience: string[];
    projectStage: string;
    competitorAnalysis: string[];
    regulatoryConsiderations: string[];
  }