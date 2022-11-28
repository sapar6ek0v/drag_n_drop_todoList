import { FC, useMemo } from 'react';
import { useGetSingleSubtaskQuery, useUpdateSubtaskMutation } from '../../../store/apis/todos';
import { SubtaskInputValue } from '../../../store/apis/todos/types';
import FullPageLoader from '../../FullPageLoader';
import Modal from '../../Modal';
import { LoaderWrapper } from '../../styles';
import SubtaskForm from '../SubtaskForm';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  projectId: string;
  todoId: string;
  subtaskId: string;
};

const SubtaskUpdateModal: FC<Props> = ({ isOpen, onClose, projectId, todoId, subtaskId }) => {
  const [updateSubtask, { isLoading: isUpdateLoading }] = useUpdateSubtaskMutation();
  const { data: subtask, isLoading } = useGetSingleSubtaskQuery({ projectId, todoId, id: subtaskId });

  const handleSubmit = async (value: Omit<SubtaskInputValue, 'id'>) => {
    try {
      await updateSubtask({ id: subtaskId, ...value });
      onClose();
    } catch (error) {
      console.log(error);
    };
  };

  const defaultValues = useMemo(() => {
    if (subtask) {
      return {
        todo: subtask.todo,
        isCompleted: subtask.isCompleted,
        todoId: subtask.todoId,
        projectId: projectId,
      }
    }
  }, [projectId, subtask]);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <LoaderWrapper minHeight={200}>
        {
          isLoading ?
            <FullPageLoader /> :
            <SubtaskForm
              onSubmit={handleSubmit}
              isLoading={isUpdateLoading}
              todoId={todoId}
              projectId={projectId}
              defaultValues={defaultValues}
            />
        }
      </LoaderWrapper>
    </Modal>
  );
};

export default SubtaskUpdateModal;