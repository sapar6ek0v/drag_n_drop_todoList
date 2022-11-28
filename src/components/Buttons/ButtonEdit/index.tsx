import { FC, MouseEvent } from 'react';
import { Edit } from 'tabler-icons-react';
import { StyledEditBtn } from '../styles';

type Props = {
  onClick: () => void;
  disabled?: boolean;
};

const ButtonEdit: FC<Props> = ({ onClick, disabled }) => {

  const handleOnClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    onClick();
  };

  return (
    <StyledEditBtn onClick={handleOnClick} disabled={disabled}>
      <Edit size={30} strokeWidth={1.5} color={'rgba(128, 248, 174, 1)'} />
    </StyledEditBtn>
  );
};

export default ButtonEdit;