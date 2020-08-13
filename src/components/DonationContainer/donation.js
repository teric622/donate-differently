import React, {Component} from 'react';
import Filter from './filter';
import Post from './post';
import PostForm from './postform';
import './donation.css';

export default class Donation extends Component {
    constructor(props) {
      super(props);
      this.state = {
        posts: JSON.parse(localStorage.getItem('posts')) || [],
        filteredPosts: []
      }
  
      this.handleNewPost = this.handleNewPost.bind(this);
      this.handleFilter = this.handleFilter.bind(this);
    }
  
    handleNewPost(post) {
      var posts = this.state.posts.concat([post]);
      this.setState({
        posts: posts
      });
      localStorage.setItem('posts', JSON.stringify(posts));
    }
  
    handleFilter(filter) {
      this.setState({
        filteredPosts: this.state.posts.filter((post) =>
          post.category.toUpperCase() === filter.toUpperCase() ||
            post.content.includes(filter)
        )
      });
    }
  
    render() {
      const posts = this.state.posts.map((post, index) =>
        <Post key={index} value={post} />
      );
      const filteredPosts = this.state.filteredPosts.map((post, index) =>
        <Post key={index} value={post} />
      );
      return (
        <div className="feed">
          <Filter onFilter={this.handleFilter} />
          {filteredPosts.length > 0 ? filteredPosts : posts}
          <PostForm onSubmit={this.handleNewPost} />
        </div>
      )
    }
  }