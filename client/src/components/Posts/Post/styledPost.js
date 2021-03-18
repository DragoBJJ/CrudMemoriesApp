import styled, { css } from 'styled-components';
import snowTree from 'assets/images/snowTree.jpg';
import { relativeTimeRounding } from 'moment';

export const WrapperPost = styled.div`
  margin: 40px 0;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 560px;
  width: 560px;
  border-radius: 30px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
  background-color: ${({ theme }) => theme.black};
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.03);
  }
  @media screen and (max-width: 760px) {
    width: 460px;
  }
  @media screen and (max-width: 560px) {
    width: 400px;
  }
`;

export const PostTitle = styled.h1`
  color: #fff;
`;

export const PostDesc = styled.p`
  max-width: 500px;
  color: #fff;
  font-size: ${({ theme }) => theme.fontM};
  @media screen and (max-width: 560px) {
    max-width: 360px;
  }
`;

export const PostCreator = styled.p`
  margin: 10px 0;
  color: ${({ theme }) => theme.white};
  font-size: ${({ theme }) => theme.fontL};
`;
export const PostDetails = styled.small`
  color: ${({ theme }) => theme.white};
  font-size: 18px;
  outline: none;
  ${props =>
    props.like &&
    css`
      font-size: 18px;
      position: absolute;
      bottom: 40px;
      left: 100px;
    `}
`;

export const CreatorWrapper = styled.div`
  display: flex;
  position: absolute;
  top: 15px;
  left: 15px;
  flex-direction: column;
  z-index: 1;
`;

export const ContentWrapper = styled.div`
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  z-index: 1;
`;
export const IconWrapper = styled.button`
     position: absolute;
  font-size: 40px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  outline: none;
  background-color: transparent;
  border: none;

  &:hover {
    transform: scale(1.3);
  }

  ${props =>
    props.axe &&
    css`
      top: 20px;
      right: 20px;
      color: ${({ theme }) => theme.alert};
    `}


  ${props =>
    props.like &&
    css`
      bottom: 30px;
      left: 30px;
      color: ${({ theme }) => theme.blue};
    `}

  ${props =>
    props.delete &&
    css`
      right: 30px;
      bottom: 30px;
      color: ${({ theme }) => theme.alert};
    `}
`;

export const PostImage = styled.div`
  position: absolute;
  z-index: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.6;

  ${props =>
    props.image &&
    css`
      background-image: url(${props.image});
      background-size: cover;
    `}
`;
