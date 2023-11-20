import { styled } from 'styled-components';
import { NavLink } from 'react-router-dom';
export const StyledHeadre = styled.header`
  padding: 10px 0;
`;

export const Navigation = styled.nav`
  display: flex;
  column-gap: 24px;
  justify-content: center;
`;
export const MyLink = styled(NavLink)`
  font-size: 20px;
  font-weight: 500;
  padding: 12px;
  border-radius: 12px;
  transition: color 250ms linear;
  &:hover,
  &:focus,
  &.active {
    color: orange;
  }
  &.active::after {
    content: '';
    display: block;
    height: 2px;
    width: 100%;
    background-color: orange;
    border-radius: 2px;
  }
`;
