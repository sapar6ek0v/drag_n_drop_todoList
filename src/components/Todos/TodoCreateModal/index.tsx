import { FC } from 'react';
import { useCreateTodoMutation } from '../../../store/apis/todos';
import { TodoInputValue } from '../../../store/apis/todos/types';
import FullPageLoader from '../../FullPageLoader';
import Modal from '../../Modal';
import { LoaderWrapper } from '../../styles';
import TodoForm from '../TodoForm';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  projectId: string;
};

const TodoCreateModal: FC<Props> = ({ isOpen, onClose, projectId }) => {
  const [createTodo, { isLoading }] = useCreateTodoMutation();

  const handleSubmit = async (value: TodoInputValue) => {
    try {
      await createTodo(value);
      onClose();
    } catch (error) {
      console.log(error);
    };
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} >
      <LoaderWrapper minHeight={500}>
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