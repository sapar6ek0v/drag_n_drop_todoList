import styled from 'styled-components';

export const ContentWrapper = styled.div`
  padding: 50px 0;
`;

export const Paper = styled.div`
  margin-top: 90px;

  @media (max-width: 480px) {
    margin-top: 150px;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 2vw;

  @media (max-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

type StackProps = {
  spacing: number;
};

export const Stack = styled.div`
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  gap: ${(props: StackProps) => props.spacing}px;
`;

export const FormTitle = styled.h4`
  font-size: 18px;
  line-height: 20px;
  font-weight: 700;
  text-align: center;
  margin: 0 0 10px 0;
  padding: 0;
`;

export const Label = styled.label`
  font-size: 16px;
  line-height: 20px;
  padding-left: 4px;
  font-weight: 500;
  color: #221f1f;
  display: flex;
  gap: 3px;
  margin-bottom: 4px;
`;

export const Input = styled.input`
  width: 100%;
  box-sizing: border-box;
  font-size: 14px;
  line-height: 20px;
  color: rgb(0, 0, 0);
  padding: 7px 10px;
  border-radius: 2px;
  border: 1px solid #474747;
  transition: all 0.4s linear;

  &:focus {
    outline: 0;
    border-color: rgba(249, 131, 255, 1);
  }

  &:hover {
    border-color: rgba(249, 131, 255, 1);
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 100px;
  box-sizing: border-box;
  max-height: 100px;
  overflow: auto;
  font-size: 14px;
  line-height: 20px;
  color: rgb(0, 0, 0);
  padding: 5px 10px;
  border-radius: 2px;
  border: 1px solid #474747;
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
  margin: 0 auto;
  text-align: center;
  transition: all 0.3s linear;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  cursor: pointer;

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

type LoaderWrapperProps = {
  minHeight: number;
};

export const LoaderWrapper = styled.div`
  position: relative;
  min-height: ${(props: LoaderWrapperProps) => props.minHeight}px;
`;
