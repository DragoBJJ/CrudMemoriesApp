import React, { useEffect, useState } from 'react';
import { WrapperHero, HeroContainer, ColumnOne, ColumnTwo } from './StyledHero';

import Posts from '../Posts/Posts';
import MemoForm from '../MemoForm/MemoForm';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from 'actions/actions';

const HeroSection = () => {
  const dispatch = useDispatch();
  const posts = useSelector(({ posts }) => posts);

  const [currentID, setID] = useState('');

  useEffect(() => {
    dispatch(getPosts());
  }, [posts.likeCount, currentID, posts.length]);

  return (
    <WrapperHero>
      <HeroContainer>
        <ColumnOne>
          <Posts setID={setID} posts={posts} />
        </ColumnOne>
        <ColumnTwo>
          <MemoForm setID={setID} currentID={currentID} />
        </ColumnTwo>
      </HeroContainer>
    </WrapperHero>
  );
};

export default HeroSection;
