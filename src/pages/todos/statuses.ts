import { TodoStatuses } from '../../store/apis/todos/types';

const statuses = [
  {
    status: TodoStatuses.QUEUE,
    icon: '🔆️',
    color: '#4158d0',
  },
  {
    status: TodoStatuses.DEVELOPMENT,
    icon: '📝',
    color: '#c850c0',
  },
  {
    status: TodoStatuses.DONE,
    icon: '✅',
    color: '#ffcc70',
  },
];

export default statuses;
