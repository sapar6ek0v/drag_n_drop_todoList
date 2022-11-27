import styled from 'styled-components';
import { Datepicker } from 'bear-react-datepicker';

export const Wrapper = styled.div`
  position: relative;
`;

export const StyledDatePicker = styled(Datepicker)`
  position: absolute;
  z-index: 99;
  top: 58px;
`;

export const DatePickerInput = styled.input`
  width: 95%;
  font-size: 14px;
  color: rgb(0, 0, 0);
  font-weight: 500;
  padding: 7px 10px;
  border-radius: 2px;
  border: 1px solid #474747;
  transition: all 0.25s ease 0s;

  &:hover {
    border: 1px solid rgba(249, 131, 255, 1);
  }

  &:focus {
    border: 1px solid rgba(249, 131, 255, 1);
    outline: none;
  }

  &:focus-within {
    border: 1px solid rgba(249, 131, 255, 1);
    outline: none;
  }
`;
