const express = require('express');

const hubsRouter = require('../hubs/hubs-router.js');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    const query = req.query;
    
    console.log('query', query);
    
    res.send(`
        <h2>Lambda Hubs API</h>
        <p>Welcome to the Lambda Hubs API</p>
    `);
});

// the router handles endpoints that begin with /api/hubs
server.use('/api/hubs', hubsRouter);

module.exports = server;