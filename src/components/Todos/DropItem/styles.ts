import styled from 'styled-components';

export const Wrapper = styled.div`
  font-size: 15px;
  border-radius: 5px;
  z-index: 1;
  background: #dfdfde;
  cursor: pointer;
  padding: 10px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  transition: all 0.4s linear;

  &:hover {
    cursor: grab;
  }

  &:active {
    cursor: grabbing;
  }

  &.isDragging {
    background: #d9cab3;
    opacity: 1;
    transition: all 0.4s linear;
    cursor: grabbing;
  }
`;

export const TextGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-left: 10px;
`;

export const Header = styled.div`
  font-weight: 700;
  font-size: 16px;
  color: #938e8e;
`;

export const Description = styled.div`
  font-weight: 600;
  font-size: 14px;
  color: #938e8e;
  opacity: 0.6;
`;

type GroupProps = {
  justify?: string;
  gap?: number;
};

export const Group = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${(props: GroupProps) => props.justify};
  gap: ${(props: GroupProps) => props.gap}px;
`;

type StatusViewProps = {
  bg: string;
};

export const StatusView = styled.div`
  font-size: 14px;
  text-align: center;
  border-radius: 10px;
  background: ${(props: StatusViewProps) => props.bg};
  color: #f7f7f7;
  padding: 4px 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`;

export const NumberView = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  text-decoration: underline;
  color: #938e8e;
  font-weight: 500;
`;

export const DateView = styled.div`
  font-size: 14px;
  text-align: center;
  border-radius: 10px;
  background: #f7f7f7;
  color: #938e8e;
  padding: 4px 8px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`;

export const ViewPriority = styled.div`
  font-size: 14px;
  text-align: center;
  border-radius: 10px;
  padding: 4px 8px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

  &.Hight {
    background: #ff1e00c2;
    color: #880404fa;
  }

  &.Normal {
    background: #3ab0ff;
    color: #cdf0ea;
  }
`;
