import { FC } from 'react';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const TodoUpdateModal: FC<Props> = () => {
  return (
    <div>TodoUpdateModal</div>
  );
};

export default TodoUpdateModal;