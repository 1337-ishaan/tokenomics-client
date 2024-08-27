import React, { useState } from 'react';
import { TokenDistribution } from '../types/tokenomics';

interface Props {
  onDistributionChange: (distributions: TokenDistribution[]) => void;
}

const TokenDistributionInput: React.FC<Props> = ({ onDistributionChange }) => {
  const [distributions, setDistributions] = useState<TokenDistribution[]>([
    { category: '', percentage: 0 },
  ]);

  const handleAddDistribution = () => {
    setDistributions([...distributions, { category: '', percentage: 0 }]);
  };

  const handleDistributionChange = (index: number, field: keyof TokenDistribution, value: string) => {
    const newDistributions = distributions.map((dist, i) => {
      if (i === index) {
        return {
          ...dist,
          [field]: field === 'percentage' ? parseFloat(value) || 0 : value
        };
      }
      return dist;
    });
    setDistributions(newDistributions);
    onDistributionChange(newDistributions);
  };

  return (
    <div>
      {distributions.map((dist, index) => (
        <div key={index}>
          <input
            type="text"
            value={dist.category}
            onChange={(e) => handleDistributionChange(index, 'category', e.target.value)}
            placeholder="Category"
          />
          <input
            type="number"
            value={dist.percentage}
            onChange={(e) => handleDistributionChange(index, 'percentage', e.target.value)}
            placeholder="Percentage"
          />
        </div>
      ))}
      <button type="button" onClick={handleAddDistribution}>Add Distribution</button>
    </div>
  );
};

export default TokenDistributionInput;