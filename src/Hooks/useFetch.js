import axios from 'axios';
import {useState,useEffect} from 'react'

const useFetch = (fetchUrl,offset,limit=8) => {

    const [nextOffset,setNextOffset]=useState(0);
    const [isLoading,setIsLoading]=useState(true);
    const [articles,setArticles]=useState([]);

    useEffect(()=>{
        //self invoking asynchronous arrow function
        (async ()=>{
            const result = await axios.get(fetchUrl,{
                params:{
                    offset:offset,
                    limit:limit
                }
            });

            setArticles(prevBooks=>[...prevBooks,...result.data.data]);
            setNextOffset(result.data.next_offset);
            setIsLoading(false);
        })();

    },[fetchUrl,offset,limit]);


    return [nextOffset,articles,isLoading];
}

export default useFetch
