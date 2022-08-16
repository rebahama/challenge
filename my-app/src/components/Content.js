import React, { Component } from 'react'
import css from "./css/Content.module.css"
import { savedPosts } from "../posts.json";
import Loader from './Loader';
import PostItem from './PostItem';
export class Content extends Component {
// initial state
    constructor(props) {
        super(props)
        this.state = {
            isLoaded: false
        }
    }
    // after 2 seconds run this code
    componentDidMount() {
        setTimeout(()=>{
            this.setState({
                isLoaded: true,
            })
        }, 2000)
    }

    render() {
        return (

            <div className={css.Content}>
                
                {this.getData}
                <div className={css.TitleBar}>
                    <h1> My Photos </h1>

                </div>

                <div className={css.SearchResults}>
                    {
                        // when state is false true run post item else run loader
                        this.state.isLoaded ?
                    <PostItem savedPosts={savedPosts} />
                   :<Loader/>
                    }
                </div>
            </div>
        )
    }
}

export default Content