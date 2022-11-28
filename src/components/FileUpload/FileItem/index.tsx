import { FC } from 'react';
import { FileDiff } from 'tabler-icons-react';
import { ImageType } from '../../../store/apis/cloudinary/types';
import { LinkTitle, TitleWrapper, Wrapper, DeleteIcon } from './styles';

type Props = {
  file: ImageType;
  handleDelete: (file: ImageType) => void;
};

const FileItem: FC<Props> = ({ file, handleDelete }) => {

  return (
    <Wrapper>
      <TitleWrapper>
        <FileDiff size={20} strokeWidth={1.5} color={'#fff'} />
        <LinkTitle href={file.url} target='_blank'>{file.original_filename}</LinkTitle>
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