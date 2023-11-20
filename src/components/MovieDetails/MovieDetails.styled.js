import { styled } from 'styled-components';
import { NavLink } from 'react-router-dom';

export const BoxContent = styled.div`
  display: flex;
  column-gap: 16px;
`;
export const BoxInfo = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
`;
export const Image = styled.img`
  border-radius: 8px;
`;
export const List = styled.ul`
  margin-top: 12px;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
`;
export const MyLink = styled(NavLink)`
  &.active {
    color: orange;
  }
`;
