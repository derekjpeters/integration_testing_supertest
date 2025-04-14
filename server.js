//request(server).get('/')
//res.status, res.body, res.type

const express = require ('express');
const server = express();

const users = [
  {id: 1, name: 'Sam'},
  {id: 2, name: 'I am'}
];

server.use(express.json());

server.get('/users', (req, res) => {
  res.status(200).json(users);
})

server.get('/', (req, res) => {
  res.status(200).json({api: 'running'});
});

server.post('/create', (req, res) => {
  res.status(201).json({message: 'resource created'});
});

module.exports = server;