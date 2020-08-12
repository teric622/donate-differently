import React, {Component} from 'react';
import CommentBox from '../UtilitiesContainer/CommentBox';
import Feed from '../FeedContainer/Feed';



export default class DonationPage extends Component{
    render(){
        return(
            <div className="DonationPage">
                <h1>Welcome to the Donation Page</h1>
                <Feed />
                <CommentBox />
            </div>
        );
    }
}