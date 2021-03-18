import styled, { css } from 'styled-components';

export const SideBarWrapper = styled.div`
  position: fixed;
  display: flex;
  z-index: 2;
  height: 100vh;
  width: 100vw;
  top: -100%;
  left: 0;
  bottom: 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;
  background-color: ${({ theme }) => theme.black};
  opacity: 0.95;
  @media screen and (min-width: 900px) {
    display: none;
  }
  ${({ open }) =>
    open &&
    css`
      transform: translateY(100%);
    `};
`;

export const MobileMenu = styled.ul`
  display: grid;
  width: 100%;
  height: auto;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 1fr);
  place-items: center;
  background-color: ${({ theme }) => theme.black};
`;

export const MobileItem = styled.li`
  text-align: center;
  list-style: none;
`;
