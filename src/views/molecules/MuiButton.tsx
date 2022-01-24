import {FC} from 'react';
import {ButtonColor, shadeColor, BasicColor} from '../Color';
import { makeStyles } from '@mui/styles'
import Button from '@mui/material/Button';

type MuiButtonProps = {
  value: string;
  color?: BasicColor | string;
  bgColor?: ButtonColor | string | BasicColor;
  radius?: number
  className?: string;
  align?: string;
  width?: number;
  height?: number;
  fontSize?: number;
  weight?: number
  variant?: any;
  borderColor?: ButtonColor | BasicColor | string;
  margin?: string;
  onHover?: (e: any) => void;
  onClick?: (e: any) => void;
};

const MuiButton: FC<MuiButtonProps> = ({
  value,
  color,
  bgColor,
  borderColor,
  radius=20,
  className='',
  align='unset',
  width,
  height,
  fontSize,
  weight,
  variant="contained",
  margin,
  onHover,
  onClick,
}) => {

    const useStyles = makeStyles({
        Button: {
            "&.MuiButton-root":{
                // backgroundColor: '#21B95C',
                backgroundColor: variant !== 'outlined' ? bgColor || BasicColor.greenSoft : 'white',
                borderColor: borderColor || bgColor || BasicColor.greenSoft,
                borderRadius: radius,
                borderStyle: 'solid',
                borderWidth: 1,
                height: height || '49px',
                width: width || '215px',
                textTransform: 'unset',
                fontSize: fontSize || '16px',
                fontWeight: weight || 500,
                color: color || BasicColor.white,
                float: align,
                margin: margin || 'unset',
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
        variant={variant}
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

