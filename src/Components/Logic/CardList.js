import React, { useState } from 'react'
import useFetch from '../../Hooks/useFetch'
import Card from '../Views/Card'
import {Grid} from '@material-ui/core';

const CardList = () => {

    const fetchUrl=`https://www.scoopwhoop.com/api/v4/read/all/`;
    const baseUrl = 'https://www.scoopwhoop.com/';
    const [initOffSet,setInitOffSet]=useState(0);
    const [initLimit,setInitLimit]=useState(3);

    const [nextOffset,articles,isLoading] = useFetch(fetchUrl,initOffSet,initLimit);

    const loadFunc = ()=>{
        setInitOffSet(prevOffset => prevOffset+8);
    }

    if(!isLoading){
        return (
            <>
                <Grid container className="cardListContainer">
                    {
                        articles.map(item =>  (
                            <Card 
                                key={item.slug} 
                                item={item} 
                                baseUrl={baseUrl}
                            />
                        ))
                    }
                </Grid>
                <hr/>
                <div className="loadBtn">
                    <button className="loadMoreBtn" onClick={loadFunc}>Load More</button>
                </div>
            </>
        )
    }

    return null;
}

export default CardList
