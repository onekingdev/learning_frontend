import { FC, ReactChildren, ReactChild } from 'react';
import { ButtonColor, shadeColor, BasicColor } from 'views/Color';
import { makeStyles } from '@mui/styles'
import Button from '@mui/lab/LoadingButton';

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
  weight?: number;
  variant?: any;
  borderColor?: ButtonColor | BasicColor | string;
  zIndex?: number;
  margin?: string;
  disabled?: boolean;
  loading?: boolean;
  startIcon?: ReactChild | ReactChildren;
  fullWidth?: boolean;
  loadingPosition?: string;
  onHover?: (e: any) => void;
  onClick?: (e: any) => void;
};

const MuiButton: FC<MuiButtonProps> = ({
  value,
  color,
  bgColor,
  borderColor,
  zIndex=1,
  radius=20,
  loadingPosition='',
  className='',
  align='unset',
  width,
  height,
  fontSize,
  weight,
  variant='contained',
  margin,
  disabled=false,
  loading=false,
  startIcon=<></>,
  fullWidth=false,
  onHover,
  onClick,
}) => {

    const useStyles = makeStyles({
        Button: {
            '&.MuiButton-root':{
                // backgroundColor: '#21B95C',
                zIndex:zIndex,
                backgroundColor: variant !== 'outlined' ? bgColor || BasicColor.greenSoft : 'white',
                borderColor: borderColor || bgColor || BasicColor.greenSoft,
                borderRadius: radius,
                borderStyle: 'solid',
                borderWidth: 1,
                height: height || '49px',
                width: fullWidth ? '100%' : width || '215px',
                textTransform: 'unset',
                fontSize: fontSize || '16px',
                fontWeight: weight || 500,
                color: color || BasicColor.white,
                float: align,
                margin: margin || 'unset',
            },
            '&:hover': {
                background: `${shadeColor(bgColor || BasicColor.greenSoft, 10)}
                    radial-gradient(circle, transparent 1%, ${bgColor} 1%)
                    center/15000% !important`
            },
            '&:disabled': {
              color: 'transparent !important',
              boxShadow: 'none !important',
              backgroundColor: "rgba(0, 0, 0, 0.12) !important"
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
        disabled={disabled}
        loading={loading}
        loadingPosition="center"
        startIcon={startIcon}
        // fullWidth
    >
        {value}
    </Button>
  );
};
export default MuiButton

