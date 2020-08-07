import React from 'react';
import './App.css';
import DonationPage from './components/DonationContainer/DonationPage';
import CommentBox from './components/UtilitiesContainer/CommentBox';
import Feed from './components/FeedContainer/Feed';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Welcome from './components/LoginContainer/Welcome';
import Login from './components/LoginContainer/Login'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/' component={Welcome} />
          <Route path='/Welcome/Login' component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
