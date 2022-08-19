import React, { Component } from 'react'
import axios from 'axios'
import API_KEY from '../secret'
import css from "./css/Content.module.css"
import { savedPosts } from "../posts.json";
import Loader from './Loader';
import PostItemApi from './PostItemApi';

export class ContentApi extends Component {
// initial state
    constructor(props) {
        super(props)
        this.state = {
            isLoaded: false,
            posts:[],
            savedPosts: [],
            
        }
    }
    // after 2 seconds run this code
    componentDidMount() {
        this.fetchImages()
    }
    async fetchImages(){
        const response = await axios.get(`https://pixabay.com/api/?key=${API_KEY}&per_page=100&safesearch=true&editors_choice=true&orientation=horizontal`);
        const fetchedPosts = response.data.hits;

        this.setState({
            isLoaded: true,
            posts: fetchedPosts,
            savedPosts: fetchedPosts,
            
        })
    }

    handleChange = (e) => {
        const name = e.target.value.toLowerCase();
        const filteredPosts = this.state.savedPosts.filter((post)=>{
            return post.user.toLowerCase().includes(name);
        })
        
        this.setState({
            posts: filteredPosts
        })
    }

    render() {
        return (

            <div className={css.Content}>
                
                {this.getData}
                <div className={css.TitleBar}>
                    <h1> My Photos </h1>
                    <form>
            <label htmlFor='searchInput'> Search</label>
            <input 
            id = 'searchInput'
            placeholder='By author...'
            onChange={event => this.handleChange(event)}
            />
            <h4> Post found {this.state.posts.length}</h4>
                    </form>

                </div>

                <div className={css.SearchResults}>
                    {
                        // when state is false true run post item else run loader
                        this.state.isLoaded ?
                    <PostItemApi savedPosts={this.state.posts} />
                   :<Loader/>
                    }
                </div>
            </div>
        )
    }
}

export default ContentApi
