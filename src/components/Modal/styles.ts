import styled from 'styled-components';

export const ModalWrapper = styled.div`
  background: rgba(0, 0, 0, 0.7);
  z-index: 10000;
  width: 100%;
  height: calc(100% - 80px);
  position: absolute;
  top: 0;
  left: 0;
  overflow: auto;
  padding-top: 80px;
`;

export const ModalContentWrapper = styled.div`
  background: #fff;
  width: 40%;
  margin: 0 auto;
  padding: 40px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 18px;
  position: relative;
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  font-weight: 500;
  padding: 4px 8px;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  border: 1px solid transparent;
  font-size: 18px;
  color: #2c3e50;
  cursor: pointer;
  background: white;
  transition: all 0.25s ease;
  transform: scale(1);

  &:hover,
  &:focus {
    box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.4);
    transform: scale(1.13);
    border: 1px solid #2c3e50;
    color: #fff;
    background: #2c3e50;
  }
`;
