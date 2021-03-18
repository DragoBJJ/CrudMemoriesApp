import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { deletePost, likePost } from 'actions/actions';

import moment from 'moment';
import { GiStoneAxe } from 'react-icons/gi';
import { AiOutlineLike } from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';

import Likes from './likes';

import {
  WrapperPost,
  PostTitle,
  PostDesc,
  PostCreator,
  PostDetails,
  CreatorWrapper,
  ContentWrapper,
  IconWrapper,
  PostImage,
} from './styledPost';
const Post = ({ title, message, _id, createdAt, creator, file, likes, setID, name }) => {
  const dispatch = useDispatch();

  const [user, setUser] = useState('');

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('profile')));
  }, []);

  return (
    <WrapperPost>
      <PostImage image={file} />
      {user?.result?._id === creator && (
        <IconWrapper axe onClick={() => setID(_id)}>
          <GiStoneAxe />
        </IconWrapper>
      )}
      <CreatorWrapper>
        <PostCreator>{name}</PostCreator>
        <PostDetails>{moment(createdAt).fromNow()}</PostDetails>
      </CreatorWrapper>
      <ContentWrapper>
        <PostTitle>{title}</PostTitle>
        <PostDesc>{message}</PostDesc>
      </ContentWrapper>
      <IconWrapper disabled={!user} like onClick={() => dispatch(likePost(_id))}>
        <AiOutlineLike />
        <Likes user={user} likes={likes} />
      </IconWrapper>

      {user?.result?._id === creator && (
        <IconWrapper delete onClick={() => dispatch(deletePost(_id))}>
          <TiDeleteOutline />
        </IconWrapper>
      )}
    </WrapperPost>
  );
};

export default Post;
