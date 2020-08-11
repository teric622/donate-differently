import React, {Component} from "react";
import "./Posts.css";
import Post from '../PostComponent/Post';


export default class Posts extends Component{

    render() {
        const data = [
            {
            "user_name": "Eroc",
            "user_image": "",
            "image": "http://localhost:3000/user.png",
            "image_desc":"test Desc"
            },   
            
            {
                "user_name": "Eroc",
                "user_image": "",
                "image": "",
                "image_desc":"test Desc"
                },
            
                {
                    "user_name": "Eroc",
                    "user_image": "",
                    "image": "",
                    "image_desc":"test Desc"
                    },
            
            
                ]
        return (
            <div className="posts-section">
      <Post data={data[0]}/>
      <Post data={data[1]}/>
      <Post data={data[2]}/>
      </div>
            );
        }
    }