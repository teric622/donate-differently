import React, {Component} from 'react';
import Feed from '../FeedContainer/Feed';



export default class DonationPage extends Component{
    render(){
        return(
            <div className="DonationPage">
                <h1>This will be the DonationPage</h1>
                <Feed />
                <h2 style={{backgroundColor:'pink'}}>This is where the donate options will be.</h2>
            </div>
        );
    }
}