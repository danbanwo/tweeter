const tweetsRouter= require('express').Router();
// const Tweet = require('../models/tweets-model');


const getAllTweets = (req,res)=>{
    res.send('getting all tweets')
}
// const getTweet = (req,res)=>{
//     res.send('getting one tweet')
// }
//
// const createTweet = (req,res)=>{
//     res.send('creating one tweet')
// }

tweetsRouter.route('/')
    .get(getAllTweets)
    // .post(createTweet)

// tweetsRouter.route('/:id')
//     .get(getTweet)

module.exports = tweetsRouter;