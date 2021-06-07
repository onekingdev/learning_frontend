import {FC} from 'react';
import styled from 'styled-components';
import {IconSize} from './Size';

type iconProps = {
  image: string;
  size?: IconSize.small | IconSize.medium | IconSize.large;
  onClick?: () => void;
  round?: boolean;
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
  round?: boolean;
}>`
  width: ${p => p.size};
  height: ${p => p.size};
  border-radius: ${p => (p.round ? 0 : '100%')};
`;
