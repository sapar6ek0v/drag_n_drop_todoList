import styled from 'styled-components';

export const CircleButton = styled.button`
  background: transparent;
  transition: all 0.3s linear;
  cursor: pointer;
  height: 30px;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;

  &:disabled {
    background: transparent;
    border: 1px solid #bbb;

    svg {
      fill: #bbb;
    }
  }
`;

export const StyledDeleteBtn = styled(CircleButton)`
  border: 1px solid #ee4758;

  &:hover,
  &:focus {
    background: #ee4758;
    border: 1px solid #ee4758;

    svg {
      fill: #000;
    }
  }
`;

export const StyledEditBtn = styled(CircleButton)`
  border: 1px solid rgba(128, 248, 174, 1);

  &:hover,
  &:focus {
    background: rgba(128, 248, 174, 1);
    border: 1px solid rgba(128, 248, 174, 1);

    svg {
      fill: #000;
    }
  }
`;
