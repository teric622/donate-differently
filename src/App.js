import React from 'react';
import './App.css';
<<<<<<< HEAD
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
=======
import Header from './components/HeaderComponent/Header'; 

function App() {
  return (
    <div className="App">

<Header/>


</div>
>>>>>>> 3bbb4d4b3bcbbb062fa08bc23180049a137e5e9d
  );
}

export default App;