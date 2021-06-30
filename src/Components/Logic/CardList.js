import React from 'react'
import useFetch from '../../Hooks/useFetch'
import ViewCardList from '../Views/ViewCardList'

const CardList = () => {

    const fetchUrl=`https://www.scoopwhoop.com/api/v4/read/all/`;
    const [nextOffset,articles,isLoading] = useFetch(fetchUrl,0,8);

    if(!isLoading){
        console.log(nextOffset)
        console.log(articles)
    }
    
    return <ViewCardList articles={articles}/>
}

export default CardList
