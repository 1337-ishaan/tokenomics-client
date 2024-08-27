import axios from 'axios';
import { EnhancedTokenomicsInput, TokenomicsScenario } from '../types/tokenomics';


export const generateTokenomicsScenarios = async (
  input: EnhancedTokenomicsInput,
  experienceLevel: 'beginner' | 'intermediate' | 'advanced'
): Promise<TokenomicsScenario[]> => {
  try {
    const response = await axios.post<TokenomicsScenario[]>(`${process.env.REACT_APP_API_URL}/tokenomics/generate`, {input, experienceLevel});
    return response.data;
  } catch (error) {
    console.error('Error generating tokenomics scenarios:', error);
    throw new Error('Failed to generate tokenomics scenarios');
  }
};