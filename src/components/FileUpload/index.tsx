import { Dispatch, FC, SetStateAction, ChangeEvent } from 'react';
import { Plus } from 'tabler-icons-react';
import { useUploadMutation } from '../../store/apis/cloudinary';
import { ImageType } from '../../store/apis/cloudinary/types';
import FileItem from './FileItem';
import {
  InfoTitle,
  InputWrapper,
  Title,
  Wrapper,
  Button,
  Input,
  FileListWrapper,
  IconLoader
} from './styles';

type Props = {
  files: ImageType[];
  setFiles: Dispatch<SetStateAction<ImageType[]>>;
};

const FileUpload: FC<Props> = ({ files, setFiles }) => {
  const [upload, { isLoading }] = useUploadMutation();

  const uploadHandler = async (event: ChangeEvent<HTMLInputElement>) => {
    try {
      const file = event.target.files?.[0];
      if (!file) return;

      const newFormData = new FormData();
      newFormData.append('file', file);
      newFormData.append('upload_preset', 'rens9uye');
      const response = await upload(newFormData).unwrap();

      setFiles([
        ...files,
        { public_id: response.public_id, url: response.url, original_filename: response.original_filename }
      ]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = (file: ImageType) => {
    if (!file) return;
    const filteredFiles = files.filter((item) => file.public_id !== item.public_id);
    setFiles(filteredFiles);
  };


  return (
    <div>
      <Wrapper>
        <InputWrapper>
          <Input accept='image/*' type='file' onChange={uploadHandler} />
          <Button>
            {
              isLoading ?
                <IconLoader size={22} color={'#fff'} /> :
                <>
                  <Plus size={18} strokeWidth={1.5} color={'#8ec5fc'} />
                  <span>Перетащить</span>
                </>
            }
          </Button>
        </InputWrapper>

        <div>
          <Title>Поддерживаемые файлы</Title>
          <InfoTitle>JPG, PNG, JPEG, SVG</InfoTitle>
        </div>

      </Wrapper>
      {
        files.length ?
          <FileListWrapper>
            {
              files.map((file) =>
                <FileItem key={file.public_id} file={file} handleDelete={handleDelete} />
              )
            }
          </FileListWrapper>
          : null
      }
    </div>
  );
};

export default FileUpload;