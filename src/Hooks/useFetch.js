import axios from 'axios';
import {useState,useEffect} from 'react'

const useFetch = (fetchUrl,offset,limit=8) => {

    const [nextOffset,setNextOffset]=useState(0);
    const [isLoading,setIsLoading]=useState(true);
    const [articles,setArticles]=useState([]);

    useEffect(()=>{
        const fetchData = async ()=>{
            const result = await axios.get(fetchUrl,{
                params:{
                    offset:offset,
                    limit:limit
                }
            });

            setNextOffset(result.data.next_offset);
            setArticles(result.data.data);
            setIsLoading(false);
        }

        fetchData();
    },[fetchUrl,offset,limit]);


    return [nextOffset,articles,isLoading];
}

export default useFetch
