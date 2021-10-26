const fetch = require('node-fetch');

const URL = 'https://api.github.com/orgs/takenet/repos';

const fetchRepos = async () => {
  const response = await fetch(URL);

  const json = await response.json();

  return json;
};

module.exports = { fetchRepos };