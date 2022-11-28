import styled from 'styled-components';
import { AlertOctagon } from 'tabler-icons-react';

type WrapperProps = {
  display: string;
};

export const Wrapper = styled.div`
  display: ${(props: WrapperProps) => props.display};
  font-size: 14px;
  box-sizing: border-box;
  position: fixed;
  bottom: 12px;
  left: 12px;
  transition: transform 0.6s ease-in;
  animation: from-left 0.7s;

  @keyframes from-left {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0);
    }
  }
`;

export const Notification = styled.div`
  position: relative;
  width: 250px;
  max-height: 50px;
  padding: 14px;
  margin-bottom: 15px;
  background: #dc3535;
  transition: 0.3s ease;
  pointer-events: auto;
  overflow: hidden;
  border-radius: 3px;
  box-shadow: 0 0 10px #999;
  color: #000;
  opacity: 0.9;
  background-position: 15px;
  background-repeat: no-repeat;

  &:hover {
    opacity: 1;
    cursor: pointer;
  }
`;

export const NotificationGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const NotificationStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const NotificationTitle = styled.div`
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
`;

export const NotificationMessage = styled.div`
  font-size: 14px;
  line-height: 18px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Svg = styled(AlertOctagon)`
  width: 30px;
  height: 30px;
`;

export const Btn = styled.button`
  position: absolute;
  right: 5px;
  top: 5px;
  outline: none;
  border: none;
  background: transparent;
  cursor: pointer;
`;
