import React from 'react';
import UserRepos from './UserRepos';

const GitHubUser = ({data}) => {
  return (
    <div>
    <img src = {data.avatar_url} alt = {data.login} style = {{width :200}} />
    <div>
        <h1>
            {data.login}
        </h1>
        <p> {data.name && data.location} </p>
    </div>
    <div>
      <UserRepos login={data.login}/>
    </div>
      
    </div>
  )
}

export default GitHubUser
