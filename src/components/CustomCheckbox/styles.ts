import styled from 'styled-components';

export const Checkbox = styled.input`
  appearance: none;
  background: #fff;
  margin: 0;
  color: rgba(249, 131, 255, 1);
  width: 20px;
  height: 20px;
  border: 2px solid rgba(249, 131, 255, 1);
  border-radius: 8px;
  transform: translateY(-0.075em);
  display: grid;
  place-content: center;
  cursor: pointer;

  &::before {
    content: '';
    width: 12px;
    height: 12px;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em rgba(249, 131, 255, 1);
    background: #fff;
    transform-origin: bottom left;
    clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
  }

  &:focus {
    outline: none;
    outline-offset: 0;
  }

  &:disabled {
    cursor: not-allowed;
    background: #fff;
    color: rgba(122, 116, 116, 0.575);
    border: 2px solid rgba(122, 116, 116, 0.575);
  }

  &:checked::before {
    transform: scale(1);
  }
`;
