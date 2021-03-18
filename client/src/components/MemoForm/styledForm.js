import styled, { css } from 'styled-components';

export const FormWrapper = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 600px;
  justify-content: space-around;
  align-items: center;
  background-color: ${({ theme }) => theme.black};
  opacity: 0.8;
  border-radius: 20px 0 0 20px;

  @media screen and (max-width: 900px) {
    width: 70%;
    border-radius: 20px;
    margin: 30px auto 30px auto;
  }
`;

export const WrapperInput = styled.div`
  display: grid;
  height: 350px;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 1fr);
  place-items: center;
  grid-gap: 30px;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.blue};
  ${props =>
    props.noUser &&
    css`
      color: ${({ theme }) => theme.white};
      max-width: 500px;
      text-align: center;
      margin: 100px auto;
    `}
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.white};
`;

export const Input = styled.input`
  margin-top: 10px;
  padding: 20px;
  height: 48px;
  width: 100%;
  border-radius: 30px;
  border: 2px solid ${({ theme }) => theme.blue};
  font-size: ${({ theme }) => theme.fontM};
  color: ${({ theme }) => theme.black};
  outline: none;
  transition: all 0.3s ease-in-out;

  &:focus {
    background-color: ${({ theme }) => theme.blue};
  }
`;

export const TextArea = styled.textarea`
  height: 130px;
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme.blue};
  font-size: ${({ theme }) => theme.fontS};
  color: ${({ theme }) => theme.black};
  transition: all 0.3s ease-in-out;
  outline: none;
  resize: none;
  &:focus {
    background-color: ${({ theme }) => theme.blue};
  }
`;

export const Button = styled.button`
  height: 48px;
  width: 120px;
  background-color: transparent;
  color: ${({ theme }) => theme.white};
  font-size: ${({ theme }) => theme.fontS};
  border-radius: 30px;
  border: 2px solid ${({ theme }) => theme.white};
  transition: all 0.2s ease-in-out;
  outline: none;
  &:hover {
    color: ${({ theme }) => theme.blue};
    border: 2px solid ${({ theme }) => theme.blue};
  }
`;
