import { FC } from 'react';
import { FileDiff } from 'tabler-icons-react';
import { Title, TitleWrapper, Wrapper, DeleteIcon } from './styles';

type Props = {
  file: File;
  handleDelete: (file: File) => void;
};

const FileItem: FC<Props> = ({ file, handleDelete }) => {

  return (
    <Wrapper>
      <TitleWrapper>
        <FileDiff size={20} strokeWidth={1.5} color={'#fff'} />
        <Title>{file.name}</Title>
      </TitleWrapper>
      <DeleteIcon
        size={20}
        strokeWidth={2}
        color={'#fff'}
        onClick={() => handleDelete(file)}
      />
    </Wrapper>
  );
};

export default FileItem;