import { ChangeEvent, FC, FormEvent, useState } from 'react';
import { Asterisk } from 'tabler-icons-react';
import { ProjectInputValue } from '../../../store/apis/projects/types';
import { Button, FormTitle, Input, Label, Stack } from '../../styles';

type Props = {
  onSubmit: (value: ProjectInputValue) => void;
  isLoading: boolean;
  defaultValues?: ProjectInputValue;
};

const ProjectForm: FC<Props> = ({ onSubmit, isLoading, defaultValues }) => {
  const [projectName, setProjectName] = useState<string>(defaultValues?.name || '');

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (!projectName) return;

    onSubmit({ name: projectName });
    setProjectName('');
  };

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newProjectName = event.target.value;
    setProjectName(newProjectName);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={20}>
        <FormTitle>{defaultValues ? 'Обновить Проект' : 'Создать Проект'}</FormTitle>
        <div>
          <Label htmlFor='project'>
            <span>Название проекта </span>
            <Asterisk size={10} strokeWidth={1.5} color={'red'} />
          </Label>
          <Input
            value={projectName}
            onChange={handleOnChange}
            type='text'
            placeholder='Название проекта'
            id='project'
          />
        </div>
        <Button type='submit' disabled={!projectName || isLoading}>
          {defaultValues ? 'Сохранить' : 'Создать'}
        </Button>
      </Stack>
    </form>
  );
};

export default ProjectForm;