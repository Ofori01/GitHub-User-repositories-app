import React, {useState, useEffect} from 'react';
import useMounted from './Hooks/useMounted';

const Fetch = ({url,renderSuccess, renderError = error=><pre>{JSON.stringify(error, null,2)}</pre>, Loading = (<div><p>...Loading</p></div>)}) => {
  const mounted = useMounted()
  const [data, setData] = useState();
  const[loading,setLoading] = useState(true);
  const [error, setError] = useState();
  
  useEffect(
  ()=>{
    if(!url) return
    if(!mounted) return
    fetch(url).then(response=> response.json()).then(
      (data)=>{if(!mounted) throw new Error('This component has been unmounted'); 
      return data }).then(setData).then(()=> setLoading(false)).catch(setError);

  }, [url, mounted]

  );


  if(loading) return Loading;
  if(data) return renderSuccess({data});
  if(error) return renderError(error);
  
}


export default Fetch
