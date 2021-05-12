import {FC} from 'react';

type iconProps = {
  image: string;
  isMedium: boolean;
  isWallet: boolean;
  onClick?: () => {};
};

export const Icon: FC<iconProps> = ({image, isMedium, onClick, isWallet}) => {
  return (
    <>
      <img
        src={image}
        style={{
          width: isMedium ? '70px' : '55px',
          height: isMedium ? '65px' : '50px',
          position: isWallet ? 'absolute' : 'static',
          bottom: isWallet ? -1 : 0,
          left: isWallet ? -5 : 0,
        }}
        onClick={onClick}
      />
    </>
  );
};
