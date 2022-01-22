import {FC} from 'react';
import {ButtonColor, shadeColor, BasicColor} from '../Color';
import { makeStyles } from '@mui/styles'
import Button from '@mui/material/Button';

type MuiButtonProps = {
  value: string;
  color?: BasicColor | string;
  bgColor?: ButtonColor | string;
  className?: String;
  align?: String;
  width?: number;
  height?: number;
  fontSize?: number;
  onHover?: (e: any) => void;
  onClick?: (e: any) => void;
};

const MuiButton: FC<MuiButtonProps> = ({
  value,
  color,
  bgColor,
  className='',
  align='unset',
  width,
  height,
  fontSize,
  onHover,
  onClick,
}) => {

    const useStyles = makeStyles({
        Button: {
            "&.MuiButton-root":{
                // backgroundColor: '#21B95C',
                backgroundColor: bgColor || BasicColor.greenSoft,
                borderRadius: '20px',
                height: height || '49px',
                width: width || '215px',
                textTransform: 'unset',
                zIndex: 3,
                fontSize: fontSize || '16px',
                fontWeight: 500,
                color: color || BasicColor.white,
                float: align,
            },
            "&:hover": {
                background: `${shadeColor(bgColor || BasicColor.greenSoft, 10)}
                    radial-gradient(circle, transparent 1%, ${bgColor} 1%)
                    center/15000% !important`
            }
        },
    })

    const classes = useStyles();

  return (
    <Button
        variant="contained"
        className={`${classes.Button} ${className}`}
        color="success"
        onClick={onClick}
        onMouseOver={onHover}
        fullWidth
    >
        {value}
    </Button>
  );
};
export default MuiButton

