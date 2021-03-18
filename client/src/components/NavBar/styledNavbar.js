import styled, { css } from 'styled-components';

export const NavWrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.black};
`;

export const ItemContainer = styled.div`
  display: flex;
  height: 100%;
  width: 50%;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 760px) {
    margin-left: 50px;
  }

  ${({ user }) =>
    user &&
    css`
      @media screen and (max-width: 900px) {
        display: none;
      }
    `}
`;

export const MenuIConWrapper = styled.div`
  display: none;
  z-index: 3;
  align-items: center;
  font-size: 30px;
  color: ${({ theme }) => theme.blue};
  margin-left: auto;
  margin-right: 20px;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #fff;
  }
  @media screen and (max-width: 900px) {
    display: flex;
  }
`;

export const NavHeader = styled.h1`
  color: ${({ theme }) => theme.blue};
  text-align: center;
  letter-spacing: 2px;
  font-size: ${({ theme }) => theme.fontXl};
`;

export const NavImage = styled.img`
  height: 130px;
  width: 130px;
  border-radius: 80px;
  margin: 0 20px;
  @media screen and (max-width: 760px) {
    display: none;
  }
`;

export const UserName = styled.p`
  color: #fff;
  font-size: ${({ theme }) => theme.fontM};
  text-align: center;
`;

export const UserImage = styled.img`
  height: 80px;
  width: 80px;
  margin: 0px 40px;
  border-radius: 50px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: 20px;
`;

export const Button = styled.button`
  height: 48px;
  width: 120px;
  background-color: transparent;
  color: #fff;
  font-size: ${({ theme }) => theme.fontS};
  border-radius: 30px;
  border: 3px solid #fff;
  transition: all 0.2s ease-in-out;
  outline: none;
  &:hover {
    color: ${({ theme }) => theme.blue};
    border: 2px solid ${({ theme }) => theme.blue};
  }
`;
