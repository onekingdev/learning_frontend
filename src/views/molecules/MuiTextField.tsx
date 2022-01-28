import {FC} from 'react';
import {ButtonColor, shadeColor, BasicColor} from '../Color';
import { makeStyles } from '@mui/styles'
import TextField from '@mui/material/TextField';

type MuiButtonProps = {
  value?: string;
  InputProps?: any;
  variant?: any;
  focused?: boolean;
  error?: boolean | any;
  helperText?: string | undefined | null;
  label?: string;
  bgColor?: ButtonColor | string | BasicColor;
  radius?: number
  className?: string;
  borderColor?: ButtonColor | BasicColor | string;
  onHover?: (e: any) => void;
  onClick?: (e: any) => void;
  onChange?: (e: any) => void;
};

const MuiTextField: FC<MuiButtonProps> = ({
  value,
  InputProps,
  focused,
  error,
  helperText,
  label,
  variant="outlined",
  bgColor,
  borderColor,
  radius=25,
  className='',
  onHover,
  onClick,
  onChange
}) => {

    const useStyles = makeStyles({
        input: {
            "& fieldset": {
                borderColor: borderColor || bgColor || BasicColor.brightBlue,
                borderRadius: radius,
                borderWidth: '2px'
            },
            "& MuiFormControl-root": {
                borderRadius: radius,
                borderWidth: '2px'
            },
            "& input": {
                backgroundColor: variant !== 'outlined' ? bgColor || BasicColor.greenSoft : 'white',
                borderRadius: radius,
                borderWidth: '2px'
            },
            "& .MuiInputBase-input": {
                backgroundColor: variant !== 'outlined' ? bgColor || BasicColor.greenSoft : 'white',
                borderRadius: radius,
                borderWidth: '2px'
            }
        }
    })

    const classes = useStyles();

  return (
    <TextField
        variant={variant}
        label={label}
        className={`${classes.input} ${className}`}
        focused={focused}
        InputProps={InputProps}
        error={error}
        helperText={helperText}
        onClick={onClick}
        onMouseOver={onHover}
        onChange={onChange}
        fullWidth
        value={value}
    />
  );
};
export default MuiTextField

