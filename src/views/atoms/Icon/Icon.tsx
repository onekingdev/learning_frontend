import {FC} from 'react';
import styled from 'styled-components';
import {IconSize} from './Size';

type iconProps = {
  image: string;
  size?: IconSize.small | IconSize.medium | IconSize.large;
  onClick?: () => void;
};

export const Icon: FC<iconProps> = ({image, onClick, size}) => {
  return (
    <>
      <IconStyle src={image} onClick={onClick} size={size} />
    </>
  );
};

const IconStyle = styled.img<{
  size?: IconSize.small | IconSize.medium | IconSize.large;
}>`
  width: ${p => p.size};
  height: ${p => p.size};
  margin-left: 1vw;
  &: hover {
    cursor: pointer;
    transform: rotate(15deg);
    transition-duration: 1s;
  }
`;

export const RoundIcon = styled(IconStyle)`
  border-radius: 100%;
`;
