import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import './MrRobot.ttf'
import './MrRobot.eot'
import './MrRobot.svg'
import './MrRobot.woff'
import './MrRobot.woff2'
import App from './App';
import About from './components/about'
import Blog from './components/blog'

// make "HOME" path/link take the place of 
// the page that is currently being viewed
// no one currently links to homepage App

const routing = (
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/blog" component={Blog} />
        <Route path="/aboutme" component={About} />
      </div>
    </Router>
  )

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
