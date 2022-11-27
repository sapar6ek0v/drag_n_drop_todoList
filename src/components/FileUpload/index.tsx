import { Dispatch, FC, SetStateAction, ChangeEvent } from 'react';
import { Plus } from 'tabler-icons-react';
import FileItem from './FileItem';
import { InfoTitle, InputWrapper, Title, Wrapper, Button, Input, FileListWrapper } from './styles';

type Props = {
  files: File[];
  setFiles: Dispatch<SetStateAction<File[]>>;
};

const FileUpload: FC<Props> = ({ files, setFiles }) => {

  const uploadHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    setFiles([...files, file]);
  };

  const handleDelete = (file: File) => {
    if (!file) return;
    const filteredFiles = files.filter((item) => file.name !== item.name);
    setFiles(filteredFiles);
  };

  return (
    <div>
      <Wrapper>
        <InputWrapper>
          <Input accept='application/pdf, image/*' type='file' onChange={uploadHandler} />
          <Button>
            <Plus size={18} strokeWidth={1.5} color={'#8ec5fc'} />
            <span>Перетащить</span>
          </Button>
        </InputWrapper>

        <div>
          <Title>Поддерживаемые файлы</Title>
          <InfoTitle>PDF, JPG, PNG, JPEG, SVG</InfoTitle>
        </div>

      </Wrapper>
      {
        files.length ?
          <FileListWrapper>
            {
              files.map((file) =>
                <FileItem key={file.name} file={file} handleDelete={handleDelete} />
              )
            }
          </FileListWrapper>
          : null
      }
    </div>
  );
};

export default FileUpload;