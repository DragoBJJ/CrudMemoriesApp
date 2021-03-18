import PostMessage from '../models/posts.js.js';
import mongoose from 'mongoose';

export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find();
    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ error });
  }
};

export const createPost = async (req, res) => {
  const post = req.body;
  const userID = req.userID;

  try {
    const newPost = new PostMessage({
      ...post,
      creator: userID,
      createdAt: new Date().toISOString(),
    });
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ error });
  }
};

export const deletePost = async (req, res) => {
  try {
    console.log(req.params);
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(400).json({ message: 'No post with that id' });
    }

    await PostMessage.findByIdAndRemove(id);
    res.status(200).json({ message: 'Post delete is Successfully' });
  } catch (error) {
    res.status(400).json({ error });
  }
};

export const updatePost = async (req, res) => {
  try {
    const { id: _id } = req.params;
    const post = req.body;

    if (!mongoose.Types.ObjectId.isValid(_id)) {
      res.status(404).json({ message: 'No post with that id' });
    }

    const newPost = { ...post, _id };

    const updatedPost = await PostMessage.findByIdAndUpdate(_id, newPost, {
      new: true,
    });
    res.status(200).json(updatedPost);
  } catch (error) {
    res.status(400).json({ error });
  }
};

export const likePost = async (req, res) => {
  const { id } = req.params;

  try {
    if (!req.userID) return res.status(400).json({ message: 'Unauthenticated' });

    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(400).json({ message: 'No post with that id' });
    }

    const oldPost = await PostMessage.findById(id);

    const index = oldPost.likes.findIndex(id => id === req.userID);

    if (index === -1) {
      oldPost.likes.push(req.userID);
    } else {
      oldPost.likes = oldPost.likes.filter(id => id !== req.userID);
    }

    const updatedPost = await PostMessage.findByIdAndUpdate(id, oldPost, {
      new: true,
    });
    res.status(200).json(updatedPost);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};
