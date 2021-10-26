const express = require('express');
const cors = require('cors');

const repoController = require('./controllers/repoController');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.use('/repos', repoController);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});