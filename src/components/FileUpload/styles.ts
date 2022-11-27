import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 20px;
  border: 3px dashed #cbd5e0;
  background-color: #edf2f7;
  min-height: 135px;
`;

export const InputWrapper = styled.div`
  position: relative;
`;

export const Input = styled.input`
  max-width: 200px;
  position: relative;
  text-align: right;
  padding: 12px;
  opacity: 0;
  z-index: 2;
  cursor: pointer;
`;

export const Button = styled.button`
  position: absolute;
  top: 0px;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background: #8ec5fc;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  border-radius: 2px;
  border: none;
  outline: none;
  transition: background-color 0.4s;
  box-shadow: 0px 8px 24px rgba(149, 157, 165, 0.5);

  svg {
    padding: 3px;
    background-color: #fff;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &:focus {
    color: #171e29;
  }

  &:hover {
    background: #fff;
    border-color: #8ec5fc;
    color: #8ec5fc;
    svg {
      fill: #8ec5fc;
    }
  }

  &:active {
    border-color: #8ec5fc;
    color: #8ec5fc;
  }

  &:disabled {
    background: #ee4758;
    border-color: #ee4758;
    color: #740a15ad;
    cursor: not-allowed;
  }
`;

export const Title = styled.div`
  font-weight: 600;
  margin-bottom: 5px;
  text-align: center;
`;

export const InfoTitle = styled.div`
  font-size: 14px;
  text-align: center;
`;

export const FileListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
