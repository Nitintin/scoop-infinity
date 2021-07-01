import React from 'react'
import useFetch from '../../Hooks/useFetch'
import Card from '../Views/Card'
import {Grid} from '@material-ui/core';

const CardList = () => {

    const fetchUrl=`https://www.scoopwhoop.com/api/v4/read/all/`;
    const baseUrl = 'https://www.scoopwhoop.com/';
    const [nextOffset,articles,isLoading] = useFetch(fetchUrl,0,20);

    if(!isLoading){
        return (
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
        )
    }

    return null;
}

export default CardList
