// MongoDB today's commands

// To see all Databases you have
// show dbs

// To show the current Database you are working with
// db

// Create new DB || Switch DB
// use newTest

// Drop DB
// db.dropDatabase()

// Create Collection
// db.createCollection('users')

// Show Collections
// show collections

// Insert new row
// db.users.insert({
//   name: 'Ali',
//   age: 31,
//   add: 'Berlin',
//   hopis: ['dance', 'sleep'],
//   emails: {
//     private: 'me@mail.co',
//     work: 'you@mail.com'
//   },
//   date: Date()
// })

// Insert many rows
// db.users.insertMany([
//   {
//     name: "Jack",
//     age: 22,
//     add: "Paris",
//     data: Date(),
//   },
//   {
//     name: "Olga",
//     age: 40,
//     add: "Paris",
//     data: Date(),
//   },
//   {
//     name: "Zain",
//     age: 3,
//     add: "Berlin",
//     data: Date(),
//   },
// ])

// To show all rows in Collection
// db.users.find()

// Make it pretty
// db.users.find().pretty()

// Find rows with Criteria
// db.users.find({ add: 'Berlin' })

// Sorting rows
// ascending => Alphabetical order
// db.users.find().sort({ name: 1 }).pretty()
// descending
// db.users.find().sort({ name: -1 }).pretty()

// Delete row with Criteria
// db.users.remove({ name: 'Olga' })