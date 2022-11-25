import styled from 'styled-components';

export const Wrapper = styled.div`
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const FormTitle = styled.h4`
  font-size: 18px;
  line-height: 20px;
  font-weight: 700;
  text-align: center;
  margin: 0;
  padding: 0;
`;

export const Label = styled.label`
  font-size: 16px;
  line-height: 20px;
  padding-left: 4px;
  font-weight: 500;
  color: #000;
  display: flex;
  gap: 3px;
  margin-bottom: 4px;
`;

export const Input = styled.input`
  width: 96%;
  font-size: 16px;
  line-height: 20px;
  color: #000;
  padding: 5px 10px;
  border-radius: 8px;
  border: 1px solid #000;
  transition: all 0.4s linear;

  &:focus {
    outline: 0;
    border-color: rgba(249, 131, 255, 1);
  }

  &:hover {
    border-color: rgba(249, 131, 255, 1);
  }
`;

export const Button = styled.button`
  width: 50%;
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
