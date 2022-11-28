import styled from 'styled-components';

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  gap: 40px;
  isolation: isolate;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #f6fbf4;
  border-radius: 2px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

export const ColumnHeader = styled.h2`
  font-size: 20px;
  font-weight: 600;
  margin: 0 0 20px 0;
  background-color: #4158d0;
  background-image: linear-gradient(43deg, #4158d0 0%, #c850c0 46%, #ffcc70 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
