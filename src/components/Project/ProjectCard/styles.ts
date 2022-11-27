import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 20px;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transform: scale(1);
  transition: all 0.2s linear;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.3) 0px 4px 12px;
    transform: scale(1.12);
  }
`;

export const Title = styled.h3`
  font-size: 18px;
  line-height: 20px;
  font-weight: 500;
  margin: 0;
  padding: 0;
  background: linear-gradient(102.4deg, rgba(253, 189, 85, 1) 7.8%, rgba(249, 131, 255, 1) 100.3%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 20px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
`;
