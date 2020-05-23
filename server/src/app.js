// import dependencies
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const mongo = require('mongodb')
const MongoClient = mongo.MongoClient
// const uri = mongodb+srv:%2F%2Feraming:Happycat1!@firstcluster-fq0vq.mongodb.net/test
var client;

const app = express() // create your express app

// make app use dependencies
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cors())

app.get('/todo', (req, res) => {
  res.send([
    'Thing list 1',
    'Thing list 2'
  ])
})

// app.get('/todo', (req, res) => {
//   const collection = client.db("test").collection("todos")  collection.find().toArray(function (err, results) {
//     if (err) {
//       console.log(err)
//       res.send([])
//       return
//     }
//
//     res.send(results)
//   })
// })


// var mongoClient = new MongoClient(uri, { reconnectTries :
// Number.MAX_VALUE, autoReconnect : true, useNewUrlParser : true }) mongoClient.connect((err, db) => { // returns db connection
//   if (err != null) {
//     console.log(err)
//     return
//   }
//   client = db
// })

app.listen(process.env.PORT || 8081) // client is already running on 8080
