import { cloneElement, FC } from 'react';
import { useDrop } from 'react-dnd';
import statuses from '../../../pages/todos/statuses';
import { ITEM_TYPE } from '../../../pages/todos/types';
import { Todo, TodoStatuses } from '../../../store/apis/todos/types';
import { Wrapper } from './styles';

type Props = {
  onDrop: (item: Todo, monitor: any, status: TodoStatuses) => void;
  children: any;
  status: TodoStatuses;
};

const DropWrapper: FC<Props> = ({ onDrop, children, status }) => {

  const [{ isOver }, drop] = useDrop({
    accept: ITEM_TYPE,
    canDrop: (todo: Todo, monitor) => {
      const todoIndex = statuses.findIndex((todoStatus) => todoStatus.status === todo.status);
      const statusIndex = statuses.findIndex((todoStatus) => todoStatus.status === status);
      return [todoIndex + 1, todoIndex - 1, todoIndex].includes(statusIndex);
    },
    drop: (todo, monitor) => {
      onDrop(todo, monitor, status);
    },
    collect: monitor => ({
      isOver: monitor.isOver()
    })
  });

  return (
    <Wrapper ref={drop}>
      {cloneElement(children, { isOver })}
    </Wrapper>
  )
};

export default DropWrapper;