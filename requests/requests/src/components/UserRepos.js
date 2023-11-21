import React from 'react';
import Fetch from './Fetch';
import RepoMenu from './RepoMenu';

const UserRepos = ({login}) => {
  return (
    <Fetch url= {`https://api.github.com/users/${login}/repos`} renderSuccess={
        ({data})=>(
            <RepoMenu Repositories={data} login = {login} />
        )
    }
    />
  )
}

export default UserRepos
