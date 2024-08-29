import React from 'react';
import styled from 'styled-components';

const Landing: React.FC = () => {
  return (
    <MainContainer>
      <Header />
      <CallToAction />
      <TextSection />
      <FAQSection />
      <FurtherExploration />
      <Footer />
    </MainContainer>
  );
};

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <ContentWrLandinger>
        <TopBar>
          <Logo>©tokenomicsdotai.com</Logo>
          <SocialLinks>
            <SocialLink href="https://x.com/tokenomicsdotai" target="_blank">X</SocialLink>
            <SocialLink href="https://t.me/+nLhxjy2VA6A0NTc1" target="_blank">Telegram</SocialLink>
          </SocialLinks>
        </TopBar>
        <MainHeading>
          Unleashing the power of AI for tokenomics.
        </MainHeading>
      </ContentWrLandinger>
      <BackgroundShape />
    </HeaderContainer>
  );
};

const CallToAction: React.FC = () => {
  return (
    <CTASection>
      <CTAHeading>Explore AI-Tokenomics</CTAHeading>
      <CTAText>
        Embark on a journey where complex tokenomics designs are a thing of the past. AI is here to take over. Take the first step. Tap the button below.
      </CTAText>
    </CTASection>
  );
};

const TextSection: React.FC = () => {
  return (
    <Section>
      <SectionHeading>We Transform Tokenomics</SectionHeading>
      <TextColumns>
        <Column>
          Our innovative platform modifies the basics of tokenomics creation, ensuring success follows.
        </Column>
        <Column>
          We wield AI, ensuring seamless, personalized tokenomics are created, making projects triumph in a breeze.
        </Column>
      </TextColumns>
    </Section>
  );
};

const FAQSection: React.FC = () => {
  return (
    <Section dark>
      <SectionHeading>AI at its Best</SectionHeading>
      <FAQGrid>
        <FAQItem>
          <FAQTitle>AI Token Design</FAQTitle>
          <FAQContent>Effortlessly create custom tokenomics. AI has got you covered.</FAQContent>
        </FAQItem>
        <FAQItem>
          <FAQTitle>Real-Time Analytics</FAQTitle>
          <FAQContent>Tap into the performance of tokens. Keep abreast in real-time.</FAQContent>
        </FAQItem>
        <FAQItem>
          <FAQTitle>User-Friendly Interface</FAQTitle>
          <FAQContent>Input and generation process has never been this easy.</FAQContent>
        </FAQItem>
      </FAQGrid>
    </Section>
  );
};

const FurtherExploration: React.FC = () => {
  return (
    <Section>
      <SectionHeading>Further Exploration</SectionHeading>
      <ExplorationText>
        Delve deep into the world of AI integrated with tokenomics. Visit our articles for a thorough Landingreciation of our revolutionary Landinglications of AI. We're rewriting the future of tokenomics. Don't miss out.
      </ExplorationText>
      <ButtonGroup>
        <Button href="https://askishaancodes.notion.site/Tokenomics-AI-8fa0c2bd8ceb48cc9cd405b0738a05e1" target="_blank">
          Learn more 👨🏻‍🎓
        </Button>
        <Button href="/Landing" target="_blank">
          Try tokenomicsdotAI 🦾
        </Button>
      </ButtonGroup>
    </Section>
  );
};

const Footer: React.FC = () => {
  return (
    <FooterSection>
      <FooterText>© 2024 tokenomicsdotai. All rights reserved.</FooterText>
    </FooterSection>
  );
};

// Styled components
const MainContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: #190028;
  color: #ffffff;
  font-family: 'Atkinson Hyperlegible', sans-serif;
`;

const HeaderContainer = styled.header`
  height: 800px;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContentWrLandinger = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  max-width: 1000px;
  width: 100%;
  padding: 20px;
  z-index: 5;
`;

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-weight: bold;
  opacity: 0.2;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 10px;
`;

const SocialLink = styled.a`
  opacity: 0.2;
  padding: 10px;
  background-color: #231233;
  border-radius: 4px;
  color: #ffffff;
  text-decoration: none;
`;

const MainHeading = styled.h1`
  font-family: 'Silkscreen', sans-serif;
  font-size: 92px;
  line-height: 1.6em;
  text-align: center;
  color: #ffffff;

  @media (max-width: 768px) {
    font-size: 48px;
  }
`;

const BackgroundShape = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, #290042, #4a0075);
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 80%);
  z-index: 1;
`;

const Section = styled.section<{ dark?: boolean }>`
  padding: 100px 20px;
  background-color: ${props => props.dark ? '#220135' : '#190028'};
`;

const SectionHeading = styled.h2`
  font-family: 'Silkscreen', sans-serif;
  font-size: 48px;
  margin-bottom: 40px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const CTASection = styled(Section)`
  text-align: center;
`;

const CTAHeading = styled(SectionHeading)`
  margin-bottom: 20px;
`;

const CTAText = styled.p`
  max-width: 600px;
  margin: 0 auto;
  font-size: 18px;
  line-height: 1.6;
`;

const TextColumns = styled.div`
  display: flex;
  gap: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Column = styled.div`
  flex: 1;
  font-size: 18px;
  line-height: 1.6;
`;

const FAQGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
`;

const FAQItem = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  padding: 20px;
  border-radius: 10px;
`;

const FAQTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 10px;
`;

const FAQContent = styled.p`
  font-size: 16px;
  line-height: 1.6;
`;

const ExplorationText = styled.p`
  font-size: 18px;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto 40px;
  text-align: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Button = styled.a`
  display: inline-block;
  padding: 15px 30px;
  background-color: #ffffff;
  color: #190028;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e6e6e6;
  }
`;

const FooterSection = styled(Section)`
  text-align: center;
  padding: 40px 20px;
`;

const FooterText = styled.p`
  font-size: 14px;
  opacity: 0.7;
`;

export default Landing;