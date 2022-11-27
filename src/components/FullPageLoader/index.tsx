import { FC } from 'react';
import { Dot, Dots, Wrapper } from './styles';

const FullPageLoader: FC = () => {
  return (
    <Wrapper>
      <Dot></Dot>
      <Dots>
        <span></span>
        <span></span>
        <span></span>
      </Dots>
    </Wrapper>
  );
};

export default FullPageLoader;