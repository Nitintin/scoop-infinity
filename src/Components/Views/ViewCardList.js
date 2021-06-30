import React from 'react'
import Card from './Card'

const ViewCardList = ({articles}) => {
    
    return (
        <div>
            {articles.map(item =>  (<Card key={item.slug} item={item}/>))}
        </div>
    )
}

export default ViewCardList
