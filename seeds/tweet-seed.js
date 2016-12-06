const Sequelize = require('sequelize');
const sequelizeConnection = require('../db');
const Tweet = require('../models/tweets-model');
const User = require('../models/users-model');


//User.sync will create the Users table
User.sync({force: true})
.then(() => sequelizeConnection.sync())
//add the following three artists to the database:
.then((data) => User.create(
  {name: 'charles kuang', youtube_url: 'https://www.youtube.com/watch?v=PmN9rZW0HGo', artistId: 1}
))
.then((User) => {
  //use an automatically created 'accessor' method (addGenres) to add the genres
  User.addGenres([1, 3])
})
.then(() => User.create(
  {title: 'My Friends Never Die', youtube_url: 'https://www.youtube.com/watch?v=B56lkB18onQ', artistId: 2}
))
.then((User) => {
  User.addGenres([2])
})
.then(() => User.create(
  {title: 'Ny State of Mind', youtube_url: 'https://www.youtube.com/watch?v=UKjj4hk0pV4', artistId: 3}
))
.then((User) => {
  User.addGenres([1])
})

//the following artists should NOT be added to your database:
//(if your validations are setup correctly)
.then(() => User.bulkCreate([
  {title: ''},
  {title: ['artist1', 'artist2']},
], {validate: true}))
// if everything is correct, you should only have THREE artists in your database
.catch((err) => console.log(err));

