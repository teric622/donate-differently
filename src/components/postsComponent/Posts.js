import React, {Component} from "react";
import "./Posts.css";
import Post from '../PostComponent/Post';


export default class Posts extends Component{

    render() {
        const data = [
            {
            "user_name": "Eroc",
            "user_image": "http://localhost:3000/user.png",
            "image": "http://localhost:3000/1.jpg",
            "image_desc":"test Desc"
            },   
            
            {
                "user_name": "Eroc",
                "user_image": "http://localhost:3000/user.png",
                "image": "http://localhost:3000/2.jpg",
                "image_desc":"test Desc"
                },
            
                {
                    "user_name": "Eroc",
                    "user_image": "http://localhost:3000/user.png",
                    "image": "http://localhost:3000/3.jpg",
                    "image_desc":"test Desc"
                    },
            
            
                ]
        return (
            <div className="posts-container">
      <Post data={data[0]}/>
      <Post data={data[1]}/>
      <Post data={data[2]}/>
      </div>
            );
        }
    }