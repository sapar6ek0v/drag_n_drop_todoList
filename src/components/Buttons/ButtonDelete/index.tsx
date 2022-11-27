import { FC } from 'react';
import { TrashX } from 'tabler-icons-react';
import { StyledDeleteBtn } from '../styles';

type Props = {
  onClick: () => void;
  disabled?: boolean;
};

const ButtonDelete: FC<Props> = ({ onClick, disabled }) => {
  return (
    <StyledDeleteBtn onClick={onClick} disabled={disabled}>
      <TrashX size={30} strokeWidth={1.5} color={'#ee4758'} />
    </StyledDeleteBtn>
  );
};

export default ButtonDelete;