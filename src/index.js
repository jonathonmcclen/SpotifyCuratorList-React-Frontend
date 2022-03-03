import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home'
import PlaylistPage from './components/PlaylistPage';
import Contact from './components/Contact'
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Route} from "react-router-dom"

ReactDOM.render(
  <Router>
    <div>
      <Header />
        <div id="body">
          <Route exact path="/" component={Home}/>
          <Route path="/playlists" component={PlaylistPage}/>
          <Route path="/contact" component={Contact}/>
        </div>
      <Footer />
    </div> 
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
