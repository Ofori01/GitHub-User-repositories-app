import React from 'react';
import { useState } from 'react';



const SearchForm = ({ setLogin =f=>f}) => {
  const [inputValue, setInputValue] = useState(''); 



  const onSearch = ()=>{
    setLogin(inputValue);
  }


  return (
    <div style = {{display: 'flex'}}>
    <input  onChange={(event)=>setInputValue(event.target.value)}  placeholder='Input Github Login' value = {inputValue} />
    <button onClick = {onSearch}> Search</button>
      
    </div>
  )
}

export default SearchForm
