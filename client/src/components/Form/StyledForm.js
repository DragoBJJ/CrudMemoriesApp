import styled, { css } from 'styled-components';
import { Form, Field } from 'formik';

export const FormWrapper = styled(Form)`
  margin: 50px 0;
  display: flex;
  flex-direction: column;
  width: ${({ signUp }) => (signUp ? '660px' : ` 600px`)};
  height: auto;
  justify-content: space-around;
  align-items: center;
  background-color: ${({ theme }) => theme.black};
  opacity: 0.8;
  border-radius: 20px;
  @media screen and (max-width: 600px) {
    margin-top: 50px;
    width: 460px;
  }
`;

export const Input = styled(Field)`
  margin-top: 10px;
  height: 48px;
  width: 100%;
  text-align: center;
  border-radius: 30px;
  border: 2px solid ${({ touched, error, theme }) => (touched && error ? theme.white : theme.blue)};
  background-color: ${({ touched, error, theme }) => (touched && error ? theme.alert : '#fff')};
  font-size: ${({ theme }) => theme.fontM};
  color: ${({ theme }) => theme.black};
  outline: none;
  transition: all 0.3s ease-in-out;

  &:focus {
    background-color: ${({ theme }) => theme.blue};
  }
`;

export const WrapperInput = styled.div`
  display: grid;
  height: auto;
  padding: 40px;
  grid-template-columns: ${({ signUp }) => (signUp ? '1fr 1fr' : ` 1fr`)};
  grid-template-rows: ${({ signUp }) => (signUp ? `repeat(3,100px)` : ` 1fr`)};
  place-items: center;
  grid-gap: 30px;
  ${({ signUp }) =>
    signUp &&
    css`
      @media screen and (max-width: 600px) {
        grid-template-columns: 1fr;
        grid-template-rows: auto;
        grid-gap: 30px;
      }
    `}
`;

export const Title = styled.h2`
  margin-top: 20px;
  color: ${({ theme }) => theme.blue};
`;

export const Label = styled.label`
  width: 100%;
  color: ${({ theme }) => theme.blue};
`;

export const ErrorMessage = styled.p`
  margin-top: 10px;
  height: 10px;
  color: ${({ theme }) => theme.alert};
  font-size: 22px;
`;

export const FormDesc = styled.p`
  font-size: 18px;
  color: ${({ theme }) => theme.blue};
  padding: 20px 0;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

export const Button = styled.button`
  margin-bottom: 20px;
  height: 48px;
  width: 120px;
  background-color: transparent;
  color: ${({ theme }) => theme.white};
  font-size: ${({ theme }) => theme.fontS};
  border-radius: 30px;
  border: 2px solid ${({ theme }) => theme.white};
  transition: all 0.2s ease-in-out;
  outline: none;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.blue};
    border: 2px solid ${({ theme }) => theme.blue};
  }
`;
