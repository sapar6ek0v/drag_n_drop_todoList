import { FC } from 'react';
import { useCreateTodoMutation } from '../../../store/apis/todos';
import { TodoInputValue } from '../../../store/apis/todos/types';
import FullPageLoader from '../../FullPageLoader';
import Modal from '../../Modal';
import TodoForm from '../TodoForm';
import { LoaderWrapper } from './styles';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  projectId: string;
};

const TodoCreateModal: FC<Props> = ({ isOpen, onClose, projectId }) => {
  const [createProject, { isLoading }] = useCreateTodoMutation();

  const handleSubmit = async (value: TodoInputValue) => {
    try {
      await createProject(value);
      onClose();
    } catch (error) {
      console.log(error);
    };
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} >
      <LoaderWrapper>
        {
          isLoading ?
            <FullPageLoader />
            : <TodoForm onSubmit={handleSubmit} isLoading={isLoading} projectId={projectId} />
        }
      </LoaderWrapper>
    </Modal>
  );
};

export default TodoCreateModal;