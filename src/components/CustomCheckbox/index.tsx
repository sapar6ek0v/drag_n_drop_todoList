import { FC, memo } from 'react';
import { Checkbox } from './styles';

type Props = {
  completed: boolean;
  toggle: () => void;
  disabled?: boolean;
};

const CustomCheckbox: FC<Props> = ({ completed, toggle, disabled }) => {

  return (
    <label htmlFor='completed'>
      <Checkbox
        type="checkbox"
        id='completed'
        defaultChecked={completed}
        onChange={toggle}
        disabled={disabled}
      />
    </label>
  );
};

export default memo(CustomCheckbox);