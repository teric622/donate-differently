import React from 'react';
import logo from './logo.svg';
import './App.css';
import FeedPage from './components/FeedContainer/Feed';
import Header from './components/HeaderContainer/Header';

function App() {
  return (
    <div className="App">
    <Header/>
    <body />
    <FeedPage/>
    </div>
  );
}

export default App;
