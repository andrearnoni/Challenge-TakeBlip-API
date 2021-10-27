const express = require('express');
const repoService = require('../services/repoService');

const router = express.Router();


router.get('/:position', async (_req, res) => {
  try {
    const { position } = _req.params;
    const getRepos = await repoService.getParams();

    const getPosition = getRepos[position];

    res.status(200).json(getPosition);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/', async (_req, res) => {
  try {
    const getRepos = await repoService.getParams();

    res.status(200).json(getRepos);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;