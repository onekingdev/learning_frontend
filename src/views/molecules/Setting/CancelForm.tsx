import { FC, useState } from 'react';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import { BasicColor } from 'views/Color';
import { LSLabel, LSButtonContainer, LSButton } from './utils/Style';
import { LSFormControl, LSRadio, LSFormControlLabel } from './utils/Style';

interface ICancelFormProps {
  onConfirm: (arg: string) => void
  onCancel: () => void
  tag?: Number
}

const data = [
  {
    id: 0,
    value: 'reason0',
    label: 'How can we raise a good child, one who will do the right thing, even when no one may see them do it',
  },
  {
    id: 1,
    value: 'reason1',
    label: 'To encourage empathy in your child, encourage your child to talk about her feelings and make sure she knows that you care about them.',
  },
  {
    id: 2,
    value: 'reason2',
    label: 'No two children learn the same way or at the same pace.',
  },
  {
    id: 3,
    value: 'reason3',
    label: 'Babies and young children learn best when they have warm, engaged and responsive relationships with their main carers.',
  },
  {
    id: 4,
    value: 'reason4',
    label: 'Letting your child make mistakes and find out for himself how the world works is a big part of learning.',
  },
]

export const CancelForm: FC<ICancelFormProps> = ({ onConfirm, onCancel, tag }) => {
  const [value, setValue] = useState(data[0].value);

  const onSubmit = () => {
    onConfirm(value)
    console.log(tag)
    console.log(value)
  }

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value)
  };

  return (
    <LSFormControl variant='standard'>
      <FormLabel id="canceling-reason-label">
        <LSLabel>{'Please tell us why are you canceling.'}</LSLabel>
      </FormLabel>
      <RadioGroup
        aria-labelledby="canceling-reason-label"
        name="radio-buttons-group"
        color={BasicColor.green}
        value={value}
        onChange={handleRadioChange}
      >
        {
          data.map((row, index) => {
            return <LSFormControlLabel value={row.value} control={<LSRadio />} label={row.label} />
          })
        }
      </RadioGroup>
      <LSButtonContainer>
        <LSButton
          variant='contained'
          onClick={onSubmit}
        >
          {'Submit'}
        </LSButton>
        <LSButton
          variant='contained'
          color="secondary"
          bgColor={BasicColor.gray60}
          onClick={onCancel}
        >
          {'Cancel'}
        </LSButton>
      </LSButtonContainer>
    </LSFormControl>
  );
}

