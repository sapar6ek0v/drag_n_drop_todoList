import { FC, FormEvent, useState } from 'react';
import { Asterisk } from 'tabler-icons-react';
import { SubtaskInputValue } from '../../../store/apis/todos/types';
import CustomCheckbox from '../../CustomCheckbox';
import { Button, FormTitle, Input, Label, Stack } from '../../styles';

type Props = {
  onSubmit: (value: Omit<SubtaskInputValue, 'id'>) => Promise<void>;
  isLoading: boolean;
  defaultValues?: Omit<SubtaskInputValue, 'id'>;
  projectId: string;
  todoId: string;
};

const SubtaskForm: FC<Props> = ({ onSubmit, isLoading, defaultValues, projectId, todoId }) => {
  const [todo, setTodo] = useState<string>(defaultValues?.todo || '');
  const [isCompleted, setIsCompleted] = useState<boolean>(defaultValues?.isCompleted || false);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (!todo) return;

    try {
      const newSubtask: Omit<SubtaskInputValue, 'id'> = {
        todoId,
        projectId,
        todo,
        isCompleted
      };

      await onSubmit(newSubtask);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={20}>
        <FormTitle>{defaultValues ? 'Обновить Subtask' : 'Создать Subtask'}</FormTitle>
        <div>
          <Label htmlFor='todo'>
            <span>Todo</span>
            <Asterisk size={10} strokeWidth={1.5} color={'red'} />
          </Label>
          <Input
            value={todo}
            onChange={(event) => setTodo(event.target.value)}
            type='text'
            placeholder='Todo'
            id='todo'
          />
        </div>
        <CustomCheckbox completed={isCompleted} toggle={() => setIsCompleted(!isCompleted)} />
        <Button type='submit' disabled={!todo || isLoading}>
          {defaultValues ? 'Сохранить' : 'Создать'}
        </Button>
      </Stack>
    </form>
  );
};

export default SubtaskForm;