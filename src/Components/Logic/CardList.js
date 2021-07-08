import React, { useState,useRef,useCallback } from 'react'
import useFetch from '../../Hooks/useFetch'
import Card from '../Views/Card'
import {Grid} from '@material-ui/core';

const CardList = () => {
    const fetchUrl=`https://www.scoopwhoop.com/api/v4/read/all/`;
    const baseUrl = 'https://www.scoopwhoop.com/'; 
    const [initOffSet,setInitOffSet]=useState(0);
    const initLimit = 8;

    const [nextOffset,articles,isLoading] = useFetch(fetchUrl,initOffSet,initLimit);
    const observerRef = useRef();

    const lastArticleRef = useCallback((node)=>{
        if(!isLoading){
            //if observer already hold a element, remove it
            if(observerRef.current){
                observerRef.current.disconnect();
            }

            observerRef.current = new IntersectionObserver(observerEntry => {
                if(observerEntry[0].isIntersecting){
                    setInitOffSet(nextOffset)
                }
            })

            if(node){
                observerRef.current.observe(node)
            }
        }
    },[isLoading,nextOffset])

    if(!isLoading){
        return (
            <>
                <Grid container className="cardListContainer">
                    {
                        articles.map((item,index) =>  {
                            if(articles.length === index+1){

                                return (
                                    <Card 
                                        key={item.slug+index} 
                                        item={item} 
                                        baseUrl={baseUrl}
                                        reference={lastArticleRef}
                                    />
                                )
                            }else{
                                return (
                                    <Card 
                                        key={item.slug+index} 
                                        item={item} 
                                        baseUrl={baseUrl}
                                        reference={null}
                                    />
                                )
                            }
                        })
                    }
                </Grid>
            </>
        )
    }else{
        return <h2>Loading..</h2>;
    }
}

export default CardList
