const usersRouter= require('express').Router();
// const User = require('../models/users-model');


const getAllUsers = (req,res)=>{
    console.log('all users console.log')
    res.send('getting all users')
}

const getUser = (req,res)=>{
    res.send('getting one user')
}

const createUser = (req,res)=>{
    res.send('creating one user')
}

usersRouter.route('/')
    .get(getAllUsers)
    .post(createUser)

usersRouter.route('/:id')
    .get(getUser)


module.exports = usersRouter;