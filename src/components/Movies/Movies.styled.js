import { styled } from 'styled-components';

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 24px;
`;
export const Input = styled.input`
  width: 180px;
  padding: 4px;
  border: none;
  outline: none;
  border-bottom: 1px solid black;
`;

export const Button = styled.button`
  font-size: 16px;
  min-width: 96px;
  max-height: 40px;
  padding: 8px;
  background-color: orange;
  text-transform: uppercase;
  border-radius: 8px;
  transition: background-color 250ms linear;
  &:hover,
  &:focus {
    background-color: #ffd580;
  }
`;
