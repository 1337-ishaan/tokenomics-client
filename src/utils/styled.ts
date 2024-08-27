import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --primary: #190028;
    --secondary: #6200EA;
    --text: #F0F0F0;
    --background: #190028;
    --surface: #2A0040;
  }

  body {
    background-color: var(--background);
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ffffff' fill-opacity='0.05' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
    color: var(--text);
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1.6;
  }

  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  background-color: var(--background);
  border-radius: 1rem;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const inputStyles = `
  padding: 0.75rem 1rem;
  background-color: var(--surface);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.375rem;
  color: var(--text);
  font-size: 1rem;
  transition: all 0.2s ease-in-out;

  &:focus {
    outline: none;
    border-color: var(--secondary);
    box-shadow: 0 0 0 2px rgba(98, 0, 234, 0.2);
  }
`;

export const Input = styled.input`
  ${inputStyles}
`;

export const TextArea = styled.textarea`
  ${inputStyles}
  resize: vertical;
`;

export const Select = styled.select`
  ${inputStyles}
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath fill='%23F0F0F0' d='M6 7.4L0.6 2 2 0.6 6 4.6 10 0.6 11.4 2z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  padding-right: 2.5rem;
`;

export const Button = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: var(--secondary);
  color: white;
  border: none;
  border-radius: 0.375rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #7C4DFF;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    background-color: #3D0099;
    cursor: not-allowed;
  }
`;

export const DashboardContainer = styled.div`
  background-color: var(--surface);
  border-radius: 0.75rem;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
  margin-bottom: 2rem;
`;

export const Title = styled.h2`
  color: var(--text);
  margin-bottom: 1.5rem;
  font-size: 1.875rem;
  font-weight: 600;
  letter-spacing: -0.025em;
`;

export const Section = styled.div`
  margin-bottom: 2.5rem;
  background-color: var(--background);
  padding: 1.5rem;
  border-radius: 0.5rem;
`;

export const SectionTitle = styled.h3`
  color: var(--secondary);
  margin-bottom: 1rem;
  font-size: 1.25rem;
  font-weight: 500;
`;

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const ListItem = styled.li`
  margin-bottom: 0.75rem;
  background-color: var(--background);
  padding: 1rem;
  border-radius: 0.5rem;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: var(--primary);
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
`;

export const Tab = styled.button`
  background-color: transparent;
  color: var(--text);
  border: none;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  border-bottom: 2px solid transparent;

  &:hover {
    color: var(--secondary);
  }

  &.active {
    color: var(--secondary);
    border-bottom-color: var(--secondary);
    background-color: var(--surface);
  }
`;

export const Tabs = styled.div`
  display: flex;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  background-color: var(--background);
  border-radius: 0.5rem 0.5rem 0 0;
  padding: 0.5rem 0.5rem 0;
`;

export const Divider = styled.hr`
  border: none;
  height: 1px;
  background-color: var(--background);
  margin: 2rem 0;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: var(--surface);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Logo = styled.h1`
  color: var(--text);
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

export const NavLink = styled.a`
  color: var(--text);
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: var(--secondary);
  }
`;
