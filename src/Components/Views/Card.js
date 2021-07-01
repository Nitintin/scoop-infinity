import React from 'react'
import {Grid} from '@material-ui/core';

const Card = ({item,baseUrl}) => {

    return (
        <Grid item xs ={12} sm={3}  className="cardContainer">
            <div className="articleInfo">
                <div className="imgContainer">
                    <a href={baseUrl+item.slug}>
                        <img src={item.feature_img} alt="article display" className="articleDisplayImg"/>
                    </a>
                </div>

                <div className="categoryContainer">
                    <a href={baseUrl+'category/'+item.cat_display[0].category_slug}>
                        <div className="category">{item.cat_display[0].category_display}</div>
                    </a>
                </div>

                <a className="articleTitle" href={baseUrl+item.slug}>
                    <h4>{item.title}</h4>
                </a>
            </div>

            <div className="authorInfo">
                <a href={baseUrl+'author/'+item.auth_display.author_url} className="articleAuthor" >{item.auth_display.display_name}</a>
            </div>
            
            <div className="articleTimeInfo">
                <span>{item.pub_date.split(',')[0]}</span>
                <span> | </span>
                <time>{item.readtime}</time>
            </div>

        </Grid>
    )
}

export default Card