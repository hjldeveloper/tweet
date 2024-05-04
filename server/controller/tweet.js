const router = require('express').Router();
const { tweetData } = require('../data/setData');

const getAll = async (req, res) => {
  console.log(tweetData);
  const { username } = req.query;
  const data = username
    ? tweetData.filter(v => v.username === username)
    : tweetData;
  res.status(200).json(data);
};

const getId = async (req, res) => {
  const { id } = req.params;
  const tweet = tweetData.find(v => v.id === id);
  if (tweet) {
    res.status(200).json(tweet);
  } else {
    res.status(404).json({ message: `Tweet id:${id} not found` });
  }
};

const add = async (req, res) => {
  const { text, name, username } = req.body;
  const newTweets = {
    id: Date.now().toString(),
    text,
    createAt: Date.now().toString(),
    name,
    username,
    url: '',
  };
  //   tweetData = [newTweets, ...tweetData];
  tweetData.unshift(newTweets);
  res.status(201).json(newTweets);
};

const remove = async (req, res) => {
  const { id } = req.params;
  tweetData.filter(v => v.id !== id); // filter는 되나 배열 변경되지 않음. tweetData는 const로 선언하여 변경되지 않음
  res.sendStatus(204);
};

const update = async (req, res) => {
  const { id } = req.params;
  const { text } = req.body;
  const tweet = tweetData.find(v => v.id === id);
  if (tweet) {
    tweet.text = text;
    res.status(200).json(tweet);
  } else {
    res.status(404).json({ message: `Tweet id:${id} not found` });
  }
};

module.exports = {
  getAll,
  getId,
  add,
  remove,
  update,
};
