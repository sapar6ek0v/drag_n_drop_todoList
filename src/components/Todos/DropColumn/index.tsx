import { FC, ReactNode } from 'react';
import { Wrapper } from './styles';

type Props = {
  isOver?: boolean;
  children: ReactNode;
};

const DropColumn: FC<Props> = ({ isOver, children }) => {

  return (
    <Wrapper className={isOver ? ' highlight-region' : ''}>
      {children}
    </Wrapper>
  );
};

export default DropColumn;