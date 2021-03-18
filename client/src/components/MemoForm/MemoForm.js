import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createPost, updatePost, getPosts } from 'actions/actions';
import FileBase64 from 'react-file-base64';

import { FormWrapper, WrapperInput, Input, Label, Button, Title, TextArea } from './styledForm';

const InitMemoForm = {
  title: '',
  message: '',
  file: '',
};

const MemoForm = ({ currentID, setID }) => {
  const [formData, setFormData] = useState(InitMemoForm);

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

  const dispatch = useDispatch();

  const currentPost = useSelector(({ posts }) => posts.find(post => post._id === currentID));

  useEffect(() => {
    if (!currentPost) return;
    setFormData(currentPost);
  }, [currentID]);

  const handleData = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  const clear = () => {
    setFormData(InitMemoForm);
    setID(null);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (formData === InitMemoForm) return;

    if (currentID) {
      dispatch(updatePost(currentID, formData));
    } else {
      dispatch(createPost({ ...formData, name: user.result.name }));
    }
    clear();
  };

  if (!user) {
    return (
      <Title noUser>Please Sign Up to create your own memories and like other's memories </Title>
    );
  }

  return (
    <FormWrapper>
      <Title>{currentID ? `Update Post` : `Create Post`}</Title>
      <WrapperInput>
        <Label>
          Title <br />
          <Input name="title" type="text" onChange={handleData} value={formData.title} />
        </Label>
        <Label>
          Message <br />
          <TextArea name="message" type="text" onChange={handleData} value={formData.message} />
        </Label>
        <Label>
          Choose Image <br />
          <br />
          <FileBase64
            name="file"
            multiple={false}
            type="file"
            onDone={({ base64 }) => {
              setFormData({
                ...formData,
                file: base64,
              });
            }}
          />
        </Label>
      </WrapperInput>
      <Button type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </FormWrapper>
  );
};

export default MemoForm;
