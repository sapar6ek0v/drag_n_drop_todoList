import { Dispatch, FC, SetStateAction, useState } from 'react';
import { Asterisk } from 'tabler-icons-react';
import { Label } from '../styles';
import { Select, Wrapper, Menu } from './styles';

type Props = {
  data: string[];
  value: string,
  setValue: Dispatch<SetStateAction<string>>,
  label?: string;
  placeholder: string;
  withAsterisk?: boolean
};

const CustomSelect: FC<Props> = ({ data, value, setValue, label, placeholder, withAsterisk }) => {
  const [visible, setVisible] = useState<boolean>(false);

  const handleChoose = (value: string) => {
    setValue(value);
    setVisible(!visible);
  };

  return (
    <div>
      {
        label ?
          <Label>
            <span>{label}</span>
            {withAsterisk ? <Asterisk size={10} strokeWidth={1.5} color={'red'} /> : null}
          </Label> :
          null
      }
      <Wrapper>
        <Select onClick={() => setVisible(!visible)}>
          <span>{value ? value : placeholder}</span>
          <i className="fa fa-chevron-left"></i>
        </Select>
        <Menu visibility={visible? 'block' : 'none'}>
          {
            data.map((item, idx) => (
              <li key={idx} onClick={() => handleChoose(item)}>{item}</li>
            ))
          }
        </Menu>
      </Wrapper>
    </div>
  );
};

export default CustomSelect;