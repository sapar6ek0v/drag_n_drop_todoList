import { FC, SetStateAction, Dispatch, KeyboardEvent } from 'react';
import { CirclePlus } from 'tabler-icons-react';
import { Button, FixedContainer, Input, Wrapper, InputWrapper, CreateButton, IconLoader } from './styles';

type Props = {
  handleCreate: () => void;
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
  handleSearchSubmit: () => void;
  isLoading: boolean;
};

const SearchForm: FC<Props> = ({ handleCreate, setSearch, search, handleSearchSubmit, isLoading }) => {

  const handleOnKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearchSubmit();
    }
  };

  return (
    <FixedContainer>
      <Wrapper>
        <InputWrapper>
          <Input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            onKeyDown={handleOnKeyDown}
            type='text'
            placeholder='Найти...'
          />
          <Button
            disabled={!search}
            onClick={handleSearchSubmit}
          >
            {isLoading ? <IconLoader size={15} color={'#fff'} /> : 'Найти'}
          </Button>
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