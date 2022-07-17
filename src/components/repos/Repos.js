import React from 'react';
import RepoItem from './Repoitem';

const Repos = ({ repos }) => {
  return repos.map(repo => <RepoItem repo={repo} key={repo.id} />);
};

export default Repos;