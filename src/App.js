import React from 'react';
import './App.css';
import DonationPage from './components/DonationContainer/DonationPage';
import CommentBox from './components/UtilitiesContainer/CommentBox';
import Feed from './components/FeedContainer/Feed';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Welcome from './components/LoginContainer/Welcome';
import Login from './components/LoginContainer/Login';
import Signup from './components/LoginContainer/Signup';
import ForgotPassword from './components/UtilitiesContainer/ForgotPassword';



function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/' component={Welcome} />
          <Route path='/welcome' component={Welcome} />
          <Route path='/login' component={Login} />
          <Route path='/signup' component={Signup} />
          <Route path='/forgotpassword' component={ForgotPassword} />
          <Route path='/enter' component={DonationPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;