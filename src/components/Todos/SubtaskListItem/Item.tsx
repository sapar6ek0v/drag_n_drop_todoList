import { FC, useState } from 'react';
import { useDeleteSubtaskMutation, useUpdateSubtaskMutation } from '../../../store/apis/todos';
import { Subtask, SubtaskInputValue } from '../../../store/apis/todos/types';
import CustomCheckbox from '../../CustomCheckbox';
import ErrorNotification from '../../ErrorNotification';
import SubtaskUpdateModal from '../SubtaskUpdateModal';
import { ItemWrapper, ItemTitle, Group, DeleteBtn } from './styles';

type Props = {
  subtask: Subtask;
  projectId: string;
};

const Item: FC<Props> = ({ subtask, projectId }) => {
  const { id, todoId, todo, isCompleted } = subtask;

  const [isUpdate, setIsUpdate] = useState<boolean>(false);

  const [updateSubtask, { isLoading: isUpdateLoading }] = useUpdateSubtaskMutation();
  const [deleteSubtask, { isLoading: isDeleteLoading }] = useDeleteSubtaskMutation();

  const handleUpdateSubtask = async () => {
    try {
      const updatedSubtask: SubtaskInputValue = {
        id, projectId, todoId, todo, isCompleted: !subtask.isCompleted
      };

      await updateSubtask(updatedSubtask);
    } catch (error) {
      return <ErrorNotification message={error} />
    }
  };

  const handleOpenUpdateModal = () => {
    setIsUpdate(true);
  };

  const handleCloseUpdateModal = () => {
    setIsUpdate(false);
  };

  const handleDelete = async () => {
    try {
      await deleteSubtask({ id, todoId, projectId });
    } catch (error) {
      return <ErrorNotification message={error} />
    }
  };

  return (
    <>
      <ItemWrapper onClick={(e) => e.stopPropagation()}>
        <Group>
          <CustomCheckbox
            completed={isCompleted}
            toggle={handleUpdateSubtask}
            disabled={isUpdateLoading || isDeleteLoading}
          />
          <ItemTitle onClick={handleOpenUpdateModal}>{isDeleteLoading ? 'Удаление...' : todo}</ItemTitle>
        </Group>
        <DeleteBtn
          onClick={handleDelete}
          size={8}
          strokeWidth={1.5}
          color={isDeleteLoading ? '#bbb' : '#ee4758'}
        />
      </ItemWrapper>
      {
        isUpdate &&
        <SubtaskUpdateModal
          isOpen={isUpdate}
          onClose={handleCloseUpdateModal}
          projectId={projectId}
          todoId={todoId}
          subtaskId={id}
        />
      }
    </>
  );
};

export default Item;