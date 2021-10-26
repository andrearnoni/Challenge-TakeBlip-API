const repoModel = require('../models/repoModel');

const numOfRepos = 5;

const getParams = async () => {
  const getAllRepos = await repoModel.fetchRepos();

  const params = getAllRepos.filter((repo) => repo.language === 'C#')
    .map((object) => ({
      name: object.full_name,
      description: object.description,
      avatar: object.owner.avatar_url,
    }))
    .sort((a, b) => a.created_at < b.created_at)
    .slice(0, numOfRepos);

  return params;
};

module.exports = { getParams };