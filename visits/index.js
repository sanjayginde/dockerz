const express = require('express');
const redis = require('redis');
const process = require('process');

const client = redis.createClient({
  host: 'redis-server',
  port: 6379
});
client.set('visits', 0);

const PORT = 8081;
const app = express();
app.get('/', (req, res) => {
  // process.exit(0); // Force exit for working with container restart policies
  client.get('visits', (err, visits) => {
    res.send('Number of visits is ' + visits);
    client.set('visits', parseInt(visits) + 1);
  });
});

app.listen(PORT, () => {
  console.log('Listening on port ' + PORT)
});
