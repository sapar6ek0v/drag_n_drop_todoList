import { Dispatch, FC, useState, memo, SetStateAction } from 'react';
import { Asterisk } from 'tabler-icons-react';
import { Label } from '../styles';
import { DatePickerInput, StyledDatePicker, Wrapper } from './styles';

type Props = {
  date: string;
  setDate: Dispatch<SetStateAction<string>>;
  label?: string;
  withAsterisk?: boolean
};

const CustomDatePicker: FC<Props> = ({ date, setDate, label, withAsterisk }) => {
  const [focus, setFocus] = useState<boolean>(false);

  const handleSetDate = (time: string) => {
    setDate(time);
    setFocus(false);
  };

  return (
    <Wrapper>
      {
        label ?
          <Label>
            <span>{label}</span>
            {withAsterisk ? <Asterisk size={10} strokeWidth={1.5} color={'red'} /> : null}
          </Label> :
          null
      }
      <DatePickerInput
        onFocus={() => setFocus(true)}
        value={date}
        readOnly
      />
      {
        focus ?
          <StyledDatePicker
            value={date}
            onChange={handleSetDate}
            isVisibleSetToday
            locale='ru-RU'
            format='YYYY/MM/DD'
          /> : null
      }
    </Wrapper>
  );
};

export default memo(CustomDatePicker);