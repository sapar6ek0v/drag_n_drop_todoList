import { FC } from 'react';
import { useCreateSubtaskMutation } from '../../../store/apis/todos';
import { SubtaskInputValue } from '../../../store/apis/todos/types';
import ErrorNotification from '../../ErrorNotification';
import FullPageLoader from '../../FullPageLoader';
import Modal from '../../Modal';
import { LoaderWrapper } from '../../styles';
import SubtaskForm from '../SubtaskForm';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  projectId: string;
  todoId: string;
};

const SubtaskCreateModal: FC<Props> = ({ isOpen, onClose, projectId, todoId }) => {
  const [createSubtask, { isLoading }] = useCreateSubtaskMutation();

  const handleSubmit = async (value: Omit<SubtaskInputValue, 'id'>) => {
    try {
      await createSubtask(value);
      onClose();
    } catch (error) {
      return <ErrorNotification message={error} />
    };
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} >
      <LoaderWrapper minHeight={200}>
        {
          isLoading ?
            <FullPageLoader /> :
            <SubtaskForm
              onSubmit={handleSubmit} isLoading={isLoading} todoId={todoId} projectId={projectId}
            />
        }
      </LoaderWrapper>
    </Modal>
  );
};

export default SubtaskCreateModal;