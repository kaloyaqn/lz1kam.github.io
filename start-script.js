const concurrently = require('concurrently');

concurrently([
  {
    command: 'cd backend && node app.js',
    name: 'backend',
  },
]);
