import React from 'react';
import { PostDetails } from './styledPost';

const Likes = ({ likes, user }) => {
  if (likes.length > 0) {
    return likes.find(id => id === user?.result?._id) ? (
      <PostDetails>
        {likes.length > 2
          ? `You and ${likes.length - 1} others `
          : `${likes.length} like${likes.length > 1 ? 's' : ''}`}
      </PostDetails>
    ) : (
      <PostDetails>
        {likes.length} like{likes.length > 1 ? 's' : ''}
      </PostDetails>
    );
  }
  return <PostDetails>Like</PostDetails>;
};

export default Likes;
