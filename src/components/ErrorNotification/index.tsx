import { FC, useEffect, useState } from 'react';
import { X } from 'tabler-icons-react';
import {
  Btn,
  Notification,
  NotificationGroup,
  NotificationMessage,
  NotificationTitle,
  NotificationStack,
  Svg,
  Wrapper
} from './styles';

type Props = {
  autoDeleteTime?: number;
  message?: any;
};

const ErrorNotification: FC<Props> = ({ autoDeleteTime = 5000, message }) => {
  const [isShowTime, setIsShowTime] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsShowTime(false);
    }, autoDeleteTime);

    return () => {
      clearTimeout(timer);
    };
  }, [autoDeleteTime]);

  const handleClose = () => {
    setIsShowTime(false);
  };

  return (
    <Wrapper display={isShowTime ? 'block' : 'none'}>
      <Notification>
        <Btn onClick={handleClose}>
          <X size={18} strokeWidth={3} color={'#7c0210'} />
        </Btn>
        <NotificationGroup>
          <Svg color={'#D2001A'} />
          <NotificationStack>
            <NotificationTitle>Error!</NotificationTitle>
            {message ? <NotificationMessage>{message}</NotificationMessage> : null}
          </NotificationStack>
        </NotificationGroup>
      </Notification>
    </Wrapper>
  );
};

export default ErrorNotification;