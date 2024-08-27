import React from 'react';
import ComprehensiveTokenomicsForm from './components/ComprehensiveTokenomicsForm';
import { GlobalStyle, Header, Logo, NavLinks, NavLink } from './utils/styled';

const App: React.FC = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Header>
        <Logo>tokenomics.ai</Logo>
        <NavLinks>
          <NavLink href="https://askishaancodes.notion.site/Tokenomics-AI-8fa0c2bd8ceb48cc9cd405b0738a05e1" target="_blank" rel="noopener noreferrer">Documentation</NavLink>
          <NavLink href="https://twitter.com/tokenomicsai" target="_blank" rel="noopener noreferrer">Twitter (X)</NavLink>
        </NavLinks>
      </Header>
      <ComprehensiveTokenomicsForm />
    </div>
  );
};

export default App;