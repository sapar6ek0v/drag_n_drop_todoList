import { FC, ReactNode } from 'react';
import { LayoutContainer } from './styles';

type Props = {
  children: ReactNode
};

const Layout: FC<Props> = ({ children }) => {
  return (
    <LayoutContainer>{children}</LayoutContainer>
  );
};

export default Layout;