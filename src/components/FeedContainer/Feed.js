import React, {Component} from 'react';
import CommentBox from '../UtilitiesContainer/CommentBox';

export default class Feed extends Component{
    render(){
        return(
            <div className="Feed">
                <h1>This will be the Feed</h1>
                <CommentBox />
                <h2 style={{backgroundColor:'pink'}}>This is where the feed will be.</h2>
            </div>
        );
    }
}