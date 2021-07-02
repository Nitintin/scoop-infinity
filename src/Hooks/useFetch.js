import axios from 'axios';
import { useState, useEffect } from 'react'

const useFetch = (fetchUrl, offset, limit = 8) => {

    const [nextOffset, setNextOffset] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        let cancelMethod;

        //self invoking asynchronous arrow function
        (async () => {
            const result = await axios.get(fetchUrl, {
                params: {
                    offset: offset,
                    limit: limit
                },
                //creates a method which can be fired for cancelling the request
                cancelToken: new axios.CancelToken(c => cancelMethod = c) 
            }).catch(error => {
                    if (axios.isCancel(error)) return
                }
            )

            setArticles(prevBooks => [...prevBooks, ...result.data.data]);
            setNextOffset(result.data.next_offset);
            setIsLoading(false);

            //cancels the request on unmounting
            return () => cancelMethod();
        })();

    }, [fetchUrl, offset, limit]);


    return [nextOffset, articles, isLoading];
}

export default useFetch
