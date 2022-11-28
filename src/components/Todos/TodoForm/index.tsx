import { FC, FormEvent, useState } from 'react';
import { Asterisk } from 'tabler-icons-react';
import dayjs from 'dayjs';
import { ImageType } from '../../../store/apis/cloudinary/types';
import { TodoInputValue, TodoPriorities, TodoStatuses } from '../../../store/apis/todos/types';
import CustomDatePicker from '../../CustomDatePicker';
import { Button, FormTitle, Input, Label, Stack, TextArea } from '../../styles';
import CustomSelect from '../../CustomSelect';
import FileUpload from '../../FileUpload';

type Props = {
  onSubmit: (value: TodoInputValue) => void;
  isLoading: boolean;
  defaultValues?: TodoInputValue;
  projectId: string;
};

const TodoForm: FC<Props> = ({ onSubmit, isLoading, defaultValues, projectId }) => {
  const today = dayjs(new Date()).format('YYYY/MM/DD');

  const [todoNumber, setTodoNumber] = useState<number>(0);
  const [header, setHeader] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [expirationDate, setExpirationDate] = useState(today);
  // const [workingTime, setWorkingTime] = useState();
  const [priority, setPriority] = useState<string>('');
  const [status, setStatus] = useState<string>('Queue');
  const [files, setFiles] = useState<ImageType[]>([]);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (!header) return;

    const newTodo: TodoInputValue = {
      projectId,
      number: todoNumber,
      header,
      description,
      priority,
      files,
      status,
      expirationDate: new Date(expirationDate).getTime(),
    };

    onSubmit(newTodo);
  };

  const disabled = !header || isLoading || !todoNumber || !priority || !status || !expirationDate;

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={20}>
        <FormTitle>{defaultValues ? 'Обновить Todo' : 'Создать Todo'}</FormTitle>

        <div>
          <Label htmlFor='number'>
            <span>Номер Todo</span>
            <Asterisk size={10} strokeWidth={1.5} color={'red'} />
          </Label>
          <Input
            value={todoNumber}
            onChange={(event) => setTodoNumber(parseInt(event.target.value))}
            type='number'
            placeholder='Номер Todo'
            id='number'
          />
        </div>

        <div>
          <Label htmlFor='header'>
            <span>Загаловок Todo</span>
            <Asterisk size={10} strokeWidth={1.5} color={'red'} />
          </Label>
          <Input
            value={header}
            onChange={(event) => setHeader(event.target.value)}
            type='text'
            placeholder='Загаловок проекта'
            id='header'
          />
        </div>

        <CustomSelect
          data={Object.values(TodoPriorities)}
          value={priority}
          setValue={setPriority}
          placeholder='Выберите приоритет'
          label='Выберите приоритет'
          withAsterisk
        />

        <CustomSelect
          data={Object.values(TodoStatuses)}
          value={status}
          setValue={setStatus}
          placeholder='Выберите статус'
          label='Выберите статус'
          withAsterisk
        />

        <CustomDatePicker
          date={expirationDate}
          setDate={setExpirationDate}
          label='Дата окончания'
          withAsterisk
        />

        <FileUpload files={files} setFiles={setFiles} />

        <div>
          <Label htmlFor='description'>
            <span>Описание</span>
          </Label>
          <TextArea
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            placeholder='Описание'
            id='description'
          />
        </div>

        <Button type='submit' disabled={disabled}>
          {defaultValues ? 'Сохранить' : 'Создать'}
        </Button>
      </Stack>
    </form>
  );
};

export default TodoForm;