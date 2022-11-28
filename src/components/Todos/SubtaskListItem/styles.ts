import styled from 'styled-components';
import { TrashX } from 'tabler-icons-react';

export const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 0 0 0 15px;
`;

export const Group = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const ItemTitle = styled.div`
  color: #9e16b7;
  font-weight: 600;
  line-height: 20px;
  text-decoration: underline;
  cursor: pointer;
  transition: all 0.4s linear;

  &:hover {
    color: #5d046e;
  }
`;

export const ListStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const DeleteBtn = styled(TrashX)`
  height: 17px;
  width: 17px;
  border: 1px solid #ee4758;
  border-radius: 50%;
  transition: all 0.4s linear;
  cursor: pointer;

  &:hover,
  &:focus {
    background: #ee4758;
    border: 1px solid #ee4758;
    fill: #000;
  }
`;
