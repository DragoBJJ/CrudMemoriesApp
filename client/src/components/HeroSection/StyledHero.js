import styled from 'styled-components';
import snowTree from 'assets/images/snowTree.jpg';

export const WrapperHero = styled.div`
  display: flex;
  min-height: 100vh;
  min-width: 100vw;
  background-image: url(${snowTree});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
`;

export const HeroContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;

  @media screen and (max-width: 900px) {
    flex-direction: column-reverse;
  }
`;

export const ColumnOne = styled.div`
  display: flex;
  width: 70%;
  height: auto;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 900px) {
    width: 100%;
  }
`;

export const ColumnTwo = styled.div`
  min-width: 30%;
  height: auto;
  @media screen and (max-width: 900px) {
    height: 600px;
  }
`;
