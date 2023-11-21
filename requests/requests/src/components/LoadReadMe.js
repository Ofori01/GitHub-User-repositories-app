import React, {useState, useEffect, useCallback} from 'react';
import Markdown from 'react-markdown';
import useMounted from './Hooks/useMounted';

const LoadReadMe = ({login, repo}) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    const [markdown, setMarkdown] = useState("");
    const mounted = useMounted();

    const loadfile = useCallback(
        async (login, repo) => {
            setLoading(true);
            const {download_url} = await fetch(`https://api.github.com/repos/${login}/${repo}/readme`).then((response)=> response.json());
            const readme = await fetch(download_url).then(res=>res.text());
            if(!mounted) return
            setMarkdown(readme);
            setLoading(false);


        }, []
    );
    
    useEffect(
        ()=>{
            if(!repo || !login) return
            loadfile(login, repo).catch(setError);

        },[repo,login, loadfile]
    )

if (loading) return <p> ...Loading</p>
if (error) return (<pre> {JSON.stringify(error,null,2) } </pre>)
return (
    <Markdown>
        {markdown}
    </Markdown>
    
    

);


  
  
}

export default LoadReadMe
