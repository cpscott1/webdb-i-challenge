const express = require('express');

const db = require('./data/accounts-model.js');

const server = express();



server.use(express.json())

server.get('/', (req, res) => {
  res.send(`<h2>Let's figure this out together</h2>`)
});

server.get('/api/accounts', (req, res) => {
  db.find()
  .then(allAccounts => {
    res.status(200).json(allAccounts)
  })
  .catch(err => {
    res.status(500).send(err.message);
  })
})


server.get('/api/accounts/:id', (req, res) => {
 const { id } = req.params;

 db.findById(id)
 .then(userId => {
   res.json(userId);
 })
 .catch(err => {
   res.status(500).send(err);
 })
})

server.post('/api/accounts', (req, res) => {
  const newUser = req.body

  db.add(newAccount)
  .then(addedAccount => {
    res.status(201).json(addedAccount)
  })
  .catch(err => {
    res.status(500).send(err);
  })
})

server.put('/api/accounts/:id', (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  db.update(id, changes)
  .then(updatedInfo => {
    if (updatedInfo) {
      res.json(updatedInfo);
    } else {
      res.status(404).json({ err: 'incorrect id'})
    }
  })
  .catch(err => {
    res.status(404).send(err);
  })
})

server.delete('/api/accounts/:id', (req, res) => {
  const { id } = req.params;

  db.remove(id)
  .then(removedAccount => {
    res.json(removedAccount);
  })
  .catch(err => {
    res.status(400).send(err);
  })
})

module.exports = server;
