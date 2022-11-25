import { FC } from 'react';
import { CirclePlus } from 'tabler-icons-react';
import { Button, FixedContainer, Input, Wrapper, InputWrapper, CreateButton } from './styles';

type Props = {
  handleCreate: () => void;
};

const SearchForm: FC<Props> = ({ handleCreate }) => {
  return (
    <FixedContainer>
      <Wrapper>
        <InputWrapper>
          <Input type='text' placeholder='Найти...' />
          <Button>Найти</Button>
        </InputWrapper>

        <CreateButton onClick={handleCreate}>
          <CirclePlus size={18} strokeWidth={1.5} color={'#fff'} />
          <span>Создать</span>
        </CreateButton>
      </Wrapper>
    </FixedContainer>
  );
};

export default SearchForm;