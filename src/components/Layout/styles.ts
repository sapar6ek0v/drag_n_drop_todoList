import styled from 'styled-components';

export const LayoutContainer = styled.div`
  min-height: 100vh;
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 60px;

  @media (max-width: 480px) {
    padding: 0 25px;
  }
`;
