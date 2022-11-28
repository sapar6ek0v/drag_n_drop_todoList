import { FC, MouseEvent } from 'react';
import { TrashX } from 'tabler-icons-react';
import { StyledDeleteBtn } from '../styles';

type Props = {
  onClick: () => void;
  disabled?: boolean;
};

const ButtonDelete: FC<Props> = ({ onClick, disabled }) => {

  const handleOnClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    onClick();
  };

  return (
    <StyledDeleteBtn onClick={handleOnClick} disabled={disabled}>
      <TrashX size={30} strokeWidth={1.5} color={'#ee4758'} />
    </StyledDeleteBtn>
  );
};

export default ButtonDelete;