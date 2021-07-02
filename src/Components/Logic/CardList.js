import React, { useState,useRef,useCallback } from 'react'
import useFetch from '../../Hooks/useFetch'
import Card from '../Views/Card'
import {Grid} from '@material-ui/core';

const CardList = () => {

    const fetchUrl=`https://www.scoopwhoop.com/api/v4/read/all/`;
    const baseUrl = 'https://www.scoopwhoop.com/';

    const [initOffSet,setInitOffSet]=useState(0);
    const initLimit = 8;
    const oberserRef = useRef();
    //const lastArticleRef = useCallback(()=>{},[])
    

    // if(!isLoading){
    //     console.log(oberserRef)
    // }

    const [nextOffset,articles,isLoading] = useFetch(fetchUrl,initOffSet,initLimit);

    if(!isLoading){
        return (
            <>
                <Grid container className="cardListContainer">
                    {
                        articles.map((item,index) =>  {
                            if(articles.length === index+1){

                                return (
                                    <Card 
                                        key={item.slug} 
                                        item={item} 
                                        baseUrl={baseUrl}
                                        reference={oberserRef}
                                    />
                                )
                            }else{
                                return (
                                    <Card 
                                        key={item.slug} 
                                        item={item} 
                                        baseUrl={baseUrl}
                                        reference={null}
                                    />
                                )
                            }
                        })
                    }
                </Grid>
                <hr/>
                <div className="loadBtn">
                    <button 
                        className="loadMoreBtn" 
                        onClick={()=>setInitOffSet(prevOffset => prevOffset+nextOffset)}>
                        Load More
                    </button>
                </div>
            </>
        )
    }

    return <div>Loading..</div>;
}

export default CardList
