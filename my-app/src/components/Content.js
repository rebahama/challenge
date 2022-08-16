import React, { Component } from 'react'
import css from "./css/Content.module.css"
import { savedPosts } from "../posts.json";
import Loader from './Loader';

export class Content extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isLoaded: false
          }
    }
    getData(){
        setTimeout(() => {
            
        },3000)
    }

    render() {
        return (
            
            <div className={css.Content}>
                <Loader/>
                {this.getData}
                <div className={css.TitleBar}>
                    <h1> My Photos </h1>

                </div>
                <div className={css.SearchResults}>
                    {savedPosts.map((post) => {

                        return <div className={css.SearchItem} key={post.title}>
                            <p> {post.title}</p>
                            <p> {post.name}</p>
                            <img src={post.image} alt="random" />
                            <p> {post.description}</p>
                        </div>
                    }
                    )}
                </div>
            </div>
        )
    }
}

export default Content