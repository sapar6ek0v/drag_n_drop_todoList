import { FC } from 'react';
import { Subtask } from '../../../store/apis/todos/types';
import Item from './Item';
import { ListStack } from './styles';

type Props = {
  subtasks: Subtask[];
  projectId: string;
};

const SubtaskListItem: FC<Props> = ({ subtasks, projectId }) => {
  return (
    <ListStack>
      {
        subtasks.map((subtask) => (
          <Item key={subtask.id} subtask={subtask} projectId={projectId} />
        ))
      }
    </ListStack>
  );
};

export default SubtaskListItem;