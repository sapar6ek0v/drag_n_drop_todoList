import styled from 'styled-components';

export const Wrapper = styled.div`
  min-height: 300px;
  max-width: 300px;
  width: 300px;

  &.highlight-region {
    background-color: #8ec5fc;
    background-image: linear-gradient(62deg, #8ec5fc 0%, #e0c3fc 100%);
  }

  @media (max-width: 480px) {
    min-height: 228px;
    max-width: 228px;
    width: 228px;
  }
`;
