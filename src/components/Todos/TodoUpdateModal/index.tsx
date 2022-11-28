import { FC } from 'react';
import Modal from '../../Modal';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const TodoUpdateModal: FC<Props> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      TodoUpdateModal
    </Modal>
  );
};

export default TodoUpdateModal;