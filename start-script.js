const concurrently = require('concurrently');

concurrently([
  {
    command: 'cd frontend && npm start',
    name: 'frontend',
  },
  {
    command: 'cd backend && node index.js',
    name: 'backend',
  },
]);
