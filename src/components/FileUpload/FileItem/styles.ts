import styled from 'styled-components';
import { TrashX } from 'tabler-icons-react';

export const Wrapper = styled.li`
  background: rgba(249, 131, 255, 1);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 13px 15px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const LinkTitle = styled.a`
  font-size: 14px;
  font-weight: 500;
  color: rgb(152 31 158);
  transition: all 0.4s linear;

  &:hover {
    color: rgb(44 41 147);
  }
`;

export const DeleteIcon = styled(TrashX)`
  cursor: pointer;
  &:hover {
    fill: rgb(152 31 158);
  }
`;
