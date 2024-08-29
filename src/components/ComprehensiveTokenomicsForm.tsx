import React, { useState } from 'react';
import { EnhancedTokenomicsInput, TokenomicsScenario } from '../types/tokenomics';
import { generateTokenomicsScenarios } from '../api/tokenomics';
import ComprehensiveTokenomicsDashboard from './ComprehensiveTokenomicsDashboard';
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import {
  Container, Form, Input, Select, Button, ButtonGroup,
  TextArea, Tabs, Tab
} from '../utils/styled';

type ExperienceLevel = 'beginner' | 'intermediate' | 'advanced';

const ComprehensiveTokenomicsForm: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ExperienceLevel>('beginner');
  const [formData, setFormData] = useState<EnhancedTokenomicsInput>({
    projectName: '',    
    projectConcept: '',
    totalSupply: 0,
    blockchainPlatform: '',
    projectGoals: [],
    targetAudience: [],
    projectStage: '',
    competitorAnalysis: [],
    regulatoryConsiderations: [],
    tokenDistribution: [],
    tokenUtilities: [],
  });

  const [scenario, setScenario] = useState<TokenomicsScenario | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleMultiSelectChange = (name: keyof EnhancedTokenomicsInput) => (e: React.ChangeEvent<HTMLSelectElement>) => {
    const values = Array.from(e.target.selectedOptions, option => option.value);
    setFormData({ ...formData, [name]: values });
  };

  const generateScenario = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const generatedScenario = await generateTokenomicsScenarios(formData, activeTab);
      setScenario(generatedScenario);
    } catch (err) {
      setError('Failed to generate tokenomics scenario. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    generateScenario();
  };

  const handleRegenerate = () => {
    generateScenario();
  };

  const handleDownloadPDF = async () => {
    const element = document.getElementById('tokenomics-dashboard');
    if (element) {
      const canvas = await html2canvas(element);
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      pdf.addImage(imgData, 'PNG', 0, 0, 210, 297);
      pdf.save('tokenomics_scenario.pdf');
    }
  };

  const renderFormFields = (): JSX.Element => {
    switch (activeTab) {
      case 'beginner':
        return (
          <>
            <Input
              name="projectName"
              value={formData.projectName}
              onChange={handleInputChange}
              placeholder="Project Name"
            />
            <TextArea
              name="projectConcept"
              value={formData.projectConcept}
              onChange={handleInputChange}
              placeholder="Describe your project idea"
            />
             <Input
              name="projectStage"
              value={formData.projectStage}
              onChange={handleInputChange}
              placeholder="Project Stage"
            />
          </>
        );
      case 'intermediate':
        return (
          <>
            {/* Include all beginner fields */}
            <Input
              name="projectName"
              value={formData.projectName}
              onChange={handleInputChange}
              placeholder="Project Name"
            />
            <TextArea
              name="projectConcept"
              value={formData.projectConcept}
              onChange={handleInputChange}
              placeholder="Describe your project idea"
            />
             <Input
              name="projectStage"
              value={formData.projectStage}
              onChange={handleInputChange}
              placeholder="Project Stage"
            />
            <Input
              type="number"
              name="totalSupply"
              // value={formData.totalSupply}
              onChange={handleInputChange}
              placeholder="Total Supply"
            />
            <Input
              name="blockchainPlatform"
              value={formData.blockchainPlatform}
              onChange={handleInputChange}
              placeholder="Blockchain Platform"
            />
            <Input
              name="targetAudience"
              value={formData.targetAudience}
              onChange={handleInputChange}
              placeholder="Target Audience"
            />
          </>
        );
      case 'advanced':
        return (
          <>
            <Input
              name="projectName"
              value={formData.projectName}
              onChange={handleInputChange}
              placeholder="Project Name"
            />
            <TextArea
              name="projectConcept"
              value={formData.projectConcept}
              onChange={handleInputChange}
              placeholder="Describe your project idea"
            />
              <Input
              name="projectStage"
              value={formData.projectStage}
              onChange={handleInputChange}
              placeholder="Project Stage"
            />
            {/*  <Input
              name="projectStage"
              value={formData.projectStage}
              onChange={handleInputChange}
              placeholder="Project Stage"
            /> */}
            <Input
              type="number"
              name="totalSupply"
              // value={formData.totalSupply}
              onChange={handleInputChange}
              placeholder="Total Supply"
            />
            <Input
              name="blockchainPlatform"
              value={formData.blockchainPlatform}
              onChange={handleInputChange}
              placeholder="Blockchain Platform"
            />
             <Input
              name="targetAudience"
              value={formData.targetAudience}
              onChange={handleInputChange}
              placeholder="Target Audience"
            />
            <Input
              name="projectGoals"
              value={formData.projectGoals}
              onChange={handleInputChange}
              placeholder="Project Goals"
            />
            {/* <Select multiple name="targetAudience" onChange={handleMultiSelectChange('targetAudience')}>
              <option value="retail">Retail Investors</option>
              <option value="institutional">Institutional Investors</option>
              <option value="developers">Developers</option>
            </Select> */}
          
            {/* <Select multiple name="projectGoals" onChange={handleMultiSelectChange('projectGoals')}>
              <option value="longTermHolding">Long-term Holding</option>
              <option value="activeTrading">Active Trading</option>
              <option value="ecosystemGrowth">Ecosystem Growth</option>
            </Select> */}
            <TextArea
              name="competitorAnalysis"
              value={formData.competitorAnalysis.join(', ')}
              onChange={(e) => setFormData({ ...formData, competitorAnalysis: e.target.value.split(', ') })}
              placeholder="Competitor Analysis (comma-separated)"
            />
            <TextArea
              name="regulatoryConsiderations"
              value={formData.regulatoryConsiderations.join(', ')}
              onChange={(e) => setFormData({ ...formData, regulatoryConsiderations: e.target.value.split(', ') })}
              placeholder="Regulatory Considerations (comma-separated)"
            />
          </>
        );
    }
  };

  return (
    <Container>
      <Tabs>
        <Tab onClick={() => setActiveTab('beginner')} className={activeTab === 'beginner' ? 'active' : ''}>Beginner</Tab>
        <Tab onClick={() => setActiveTab('intermediate')} className={activeTab === 'intermediate' ? 'active' : ''}>Intermediate</Tab>
        <Tab onClick={() => setActiveTab('advanced')} className={activeTab === 'advanced' ? 'active' : ''}>Advanced</Tab>
      </Tabs>
      <Form onSubmit={handleSubmit}>
        {renderFormFields()}
        <Button type="submit" disabled={isLoading}>
          {isLoading ? 'Generating...' : 'Generate Tokenomics Scenario'}
        </Button>
      </Form>

      {error && <p className="error">{error}</p>}

      {scenario && (
        <>
          <ComprehensiveTokenomicsDashboard scenario={scenario} />
          <ButtonGroup>
            <Button onClick={handleRegenerate}>Regenerate Scenario</Button>
            <Button onClick={handleDownloadPDF}>Download PDF</Button>
          </ButtonGroup>
        </>
      )}
    </Container>
  );
};

export default ComprehensiveTokenomicsForm;