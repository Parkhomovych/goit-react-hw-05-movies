import { styled } from 'styled-components';

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 88px;
`;

export const Button = styled.button`
  font-size: 24px;
  min-width: 96px;
  max-height: 40px;
  padding: 8px;
  background-color: orange;
  text-transform: uppercase;
  border-radius: 8px;
  transition: background-color 250ms linear;
  &:hover,
  &:focus {
    background-color: #FFD580;
  }
`;
