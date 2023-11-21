import React,{useState} from 'react';
import Fetch from './components/Fetch';
import GitHubUser from './components/GitHubUser';
import SearchForm from './components/SearchForm';

const App = () => {
  const [login,setLogin] = useState();


  return (
    <div>
    {/*
      <section>
      <VirtualList />
    </section>
    */}

    <section>
      <div>
      <SearchForm setLogin={setLogin} />
      {
        login && <Fetch renderSuccess={GitHubUser}  url= {`https://api.github.com/users/${login}`} />

      }
      </div>
    </section>

    
    </div>
  )
}

export default App
