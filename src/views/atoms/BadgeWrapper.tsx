import styled from 'styled-components';

export const BadgeWrapper = styled.img`
  background-color: #fff;
  border-radius: 50%;
  border: 3px dashed #3f3f3f;
  height: 60px;
  width: 60px;
  box-shadow: 2px 2px 5px 2px #c3c3c3;
  padding: 5px;
`;

export const LockedBadgeWrapper = styled(BadgeWrapper)`
  background-color: #e3e5e6;
  padding: 10px;
  height: 50px;
  width: 50px;
`;
