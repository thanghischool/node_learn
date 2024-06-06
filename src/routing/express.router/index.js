const express = require('express');
const app = express();
const port = 3000;

const birds = require('./demo.router');

app.use('/birds', birds);

app.listen(port, () => {
  console.log(`Example app listening http://localhost:${port}`);
});

// npm run dev
