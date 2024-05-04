const router = require('express').Router();
const _ = require('lodash');

let tweets = [
  {
    id: '1',
    text: '이직하자',
    createAt: Date.now().toString(),
    name: 'hj',
    username: 'hj',
    url: '',
  },
];

const getTweets = (req, res, next) => {
  const { username } = req.query;
  const data = username ? tweets.filter(v => v.username === username) : tweets;
  res.status(200).json(data);
};

const getId = (req, res, next) => {
  const { id } = req.params;
  const tweet = tweets.find(v => v.id === id);
  if (tweet) {
    res.status(200).json(tweet);
  } else {
    res.status(404).json({ message: `Tweet id:${id} not found` });
  }
};

const addTweets = (req, res, next) => {
  const { text, name, username } = req.body;
  const newTweets = {
    id: Date.now().toString(),
    text,
    createAt: Date.now().toString(),
    name,
    username,
    url: '',
  };
  tweets = [newTweets, ...tweets];
  res.status(201).json(newTweets);
};

const deleteTweets = (req, res, next) => {
  const { id } = req.params;
  tweets = tweets.filter(v => v.id !== id);
  res.sendStatus(204);
};

const updateTweets = (req, res, next) => {
  const { id } = req.params;
  const { text } = req.body;
  const tweet = tweets.find(v => v.id === id);
  if (tweet) {
    tweet.text = text;
    res.status(200).json(tweet);
  } else {
    res.status(404).json({ message: `Tweet id:${id} not found` });
  }
};

router.get('/', getTweets);
router.get('/:id', getId);
router.post('/', addTweets);
router.delete('/:id', deleteTweets);
router.put('/:id', updateTweets);

module.exports = router;
