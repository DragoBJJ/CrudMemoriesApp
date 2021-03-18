import React from 'react';
import styled from 'styled-components';
import Loader from 'react-loader-spinner';
import Post from './Post/Post';

import { WrapperPosts } from './StyledPosts';
const Posts = ({ posts, setID }) => {
  return (
    <WrapperPosts>
      {posts.length ? (
        posts.map(post => <Post setID={setID} key={post._id} {...post} />)
      ) : (
        <Loader type="Oval" color="hsl(0, 72%, 51%)" height={100} width={100} />
      )}
    </WrapperPosts>
  );
};

export default Posts;
