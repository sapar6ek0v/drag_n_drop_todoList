import styled from 'styled-components';

export const FixedContainer = styled.div`
  position: fixed;
  z-index: 1;
  top: 50px;
  left: 0;
  right: 0;
  padding: 0 60px;
`;

export const Wrapper = styled.div`
  padding: 20px;
  background: #fff;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
`;

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  width: 100%;
  padding: 6px 0 3px;
  background: #fff;
  border: 0;
  border-bottom: 1px solid rgba(249, 143, 253, 1);
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 1.5px;

  &::placeholder {
    font-style: italic;
  }

  &:focus {
    outline: 0;
  }

  &:hover {
    border-color: #8ec5fc;
  }
`;

export const Button = styled.button`
  background: #8ec5fc;
  border: 1px solid transparent;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  outline: 0;
  padding: 5px 15px;
  text-align: center;
  transition: all 0.3s linear;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

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
    svg {
      fill: #8ec5fc;
    }
  }
`;

export const CreateButton = styled(Button)`
  display: flex;
  align-items: center;
  gap: 8px;
`;
