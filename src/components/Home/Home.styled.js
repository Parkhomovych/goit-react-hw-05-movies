import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const List = styled.ul`
margin-top: 32px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  column-gap: 16px;
  row-gap: 24px;
`;

export const LinkDetails = styled(Link)`
  display: block;
  width: 250px;
`;
export const Image = styled.img`
  height: 350px;
  border-radius: 12px;
`;
export const Paragraf = styled.p`
  margin-top: 12px;
  text-align: center;
`;
