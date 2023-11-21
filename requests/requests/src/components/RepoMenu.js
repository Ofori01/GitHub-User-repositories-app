import React from 'react';
import useIterator from './Hooks/useIterator';
import LoadReadMe from './LoadReadMe';

const RepoMenu = ({Repositories, login}) => {
    const [{name}, next, previous] = useIterator(Repositories);




  return (
    <div>
    <div style={{display: 'flex'}} >
    <button onClick={previous}> &lt; </button>
    <p>{name}</p>
    <button onClick={next}> &gt; </button>
    </div>

    <LoadReadMe login={login} repo = {name} />


    </div>
  )
}

export default RepoMenu
